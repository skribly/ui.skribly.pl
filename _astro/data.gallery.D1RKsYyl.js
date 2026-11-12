import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { n, t as r } from "./react-dom.B9zIfLd2.js";
import { c as i, d as a, f as o, l as s, p as c, u as l } from "./ListBox.B-5aHJx2.js";
import { t as u } from "./useDragAndDrop.BcM-LMOZ.js";
import { t as d } from "./useListData.NOa4VaOj.js";
import { t as f } from "./file-code-corner.c_JGFxHb.js";
import { t as p } from "./file-text.BfTyG9Tv.js";
import { t as m } from "./folder.Bge32iWh.js";
import { t as h } from "./folder-git-2.s30c0NLA.js";
import { t as g } from "./folder-open.Df92Ihcv.js";
import { t as _ } from "./rocket.YqUmKJxk.js";
import { t as v } from "./Button.DRxd_7vr.js";
import { t as y } from "./IconButton.DlwxSF13.js";
import { t as b } from "./Badge.Cwl75Dkx.js";
import { t as x } from "./BulkActionBar.DJMCB-T1.js";
import { At as S, Bt as C, Ct as w, E as T, Et as E, Ft as D, G as O, I as k, L as A, Lt as ee, Nt as te, Pt as j, Q as ne, R as re, Tt as ie, _ as M, _t as N, a as P, b as ae, dt as oe, gt as se, ht as F, j as ce, kt as le, mt as ue, n as de, ot as fe, pt as I, r as pe, t as me, v as he, wt as ge, xt as L, z as _e, zt as ve } from "./createLucideIcon.npgQlVHx.js";
import { a as ye, o as be } from "./Checkbox.BCm1SjuK.js";
import { S as xe, _ as R, a as Se, b as z, c as Ce, d as we, g as Te, i as Ee, l as B, o as De, p as Oe, r as ke, s as V, u as H, y as Ae } from "./animation.BhtQe7Yj.js";
import { n as je, r as Me } from "./Autocomplete.BUqxPt-N.js";
import { c as Ne, n as Pe, r as Fe, s as Ie } from "./FocusScope.Ba7RJw7M.js";
import { i as Le, n as Re, t as ze } from "./Tree.C4p_emXR.js";
import { a as Be, d as Ve, i as He, l as Ue, n as We, o as Ge, r as Ke, t as qe, u as Je } from "./CollectionBuilder.Bxdh8Jqj.js";
import { a as Ye, i as Xe, l as U, o as Ze, t as Qe } from "./useLoadMoreSentinel.DKpPMiER.js";
import { t as $e } from "./useControlledState.DijOhE0s.js";
import { i as et, r as tt } from "./useGridListItem.QmQPCsZs.js";
import { t as nt } from "./useHasTabbableChild.0G0vV4YD.js";
import { n as rt } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { a as it, r as at } from "./GridList.Dk2spOFs.js";
import { n as ot } from "./VisuallyHidden.DXeJgMmE.js";
import { t as st } from "./loader-circle.ja8phR5Y.js";
import { n as W, t as ct } from "./jsx-runtime.yrTYNGQT.js";
import { a as lt, i as ut, n as dt, o as ft, r as pt, s as mt, t as ht } from "./internal.D6jB8413.js";
import { n as gt, t as _t } from "./Table.De6dgZQE.js";
import { n as vt, t as yt } from "./List.CyrCY5gY.js";
import { t as bt } from "./circle.DoiYvJDm.js";
import { t as xt } from "./circle-check.CWwdJPsz.js";
import { t as St } from "./circle-x.DVYCYU5D.js";
import { t as Ct } from "./info.D9DvH9cK.js";
import { t as wt } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as Tt } from "./chevron-right.CXba3y89.js";
import { t as Et } from "./TreeView.gUudVD20.js";
import { r as Dt } from "./useOverlayTriggerState.OsbwJUOw.js";
for (var G = t(n(), 1), Ot = class {
	constructor(e) {
		this.keyMap = new Map(), this.keyMap = new Map(), this.columnCount = e?.columnCount, this.rows = [];
		let t = (r) => {
			let i = this.keyMap.get(r.key);
			e.visitNode && (r = e.visitNode(r)), this.keyMap.set(r.key, r);
			let a = new Set(), o = null, s = !1;
			if (r.type === `item`) {
				for (let e of r.childNodes) if (e.props?.colSpan !== void 0) {
					s = !0;
					break;
				}
			}
			for (let e of r.childNodes) e.type === `cell` && s && (e.colspan = e.props?.colSpan, e.colSpan = e.props?.colSpan, e.colIndex = o ? (o.colIndex ?? o.index) + (o.colSpan ?? 1) : e.index), e.type === `cell` && e.parentKey == null && (e.parentKey = r.key), a.add(e.key), o ? (o.nextKey = e.key, e.prevKey = o.key) : e.prevKey = null, t(e), o = e;
			if (o && (o.nextKey = null), i) for (let e of i.childNodes) a.has(e.key) || n(e);
		}, n = (e) => {
			this.keyMap.delete(e.key);
			for (let t of e.childNodes) this.keyMap.get(t.key) === t && n(t);
		}, r = null;
		for (let [n, i] of e.items.entries()) {
			let e = {
				...i,
				level: i.level ?? 0,
				key: i.key ?? `row-` + n,
				type: i.type ?? `row`,
				value: i.value ?? null,
				hasChildNodes: !0,
				childNodes: [...i.childNodes],
				rendered: i.rendered,
				textValue: i.textValue ?? ``,
				index: i.index ?? n
			};
			r ? (r.nextKey = e.key, e.prevKey = r.key) : e.prevKey = null, this.rows.push(e), t(e), r = e;
		}
		r && (r.nextKey = null);
	}
	*[Symbol.iterator]() {
		yield* [...this.rows];
	}
	get size() {
		return [...this.rows].length;
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
		return [...this.rows][0]?.key;
	}
	getLastKey() {
		let e = [...this.rows];
		return e[e.length - 1]?.key;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
}, kt = `row-header-column-` + Math.random().toString(36).slice(2), At = `row-header-column-` + Math.random().toString(36).slice(2); kt === At;) At = `row-header-column-` + Math.random().toString(36).slice(2);
function jt(e, t) {
	if (t.length === 0) return [];
	let n = [], r = new Map();
	for (let i of t) {
		let t = i.parentKey, a = [i];
		for (; t != null;) {
			let n = e.get(t);
			if (!n) break;
			if (r.has(n)) {
				n.colSpan ??= 0, n.colSpan++, n.colspan = n.colSpan;
				let { column: e, index: t } = r.get(n);
				if (t > a.length) break;
				for (let n = t; n < a.length; n++) e.splice(n, 0, null);
				for (let t = a.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
			} else n.colSpan = 1, n.colspan = 1, a.push(n), r.set(n, {
				column: a,
				index: a.length - 1
			});
			t = n.parentKey;
		}
		n.push(a), i.index = n.length - 1;
	}
	let i = Math.max(...n.map((e) => e.length)), a = Array(i).fill(0).map(() => []), o = 0;
	for (let e of n) {
		let t = i - 1;
		for (let n of e) {
			if (n) {
				let e = a[t], r = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
				if (r < o) {
					let i = {
						type: `placeholder`,
						key: `placeholder-` + n.key,
						colspan: o - r,
						colSpan: o - r,
						index: r,
						value: null,
						rendered: null,
						level: t,
						hasChildNodes: !1,
						childNodes: [],
						textValue: ``
					};
					e.length > 0 && (e[e.length - 1].nextKey = i.key, i.prevKey = e[e.length - 1].key), e.push(i);
				}
				e.length > 0 && (e[e.length - 1].nextKey = n.key, n.prevKey = e[e.length - 1].key), n.level = t, n.colIndex = o, e.push(n);
			}
			t--;
		}
		o++;
	}
	let s = 0;
	for (let e of a) {
		let n = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
		if (n < t.length) {
			let r = {
				type: `placeholder`,
				key: `placeholder-` + e[e.length - 1].key,
				colSpan: t.length - n,
				colspan: t.length - n,
				index: n,
				value: null,
				rendered: null,
				level: s,
				hasChildNodes: !1,
				childNodes: [],
				textValue: ``,
				prevKey: e[e.length - 1].key
			};
			e.push(r);
		}
		s++;
	}
	return a.map((e, t) => ({
		type: `headerrow`,
		key: `headerrow-` + t,
		index: t,
		value: null,
		rendered: null,
		level: 0,
		hasChildNodes: !0,
		childNodes: e,
		textValue: ``
	}));
}
var Mt = class extends Ot {
	constructor(e, t, n) {
		let r = new Set(), i = null, a = [];
		if (n?.showSelectionCheckboxes) {
			let e = {
				type: `column`,
				key: kt,
				value: null,
				textValue: ``,
				level: 0,
				index: +!!n?.showDragButtons,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isSelectionCell: !0 }
			};
			a.unshift(e);
		}
		if (n?.showDragButtons) {
			let e = {
				type: `column`,
				key: At,
				value: null,
				textValue: ``,
				level: 0,
				index: 0,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isDragButtonCell: !0 }
			};
			a.unshift(e);
		}
		let o = [], s = new Map(), c = (e) => {
			switch (e.type) {
				case `body`:
					i = e;
					break;
				case `column`:
					s.set(e.key, e), e.hasChildNodes || (a.push(e), e.props.isRowHeader && r.add(e.key));
					break;
				case `item`:
					o.push(e);
					return;
			}
			for (let t of e.childNodes) c(t);
		};
		for (let t of e) c(t);
		let l = jt(s, a);
		if (l.forEach((e, t) => o.splice(t, 0, e)), super({
			columnCount: a.length,
			items: o,
			visitNode: (e) => (e.column = a[e.index], e)
		}), this._size = 0, this.columns = a, this.rowHeaderColumnKeys = r, this.body = i, this.headerRows = l, this._size = [...i.childNodes].length, this.rowHeaderColumnKeys.size === 0) {
			let e = this.columns.find((e) => !e.props?.isDragButtonCell && !e.props?.isSelectionCell);
			e && this.rowHeaderColumnKeys.add(e.key);
		}
	}
	*[Symbol.iterator]() {
		yield* this.body.childNodes;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		return this.keyMap.get(e)?.prevKey ?? null;
	}
	getKeyAfter(e) {
		return this.keyMap.get(e)?.nextKey ?? null;
	}
	getFirstKey() {
		return H(this.body.childNodes)?.key ?? null;
	}
	getLastKey() {
		return B(this.body.childNodes)?.key ?? null;
	}
	getItem(e) {
		return e === this.body.key ? this.body : this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		if (e === this.body.key) return this.body.childNodes;
		let t = this.getItem(e);
		return t?.type === `item` ? [...t.childNodes].filter((e) => e.type === `cell`) : super.getChildren(e);
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return ``;
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys;
		if (n) {
			let e = [];
			for (let r of t.childNodes) {
				let t = this.columns[r.index];
				if (n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size) break;
			}
			return e.join(` `);
		}
		return ``;
	}
};
function Nt(e) {
	let { collection: t, focusMode: n } = e, r = e.UNSAFE_selectionState || Se(e), i = (0, G.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), a = r.setFocusedKey;
	r.setFocusedKey = (e, r) => {
		if (n === `cell` && e != null) {
			let n = t.getItem(e);
			if (n?.type === `item`) {
				let i = V(n, t);
				e = r === `last` ? B(i)?.key ?? null : H(i)?.key ?? null;
			}
		}
		a(e, r);
	};
	let o = (0, G.useMemo)(() => new Ee(t, r), [t, r]), s = (0, G.useRef)(null);
	return (0, G.useEffect)(() => {
		if (r.focusedKey != null && s.current && !t.getItem(r.focusedKey)) {
			let e = s.current.getItem(r.focusedKey), n = e?.parentKey != null && (e.type === `cell` || e.type === `rowheader` || e.type === `column`) ? s.current.getItem(e.parentKey) : e;
			if (!n) {
				r.setFocusedKey(null);
				return;
			}
			let i = s.current.rows, a = t.rows, c = i.length - a.length, l = Math.min(c > 1 ? Math.max(n.index - c + 1, 0) : n.index, a.length - 1), u = null;
			for (let e = Math.max(0, l); e < a.length; e++) if (!o.isDisabled(a[e].key) && a[e].type !== `headerrow`) {
				u = a[e];
				break;
			}
			if (u === null) {
				for (let e = l - 1; e >= 0; e--) if (!o.isDisabled(a[e].key) && a[e].type !== `headerrow`) {
					u = a[e];
					break;
				}
			}
			if (u) {
				let i = u.hasChildNodes ? [...V(u, t)] : [], a = u.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : u.key;
				r.setFocusedKey(a);
			} else r.setFocusedKey(null);
		}
		s.current = t;
	}, [
		t,
		o,
		r,
		r.focusedKey
	]), {
		collection: t,
		disabledKeys: i,
		isKeyboardNavigationDisabled: !1,
		selectionManager: o
	};
}
var Pt = {
	ascending: `descending`,
	descending: `ascending`
};
function Ft(e) {
	let [t, n] = (0, G.useState)(!1), { selectionMode: r = `none`, showSelectionCheckboxes: i, showDragButtons: a, treeColumn: o = null } = e, s = (0, G.useMemo)(() => ({
		showSelectionCheckboxes: i && r !== `none`,
		showDragButtons: a,
		selectionMode: r,
		columns: []
	}), [
		e.children,
		i,
		r,
		a
	]), c = ke(e, (0, G.useCallback)((e) => new Mt(e, null, s), [s]), s), { disabledKeys: l, selectionManager: u } = Nt({
		...e,
		collection: c,
		disabledBehavior: e.disabledBehavior || `selection`
	}), [d, f] = $e(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
	return {
		collection: c,
		disabledKeys: l,
		selectionManager: u,
		showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
		sortDescriptor: e.sortDescriptor ?? null,
		isKeyboardNavigationDisabled: c.size === 0 || t,
		setKeyboardNavigationDisabled: n,
		sort(t, n) {
			e.onSortChange?.({
				column: t,
				direction: n ?? (e.sortDescriptor?.column === t ? Pt[e.sortDescriptor.direction] : `ascending`)
			});
		},
		expandedKeys: d,
		toggleKey(e) {
			f((t) => {
				let n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), n;
			});
		},
		treeColumn: o
	};
}
function It(e, t) {
	let n = (0, G.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return {
		...e,
		collection: n,
		selectionManager: r
	};
}
var Lt = class {
	constructor(e) {
		if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || `all`, this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw Error(`Either a layout or a ref must be specified.`);
		this.layoutDelegate = e.layoutDelegate || (e.layout ? new Rt(e.layout) : new Ze(e.ref)), this.focusMode = e.focusMode ?? `row`;
	}
	isCell(e) {
		return e.type === `cell`;
	}
	isRow(e) {
		return e.type === `row` || e.type === `item`;
	}
	isDisabled(e) {
		return this.disabledBehavior === `all` && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== `selection`;
	}
	findPreviousKey(e, t, n = !1) {
		let r = e == null ? this.collection.getLastKey() : this.collection.getKeyBefore(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			r = this.collection.getKeyBefore(r);
		}
		return null;
	}
	findNextKey(e, t, n = !1) {
		let r = e == null ? this.collection.getFirstKey() : this.collection.getKeyAfter(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			if (r = this.collection.getKeyAfter(r), r == null) return null;
		}
		return null;
	}
	getKeyForItemInRowByIndex(e, t = 0) {
		if (t < 0) return null;
		let n = this.collection.getItem(e);
		if (!n) return null;
		let r = 0;
		for (let e of V(n, this.collection)) {
			if (e.colSpan && e.colSpan + r > t || (e.colSpan && (r = r + e.colSpan - 1), r === t)) return e.key ?? null;
			r++;
		}
		return null;
	}
	getKeyBelow(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findNextKey(n, (e) => e.type === `item`, t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === `row`) return n;
		}
		return null;
	}
	getKeyAbove(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findPreviousKey(n, (e) => e.type === `item`, t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === `row`) return n;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = V(t, this.collection);
			return (this.direction === `rtl` ? B(e)?.key : H(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = V(n, this.collection), i = (this.direction === `rtl` ? Ce(r, t.index - 1) : Ce(r, t.index + 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === `row` ? t.parentKey ?? null : (this.direction === `rtl` ? this.getFirstKey(e) : this.getLastKey(e)) ?? null;
		}
		return null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = V(t, this.collection);
			return (this.direction === `rtl` ? H(e)?.key : B(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = V(n, this.collection), i = (this.direction === `rtl` ? Ce(r, t.index + 1) : Ce(r, t.index - 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === `row` ? t.parentKey ?? null : (this.direction === `rtl` ? this.getLastKey(e) : this.getFirstKey(e)) ?? null;
		}
		return null;
	}
	getFirstKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				return e ? H(V(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findNextKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = H(V(e, this.collection))?.key ?? null;
		}
		return n;
	}
	getLastKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				if (!e) return null;
				let t = V(e, this.collection);
				return B(t)?.key ?? null;
			}
		}
		if (n = this.findPreviousKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			let t = V(e, this.collection);
			n = B(t)?.key ?? null;
		}
		return n;
	}
	getKeyPageAbove(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
		for (; n && n.y > r && t != null && (t = this.getKeyAbove(t) ?? null, t != null);) n = this.layoutDelegate.getItemRect(t);
		return t;
	}
	getKeyPageBelow(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = this.layoutDelegate.getVisibleRect().height, i = Math.min(this.layoutDelegate.getContentSize().height, n.y + r);
		for (; n && n.y + n.height < i;) {
			let e = this.getKeyBelow(t);
			if (e == null) break;
			n = this.layoutDelegate.getItemRect(e), t = e;
		}
		return t;
	}
	getKeyForSearch(e, t) {
		let n = t ?? null;
		if (!this.collator) return null;
		let r = this.collection;
		if (n = t ?? this.getFirstKey(), n == null) return null;
		let i = r.getItem(n);
		if (!i) return null;
		i.type === `cell` && (n = i.parentKey ?? null);
		let a = !1;
		for (; n != null;) {
			let t = r.getItem(n);
			if (!t) return null;
			if (t.textValue) {
				let n = t.textValue.slice(0, e.length);
				if (this.collator.compare(n, e) === 0) return this.isRow(t) && this.focusMode === `cell` ? H(V(t, this.collection))?.key ?? null : t.key;
			}
			n = this.findNextKey(n, (e) => e.type === `item`), n == null && !a && (n = this.getFirstKey(), a = !0);
		}
		return null;
	}
}, Rt = class {
	constructor(e) {
		this.layout = e;
	}
	getContentSize() {
		return this.layout.getContentSize();
	}
	getItemRect(e) {
		return this.layout.getLayoutInfo(e)?.rect || null;
	}
	getVisibleRect() {
		return this.layout.virtualizer.visibleRect;
	}
}, zt = new WeakMap();
function Bt(e, t, n) {
	let { isVirtualized: r, disallowTypeAhead: i, keyboardDelegate: a, focusMode: o, scrollRef: s, getRowText: c, onRowAction: l, onCellAction: u, escapeKeyBehavior: d = `clearSelection`, shouldSelectOnPressUp: f, keyboardNavigationBehavior: p = `arrow` } = e, { selectionManager: m } = t;
	!e[`aria-label`] && !e[`aria-labelledby`] && console.warn(`An aria-label or aria-labelledby prop is required for accessibility.`);
	let h = Xe({
		usage: `search`,
		sensitivity: `base`
	}), { direction: g } = A(), _ = t.selectionManager.disabledBehavior, v = (0, G.useMemo)(() => a || new Lt({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: _,
		ref: n,
		direction: g,
		collator: h,
		focusMode: o
	}), [
		a,
		t.collection,
		t.disabledKeys,
		_,
		n,
		g,
		h,
		o
	]), { collectionProps: y } = Oe({
		ref: n,
		selectionManager: m,
		keyboardDelegate: v,
		isVirtualized: r,
		scrollRef: s,
		disallowTypeAhead: i,
		escapeKeyBehavior: d
	}), b = ee(e.id);
	zt.set(t, {
		keyboardDelegate: v,
		actions: {
			onRowAction: l,
			onCellAction: u
		},
		shouldSelectOnPressUp: f,
		keyboardNavigationBehavior: p
	});
	let x = tt({
		selectionManager: m,
		hasItemActions: !!(l || u)
	}), S = T(e, { labelable: !0 }), C = (0, G.useCallback)((e) => {
		m.isFocused ? I(e.currentTarget, N(e)) || m.setFocused(!1) : I(e.currentTarget, N(e)) && m.setFocused(!0);
	}, [m]), w = (0, G.useMemo)(() => ({
		onBlur: y.onBlur,
		onFocus: C
	}), [C, y.onBlur]), E = nt(n, { isDisabled: t.collection.size !== 0 }), D = j(S, {
		role: `grid`,
		id: b,
		"aria-multiselectable": m.selectionMode === `multiple` ? `true` : void 0
	}, t.isKeyboardNavigationDisabled ? w : y, t.collection.size === 0 && { tabIndex: E ? -1 : 0 } || void 0, x);
	return r && (D[`aria-rowcount`] = t.collection.size, D[`aria-colcount`] = t.collection.columnCount), et({ getRowText: c }, t), { gridProps: D };
}
var Vt = new WeakMap();
function Ht(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function Ut(e, t) {
	let n = Vt.get(e);
	if (!n) throw Error(`Unknown grid`);
	return `${n}-${Ht(t)}`;
}
function Wt(e, t, n) {
	let r = Vt.get(e);
	if (!r) throw Error(`Unknown grid`);
	return `${r}-${Ht(t)}-${Ht(n)}`;
}
function Gt(e, t) {
	return [...e.collection.rowHeaderColumnKeys].map((n) => Wt(e, t, n)).join(` `);
}
var Kt = {};
Kt = {
	ascending: `تصاعدي`,
	ascendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
	collapse: `طي`,
	columnSize: (e) => `${e.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
	descending: `تنازلي`,
	descendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
	expand: `تمديد`,
	resizerDescription: `اضغط على مفتاح Enter لبدء تغيير الحجم`,
	select: `تحديد`,
	selectAll: `تحديد الكل`,
	sortable: `عمود قابل للترتيب`
};
var qt = {};
qt = {
	ascending: `възходящ`,
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	collapse: `Свиване`,
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
	descending: `низходящ`,
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	expand: `Разширяване`,
	resizerDescription: `Натиснете „Enter“, за да започнете да преоразмерявате`,
	select: `Изберете`,
	selectAll: `Изберете всичко`,
	sortable: `сортираща колона`
};
var Jt = {};
Jt = {
	ascending: `vzestupně`,
	ascendingSort: (e) => `\u{159}azeno vzestupn\u{11B} podle sloupce ${e.columnName}`,
	collapse: `Sbalit`,
	columnSize: (e) => `${e.value} pixel\u{16F}`,
	descending: `sestupně`,
	descendingSort: (e) => `\u{159}azeno sestupn\u{11B} podle sloupce ${e.columnName}`,
	expand: `Roztáhnout`,
	resizerDescription: `Stisknutím klávesy Enter začnete měnit velikost`,
	select: `Vybrat`,
	selectAll: `Vybrat vše`,
	sortable: `sloupec s možností řazení`
};
var Yt = {};
Yt = {
	ascending: `stigende`,
	ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
	collapse: `Skjul`,
	columnSize: (e) => `${e.value} pixels`,
	descending: `faldende`,
	descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
	expand: `Udvid`,
	resizerDescription: `Tryk på Enter for at ændre størrelse`,
	select: `Vælg`,
	selectAll: `Vælg alle`,
	sortable: `sorterbar kolonne`
};
var Xt = {};
Xt = {
	ascending: `aufsteigend`,
	ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
	collapse: `Reduzieren`,
	columnSize: (e) => `${e.value} Pixel`,
	descending: `absteigend`,
	descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
	expand: `Erweitern`,
	resizerDescription: `Eingabetaste zum Starten der Größenänderung drücken`,
	select: `Auswählen`,
	selectAll: `Alles auswählen`,
	sortable: `sortierbare Spalte`
};
var Zt = {};
Zt = {
	ascending: `αύξουσα`,
	ascendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	collapse: `Σύμπτυξη`,
	columnSize: (e) => `${e.value} pixel`,
	descending: `φθίνουσα`,
	descendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	expand: `Ανάπτυξη`,
	resizerDescription: `Πατήστε Enter για έναρξη της αλλαγής μεγέθους`,
	select: `Επιλογή`,
	selectAll: `Επιλογή όλων`,
	sortable: `Στήλη διαλογής`
};
var Qt = {};
Qt = {
	select: `Select`,
	selectAll: `Select All`,
	sortable: `sortable column`,
	ascending: `ascending`,
	descending: `descending`,
	ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
	descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
	columnSize: (e) => `${e.value} pixels`,
	resizerDescription: `Press Enter to start resizing`,
	expand: `Expand`,
	collapse: `Collapse`
};
var $t = {};
$t = {
	ascending: `ascendente`,
	ascendingSort: (e) => `ordenado por columna ${e.columnName} en sentido ascendente`,
	collapse: `Contraer`,
	columnSize: (e) => `${e.value} p\xedxeles`,
	descending: `descendente`,
	descendingSort: (e) => `ordenado por columna ${e.columnName} en orden descendente`,
	expand: `Ampliar`,
	resizerDescription: `Pulse Intro para empezar a redimensionar`,
	select: `Seleccionar`,
	selectAll: `Seleccionar todos`,
	sortable: `columna ordenable`
};
var en = {};
en = {
	ascending: `tõusev järjestus`,
	ascendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
	collapse: `Ahenda`,
	columnSize: (e) => `${e.value} pikslit`,
	descending: `laskuv järjestus`,
	descendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
	expand: `Laienda`,
	resizerDescription: `Suuruse muutmise alustamiseks vajutage klahvi Enter`,
	select: `Vali`,
	selectAll: `Vali kõik`,
	sortable: `sorditav veerg`
};
var tn = {};
tn = {
	ascending: `nouseva`,
	ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
	collapse: `Pienennä`,
	columnSize: (e) => `${e.value} pikseli\xe4`,
	descending: `laskeva`,
	descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
	expand: `Laajenna`,
	resizerDescription: `Aloita koon muutos painamalla Enter-näppäintä`,
	select: `Valitse`,
	selectAll: `Valitse kaikki`,
	sortable: `lajiteltava sarake`
};
var nn = {};
nn = {
	ascending: `croissant`,
	ascendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
	collapse: `Réduire`,
	columnSize: (e) => `${e.value}\xa0pixels`,
	descending: `décroissant`,
	descendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
	expand: `Développer`,
	resizerDescription: `Appuyez sur Entrée pour commencer le redimensionnement.`,
	select: `Sélectionner`,
	selectAll: `Sélectionner tout`,
	sortable: `colonne triable`
};
var rn = {};
rn = {
	ascending: `עולה`,
	ascendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
	collapse: `כווץ`,
	columnSize: (e) => `${e.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
	descending: `יורד`,
	descendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
	expand: `הרחב`,
	resizerDescription: `הקש Enter כדי לשנות את הגודל`,
	select: `בחר`,
	selectAll: `בחר הכול`,
	sortable: `עמודה שניתן למיין`
};
var an = {};
an = {
	ascending: `rastući`,
	ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastu\u{107}em redoslijedom`,
	collapse: `Sažmi`,
	columnSize: (e) => `${e.value} piksela`,
	descending: `padajući`,
	descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padaju\u{107}im redoslijedom`,
	expand: `Proširi`,
	resizerDescription: `Pritisnite Enter da biste započeli promenu veličine`,
	select: `Odaberite`,
	selectAll: `Odaberite sve`,
	sortable: `stupac koji se može razvrstati`
};
var on = {};
on = {
	ascending: `növekvő`,
	ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
	collapse: `Összecsukás`,
	columnSize: (e) => `${e.value} k\xe9ppont`,
	descending: `csökkenő`,
	descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
	expand: `Kibontás`,
	resizerDescription: `Nyomja le az Enter billentyűt az átméretezés megkezdéséhez`,
	select: `Kijelölés`,
	selectAll: `Összes kijelölése`,
	sortable: `rendezendő oszlop`
};
var sn = {};
sn = {
	ascending: `crescente`,
	ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
	collapse: `Comprimi`,
	columnSize: (e) => `${e.value} pixel`,
	descending: `decrescente`,
	descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
	expand: `Espandi`,
	resizerDescription: `Premi Invio per iniziare a ridimensionare`,
	select: `Seleziona`,
	selectAll: `Seleziona tutto`,
	sortable: `colonna ordinabile`
};
var cn = {};
cn = {
	ascending: `昇順`,
	ascendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	collapse: `折りたたむ`,
	columnSize: (e) => `${e.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
	descending: `降順`,
	descendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	expand: `展開`,
	resizerDescription: `Enter キーを押してサイズ変更を開始`,
	select: `選択`,
	selectAll: `すべて選択`,
	sortable: `並べ替え可能な列`
};
var ln = {};
ln = {
	ascending: `오름차순`,
	ascendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	collapse: `접기`,
	columnSize: (e) => `${e.value} \u{D53D}\u{C140}`,
	descending: `내림차순`,
	descendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	expand: `펼치기`,
	resizerDescription: `크기 조정을 시작하려면 Enter를 누르세요.`,
	select: `선택`,
	selectAll: `모두 선택`,
	sortable: `정렬 가능한 열`
};
var un = {};
un = {
	ascending: `didėjančia tvarka`,
	ascendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} did\u{117}jan\u{10D}ia tvarka`,
	collapse: `Sutraukti`,
	columnSize: (e) => `${e.value} piks.`,
	descending: `mažėjančia tvarka`,
	descendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
	expand: `Išskleisti`,
	resizerDescription: `Paspauskite „Enter“, kad pradėtumėte keisti dydį`,
	select: `Pasirinkti`,
	selectAll: `Pasirinkti viską`,
	sortable: `rikiuojamas stulpelis`
};
var dn = {};
dn = {
	ascending: `augošā secībā`,
	ascendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
	collapse: `Sakļaut`,
	columnSize: (e) => `${e.value} pikse\u{13C}i`,
	descending: `dilstošā secībā`,
	descendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
	expand: `Izvērst`,
	resizerDescription: `Nospiediet Enter, lai sāktu izmēru mainīšanu`,
	select: `Atlasīt`,
	selectAll: `Atlasīt visu`,
	sortable: `kārtojamā kolonna`
};
var fn = {};
fn = {
	ascending: `stigende`,
	ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
	collapse: `Skjul`,
	columnSize: (e) => `${e.value} piksler`,
	descending: `synkende`,
	descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
	expand: `Utvid`,
	resizerDescription: `Trykk på Enter for å starte størrelsesendring`,
	select: `Velg`,
	selectAll: `Velg alle`,
	sortable: `kolonne som kan sorteres`
};
var pn = {};
pn = {
	ascending: `oplopend`,
	ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
	collapse: `Samenvouwen`,
	columnSize: (e) => `${e.value} pixels`,
	descending: `aflopend`,
	descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
	expand: `Uitvouwen`,
	resizerDescription: `Druk op Enter om het formaat te wijzigen`,
	select: `Selecteren`,
	selectAll: `Alles selecteren`,
	sortable: `sorteerbare kolom`
};
var mn = {};
mn = {
	ascending: `rosnąco`,
	ascendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku rosn\u{105}cym`,
	collapse: `Zwiń`,
	columnSize: (e) => `Liczba pikseli: ${e.value}`,
	descending: `malejąco`,
	descendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku malej\u{105}cym`,
	expand: `Rozwiń`,
	resizerDescription: `Naciśnij Enter, aby rozpocząć zmienianie rozmiaru`,
	select: `Zaznacz`,
	selectAll: `Zaznacz wszystko`,
	sortable: `kolumna z możliwością sortowania`
};
var hn = {};
hn = {
	ascending: `crescente`,
	ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
	collapse: `Recolher`,
	columnSize: (e) => `${e.value} pixels`,
	descending: `decrescente`,
	descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
	expand: `Expandir`,
	resizerDescription: `Pressione Enter para começar a redimensionar`,
	select: `Selecionar`,
	selectAll: `Selecionar tudo`,
	sortable: `coluna classificável`
};
var gn = {};
gn = {
	ascending: `ascendente`,
	ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
	collapse: `Colapsar`,
	columnSize: (e) => `${e.value} pixels`,
	descending: `descendente`,
	descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
	expand: `Expandir`,
	resizerDescription: `Prima Enter para iniciar o redimensionamento`,
	select: `Selecionar`,
	selectAll: `Selecionar tudo`,
	sortable: `Coluna ordenável`
};
var _n = {};
_n = {
	ascending: `crescătoare`,
	ascendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine cresc\u{103}toare`,
	collapse: `Restrângeți`,
	columnSize: (e) => `${e.value} pixeli`,
	descending: `descrescătoare`,
	descendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine descresc\u{103}toare`,
	expand: `Extindeți`,
	resizerDescription: `Apăsați pe Enter pentru a începe redimensionarea`,
	select: `Selectare`,
	selectAll: `Selectare totală`,
	sortable: `coloană sortabilă`
};
var vn = {};
vn = {
	ascending: `возрастание`,
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
	collapse: `Свернуть`,
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}.`,
	descending: `убывание`,
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
	expand: `Развернуть`,
	resizerDescription: `Нажмите клавишу Enter для начала изменения размеров`,
	select: `Выбрать`,
	selectAll: `Выбрать все`,
	sortable: `сортируемый столбец`
};
var yn = {};
yn = {
	ascending: `vzostupne`,
	ascendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	collapse: `Zbaliť`,
	columnSize: (e) => `Po\u{10D}et pixelov: ${e.value}`,
	descending: `zostupne`,
	descendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	expand: `Rozbaliť`,
	resizerDescription: `Stlačením klávesu Enter začnete zmenu veľkosti`,
	select: `Vybrať`,
	selectAll: `Vybrať všetko`,
	sortable: `zoraditeľný stĺpec`
};
var bn = {};
bn = {
	ascending: `naraščajoče`,
	ascendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
	collapse: `Strni`,
	columnSize: (e) => `${e.value} slikovnih pik`,
	descending: `padajoče`,
	descendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v padajo\u{10D}em vrstnem redu`,
	expand: `Razširi`,
	resizerDescription: `Pritisnite tipko Enter da začnete spreminjati velikost`,
	select: `Izberite`,
	selectAll: `Izberite vse`,
	sortable: `razvrstljivi stolpec`
};
var xn = {};
xn = {
	ascending: `rastući`,
	ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastu\u{107}im redosledom`,
	collapse: `Skupi`,
	columnSize: (e) => `${e.value} piksela`,
	descending: `padajući`,
	descendingSort: (e) => `sortirano po kolonama ${e.columnName} padaju\u{107}im redosledom`,
	expand: `Proširi`,
	resizerDescription: `Pritisnite Enter da biste započeli promenu veličine`,
	select: `Izaberite`,
	selectAll: `Izaberite sve`,
	sortable: `kolona koja se može sortirati`
};
var Sn = {};
Sn = {
	ascending: `stigande`,
	ascendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
	collapse: `Dölj`,
	columnSize: (e) => `${e.value} pixlar`,
	descending: `fallande`,
	descendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
	expand: `Expandera`,
	resizerDescription: `Tryck på Retur för att börja ändra storlek`,
	select: `Markera`,
	selectAll: `Markera allt`,
	sortable: `sorterbar kolumn`
};
var Cn = {};
Cn = {
	ascending: `artan sırada`,
	ascendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
	collapse: `Daralt`,
	columnSize: (e) => `${e.value} piksel`,
	descending: `azalan sırada`,
	descendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
	expand: `Genişlet`,
	resizerDescription: `Yeniden boyutlandırmak için Enter'a basın`,
	select: `Seç`,
	selectAll: `Tümünü Seç`,
	sortable: `Sıralanabilir sütun`
};
var wn = {};
wn = {
	ascending: `висхідний`,
	ascendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	collapse: `Згорнути`,
	columnSize: (e) => `${e.value} \u{43F}\u{456}\u{43A}\u{441}.`,
	descending: `низхідний`,
	descendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	expand: `Розгорнути`,
	resizerDescription: `Натисніть Enter, щоб почати зміну розміру`,
	select: `Вибрати`,
	selectAll: `Вибрати все`,
	sortable: `сортувальний стовпець`
};
var Tn = {};
Tn = {
	ascending: `升序`,
	ascendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
	collapse: `折叠`,
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: `降序`,
	descendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
	expand: `扩展`,
	resizerDescription: `按 Enter 开始调整大小。`,
	select: `选择`,
	selectAll: `全选`,
	sortable: `可排序的列`
};
var En = {};
En = {
	ascending: `遞增`,
	ascendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
	collapse: `收合`,
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: `遞減`,
	descendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
	expand: `展開`,
	resizerDescription: `按 Enter 鍵以開始調整大小`,
	select: `選取`,
	selectAll: `全選`,
	sortable: `可排序的欄`
};
var Dn = {};
Dn = {
	"ar-AE": Kt,
	"bg-BG": qt,
	"cs-CZ": Jt,
	"da-DK": Yt,
	"de-DE": Xt,
	"el-GR": Zt,
	"en-US": Qt,
	"es-ES": $t,
	"et-EE": en,
	"fi-FI": tn,
	"fr-FR": nn,
	"he-IL": rn,
	"hr-HR": an,
	"hu-HU": on,
	"it-IT": sn,
	"ja-JP": cn,
	"ko-KR": ln,
	"lt-LT": un,
	"lv-LV": dn,
	"nb-NO": fn,
	"nl-NL": pn,
	"pl-PL": mn,
	"pt-BR": hn,
	"pt-PT": gn,
	"ro-RO": _n,
	"ru-RU": vn,
	"sk-SK": yn,
	"sl-SI": bn,
	"sr-SP": xn,
	"sv-SE": Sn,
	"tr-TR": Cn,
	"uk-UA": wn,
	"zh-CN": Tn,
	"zh-TW": En
};
var On = class extends Lt {
	isCell(e) {
		return e.type === `cell` || e.type === `rowheader` || e.type === `column`;
	}
	getKeyBelow(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === `column`) {
			let e = H(V(n, this.collection));
			if (e) return e.key;
			let t = this.getFirstKey();
			return t == null || !this.collection.getItem(t) ? null : super.getKeyForItemInRowByIndex(t, n.index);
		}
		return super.getKeyBelow(e, t);
	}
	getKeyAbove(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === `column`) {
			let e = n.parentKey == null ? null : this.collection.getItem(n.parentKey);
			return e && e.type === `column` ? e.key : null;
		}
		let r = super.getKeyAbove(e, t), i = r == null ? null : this.collection.getItem(r);
		return i && i.type !== `headerrow` ? r : this.isCell(n) ? this.collection.columns[n.index].key : this.collection.columns[0].key;
	}
	findNextColumnKey(e) {
		let t = this.findNextKey(e.key, (e) => e.type === `column`);
		if (t != null) return t;
		let n = this.collection.headerRows[e.level];
		for (let e of V(n, this.collection)) if (e.type === `column`) return e.key;
		return null;
	}
	findPreviousColumnKey(e) {
		let t = this.findPreviousKey(e.key, (e) => e.type === `column`);
		if (t != null) return t;
		let n = this.collection.headerRows[e.level], r = [...V(n, this.collection)];
		for (let e = r.length - 1; e >= 0; e--) {
			let t = r[e];
			if (t.type === `column`) return t.key;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === `column` ? this.direction === `rtl` ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e) : null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === `column` ? this.direction === `rtl` ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e) : null;
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t ?? this.getFirstKey();
		if (r == null) return null;
		let i = n.getItem(r);
		i?.type === `cell` && (r = i.parentKey ?? null);
		let a = !1;
		for (; r != null;) {
			let o = n.getItem(r);
			if (!o) return null;
			if (o.textValue) {
				let t = o.textValue.slice(0, e.length);
				if (this.collator.compare(t, e) === 0) return o.key;
			}
			for (let r of V(o, this.collection)) {
				let a = n.columns[r.index];
				if (n.rowHeaderColumnKeys.has(a.key) && r.textValue) {
					let a = r.textValue.slice(0, e.length);
					if (this.collator.compare(a, e) === 0) return (t == null ? i : n.getItem(t))?.type === `cell` ? r.key : o.key;
				}
			}
			r = this.getKeyBelow(r), r == null && !a && (r = this.getFirstKey(), a = !0);
		}
		return null;
	}
};
function kn(e) {
	return e && e.__esModule ? e.default : e;
}
function An(e, t, n) {
	let { keyboardDelegate: r, isVirtualized: i, layoutDelegate: a, layout: o } = e, s = Xe({
		usage: `search`,
		sensitivity: `base`
	}), { direction: l } = A(), u = t.selectionManager.disabledBehavior, d = (0, G.useMemo)(() => r || new On({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: u,
		ref: n,
		direction: l,
		collator: s,
		layoutDelegate: a,
		layout: o
	}), [
		r,
		t.collection,
		t.disabledKeys,
		u,
		n,
		l,
		s,
		a,
		o
	]), f = ee(e.id);
	Vt.set(t, f);
	let { gridProps: p } = Bt({
		...e,
		id: f,
		keyboardDelegate: d
	}, t, n);
	i && (p[`aria-rowcount`] = t.collection.size + t.collection.headerRows.length), t.treeColumn != null && (p.role = `treegrid`);
	let { column: m, direction: h } = t.sortDescriptor || {}, g = rt(kn(Dn), `@react-aria/table`), _ = (0, G.useMemo)(() => {
		let e = t.collection.columns.find((e) => e.key === m)?.textValue ?? ``;
		return h && m ? g.format(`${h}Sort`, { columnName: e }) : void 0;
	}, [
		h,
		m,
		t.collection.columns
	]), v = Te(_);
	return c(() => {
		_ && P(_, `assertive`, 500);
	}, [_]), { gridProps: j(p, v, { "aria-describedby": [v[`aria-describedby`], p[`aria-describedby`]].filter(Boolean).join(` `) }) };
}
function jn(e, t, n) {
	let { node: r, isVirtualized: i, focusMode: a, allowsArrowNavigation: o, shouldSelectOnPressUp: s, onAction: c } = e, { direction: l } = A(), { keyboardDelegate: u, actions: { onCellAction: d }, keyboardNavigationBehavior: f } = zt.get(t), p = a ?? (f === `tab` ? `cell` : `child`), m = (0, G.useRef)(null), h = (0, G.useRef)(null), g = () => {
		if (n.current) {
			let e = Fe(n.current);
			if (p === `child`) {
				let i = F(L(n.current));
				if (ue(n.current) && n.current !== i) return;
				let a = L(n.current);
				if (!i || i === a.body || i === n.current) {
					let e = h.current;
					if (e && m.current === r.key && I(n.current, e)) {
						k(e);
						return;
					}
				}
				let o = t.selectionManager.childFocusStrategy === `last` ? Mn(e) : e.firstChild();
				if (o) {
					k(o);
					return;
				}
			}
			(m.current != null && r.key !== m.current || !ue(n.current)) && k(n.current);
		}
	}, { itemProps: _, isPressed: v } = we({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		focus: g,
		shouldSelectOnPressUp: s,
		onAction: d ? () => d(r.key) : c,
		isDisabled: t.collection.size === 0
	}), y = j(_, {
		role: `gridcell`,
		onKeyDownCapture: f !== `tab` || o ? (e) => {
			let i = F(L(n.current));
			if (!I(e.currentTarget, N(e)) || t.isKeyboardNavigationDisabled || !n.current || !i) return;
			let a = Fe(n.current);
			switch (a.currentNode = i, e.key) {
				case `ArrowLeft`: {
					let t = l === `rtl` ? a.nextNode() : a.previousNode();
					if (p === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) k(t), R(t, { containingElement: U(n.current) });
					else {
						if (u.getKeyLeftOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === `cell` && l === `rtl` ? (k(n.current), R(n.current, { containingElement: U(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? a.firstChild() : Mn(a), t && (k(t), R(t, { containingElement: U(n.current) })));
					}
					break;
				}
				case `ArrowRight`: {
					let t = l === `rtl` ? a.previousNode() : a.nextNode();
					if (p === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) k(t), R(t, { containingElement: U(n.current) });
					else {
						if (u.getKeyRightOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === `cell` && l === `ltr` ? (k(n.current), R(n.current, { containingElement: U(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? Mn(a) : a.firstChild(), t && (k(t), R(t, { containingElement: U(n.current) })));
					}
					break;
				}
				case `ArrowUp`:
				case `ArrowDown`: !e.altKey && I(n.current, N(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
			}
		} : void 0,
		onKeyDown: f === `tab` ? (e) => {
			let r = F(L(n.current));
			if (I(e.currentTarget, N(e)) && !t.isKeyboardNavigationDisabled && n.current && r) {
				if (f === `tab` && N(e) !== n.current && e.key !== `Tab`) e.stopPropagation();
				else if (e.key === `Tab` && f === `tab`) {
					let t = Fe(n.current, { tabbable: !0 });
					t.currentNode = r, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
				}
			}
		} : void 0,
		"aria-colspan": r.colSpan,
		"aria-colindex": r.colIndex == null ? void 0 : r.colIndex + 1,
		colSpan: i ? void 0 : r.colSpan,
		onFocus: (e) => {
			if (m.current = r.key, N(e) !== n.current) {
				let i = N(e);
				n.current && I(n.current, i) && (h.current = i), O() || t.selectionManager.setFocusedKey(r.key);
			} else p === `child` && e.relatedTarget && I(n.current, e.relatedTarget) || requestAnimationFrame(() => {
				p === `child` && F(L(n.current)) === n.current && g();
			});
		},
		...p === `child` && f === `tab` ? { tabIndex: -1 } : {}
	});
	return i && (y[`aria-colindex`] = (r.colIndex ?? r.index) + 1), s && y.tabIndex != null && y.onPointerDown == null && (y.onPointerDown = (e) => {
		let t = e.currentTarget, n = t.getAttribute(`tabindex`);
		t.removeAttribute(`tabindex`), requestAnimationFrame(() => {
			n != null && t.setAttribute(`tabindex`, n);
		});
	}), {
		gridCellProps: y,
		isPressed: v
	};
}
function Mn(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
function Nn(e) {
	return e && e.__esModule ? e.default : e;
}
function Pn(e, t, n) {
	let { node: r } = e, i = r.props.allowsSorting, { gridCellProps: a } = jn({
		focusMode: `child`,
		...e
	}, t, n), o = r.props.isSelectionCell && t.selectionManager.selectionMode === `single`, { pressProps: s, isPressed: c } = ae({
		isDisabled: !i || o,
		onPress() {
			t.sort(r.key);
		},
		ref: n
	}), { focusableProps: l } = ce({}, n), u, d = t.sortDescriptor?.column === r.key, f = t.sortDescriptor?.direction;
	r.props.allowsSorting && !fe() && (u = d ? f : `none`);
	let p = rt(Nn(Dn), `@react-aria/table`), m;
	i && (m = `${p.format(`sortable`)}`, d && f && fe() && (m = `${m}, ${p.format(f)}`));
	let h = Te(m), g = t.collection.size === 0;
	return (0, G.useEffect)(() => {
		g && t.selectionManager.focusedKey === r.key && t.selectionManager.setFocusedKey(null);
	}, [
		g,
		t.selectionManager,
		r.key
	]), {
		columnHeaderProps: {
			...j(l, a, s, h, g ? { tabIndex: -1 } : null),
			role: `columnheader`,
			id: Ut(t, r.key),
			"aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
			"aria-sort": u
		},
		isPressed: c
	};
}
function Fn(e, t, n) {
	let { node: r, isVirtualized: i, shouldSelectOnPressUp: a, onAction: o } = e, { actions: s, shouldSelectOnPressUp: c } = zt.get(t), l = s.onRowAction ? () => s.onRowAction?.(r.key) : o, { itemProps: u, ...d } = we({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		shouldSelectOnPressUp: c || a,
		onAction: l || r?.props?.onAction ? C(r?.props?.onAction, l) : void 0,
		isDisabled: t.collection.size === 0
	}), f = t.selectionManager.isSelected(r.key), p = {
		role: `row`,
		"aria-selected": t.selectionManager.selectionMode === `none` ? void 0 : f,
		"aria-disabled": d.isDisabled || void 0,
		...u
	};
	return i && (p[`aria-rowindex`] = r.index + 1), {
		rowProps: p,
		...d
	};
}
function In(e) {
	return e && e.__esModule ? e.default : e;
}
var Ln = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function Rn(e, t, n) {
	let { node: r, isVirtualized: i } = e, { rowProps: a, ...o } = Fn(e, t, n), { direction: s } = A();
	i && t.treeColumn == null ? a[`aria-rowindex`] = r.index + 1 + t.collection.headerRows.length : delete a[`aria-rowindex`];
	let c = t.treeColumn != null && (t.expandedKeys === `all` || t.expandedKeys.has(r.key)), l = rt(In(Dn), `@react-aria/table`), u = re({
		"aria-label": c ? l.format(`collapse`) : l.format(`expand`),
		"aria-labelledby": Gt(t, r.key)
	}), d = {}, f = {};
	if (t.treeColumn != null) {
		let e = t.collection.getItem(r.key);
		if (e != null) {
			let n = zn(t.collection, r), i = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || n?.type !== `cell`, a = t.collection.getItem(r.parentKey), c = a.type === `tablebody` || a.type === `body`, l = zn(t.collection, a);
			for (; l && l.type !== `item` && l.prevKey != null;) l = t.collection.getItem(l.prevKey);
			d = {
				onKeyDown: (n) => {
					n.key === Ln.expand[s] && t.selectionManager.focusedKey === e.key && i && t.expandedKeys !== `all` && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : n.key === Ln.collapse[s] && t.selectionManager.focusedKey === e.key && (t.expandedKeys === `all` ? t.expandedKeys === `all` && (t.toggleKey(e.key), n.stopPropagation()) : i && t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : !t.expandedKeys.has(e.key) && e.parentKey != null && e.level > 0 && (t.selectionManager.setFocusedKey(e.parentKey), n.stopPropagation()));
				},
				"aria-expanded": i ? t.expandedKeys === `all` || t.expandedKeys.has(r.key) : void 0,
				"aria-level": e.level + 1,
				"aria-posinset": e.index - (c ? 0 : t.collection.columnCount) + 1,
				"aria-setsize": l.index - (c ? 0 : t.collection.columnCount) + 1
			}, f = {
				isDisabled: o.isDisabled,
				onPress: () => {
					o.isDisabled || (t.toggleKey(r.key), t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r.key));
				},
				excludeFromTabOrder: !0,
				preventFocusOnPress: !0,
				"data-react-aria-prevent-focus": !0,
				...u
			};
		}
	}
	let p = ne(r.props), m = o.hasAction ? p : {};
	return {
		rowProps: {
			...j(a, d, m),
			"aria-labelledby": Gt(t, r.key)
		},
		expandButtonProps: f,
		...o
	};
}
function zn(e, t) {
	return `lastChildKey` in t ? t.lastChildKey == null ? null : e.getItem(t.lastChildKey) : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
function Bn(e, t, n) {
	let { node: r, isVirtualized: i } = e, a = { role: `row` };
	return i && t.treeColumn == null && (a[`aria-rowindex`] = r.index + 1), { rowProps: a };
}
function Vn(e, t, n) {
	let { gridCellProps: r, isPressed: i } = jn(e, t, n), a = e.node.column?.key;
	return a != null && t.collection.rowHeaderColumnKeys.has(a) && (r.role = `rowheader`, r.id = Wt(t, e.node.parentKey, a)), {
		gridCellProps: r,
		isPressed: i
	};
}
function Hn(e) {
	return e && e.__esModule ? e.default : e;
}
function Un(e, t) {
	let { key: n } = e, { checkboxProps: r } = it(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${Gt(t, n)}`
	} };
}
function Wn(e) {
	let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
	return { checkboxProps: {
		"aria-label": rt(Hn(Dn), `@react-aria/table`).format(r === `single` ? `select` : `selectAll`),
		isSelected: n,
		isDisabled: r !== `multiple` || e.collection.size === 0 || e.collection.rows.length === 1 && e.collection.rows[0].type === `loader`,
		isIndeterminate: !t && !n,
		onChange: () => e.selectionManager.toggleSelectAll()
	} };
}
function Gn() {
	return { rowGroupProps: { role: `rowgroup` } };
}
function Kn() {
	return Gn();
}
var qn = t(r(), 1), Jn = class extends Ge {
	withExpandedKeys(e) {
		let t = this.clone();
		return t.expandedKeys = e, t.frozen = this.frozen, t.rows = Array.from(t.getRows()), t;
	}
	addNode(e) {
		super.addNode(e), this.columnsDirty ||= e.type === `column`, e.type === `tableheader` && (this.head = e);
	}
	getRows() {
		let e = [];
		for (let t of this) (t.type === `tablebody` || t.type === `tablefooter`) && e.push(...this.getChildren(t.key));
		return e;
	}
	get body() {
		for (let e of this) if (e.type === `tablebody`) return e;
		return new fr(-2);
	}
	commit(e, t, n = !1) {
		this.updateColumns(n), this.firstKey = e, this.lastKey = t, this.rows = [];
		for (let e of this.getRows()) {
			let t = e.lastChildKey;
			if (t != null) {
				let e = this.getItem(t);
				for (; e && e.type !== `cell`;) e = e.prevKey == null ? null : this.getItem(e.prevKey);
				if (e) {
					let t = (e.colIndex ?? e.index) + (e.colSpan ?? 1);
					if (t !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${t} cells and ${this.columns.length} columns.`);
				}
			}
			this.rows.push(e);
		}
		super.commit(e, t, n);
	}
	updateColumns(e) {
		if (!this.columnsDirty) return;
		this.rowHeaderColumnKeys = new Set(), this.columns = [];
		let t = new Map(), n = (e) => {
			e.type === `column` && (t.set(e.key, e), e.hasChildNodes || (e.index = this.columns.length, this.columns.push(e), e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key)));
			for (let t of this.getChildren(e.key)) n(t);
		};
		for (let e of this.getChildren(this.head.key)) n(e);
		if (this.headerRows = jt(t, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw Error(`A table must have at least one Column with the isRowHeader prop set to true`);
	}
	get columnCount() {
		return this.columns.length;
	}
	*[Symbol.iterator]() {
		let e = this.firstKey;
		for (; e != null;) {
			let t = this.getItem(e);
			t && (yield t), e = t?.nextKey ?? null;
		}
	}
	getFirstKey() {
		for (let e of this) if (e.type === `tablebody`) return e.firstChildKey ?? null;
		return null;
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
		if (t?.type === `column`) return t.nextKey ?? null;
		if (!t) return null;
		if (t.type === `item` && t.firstChildKey != null && this.expandedKeys.has(t.key)) {
			let e = this.getItem(t.firstChildKey);
			for (; e;) {
				if (e.type === `item`) return e.key;
				e = e.nextKey == null ? null : this.getItem(e.nextKey);
			}
		}
		return super.getKeyAfter(e);
	}
	getKeyBefore(e) {
		let t = this.getItem(e);
		if (t?.type === `column`) return t.prevKey ?? null;
		if (!t) return null;
		let n = null;
		if (t.prevKey != null) {
			for (t = this.getItem(t.prevKey); t && (t.type !== `item` || this.expandedKeys.has(t.key)) && t.lastChildKey != null;) t = this.getItem(t.lastChildKey);
			n = t?.key ?? null;
		}
		return n ??= t.parentKey, n != null && this.getItem(n)?.type === `tableheader` ? null : n;
	}
	getChildren(e) {
		let t = this.getItem(e);
		if (!t) {
			for (let t of this.headerRows) if (t.key === e) return t.childNodes;
		}
		let n = this;
		return t?.type === `tablebody` || t?.type === `tablefooter` ? { *[Symbol.iterator]() {
			let e = t.firstChildKey, r = e == null ? null : n.getItem(e);
			for (; r;) {
				yield r;
				let e = n.getKeyAfter(r.key);
				if (r = e == null ? null : n.getItem(e), r && r.parentKey === t.parentKey) break;
			}
		} } : { *[Symbol.iterator]() {
			let t = n.getItem(e), r = t?.firstChildKey == null ? null : n.getItem(t.firstChildKey);
			for (; r && (yield r, r = r.nextKey == null ? null : n.getItem(r.nextKey), t?.type !== `item` || r?.type === `cell`););
		} };
	}
	clone() {
		let e = super.clone();
		return e.headerRows = this.headerRows, e.columns = this.columns, e.rows = this.rows, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e;
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return ``;
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys, r = [];
		for (let t of this.getChildren(e)) {
			let e = this.columns[t.index];
			if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break;
		}
		return r.join(` `);
	}
	constructor(...e) {
		super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set(), this.head = new rr(-1), this.columnsDirty = !0, this.expandedKeys = new Set();
	}
}, Yn = (0, G.createContext)(null), Xn = (0, G.createContext)(null), K = (0, G.createContext)(null), Zn = (0, G.createContext)(null), Qn = (0, G.forwardRef)(function(e, t) {
	[e, t] = ie(e, t, Xn);
	let n = Se(e), { selectionBehavior: r, selectionMode: i, disallowEmptySelection: a } = n, o = !!e.dragAndDropHooks?.useDraggableCollectionState, s = (0, G.useMemo)(() => ({
		selectionBehavior: i === `none` ? null : r,
		selectionMode: i,
		disallowEmptySelection: a,
		allowsDragging: o
	}), [
		r,
		i,
		a,
		o
	]), c = G.createElement(nr.Provider, { value: s }, G.createElement(He, e));
	return G.createElement(We, {
		content: c,
		createCollection: () => new Jn()
	}, (r) => G.createElement(tr, {
		props: e,
		forwardedRef: t,
		selectionState: n,
		collection: r
	}));
}), $n = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.table, {
		...e,
		ref: t
	});
}), er = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function tr({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
	[e, t] = ie(e, t, Me);
	let { shouldUseVirtualFocus: i, disallowTypeAhead: s, filter: c, ...u } = e, d = (0, G.useContext)(Yn);
	t = te((0, G.useMemo)(() => D(t, d?.tableRef), [t, d?.tableRef]));
	let [f, p] = $e(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
	r = (0, G.useMemo)(() => r.withExpandedKeys(f), [r, f]);
	let m = Ft({
		...u,
		collection: r,
		children: void 0,
		UNSAFE_selectionState: n,
		expandedKeys: f,
		onExpandedChange: p
	}), h = It(m, c), { isVirtualized: g, layoutDelegate: _, dropTargetDelegate: v, CollectionRoot: y } = (0, G.useContext)(z), { dragAndDropHooks: b } = e, { gridProps: x } = An({
		...u,
		layoutDelegate: _,
		isVirtualized: g
	}, h, t), S = h.selectionManager, C = !!b?.useDraggableCollectionState, w = !!b?.useDroppableCollectionState;
	(0, G.useRef)(C), (0, G.useRef)(w), (0, G.useEffect)(() => {}, [C, w]);
	let O, k, ee, ne = !1, re = null, M = (0, G.useRef)(null), { direction: N } = A(), [P] = (0, G.useState)(() => new Le());
	if (C && b) {
		O = b.useDraggableCollectionState({
			collection: h.collection,
			selectionManager: S,
			preview: b.renderDragPreview ? M : void 0
		}), b.useDraggableCollection({}, O, t);
		let e = b.DragPreview;
		re = b.renderDragPreview ? G.createElement(e, { ref: M }, b.renderDragPreview) : null;
	}
	if (w && b) {
		k = b.useDroppableCollectionState({
			collection: h.collection,
			selectionManager: S
		});
		let e = new Ye({
			collection: h.collection,
			disabledKeys: S.disabledKeys,
			disabledBehavior: S.disabledBehavior,
			ref: t,
			layoutDelegate: _
		}), n = b.dropTargetDelegate || v || new b.ListDropTargetDelegate(r.rows, t);
		P.setup(n, m, N), ee = b.useDroppableCollection({
			keyboardDelegate: e,
			dropTargetDelegate: P,
			onDropActivate: (e) => {
				if (e.target.type === `item`) {
					let t = e.target.key, n = m.collection.getItem(t), r = f.has(t);
					n && n.hasChildNodes && (!r || b?.isVirtualDragging?.()) && m.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = k?.target;
				if (t && t.type === `item` && t.dropPosition === `on`) {
					let n = m.collection.getItem(t.key);
					(e.key === er.expand[N] && n?.hasChildNodes && !m.expandedKeys.has(t.key) || e.key === er.collapse[N] && n?.hasChildNodes && m.expandedKeys.has(t.key)) && m.toggleKey(t.key);
				}
			}
		}, k, t), ne = k.isDropTarget({ type: `root` });
	}
	let { focusProps: ae, isFocused: oe, isFocusVisible: se } = he(), F = E({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Table`,
		values: {
			isDropTarget: ne,
			isFocused: oe,
			isFocusVisible: se,
			state: h
		}
	}), ce = !(!C || O?.isDisabled), le = F.style, ue = null;
	d && (ue = d.useTableColumnResizeState({ tableWidth: d.tableWidth }, h), g || (le = {
		...le,
		tableLayout: `fixed`,
		width: `min-content`
	}));
	let de = T(e, { global: !0 });
	return G.createElement(ge, { values: [
		[K, h],
		[Zn, ue],
		[l, {
			dragAndDropHooks: b,
			dragState: O,
			dropState: k
		}],
		[o, { render: Sr }],
		[Me, null],
		[je, null]
	] }, G.createElement(Pe, null, G.createElement($n, {
		...j(de, F, x, ae, ee?.collectionProps),
		style: le,
		ref: t,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-allows-dragging": ce || void 0,
		"data-drop-target": ne || void 0,
		"data-focused": oe || void 0,
		"data-focus-visible": se || void 0
	}, G.createElement(Ne, null, G.createElement(y, {
		collection: h.collection,
		scrollRef: d?.scrollRef ?? t,
		persistedKeys: a(S, b, k)
	})))), re);
}
var nr = (0, G.createContext)(null), rr = class extends Ve {
	static {
		this.type = `tableheader`;
	}
}, ir = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.thead, {
		...e,
		ref: t
	});
}), ar = Ke(rr, (e, t) => {
	let n = (0, G.useContext)(K).collection, r = Be({
		items: n.headerRows,
		children: (0, G.useCallback)((e) => {
			switch (e.type) {
				case `headerrow`: return G.createElement(sr, { item: e });
				default: throw Error(`Unsupported node type in TableHeader: ` + e.type);
			}
		}, [])
	}), { rowGroupProps: i } = Kn(), { hoverProps: a, isHovered: o } = M({
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), s = E({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TableHeader`,
		values: { isHovered: o }
	});
	return G.createElement(ir, {
		...j(T(e, { global: !0 }), i, a),
		...s,
		ref: t,
		"data-hovered": o || void 0
	}, r);
}, (e) => G.createElement(He, {
	dependencies: e.dependencies,
	items: e.columns
}, e.children)), or = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(`div`, {
		...e,
		ref: t
	}) : G.createElement(`tr`, {
		...e,
		ref: t
	});
});
function sr({ item: e }) {
	let t = (0, G.useRef)(null), n = (0, G.useContext)(K), { isVirtualized: r, CollectionBranch: i } = (0, G.useContext)(z), { rowProps: a } = Bn({
		node: e,
		isVirtualized: r
	}, n, t), { checkboxProps: o } = Wn(n);
	return G.createElement(or, {
		...a,
		ref: t
	}, G.createElement(ge, { values: [[ye, { slots: { selection: o } }], [be, { slots: { selection: o } }]] }, G.createElement(i, {
		collection: n.collection,
		parent: e
	})));
}
var cr = class extends Ve {
	static {
		this.type = `column`;
	}
}, lr = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.th, {
		...e,
		ref: t
	});
}), ur = qe(cr, (e, t, n) => {
	let r = te(t), i = (0, G.useContext)(K), { isVirtualized: a } = (0, G.useContext)(z), { columnHeaderProps: o, isPressed: s } = Pn({
		node: n,
		isVirtualized: a,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: c, isFocusVisible: l, focusProps: u } = he(), d = (0, G.useContext)(Zn), f = !1;
	d && (f = d.resizingColumn === n.key);
	let { hoverProps: p, isHovered: m } = M({ isDisabled: !e.allowsSorting }), h = E({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-Column`,
		values: {
			isHovered: m,
			isPressed: s,
			isFocused: c,
			isFocusVisible: l,
			allowsSorting: n.props.allowsSorting,
			sortDirection: i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0,
			isResizing: f,
			startResize: () => {
				if (d) d.startResize(n.key), i.setKeyboardNavigationDisabled(!0);
				else throw Error(`Wrap your <Table> in a <ResizableTableContainer> to enable column resizing`);
			},
			sort: (e) => {
				i.sort(n.key, e);
			}
		}
	}), g = h.style;
	d && (g = {
		...g,
		width: d.getColumnWidth(n.key)
	});
	let _ = T(e, { global: !0 });
	return delete _.id, G.createElement(lr, {
		...j(_, o, u, p),
		...h,
		style: g,
		ref: r,
		"data-hovered": m || void 0,
		"data-pressed": s || void 0,
		"data-focused": c || void 0,
		"data-focus-visible": l || void 0,
		"data-resizing": f || void 0,
		"data-allows-sorting": n.props.allowsSorting || void 0,
		"data-sort-direction": i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0
	}, G.createElement(ge, { values: [[dr, {
		column: n,
		triggerRef: r
	}], [z, xe]] }, h.children));
}), dr = (0, G.createContext)(null), fr = class extends Je {
	static {
		this.type = `tablebody`;
	}
}, pr = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.tbody, {
		...e,
		ref: t
	});
}), mr = Ke(fr, (e, t, n) => {
	let r = (0, G.useContext)(K), { isVirtualized: i } = (0, G.useContext)(z), a = r.collection, { CollectionBranch: o } = (0, G.useContext)(z), { dragAndDropHooks: c, dropState: u } = (0, G.useContext)(l), d = !!c?.useDroppableCollectionState && !u?.isDisabled, f = d && !!u && (u.isDropTarget({ type: `root` }) ?? !1), p = a.size === 0, m = {
		isDropTarget: f,
		isEmpty: p
	}, h = E({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: `react-aria-TableBody`,
		values: m
	}), g, _ = a.columnCount;
	if (p && e.renderEmptyState && r) {
		let t = {}, n = {}, r = {};
		i ? (n[`aria-colspan`] = _, r = { display: `contents` }) : n.colSpan = _, g = G.createElement(_r, {
			role: `row`,
			...t,
			style: r
		}, G.createElement(br, {
			role: `rowheader`,
			...n,
			style: r
		}, e.renderEmptyState(m)));
	}
	let { rowGroupProps: v } = Kn(), y = T(e, { global: !0 });
	return G.createElement(pr, {
		...j(y, h, v),
		ref: t,
		"data-empty": p || void 0
	}, d && G.createElement(Dr, null), G.createElement(o, {
		collection: a,
		parent: n,
		renderDropIndicator: s(c, u)
	}), g);
});
(class extends Je {
	static {
		this.type = `tablefooter`;
	}
});
var hr = (0, G.createContext)({ isFocusVisibleWithinRow: !1 }), gr = class extends Ve {
	static {
		this.type = `item`;
	}
	filter(e, t, n) {
		let r = e.getChildren(this.key);
		for (let i of r) if (n(i.textValue, i)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
}, _r = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.tr, {
		...e,
		ref: t
	});
}), vr = Ke(gr, (e, t, n) => {
	let r = te(t), i = (0, G.useContext)(K), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, G.useContext)(l), { isVirtualized: c, CollectionBranch: u } = (0, G.useContext)(z), d = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { rowProps: f, expandButtonProps: p, ...m } = Rn({
		node: n,
		shouldSelectOnPressUp: !!o,
		isVirtualized: c
	}, i, r), { isFocused: h, isFocusVisible: g, focusProps: _ } = he(), { isFocusVisible: v, focusProps: y } = he({ within: !0 }), { hoverProps: b, isHovered: x } = M({
		isDisabled: !m.allowsSelection && !m.hasAction && !d,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { checkboxProps: S } = Un({ key: n.key }, i), C;
	o && a && (C = a.useDraggableItem({
		key: n.key,
		hasDragButton: !0
	}, o));
	let w, D = (0, G.useRef)(null), { visuallyHiddenProps: O } = ot();
	s && a && (w = a.useDropIndicator({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, s, D));
	let k = (0, G.useRef)(null);
	(0, G.useEffect)(() => {
		o && k.current;
	}, []);
	let A = o && o.isDragging(n.key), { children: ee, ...ne } = e, re = e.hasChildItems || i.collection.getItem(n.lastChildKey)?.type !== `cell`, ie = re && i.expandedKeys.has(n.key), N = E({
		...ne,
		id: void 0,
		defaultClassName: `react-aria-Row`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: {
			...m,
			state: i,
			isHovered: x,
			isFocused: h,
			isFocusVisible: g,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			isDragging: A,
			isDropTarget: w?.isDropTarget,
			isFocusVisibleWithin: v,
			id: n.key,
			hasChildItems: re,
			isExpanded: ie,
			level: n.level + 1
		}
	}), P = T(e, { global: !0 });
	return delete P.id, delete P.onClick, G.createElement(G.Fragment, null, w && !w.isHidden && G.createElement(_r, {
		role: `row`,
		style: { height: 0 }
	}, G.createElement(br, {
		role: `gridcell`,
		colSpan: i.collection.columnCount,
		style: { padding: 0 }
	}, G.createElement(`div`, {
		role: `button`,
		...O,
		...w.dropIndicatorProps,
		ref: D
	}))), G.createElement(_r, {
		...j(P, N, f, _, b, C?.dragProps, y),
		ref: r,
		"data-disabled": m.isDisabled || void 0,
		"data-selected": m.isSelected || void 0,
		"data-hovered": x || void 0,
		"data-focused": m.isFocused || void 0,
		"data-focus-visible": g || void 0,
		"data-pressed": m.isPressed || void 0,
		"data-dragging": A || void 0,
		"data-drop-target": w?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === `none` ? void 0 : i.selectionManager.selectionMode,
		"data-focus-visible-within": v || void 0,
		"data-expanded": ie || void 0,
		"data-has-child-items": re || void 0,
		"data-level": n.level + 1
	}, G.createElement(ge, { values: [
		[ye, { slots: {
			[le]: {},
			selection: S
		} }],
		[be, { slots: {
			[le]: {},
			selection: S
		} }],
		[de, { slots: {
			[le]: {},
			chevron: p,
			drag: {
				...C?.dragButtonProps,
				ref: k,
				style: { pointerEvents: `none` }
			}
		} }],
		[Ie, { isSelected: m.isSelected }],
		[hr, { isFocusVisibleWithinRow: v }]
	] }, G.createElement(u, {
		collection: i.collection,
		parent: n
	}))));
}, (e) => {
	if (e.id == null && typeof e.children == `function`) throw Error(`No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.`);
	let t = [e.value].concat(e.dependencies);
	return G.createElement(He, {
		dependencies: t,
		items: e.columns,
		idScope: e.id
	}, e.children);
}), yr = class extends Ve {
	static {
		this.type = `cell`;
	}
}, br = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.td, {
		...e,
		ref: t
	});
}), xr = qe(yr, (e, t, n) => {
	let r = te(t), i = (0, G.useContext)(K), { dragState: a } = (0, G.useContext)(l), { isVirtualized: o } = (0, G.useContext)(z);
	n.column = i.collection.columns[n.index];
	let { gridCellProps: s, isPressed: c } = Vn({
		node: n,
		shouldSelectOnPressUp: !!a,
		isVirtualized: o,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: u, isFocusVisible: d, focusProps: f } = he(), { hoverProps: p, isHovered: m } = M({}), { isFocusVisibleWithinRow: h } = (0, G.useContext)(hr), g = n.parentKey != null && i.selectionManager.isSelected(n.parentKey), _ = n.colIndex || n.index, v = i.collection.getItem(n.parentKey), y = v.props.hasChildItems || i.collection.getItem(v.lastChildKey)?.type !== `cell`, b = y && i.expandedKeys.has(n.parentKey), x = i.selectionManager.isDisabled(n.parentKey), S = E({
		...e,
		id: void 0,
		defaultClassName: `react-aria-Cell`,
		values: {
			isFocused: u,
			isFocusVisible: d,
			isFocusVisibleWithinRow: h,
			isPressed: c,
			isHovered: m,
			isSelected: g,
			id: n.key,
			columnIndex: _,
			hasChildItems: y,
			isExpanded: b,
			isDisabled: x,
			level: v.level + 1,
			isTreeColumn: n.column.key === i.treeColumn
		}
	}), C = T(e, { global: !0 });
	return delete C.id, G.createElement(br, {
		...j(C, S, s, f, p),
		ref: r,
		"data-focused": u || void 0,
		"data-focus-visible": d || void 0,
		"data-focus-visible-within-row": h || void 0,
		"data-pressed": c || void 0,
		"data-selected": g || void 0,
		"data-column-index": _,
		"data-expanded": b || void 0,
		"data-has-child-items": y || void 0,
		"data-level": v.level + 1,
		"data-tree-column": n.column.key === i.treeColumn || void 0,
		"data-disabled": x || void 0
	}, G.createElement(z.Provider, { value: xe }, S.children));
});
function Sr(e, t) {
	t = te(t);
	let { dragAndDropHooks: n, dropState: r } = (0, G.useContext)(l), i = (0, G.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	if (o) return null;
	let c = r && e.target.type === `item` ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return G.createElement(Er, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		level: c,
		ref: t
	});
}
var Cr = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.tr, {
		...e,
		ref: t
	});
}), wr = (0, G.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, G.useContext)(z);
	return n ? G.createElement(S.div, {
		...e,
		ref: t
	}) : G.createElement(S.td, {
		...e,
		ref: t
	});
});
function Tr(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, level: a, ...o } = e, s = (0, G.useContext)(K), { visuallyHiddenProps: c } = ot(), l = E({
		...o,
		defaultClassName: `react-aria-DropIndicator`,
		defaultStyle: { "--table-row-level": a + 1 },
		values: { isDropTarget: r }
	});
	return G.createElement(Cr, {
		...T(e, { global: !0 }),
		...l,
		role: `row`,
		ref: t,
		"data-drop-target": r || void 0,
		"aria-level": a
	}, G.createElement(wr, {
		role: `gridcell`,
		colSpan: s.collection.columnCount,
		style: { padding: 0 }
	}, G.createElement(`div`, {
		...c,
		role: `button`,
		...n,
		ref: i
	}), l.children));
}
var Er = (0, G.forwardRef)(Tr);
function Dr() {
	let e = (0, G.useContext)(K), { dragAndDropHooks: t, dropState: n } = (0, G.useContext)(l), r = (0, G.useRef)(null), { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: `root` } }, n, r), a = n.isDropTarget({ type: `root` }), { visuallyHiddenProps: o } = ot();
	return !a && i[`aria-hidden`] ? null : G.createElement(_r, {
		role: `row`,
		"aria-hidden": i[`aria-hidden`],
		style: { height: 0 }
	}, G.createElement(br, {
		role: `gridcell`,
		colSpan: e.collection.columnCount,
		style: { padding: 0 }
	}, G.createElement(`div`, {
		role: `button`,
		...o,
		...i,
		ref: r
	})));
}
var Or = qe(Ue, function(e, t, n) {
	let r = (0, G.useContext)(K), { isVirtualized: i } = (0, G.useContext)(z), { isLoading: a, onLoadMore: o, scrollOffset: s, ...c } = e, l = r.collection.columns.length, u = (0, G.useRef)(null), d = (0, G.useMemo)(() => ({
		onLoadMore: o,
		collection: r?.collection,
		sentinelRef: u,
		scrollOffset: s
	}), [
		o,
		s,
		r?.collection
	]);
	Qe(d, u);
	let f = E({
		...c,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-TableLoadingIndicator`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: void 0
	}), p = {}, m = {}, h = {};
	return i ? (m[`aria-colspan`] = l, h = { display: `contents` }) : m.colSpan = l, G.createElement(G.Fragment, null, G.createElement(_r, {
		style: { height: 0 },
		inert: De(!0)
	}, G.createElement(br, { style: {
		padding: 0,
		border: 0
	} }, G.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: u,
		style: {
			position: `relative`,
			height: 1,
			width: 1
		}
	}))), a && f.children && G.createElement(_r, {
		...j(T(e, { global: !0 }), p),
		...f,
		role: `row`,
		ref: t,
		"aria-level": n.level + 1,
		"data-level": n.level + 1
	}, G.createElement(br, {
		role: `rowheader`,
		...m,
		style: h
	}, f.children)));
}), q = class e {
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	copy() {
		return new e(this.x, this.y);
	}
	equals(e) {
		return this.x === e.x && this.y === e.y;
	}
	isOrigin() {
		return this.x === 0 && this.y === 0;
	}
}, J = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.x = e, this.y = t, this.width = n, this.height = r;
	}
	get maxX() {
		return this.x + this.width;
	}
	get maxY() {
		return this.y + this.height;
	}
	get area() {
		return this.width * this.height;
	}
	get topLeft() {
		return new q(this.x, this.y);
	}
	get topRight() {
		return new q(this.maxX, this.y);
	}
	get bottomLeft() {
		return new q(this.x, this.maxY);
	}
	get bottomRight() {
		return new q(this.maxX, this.maxY);
	}
	intersects(e) {
		return this.area > 0 && e.area > 0 && this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
	}
	containsRect(e) {
		return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
	}
	containsPoint(e) {
		return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
	}
	getCornerInRect(e) {
		for (let t of [
			`topLeft`,
			`topRight`,
			`bottomLeft`,
			`bottomRight`
		]) if (e.containsPoint(this[t])) return t;
		return null;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
	}
	pointEquals(e) {
		return this.x === e.x && this.y === e.y;
	}
	sizeEquals(e) {
		return this.width === e.width && this.height === e.height;
	}
	union(t) {
		let n = Math.min(this.x, t.x), r = Math.min(this.y, t.y), i = Math.max(this.maxX, t.maxX) - n, a = Math.max(this.maxY, t.maxY) - r;
		return new e(n, r, i, a);
	}
	intersection(t) {
		if (!this.intersects(t)) return new e(0, 0, 0, 0);
		let n = Math.max(this.x, t.x), r = Math.max(this.y, t.y);
		return new e(n, r, Math.min(this.maxX, t.maxX) - n, Math.min(this.maxY, t.maxY) - r);
	}
	copy() {
		return new e(this.x, this.y, this.width, this.height);
	}
}, Y = class e {
	constructor(e = 0, t = 0) {
		this.width = Math.max(e, 0), this.height = Math.max(t, 0);
	}
	copy() {
		return new e(this.width, this.height);
	}
	equals(e) {
		return this.width === e.width && this.height === e.height;
	}
	get area() {
		return this.width * this.height;
	}
}, kr = 0, Ar = class {
	constructor(e, t) {
		this.virtualizer = e, this.key = ++kr, this.viewType = t, this.children = new Set(), this.reusableViews = new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
	}
	prepareForReuse() {
		this.content = null, this.rendered = null, this.layoutInfo = null;
	}
	getReusableView(e) {
		let t = this.reusableViews.get(e);
		return t && t.length > 0 ? t.shift() : new Mr(this.virtualizer, this, e);
	}
	reuseChild(e) {
		e.prepareForReuse();
		let t = this.reusableViews.get(e.viewType);
		t || (t = [], this.reusableViews.set(e.viewType, t)), t.push(e);
	}
}, jr = class extends Ar {
	constructor(e) {
		super(e, `root`);
	}
}, Mr = class extends Ar {
	constructor(e, t, n) {
		super(e, n), this.parent = t;
	}
};
function Nr(e, t) {
	if (e === t) return !0;
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var Pr = class {
	setVisibleRect(e) {
		let t = performance.now() - this.startTime;
		t < 500 && (e.x !== this.visibleRect.x && t > 0 && (this.velocity.x = (e.x - this.visibleRect.x) / t), e.y !== this.visibleRect.y && t > 0 && (this.velocity.y = (e.y - this.visibleRect.y) / t)), this.startTime = performance.now(), this.visibleRect = e;
	}
	getOverscannedRect() {
		let e = this.visibleRect.copy(), t = this.visibleRect.height / 3;
		e.height += t, this.velocity.y < 0 && (e.y -= t);
		let n = this.visibleRect.width / 3;
		return e.width += n, this.velocity.x < 0 && (e.x -= n), e;
	}
	constructor() {
		this.startTime = 0, this.velocity = new q(0, 0), this.visibleRect = new J();
	}
}, Fr = 4;
function Ir(e) {
	return e === `x` ? `width` : `height`;
}
function Lr(e, t, n, r, i) {
	let a = n(e.key);
	if (!a) return null;
	let o = a.rect[e.corner][t] - r[t] - e.offset;
	if (o === 0) return null;
	let s = r[t] + o, c = Ir(t), l = Math.max(0, i[c] - r[c]), u = Math.max(0, Math.min(l, s));
	return u === r[t] ? null : u;
}
function Rr(e, t, n, r, i = () => !0) {
	let a = Ir(t), o = null;
	for (let [s, c] of r) {
		if (!c || !i(c)) continue;
		let r = c.rect.intersection(n)[a];
		if (c.rect.area > 0 && r >= Fr) {
			let r = c.rect.getCornerInRect(n) ?? `topLeft`, i = c.rect[r][t] - n[t];
			(!o || (e === `end` ? i < o.offset : i > o.offset)) && (o = {
				key: s,
				corner: r,
				offset: i
			});
		}
	}
	return o;
}
function zr(e, t, n, r) {
	if (e === `start`) return 0;
	let i = Ir(t);
	return Math.max(0, n[i] - r[i]);
}
function Br(e, t, n, r, i) {
	if (n === `start`) return e[r] <= i;
	let a = Ir(r);
	return t[a] - (e[r] + e[a]) <= i;
}
function Vr(e, t, n, r, i, a, o, s, c, l) {
	let u = (e) => t === `x` ? new J(e, c.y, c.width, c.height) : new J(c.x, e, c.width, c.height);
	if (n) {
		let e = Lr(n, t, s, c, l);
		if (e != null) return u(e);
	}
	if (r && !i && (!a || o > 0)) {
		let n = u(zr(e, t, l, c));
		return n.equals(c) ? null : n;
	}
	return null;
}
var Hr = class {
	reset() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
	captureBeforeLayout(e, t, n) {
		return e ? Rr(e.edge, e.axis, n, t, e.isAnchorable) : null;
	}
	resolveAfterLayout(e) {
		let { anchorInfo: t, anchor: n, postLayoutInfos: r, previousVisibleRect: i, previousContentSize: a, contentSize: o, itemSizeChanged: s, isScrolling: c, getLayoutInfo: l } = e;
		if (!t) return null;
		let u = this.hadEstimatedVisibleItems, d = this.wasNearAnchorEdge, f = !1;
		for (let e of r.values()) if (e.estimatedSize) {
			f = !0;
			break;
		}
		if (this.hadEstimatedVisibleItems = f, u || (this.wasNearAnchorEdge = Br(i, a, t.edge, t.axis, t.threshold)), i.area === 0) return null;
		let p = t.axis === `x` ? `width` : `height`, m = o[p] - a[p], h = !this.hasSnappedToEdge;
		if (this.hasSnappedToEdge = !0, !(h || m !== 0 || s)) return null;
		let g = h || u && d || Br(i, a, t.edge, t.axis, t.threshold);
		u || (this.wasNearAnchorEdge = g);
		let _ = h || u && d ? null : n;
		return Vr(t.edge, t.axis, _, g, c, s, m, l, i, o);
	}
	constructor() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
}, Ur = class {
	constructor(e) {
		this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new Y(), this.visibleRect = new J(), this.size = new Y(), this.persistedKeys = new Set(), this._visibleViews = new Map(), this._renderedContent = new WeakMap(), this._rootView = new jr(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Pr(), this._scrollAnchor = new Hr();
	}
	isPersistedKey(e) {
		if (this.persistedKeys.has(e)) return !0;
		for (let t of this.persistedKeys) for (; t != null;) {
			let n = this.layout.getLayoutInfo(t);
			if (!n || n.parentKey == null) break;
			if (t = n.parentKey, t === e) return !0;
		}
		return !1;
	}
	getParentView(e) {
		return e.parentKey == null ? this._rootView : this._visibleViews.get(e.parentKey);
	}
	getReusableView(e) {
		let t = this.getParentView(e).getReusableView(e.type);
		return t.layoutInfo = e, this._renderView(t), t;
	}
	_renderView(e) {
		if (e.layoutInfo) {
			let { type: t, key: n, content: r } = e.layoutInfo;
			e.content = r || this.collection.getItem(n), e.rendered = this._renderContent(t, e.content);
		}
	}
	_renderContent(e, t) {
		let n = t == null ? null : this._renderedContent.get(t);
		if (n != null) return n;
		let r = this.delegate.renderView(e, t);
		return t && this._renderedContent.set(t, r), r;
	}
	keyAtPoint(e) {
		let t = new J(e.x, e.y, 1, 1), n = t.area === 0 ? [] : this.layout.getVisibleLayoutInfos(t);
		for (let e of n) if (e.rect.intersects(t)) return e.key;
		return null;
	}
	relayout(e = {}) {
		let t = this.layout.UNSTABLE_getScrollAnchorInfo?.(e.layoutOptions) ?? null, n = null;
		if (t) {
			let e = [];
			for (let [t, n] of this._visibleViews) {
				let r = this.layout.getLayoutInfo(t) ?? n.layoutInfo;
				r && e.push([t, r]);
			}
			n = this._scrollAnchor.captureBeforeLayout(t, e, this.visibleRect);
		}
		let r = this.contentSize, i = this.visibleRect;
		this.layout.update(e);
		let a = this.layout.getContentSize();
		this.contentSize = new Y(a.width, a.height);
		let o = this._scrollAnchor.resolveAfterLayout({
			anchorInfo: t,
			anchor: n,
			postLayoutInfos: t ? this.getVisibleLayoutInfos() : new Map(),
			previousVisibleRect: i,
			previousContentSize: r,
			contentSize: this.contentSize,
			itemSizeChanged: e.itemSizeChanged ?? !1,
			isScrolling: this._isScrolling,
			getLayoutInfo: (e) => this.layout.getLayoutInfo(e)
		});
		if (o) {
			this.delegate.setVisibleRect(o);
			return;
		}
		let s = this.visibleRect, c = e.contentChanged ? 0 : s.x, l = e.contentChanged ? 0 : s.y;
		if (c = Math.max(0, Math.min(this.contentSize.width - s.width, c)), l = Math.max(0, Math.min(this.contentSize.height - s.height, l)), c !== s.x || l !== s.y) {
			let e = new J(c, l, s.width, s.height);
			this.delegate.setVisibleRect(e);
		} else this.updateSubviews();
	}
	getVisibleLayoutInfos() {
		let e;
		e = this._overscanManager.getOverscannedRect();
		let t = this.layout.getVisibleLayoutInfos(e), n = new Map();
		for (let e of t) n.set(e.key, e);
		return n;
	}
	updateSubviews() {
		let e = this.getVisibleLayoutInfos(), t = new Set();
		for (let [n, r] of this._visibleViews) {
			let i = e.get(n);
			i && r.parent === this.getParentView(i) || (this._visibleViews.delete(n), r.parent.reuseChild(r), t.add(r));
		}
		for (let [n, r] of e) {
			let e = this._visibleViews.get(n);
			if (!e) e = this.getReusableView(r), e.parent.children.add(e), this._visibleViews.set(n, e), t.delete(e);
			else {
				e.layoutInfo = r;
				let t = this.collection.getItem(r.key);
				e.content !== t && (e.content != null && this._renderedContent.delete(e.content), this._renderView(e));
			}
		}
		for (let e of t) e.parent.children.delete(e), e.parent.reusableViews.clear();
		if (!this._isScrolling) for (let t of e.keys()) {
			let e = this._visibleViews.get(t);
			e.parent.children.delete(e), e.parent.children.add(e);
		}
	}
	render(e) {
		let t = this, n = !1, r = !1, i = !1, a = !1, o = !1, s = !1, c = !1, l = !1;
		if (e.collection !== this.collection && (t.collection = e.collection, n = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, t.layout = e.layout, this._scrollAnchor.reset(), n = !0), e.persistedKeys && !Nr(e.persistedKeys, this.persistedKeys) && (t.persistedKeys = e.persistedKeys, l = !0), !this.visibleRect.equals(e.visibleRect) || !this.size.equals(e.size)) {
			this._overscanManager.setVisibleRect(e.visibleRect);
			let s = new J(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height), c = new J(e.visibleRect.x, e.visibleRect.y, e.size.width, e.size.height);
			this.layout.shouldInvalidate(c, s) ? (r = !e.visibleRect.pointEquals(this.visibleRect), i = !this.size.equals(e.size), a = this.size.width !== e.size.width, o = this.size.height !== e.size.height, n = !0) : l = !0, t.visibleRect = e.visibleRect, t.size = e.size;
		}
		return e.invalidationContext !== this._invalidationContext && (e.invalidationContext && (i ||= e.invalidationContext.sizeChanged || !1, a ||= e.invalidationContext.widthChanged || !1, o ||= e.invalidationContext.heightChanged || !1, r ||= e.invalidationContext.offsetChanged || !1, s ||= e.invalidationContext.itemSizeChanged || !1, c ||= e.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && e.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(e.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions), n ||= s || i || r || c), this._invalidationContext = e.invalidationContext), e.isScrolling !== this._isScrolling && (this._isScrolling = e.isScrolling, e.isScrolling || (l = !0)), n ? this.relayout({
			offsetChanged: r,
			sizeChanged: i,
			widthChanged: a,
			heightChanged: o,
			itemSizeChanged: s,
			layoutOptionsChanged: c,
			layoutOptions: this._invalidationContext.layoutOptions
		}) : l && this.updateSubviews(), Array.from(this._rootView.children);
	}
	getVisibleView(e) {
		return this._visibleViews.get(e);
	}
	invalidate(e) {
		this.delegate.invalidate(e);
	}
	updateItemSize(e, t) {
		this.layout.updateItemSize && this.layout.updateItemSize(e, t) && this.invalidate({ itemSizeChanged: !0 });
	}
}, Wr = typeof document < `u` ? G.useLayoutEffect : () => {};
function Gr(e) {
	let [t, n] = (0, G.useState)(new J(0, 0, 0, 0)), [r, i] = (0, G.useState)(new Y()), [a, o] = (0, G.useState)(!1), [s, c] = (0, G.useState)({}), l = (0, G.useRef)(!1), [u] = (0, G.useState)(() => new Ur({
		collection: e.collection,
		layout: e.layout,
		delegate: {
			setVisibleRect(e) {
				n(e), l.current = !0;
			},
			renderView: e.renderView,
			invalidate: c
		}
	}));
	Wr(() => {
		l.current && (l.current = !1, e.onVisibleRectChange(t));
	});
	let d = (0, G.useMemo)(() => e.layoutOptions == null ? s : {
		...s,
		layoutOptions: e.layoutOptions
	}, [s, e.layoutOptions]), f = u.render({
		layout: e.layout,
		collection: e.collection,
		persistedKeys: e.persistedKeys,
		layoutOptions: e.layoutOptions,
		visibleRect: t,
		size: e.allowsWindowScrolling ? r : t,
		invalidationContext: d,
		isScrolling: a
	}), p = u.contentSize, m = (0, G.useCallback)(() => {
		o(!0);
	}, []), h = (0, G.useCallback)(() => {
		o(!1);
	}, []);
	return (0, G.useMemo)(() => ({
		virtualizer: u,
		visibleViews: f,
		setVisibleRect: n,
		size: r,
		setSize: i,
		contentSize: p,
		isScrolling: a,
		startScrolling: m,
		endScrolling: h
	}), [
		u,
		f,
		n,
		r,
		i,
		p,
		a,
		m,
		h
	]);
}
var Kr = class {
	shouldInvalidate(e, t) {
		return e.width !== t.width || e.height !== t.height;
	}
	shouldInvalidateLayoutOptions(e, t) {
		return e !== t;
	}
	update(e) {}
	getItemRect(e) {
		return this.getLayoutInfo(e)?.rect ?? null;
	}
	getVisibleRect() {
		return this.virtualizer.visibleRect;
	}
	constructor() {
		this.virtualizer = null;
	}
}, qr = class e {
	constructor(e, t, n) {
		this.type = e, this.key = t, this.parentKey = null, this.content = null, this.rect = n, this.estimatedSize = !1, this.isSticky = !1, this.opacity = 1, this.transform = null, this.zIndex = 0, this.allowOverflow = !1;
	}
	copy() {
		let t = new e(this.type, this.key, this.rect.copy());
		return t.estimatedSize = this.estimatedSize, t.opacity = this.opacity, t.transform = this.transform, t.parentKey = this.parentKey, t.content = this.content, t.isSticky = this.isSticky, t.zIndex = this.zIndex, t.allowOverflow = this.allowOverflow, t;
	}
}, X = 48, Jr = class extends Kr {
	constructor(e = {}) {
		super(), this.rowSize = e?.rowSize ?? e?.rowHeight ?? null, this.orientation = e.orientation ?? `vertical`, this.estimatedRowSize = e?.estimatedRowSize ?? e?.estimatedRowHeight ?? null, this.headingSize = e?.headingSize ?? e?.headingHeight ?? null, this.estimatedHeadingSize = e?.estimatedHeadingSize ?? e?.estimatedHeadingHeight ?? null, this.loaderSize = e?.loaderSize ?? e?.loaderHeight ?? null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new J(), this.requestedRect = new J(), this.contentSize = new Y();
	}
	get collection() {
		return this.virtualizer.collection;
	}
	get rowHeight() {
		return this.rowSize;
	}
	get estimatedRowHeight() {
		return this.estimatedRowSize;
	}
	get headingHeight() {
		return this.headingSize;
	}
	get estimatedHeadingHeight() {
		return this.estimatedHeadingSize;
	}
	get loaderHeight() {
		return this.loaderSize;
	}
	getLayoutInfo(e) {
		return this.ensureLayoutInfo(e), this.layoutNodes.get(e)?.layoutInfo || null;
	}
	getVisibleLayoutInfos(e) {
		let t = this.orientation === `horizontal` ? `x` : `y`, n = this.orientation === `horizontal` ? `width` : `height`;
		if (e[n] > 1) {
			let r = (this.rowSize ?? this.estimatedRowSize ?? X) + this.gap;
			e = e.copy();
			let i = Math.floor(e[t] / r) * r, a = e[n] + e[t] - i;
			e[t] = i, e[n] = Math.ceil(a / r) * r;
		}
		this.layoutIfNeeded(e);
		let r = [], i = (t) => {
			for (let n of t) this.isVisible(n, e) && (r.push(n.layoutInfo), n.children && i(n.children));
		};
		return i(this.rootNodes), r;
	}
	layoutIfNeeded(e) {
		if (this.lastCollection) {
			this.requestedRect.containsRect(e) || (this.requestedRect = this.requestedRect.union(e), this.rootNodes = this.buildCollection());
			for (let e of this.virtualizer.persistedKeys) if (this.ensureLayoutInfo(e)) return;
		}
	}
	ensureLayoutInfo(e) {
		return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new J(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new J(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
	}
	isVisible(e, t) {
		return e.layoutInfo.rect.intersects(t) || e.layoutInfo.isSticky || e.layoutInfo.type === `header` || e.layoutInfo.type === `loader` || this.virtualizer.isPersistedKey(e.layoutInfo.key);
	}
	shouldInvalidateEverything(e) {
		let t = e.layoutOptions;
		return e.sizeChanged || this.rowSize !== (t?.rowSize ?? t?.rowHeight ?? this.rowSize) || this.orientation !== (t?.orientation ?? this.orientation) || this.headingSize !== (t?.headingSize ?? t?.headingHeight ?? this.headingSize) || this.loaderSize !== (t?.loaderSize ?? t?.loaderHeight ?? this.loaderSize) || this.gap !== (t?.gap ?? this.gap) || this.padding !== (t?.padding ?? this.padding);
	}
	shouldInvalidateLayoutOptions(e, t) {
		return (e?.rowSize ?? e?.rowHeight) !== (t?.rowSize ?? t?.rowHeight) || e.orientation !== t.orientation || (e?.estimatedRowSize ?? e?.estimatedRowHeight) !== (t?.estimatedRowSize ?? t?.estimatedRowHeight) || (e?.headingSize ?? e?.headingHeight) !== (t?.headingSize ?? t?.headingHeight) || (e?.estimatedHeadingSize ?? e?.estimatedHeadingHeight) !== (t?.estimatedHeadingSize ?? t?.estimatedHeadingHeight) || (e?.loaderSize ?? e?.loaderHeight) !== (t?.loaderSize ?? t?.loaderHeight) || e.dropIndicatorThickness !== t.dropIndicatorThickness || e.gap !== t.gap || e.padding !== t.padding;
	}
	update(e) {
		let t = this.virtualizer.collection;
		this.invalidateEverything = this.shouldInvalidateEverything(e), this.invalidateEverything && (this.requestedRect = this.virtualizer.visibleRect.copy(), this.layoutNodes.clear());
		let n = e.layoutOptions;
		if (this.rowSize = n?.rowSize ?? n?.rowHeight ?? this.rowSize, this.orientation = n?.orientation ?? this.orientation, this.estimatedRowSize = n?.estimatedRowSize ?? n?.estimatedRowHeight ?? this.estimatedRowSize, this.headingSize = n?.headingSize ?? n?.headingHeight ?? this.headingSize, this.estimatedHeadingSize = n?.estimatedHeadingSize ?? n?.estimatedHeadingHeight ?? this.estimatedHeadingSize, this.loaderSize = n?.loaderSize ?? n?.loaderHeight ?? this.loaderSize, this.dropIndicatorThickness = n?.dropIndicatorThickness ?? this.dropIndicatorThickness, this.gap = n?.gap ?? this.gap, this.padding = n?.padding ?? this.padding, this.rootNodes = this.buildCollection(), this.lastCollection && t !== this.lastCollection) for (let e of this.lastCollection.getKeys()) t.getItem(e) || this.layoutNodes.get(e) && this.layoutNodes.delete(e);
		this.lastCollection = t, this.invalidateEverything = !1, this.validRect = this.requestedRect.copy();
	}
	buildCollection(e = this.padding) {
		let t = this.virtualizer.collection, n = this.orientation === `horizontal` ? `x` : `y`, r = this.orientation === `horizontal` ? `maxX` : `maxY`, i = Yr(t, (e) => e.type !== `content`), a = i.filter((e) => e.type === `loader`), o = [], s = t?.size === 0;
		s && (e = 0);
		for (let t of i) {
			let s = (this.rowSize ?? this.estimatedRowSize ?? X) + this.gap;
			if (t.type === `item` && e + s < this.requestedRect[n] && !this.isValid(t, e)) {
				e += s;
				continue;
			}
			let c = this.orientation === `horizontal` ? this.buildChild(t, e, this.padding, null) : this.buildChild(t, this.padding, e, null);
			if (e = c.layoutInfo.rect[r] + this.gap, o.push(c), t.type === `loader`) {
				let e = a.indexOf(t);
				a.splice(e, 1);
			}
			if ((t.type === `item` || t.type === `loader`) && e > this.requestedRect[r]) {
				let n = i.indexOf(t);
				for (let t of a) {
					let a = i.indexOf(t);
					e += (a - n - 1) * s;
					let c = this.orientation === `horizontal` ? this.buildChild(t, e, this.padding, null) : this.buildChild(t, this.padding, e, null);
					o.push(c), e = c.layoutInfo.rect[r], n = a;
				}
				e += (i.length - n - 1) * s;
				break;
			}
		}
		return e = Math.max(e - this.gap, 0), e += s ? 0 : this.padding, this.contentSize = this.orientation === `horizontal` ? new Y(e, this.virtualizer.size.height) : new Y(this.virtualizer.size.width, e), o;
	}
	isValid(e, t) {
		let n = this.layoutNodes.get(e.key), r = this.orientation === `horizontal` ? `x` : `y`;
		return !this.invalidateEverything && !!n && n.node === e && t === n.layoutInfo.rect[r] && n.layoutInfo.rect.intersects(this.validRect) && n.validRect.containsRect(n.layoutInfo.rect.intersection(this.requestedRect));
	}
	buildChild(e, t, n, r) {
		if (this.isValid(e, this.orientation === `horizontal` ? t : n)) return this.layoutNodes.get(e.key);
		let i = this.buildNode(e, t, n);
		return i.layoutInfo.parentKey = r ?? null, i.layoutInfo.allowOverflow = !0, this.layoutNodes.set(e.key, i), i;
	}
	buildNode(e, t, n) {
		switch (e.type) {
			case `section`: return this.buildSection(e, t, n);
			case `item`: return this.buildItem(e, t, n);
			case `header`: return this.buildSectionHeader(e, t, n);
			case `loader`: return this.buildLoader(e, t, n);
			case `separator`: return this.buildItem(e, t, n);
			case `submenutrigger`: return this.buildSection(e, t, n);
			default: throw Error(`Unsupported node type: ` + e.type);
		}
	}
	buildLoader(e, t, n) {
		let r = new J(t, n, this.padding, 0), i = new qr(e.type, e.key, r);
		return this.orientation === `horizontal` ? (r.height = this.virtualizer.contentSize.height - this.padding - n, r.width = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? X : 0) : (r.width = this.virtualizer.contentSize.width - this.padding - t, r.height = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? X : 0), {
			layoutInfo: i,
			validRect: r.intersection(this.requestedRect)
		};
	}
	buildSection(e, t, n) {
		let r = this.virtualizer.collection, i = this.virtualizer.size.width - this.padding - t, a = this.virtualizer.size.height - this.padding - n, o = this.orientation === `horizontal` ? new J(t, n, 0, a) : new J(t, n, i, 0), s = new qr(e.type, e.key, o), c = this.orientation === `horizontal` ? t : n, l = this.orientation === `horizontal` ? `x` : `y`, u = this.orientation === `horizontal` ? `maxX` : `maxY`, d = this.orientation === `horizontal` ? `width` : `height`, f = 0, p = [];
		for (let i of V(e, r)) {
			if (i.type === `content`) continue;
			let a = (this.rowSize ?? this.estimatedRowSize ?? X) + this.gap;
			if (c + a < this.requestedRect[l] && !this.isValid(e, c)) {
				c += a, f++;
				continue;
			}
			let o = this.orientation === `horizontal` ? this.buildChild(i, c, n, s.key) : this.buildChild(i, t, c, s.key);
			if (c = o.layoutInfo.rect[u] + this.gap, p.push(o), c > this.requestedRect[u]) {
				c += ([...V(e, r)].length - (p.length + f)) * a;
				break;
			}
		}
		return c -= this.gap, o[d] = c - (this.orientation === `horizontal` ? t : n), {
			layoutInfo: s,
			children: p,
			validRect: s.rect.intersection(this.requestedRect),
			node: e
		};
	}
	buildSectionHeader(e, t, n) {
		let r = this.orientation === `horizontal` ? `height` : `width`, i = this.orientation === `horizontal` ? `width` : `height`, a = this.virtualizer.size[r] - this.padding - (this.orientation === `horizontal` ? n : t), o = this.headingSize, s = !1;
		if (o == null) {
			let t = this.layoutNodes.get(e.key), n = t?.layoutInfo;
			if (n) {
				let c = this.virtualizer.collection.getItem(e.key), l = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
				o = t.layoutInfo.rect[i], s = a !== n.rect[r] || c !== l || n.estimatedSize;
			} else o = e.rendered ? this.estimatedHeadingSize : 0, s = !0;
		}
		o ??= X;
		let c = this.orientation === `horizontal` ? new J(t, n, o, a - n) : new J(t, n, a - t, o), l = new qr(`header`, e.key, c);
		return l.estimatedSize = s, {
			layoutInfo: l,
			children: [],
			validRect: l.rect.intersection(this.requestedRect),
			node: e
		};
	}
	buildItem(e, t, n) {
		let r = this.orientation === `horizontal` ? `height` : `width`, i = this.orientation === `horizontal` ? `width` : `height`, a = this.virtualizer.size[r] - this.padding - (this.orientation === `horizontal` ? n : t), o = this.rowSize, s = !1;
		if (o == null) {
			let t = this.layoutNodes.get(e.key);
			t ? (o = t.layoutInfo.rect[i], s = a !== t.layoutInfo.rect[r] || e !== t.node || t.layoutInfo.estimatedSize) : (o = this.estimatedRowSize, s = !0);
		}
		o ??= X;
		let c = this.orientation === `horizontal` ? new J(t, n, o, a) : new J(t, n, a, o), l = new qr(e.type, e.key, c);
		return l.estimatedSize = s, {
			layoutInfo: l,
			children: [],
			validRect: l.rect.intersection(this.requestedRect),
			node: e
		};
	}
	updateItemSize(e, t) {
		let n = this.layoutNodes.get(e);
		if (!n) return !1;
		let r = this.virtualizer.collection, i = n.layoutInfo, a = this.orientation === `horizontal` ? `x` : `y`, o = this.orientation === `horizontal` ? `width` : `height`;
		if (i.estimatedSize = !1, i.rect[o] !== t[o]) {
			let s = i.copy();
			s.rect[o] = t[o], n.layoutInfo = s, this.validRect[o] = Math.min(this.validRect[o], i.rect[a] - this.validRect[a]), n.node?.type === `item` && (this.requestedRect[o] += s.rect[o] - i.rect[o]), this.updateLayoutNode(e, i, s);
			let c = i.parentKey == null ? null : r.getItem(i.parentKey);
			for (; c;) this.updateLayoutNode(c.key, i, s), c = c.parentKey == null ? null : r.getItem(c.parentKey);
			return !0;
		}
		return !1;
	}
	updateLayoutNode(e, t, n) {
		let r = this.layoutNodes.get(e);
		r && (r.validRect = r.validRect.intersection(this.validRect), r.layoutInfo === t && (r.layoutInfo = n));
	}
	getContentSize() {
		return this.contentSize;
	}
	getDropTargetFromPoint(e, t, n) {
		e += this.virtualizer.visibleRect.x, t += this.virtualizer.visibleRect.y;
		let r = new J(e, Math.max(0, t - this.gap), 1, Math.max(1, this.gap * 2)), i = this.getVisibleLayoutInfos(r), a = null, o = 1 / 0;
		for (let e of i) {
			if (!e.rect.intersects(r)) continue;
			let n = Math.abs(e.rect.y - t), i = Math.abs(e.rect.maxY - t), s = Math.min(n, i);
			s < o && (o = s, a = e.key);
		}
		if (a == null || this.virtualizer.collection.size === 0) return { type: `root` };
		let s = this.getLayoutInfo(a);
		if (!s) return null;
		let c = s.rect, l = {
			type: `item`,
			key: s.key,
			dropPosition: `on`
		};
		return n(l) ? t <= c.y + 10 && n({
			...l,
			dropPosition: `before`
		}) ? l.dropPosition = `before` : t >= c.maxY - 10 && n({
			...l,
			dropPosition: `after`
		}) && (l.dropPosition = `after`) : t <= c.y + c.height / 2 && n({
			...l,
			dropPosition: `before`
		}) ? l.dropPosition = `before` : n({
			...l,
			dropPosition: `after`
		}) && (l.dropPosition = `after`), l;
	}
	getDropTargetLayoutInfo(e) {
		let t = this.getLayoutInfo(e.key), n;
		if (e.dropPosition === `before`) n = this.orientation === `horizontal` ? new J(Math.max(0, t.rect.x - this.dropIndicatorThickness / 2), t.rect.y, this.dropIndicatorThickness, t.rect.height) : new J(t.rect.x, Math.max(0, t.rect.y - this.dropIndicatorThickness / 2), t.rect.width, this.dropIndicatorThickness);
		else if (e.dropPosition === `after`) {
			let r = this.collection.getItem(e.key);
			if (r) {
				let n = r.level ?? 0, i = this.collection.getKeyAfter(e.key);
				for (; i != null;) {
					let e = this.collection.getItem(i);
					if (!e || e.level <= n) break;
					t = this.getLayoutInfo(i) || t, i = this.collection.getKeyAfter(i);
				}
			}
			n = this.orientation === `horizontal` ? new J(t.rect.maxX - this.dropIndicatorThickness / 2, t.rect.y, this.dropIndicatorThickness, t.rect.height) : new J(t.rect.x, t.rect.maxY - this.dropIndicatorThickness / 2, t.rect.width, this.dropIndicatorThickness);
		} else n = t.rect;
		return new qr(`dropIndicator`, e.key + `:` + e.dropPosition, n);
	}
};
function Yr(e, t) {
	let n = [];
	for (let r of e) t(r) && n.push(r);
	return n;
}
var Xr = null;
function Zr(e = !1) {
	if (Xr === null || e) {
		let e = document.createElement(`div`), t = e.style;
		t.width = `50px`, t.height = `50px`, t.overflow = `scroll`, t.direction = `rtl`;
		let n = document.createElement(`div`), r = n.style;
		return r.width = `100px`, r.height = `100px`, e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? Xr = `positive-descending` : (e.scrollLeft = 1, Xr = e.scrollLeft === 0 ? `negative` : `positive-ascending`), document.body.removeChild(e), Xr;
	}
	return Xr;
}
function Qr(e, t) {
	let { scrollLeft: n } = e;
	if (t === `rtl`) {
		let { scrollWidth: t, clientWidth: r } = e;
		switch (Zr()) {
			case `negative`:
				n = -n;
				break;
			case `positive-descending`: n = t - r - n;
		}
	}
	return n;
}
function $r(e, t) {
	let { contentSize: n, onVisibleRectChange: r, onSizeChange: i, innerStyle: a, onScrollStart: o, onScrollEnd: s, scrollDirection: c = `both`, onScroll: l, allowsWindowScrolling: u, ...d } = e, f = (0, G.useRef)({
		scrollPosition: new q(),
		size: new Y(),
		viewportOffset: new q(),
		viewportSize: new Y(),
		scrollEndTime: 0,
		scrollTimeout: null,
		isScrolling: !1,
		lastVisibleRect: new J()
	}).current, { direction: p } = A(), m = (0, G.useCallback)(() => {
		let e = u ? new J(f.viewportOffset.x + f.scrollPosition.x, f.viewportOffset.y + f.scrollPosition.y, Math.max(0, Math.min(f.size.width - f.viewportOffset.x, f.viewportSize.width)), Math.max(0, Math.min(f.size.height - f.viewportOffset.y, f.viewportSize.height))) : new J(f.scrollPosition.x, f.scrollPosition.y, f.size.width, f.size.height);
		(e.area > 0 || f.lastVisibleRect.area > 0) && (r(e), f.lastVisibleRect = e);
	}, [
		f,
		u,
		r
	]), [h, g] = (0, G.useState)(!1), _ = (0, G.useCallback)((e) => {
		let r = N(e);
		if (I(r, t.current)) {
			if (l && r === t.current && l(e), r !== t.current) {
				let e = t.current.getBoundingClientRect(), n = e.x < 0 ? -e.x : 0, r = e.y < 0 ? -e.y : 0;
				if (n === f.viewportOffset.x && r === f.viewportOffset.y) return;
				f.viewportOffset = new q(n, r);
			} else {
				let e = r.scrollTop, t = Qr(r, p);
				f.scrollPosition = new q(Math.max(0, Math.min(t, n.width - f.size.width)), Math.max(0, Math.min(e, n.height - f.size.height)));
			}
			(0, qn.flushSync)(() => {
				m(), f.isScrolling || (f.isScrolling = !0, g(!0), window.dispatchEvent(new Event(`tk.disconnect-observer`)), o && o());
				let e = Date.now();
				f.scrollEndTime <= e + 50 && (f.scrollEndTime = e + 300, f.scrollTimeout != null && clearTimeout(f.scrollTimeout), f.scrollTimeout = setTimeout(() => {
					f.isScrolling = !1, g(!1), f.scrollTimeout = null, window.dispatchEvent(new Event(`tk.connect-observer`)), s && s();
				}, 300));
			});
		}
	}, [
		l,
		t,
		p,
		f,
		n,
		m,
		o,
		s
	]);
	(0, G.useEffect)(() => w(se(t.current, L(t.current)), `scroll`, _, !0), [_, t]), (0, G.useEffect)(() => () => {
		f.scrollTimeout != null && clearTimeout(f.scrollTimeout), f.isScrolling && window.dispatchEvent(new Event(`tk.connect-observer`));
	}, []);
	let v = (0, G.useRef)(!1), y = (0, G.useCallback)((e) => {
		let n = t.current;
		if (!n || v.current) return;
		v.current = !0, Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientWidth`), Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientHeight`);
		let r = n.clientWidth, a = n.clientHeight, o = r, s = a, c = window.innerWidth, l = window.innerHeight, u = f.viewportSize.width !== c || f.viewportSize.height !== l;
		u && (f.viewportSize = new Y(c, l)), (f.size.width !== o || f.size.height !== s || u) && (f.size = new Y(o, s), e(() => {
			m(), i?.(f.size);
		}), (r !== n.clientWidth || a !== n.clientHeight) && (f.size = new Y(n.clientWidth, n.clientHeight), e(() => {
			m(), i?.(f.size);
		}))), v.current = !1;
	}, [
		t,
		f,
		m,
		i
	]), b = _e(y);
	ve(() => {
		f.viewportSize = new Y(window.innerWidth, window.innerHeight);
		let e = () => {
			b(qn.flushSync);
		};
		return window.addEventListener(`resize`, e), () => window.removeEventListener(`resize`, e);
	}, [f]);
	let x = (0, G.useRef)(null), [S, C] = (0, G.useState)({});
	ve(() => {
		if (!v.current && (x.current == null || !n.equals(x.current))) {
			if (typeof IS_REACT_ACT_ENVIRONMENT == `boolean` ? IS_REACT_ACT_ENVIRONMENT : typeof jest < `u`) {
				C({}), x.current = n;
				return;
			}
			queueMicrotask(() => b(qn.flushSync));
		}
		x.current = n;
	}), ve(() => {
		b((e) => e());
	}, [S]);
	let T = (0, G.useCallback)(() => {
		y(qn.flushSync);
	}, [y]);
	Dt({
		ref: t,
		box: `border-box`,
		onResize: T
	});
	let E = {
		padding: 0,
		...d.style
	};
	return c === `horizontal` ? (E.overflowX = `auto`, E.overflowY = `hidden`) : c === `vertical` || n.width === f.size.width ? (E.overflowY = `auto`, E.overflowX = `hidden`) : E.overflow = `auto`, a = {
		width: Number.isFinite(n.width) ? n.width : void 0,
		height: Number.isFinite(n.height) ? n.height : void 0,
		pointerEvents: h ? `none` : `auto`,
		position: `relative`,
		...a
	}, {
		isScrolling: h,
		scrollViewProps: {
			...d,
			style: E
		},
		contentProps: {
			role: `presentation`,
			style: a
		}
	};
}
function ei(e) {
	let { layoutInfo: t, virtualizer: n, ref: r, shouldObserveItemSize: i } = e, a = t?.key, o = (0, G.useCallback)(() => {
		if (a != null && r.current) {
			if (!oe(r.current)) return;
			let e = ti(r.current);
			n.updateItemSize(a, e);
		}
	}, [
		n,
		a,
		r
	]), s = _e(o);
	return ve(() => {
		t?.estimatedSize && s();
	}), (0, G.useEffect)(() => {
		if (!i) return;
		let e = r.current;
		if (!e || typeof ResizeObserver > `u`) return;
		let t = new ResizeObserver((e) => {
			e.length && s();
		});
		for (let n of e.children) t.observe(n);
		return () => {
			t.disconnect();
		};
	}, [
		i,
		r,
		a
	]), { updateSize: o };
}
function ti(e) {
	let t = e.style.height;
	e.style.height = ``;
	let n = new Y(e.scrollWidth, e.scrollHeight);
	return e.style.height = t, n;
}
function ni(e) {
	let { style: t, className: n, layoutInfo: r, virtualizer: i, parent: a, children: o, shouldObserveItemSize: s } = e, { direction: c } = A(), l = (0, G.useRef)(null);
	return ei({
		layoutInfo: r,
		virtualizer: i,
		ref: l,
		shouldObserveItemSize: s
	}), G.createElement(`div`, {
		role: `presentation`,
		ref: l,
		className: n,
		style: {
			...ii(r, c, a),
			...t
		}
	}, o);
}
var ri = new WeakMap();
function ii(e, t, n) {
	let r = t === `rtl` ? `right` : `left`, i = ri.get(e);
	if (i && i[r] != null) {
		if (!n) return i;
		let t = e.rect.y - n.rect.y, a = e.rect.x - n.rect.x;
		if (i.top === t && i[r] === a) return i;
	}
	let a = {
		top: e.rect.y - (n && !(n.allowOverflow && e.isSticky) ? n.rect.y : 0),
		[r]: e.rect.x - (n && !(n.allowOverflow && e.isSticky) ? n.rect.x : 0),
		width: e.rect.width,
		height: e.rect.height
	};
	Object.entries(a).forEach(([e, t]) => {
		Number.isFinite(t) || (a[e] = void 0);
	});
	let o = {
		position: e.isSticky ? `sticky` : `absolute`,
		display: e.isSticky ? `inline-block` : void 0,
		overflow: e.allowOverflow ? `visible` : `hidden`,
		opacity: e.opacity,
		zIndex: e.zIndex,
		transform: e.transform ?? void 0,
		contain: `size layout style`,
		...a
	};
	return ri.set(e, o), o;
}
var ai = (0, G.createContext)(null), oi = (0, G.createContext)(null);
function si(e) {
	let { children: t, layout: n, layoutOptions: r, shouldObserveItemSize: i } = e, a = (0, G.useMemo)(() => typeof n == `function` ? new n() : n, [n]), o = (0, G.useMemo)(() => ({
		isVirtualized: !0,
		layoutDelegate: a,
		dropTargetDelegate: a.getDropTargetFromPoint ? a : void 0,
		CollectionRoot: ci,
		CollectionBranch: li
	}), [a]);
	return G.createElement(z.Provider, { value: o }, G.createElement(oi.Provider, { value: {
		layout: a,
		layoutOptions: r,
		shouldObserveItemSize: i
	} }, t));
}
function ci({ collection: e, persistedKeys: t, scrollRef: n, renderDropIndicator: r }) {
	let { layout: i, layoutOptions: a, shouldObserveItemSize: o } = (0, G.useContext)(oi), s = i.useLayoutOptions?.(), c = Gr({
		allowsWindowScrolling: !0,
		layout: i,
		collection: e,
		renderView: (e, t) => t?.render?.(t),
		onVisibleRectChange(e) {
			let t = n?.current;
			t && (t.scrollLeft = e.x, t.scrollTop = e.y);
		},
		persistedKeys: t,
		layoutOptions: (0, G.useMemo)(() => a && s ? {
			...a,
			...s
		} : a || s, [a, s])
	}), { contentProps: l } = $r({
		onVisibleRectChange: c.setVisibleRect,
		onSizeChange: c.setSize,
		contentSize: c.contentSize,
		onScrollStart: c.startScrolling,
		onScrollEnd: c.endScrolling,
		allowsWindowScrolling: !0
	}, n);
	return G.createElement(`div`, l, G.createElement(ai.Provider, { value: c }, ui(null, c.visibleViews, r, o)));
}
function li({ parent: e, renderDropIndicator: t }) {
	let n = (0, G.useContext)(ai).virtualizer.getVisibleView(e.key), { shouldObserveItemSize: r } = (0, G.useContext)(oi);
	return ui(n, Array.from(n.children), t, r);
}
function ui(e, t, n, r) {
	return t.map((t) => di(e, t, n, r));
}
function di(e, t, n, r) {
	let i = G.createElement(ni, {
		key: t.key,
		layoutInfo: t.layoutInfo,
		virtualizer: t.virtualizer,
		parent: e?.layoutInfo,
		shouldObserveItemSize: r
	}, t.rendered), { collection: a, layout: o } = t.virtualizer, s = t.content;
	return s?.type === `item` && n && o.getDropTargetLayoutInfo && (i = G.createElement(G.Fragment, { key: t.key }, fi(e, t, {
		type: `item`,
		key: t.content.key,
		dropPosition: `before`
	}, n), i, Ae(a, s, (r) => fi(e, t, r, n)))), i;
}
function fi(e, t, n, r) {
	let i = r(n);
	if (i) {
		let r = t.virtualizer.layout.getDropTargetLayoutInfo(n);
		i = G.createElement(ni, {
			layoutInfo: r,
			virtualizer: t.virtualizer,
			parent: e?.layoutInfo
		}, i);
	}
	return i;
}
var pi = {
	name: `sparkle`,
	size: 24,
	node: [[`path`, {
		d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
		key: `1s2grr`
	}]]
};
pi.node;
var mi = me(pi), Z = ct(), hi = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
}, gi = [], _i = W(`border-b border-border bg-sunken px-4 py-2.5 align-bottom text-label font-semibold text-muted uppercase`, `data-allows-sorting:cursor-default data-hovered:data-allows-sorting:text-fg`, ut), vi = W(`cursor-default transition-colors data-hovered:not-data-selected:bg-hover data-disabled:cursor-not-allowed data-disabled:opacity-50 [&:last-child>*]:border-b-0`, ut, ft), yi = W(`border-b border-border px-4 py-3 align-middle [overflow-wrap:anywhere]`, ut);
function bi({ columns: e, items: t, rowKey: n, rowTextValue: r, selectAllLabel: i, selectLabel: a, emptyState: o, isLoading: s, loadingLabel: c, error: l, onLoadMore: u, isLoadingMore: d = !1, loadingMoreLabel: f, className: p, tableClassName: m, ...h }) {
	let g = h.selectionMode === `multiple` && h.selectionBehavior !== `replace`, _ = (0, G.useMemo)(() => lt({
		emptyState: o,
		isLoading: s,
		loadingLabel: c,
		error: l
	}), [
		o,
		s,
		c,
		l
	]), v = !_ || _.kind === `empty`, y = v ? t : gi, b = e.find((e) => e.isRowHeader)?.id ?? e.find((e) => e.kind !== `actions`)?.id, x = (0, G.useMemo)(() => [
		e,
		g,
		a,
		b
	], [
		e,
		g,
		a,
		b
	]), S = (0, G.useCallback)(() => _ ? (0, Z.jsx)(ht, {
		kind: _.kind,
		children: _.content
	}) : null, [_]);
	return (0, Z.jsx)(`div`, {
		className: W(`relative max-w-full overflow-auto overscroll-contain rounded-lg border border-border bg-surface`, p),
		children: (0, Z.jsxs)(Qn, {
			...h,
			className: W(`w-full border-separate border-spacing-0 text-start text-body text-fg`, m),
			children: [(0, Z.jsxs)(ar, {
				className: `sticky top-0 z-(--sk-z-sticky)`,
				children: [g ? (0, Z.jsx)(ur, {
					className: W(_i, `w-px px-3`),
					children: (0, Z.jsx)(pt, { label: i })
				}) : null, e.map((e) => {
					let t = e.kind ?? `text`;
					return (0, Z.jsx)(ur, {
						id: e.id,
						textValue: e.header,
						isRowHeader: e.id === b,
						allowsSorting: e.allowsSorting ?? !1,
						className: W(_i, hi[t]),
						children: e.hideHeader ? (0, Z.jsx)(`span`, {
							className: `sr-only`,
							children: e.header
						}) : e.allowsSorting ? (({ sortDirection: n }) => (0, Z.jsx)(gt, {
							direction: n,
							align: t === `numeric` ? `end` : `start`,
							children: e.header
						})) : e.header
					}, e.id);
				})]
			}), (0, Z.jsxs)(mr, {
				renderEmptyState: S,
				dependencies: x,
				children: [(0, Z.jsx)(He, {
					items: y,
					dependencies: x,
					children: (t) => (0, Z.jsxs)(vr, {
						id: n(t),
						...r ? { textValue: r(t) } : {},
						className: vi,
						children: [g ? (0, Z.jsx)(xr, {
							className: W(yi, `w-px px-3`),
							children: (0, Z.jsx)(pt, { label: a })
						}) : null, e.map((e) => (0, Z.jsx)(xr, {
							className: W(yi, hi[e.kind ?? `text`], e.id === b && `font-medium`),
							children: e.cell(t)
						}, e.id))]
					})
				}), u && v ? (0, Z.jsx)(Or, {
					onLoadMore: u,
					isLoading: d,
					className: `[&>td]:border-t [&>td]:border-border`,
					children: (0, Z.jsxs)(`output`, {
						className: `flex items-center justify-center gap-2 py-3 text-caption text-muted`,
						children: [(0, Z.jsx)(st, {
							"aria-hidden": `true`,
							className: W(`size-4`, mt)
						}), (0, Z.jsx)(`span`, { children: f })]
					})
				}) : null]
			})]
		})
	});
}
var xi = {
	inline: {
		list: `flex flex-col`,
		group: `grid gap-0.5 py-2 @md:grid-cols-[minmax(8rem,1fr)_minmax(0,2fr)] @md:gap-4`
	},
	stacked: {
		list: `flex flex-col`,
		group: `flex flex-col gap-0.5 py-2`
	},
	columns: {
		list: `grid gap-x-6 gap-y-1 @md:grid-cols-2 @3xl:grid-cols-3`,
		group: `flex flex-col gap-0.5 py-2`
	}
};
function Si(e) {
	return e == null || e === ``;
}
function Ci({ items: e, layout: t = `inline`, emptyValue: n, divided: r = !1, className: i, ...a }) {
	return (0, Z.jsx)(`dl`, {
		...a,
		className: W(`@container min-w-0 text-body`, xi[t].list, r && t !== `columns` && `divide-y divide-border`, i),
		children: e.map((e, r) => (0, Z.jsxs)(`div`, {
			className: W(`min-w-0`, xi[t].group),
			children: [(0, Z.jsx)(`dt`, {
				className: `text-caption font-medium text-muted [overflow-wrap:anywhere]`,
				children: e.label
			}), (0, Z.jsxs)(`dd`, {
				className: `min-w-0 text-fg [overflow-wrap:anywhere]`,
				children: [Si(e.value) ? (0, Z.jsx)(`span`, {
					className: `text-muted`,
					children: n ?? `—`
				}) : e.value, e.hint ? (0, Z.jsx)(`span`, {
					className: `mt-0.5 block text-caption text-muted`,
					children: e.hint
				}) : null]
			})]
		}, e.id ?? r))
	});
}
var wi = W(`group/item flex min-w-0 cursor-default items-center gap-3 rounded-md px-3 py-2 transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, ut, ft);
function Q({ title: e, textValue: t, description: n, icon: r, meta: i, actions: a, truncate: o = !1, selectLabel: s, dragLabel: c, className: l, ...u }) {
	let d = t ?? (typeof e == `string` ? e : void 0);
	return (0, Z.jsx)(at, {
		...u,
		...d === void 0 ? {} : { textValue: d },
		className: W(wi, l),
		children: ({ selectionMode: t, selectionBehavior: l, allowsDragging: u }) => (0, Z.jsxs)(Z.Fragment, { children: [
			u ? (0, Z.jsx)(dt, { label: c }) : null,
			t !== `none` && l === `toggle` ? (0, Z.jsx)(pt, { label: s }) : null,
			r ? (0, Z.jsx)(`span`, {
				className: `flex size-6 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
				children: r
			}) : null,
			(0, Z.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col`,
				children: [(0, Z.jsx)(`span`, {
					className: W(`font-medium`, o ? `truncate` : `[overflow-wrap:anywhere]`),
					children: e
				}), n ? (0, Z.jsx)(`span`, {
					className: W(`text-caption text-muted`, o ? `truncate` : `[overflow-wrap:anywhere]`),
					children: n
				}) : null]
			}),
			i ? (0, Z.jsx)(`span`, {
				className: `flex shrink-0 items-center gap-2 text-caption text-muted`,
				children: i
			}) : null,
			a ? (0, Z.jsx)(`span`, {
				className: `flex shrink-0 items-center gap-1`,
				children: a
			}) : null
		] })
	});
}
function Ti({ children: e, emptyState: t, isLoading: n, loadingLabel: r, error: i, className: a, ...o }) {
	let s = G.Children.toArray(e).length === 0, c = lt({
		emptyState: s ? t : void 0,
		isLoading: n,
		loadingLabel: r,
		error: i
	});
	return c ? (0, Z.jsx)(ht, {
		kind: c.kind,
		className: a,
		children: c.content
	}) : (0, Z.jsx)(`ol`, {
		...o,
		className: W(`flex min-w-0 flex-col text-body text-fg`, a),
		children: e
	});
}
var Ei = {
	neutral: `border-border-strong bg-surface text-muted`,
	accent: `border-accent bg-accent-soft text-accent-text`,
	ok: `border-ok bg-ok-soft text-ok`,
	warn: `border-warn bg-warn-soft text-warn`,
	danger: `border-danger bg-danger-soft text-danger`,
	info: `border-info bg-info-soft text-info`
}, Di = {
	neutral: (0, Z.jsx)(bt, {
		"aria-hidden": `true`,
		className: `size-2 fill-current`
	}),
	accent: (0, Z.jsx)(mi, {
		"aria-hidden": `true`,
		className: `size-3.5`
	}),
	ok: (0, Z.jsx)(xt, {
		"aria-hidden": `true`,
		className: `size-4`
	}),
	warn: (0, Z.jsx)(wt, {
		"aria-hidden": `true`,
		className: `size-4`
	}),
	danger: (0, Z.jsx)(St, {
		"aria-hidden": `true`,
		className: `size-4`
	}),
	info: (0, Z.jsx)(Ct, {
		"aria-hidden": `true`,
		className: `size-4`
	})
};
function Oi({ title: e, dateTime: t, time: n, actor: r, tone: i = `neutral`, toneLabel: a, icon: o, actions: s, children: c, className: l, ...u }) {
	return (0, Z.jsxs)(`li`, {
		...u,
		className: W(`relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 pb-5 last:pb-0`, `before:absolute before:start-[calc(0.875rem-0.5px)] before:top-8 before:bottom-1 before:border-s before:border-border last:before:hidden`, l),
		children: [(0, Z.jsx)(`span`, {
			className: W(`relative grid size-7 place-items-center rounded-full border [&_svg]:shrink-0`, Ei[i]),
			children: o ?? Di[i]
		}), (0, Z.jsxs)(`div`, {
			className: `min-w-0 pt-0.5`,
			children: [
				(0, Z.jsxs)(`div`, {
					className: `flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1`,
					children: [(0, Z.jsxs)(`p`, {
						className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 font-medium [overflow-wrap:anywhere]`,
						children: [(0, Z.jsx)(`span`, {
							className: `min-w-0`,
							children: e
						}), a ? (0, Z.jsx)(b, {
							tone: i,
							children: a
						}) : null]
					}), n ? (0, Z.jsx)(`time`, {
						...t === void 0 ? {} : { dateTime: t },
						className: `shrink-0 text-caption text-muted tabular-nums`,
						children: n
					}) : null]
				}),
				r ? (0, Z.jsx)(`p`, {
					className: `text-caption text-muted [overflow-wrap:anywhere]`,
					children: r
				}) : null,
				c ? (0, Z.jsx)(`div`, {
					className: `mt-1.5 text-body text-muted [overflow-wrap:anywhere]`,
					children: c
				}) : null,
				s ? (0, Z.jsx)(`div`, {
					className: `mt-2 flex flex-wrap items-center gap-2`,
					children: s
				}) : null
			]
		})]
	});
}
var ki = W(`group/row cursor-default rounded-md transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, ut, ft);
function $({ title: e, textValue: t, icon: n, expandedIcon: r, meta: i, actions: a, children: o, truncate: s = !0, selectLabel: c, dragLabel: l, className: u, ...d }) {
	let f = t ?? (typeof e == `string` ? e : ``);
	return (0, Z.jsxs)(Re, {
		...d,
		textValue: f,
		className: W(ki, u),
		children: [(0, Z.jsx)(ze, { children: ({ hasChildItems: t, isExpanded: o, selectionMode: u, selectionBehavior: d, allowsDragging: f }) => (0, Z.jsxs)(`div`, {
			className: `flex min-h-control-sm min-w-0 items-center gap-1 py-0.5 ps-[calc(min(var(--tree-item-level,1)_-_1,8)*1.25rem)] pe-1`,
			children: [
				f ? (0, Z.jsx)(dt, { label: l }) : null,
				t ? (0, Z.jsx)(pe, {
					slot: `chevron`,
					className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted outline-hidden data-hovered:bg-hover data-hovered:text-fg`,
					children: (0, Z.jsx)(Tt, {
						"aria-hidden": `true`,
						className: W(`size-4 transition-transform duration-(--sk-duration-fast) motion-reduce:transition-none rtl:-scale-x-100`, o && `rotate-90`)
					})
				}) : (0, Z.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `size-6 shrink-0`
				}),
				u !== `none` && d === `toggle` ? (0, Z.jsx)(pt, { label: c }) : null,
				n ? (0, Z.jsx)(`span`, {
					className: `flex size-5 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
					children: o && r ? r : n
				}) : null,
				(0, Z.jsx)(`span`, {
					className: W(`min-w-0 flex-1`, s ? `truncate` : `[overflow-wrap:anywhere]`),
					children: e
				}),
				i ? (0, Z.jsx)(`span`, {
					className: `flex shrink-0 items-center gap-1.5 text-caption text-muted`,
					children: i
				}) : null,
				a ? (0, Z.jsx)(`span`, {
					className: `flex shrink-0 items-center gap-1`,
					children: a
				}) : null
			]
		}) }), o]
	});
}
function Ai({ estimatedRowHeight: e = 44, className: t, ...n }) {
	let r = (0, G.useMemo)(() => ({
		estimatedRowHeight: e,
		gap: 2,
		padding: 4
	}), [e]);
	return (0, Z.jsx)(si, {
		layout: Jr,
		layoutOptions: r,
		children: (0, Z.jsx)(vt, {
			...n,
			virtual: !0,
			...t === void 0 ? {} : { className: t }
		})
	});
}
var ji = e({ default: () => $i }), Mi = [
	{
		id: `rel-142`,
		version: `v1.4.2`,
		project: `Release notes site`,
		status: `shipped`,
		downloads: 1240
	},
	{
		id: `rel-150`,
		version: `v1.5.0`,
		project: `Command line tools for validating accessibility and design tokens`,
		status: `planned`,
		downloads: 86
	},
	{
		id: `rel-143`,
		version: `v1.4.3`,
		project: `Docs`,
		status: `delayed`,
		downloads: 4310
	},
	{
		id: `rel-141`,
		version: `v1.4.1`,
		project: `Design tokens`,
		status: `shipped`,
		downloads: 512
	},
	{
		id: `rel-160`,
		version: `v1.6.0`,
		project: `Component gallery`,
		status: `planned`,
		downloads: 2075
	}
], Ni = new Intl.NumberFormat(`en-GB`), Pi = {
	shipped: {
		tone: `ok`,
		label: `Shipped`
	},
	planned: {
		tone: `warn`,
		label: `Planned`
	},
	delayed: {
		tone: `danger`,
		label: `Delayed`
	}
};
function Fi({ status: e }) {
	let { tone: t, label: n } = Pi[e];
	return (0, Z.jsx)(b, {
		tone: t,
		children: n
	});
}
var Ii = [
	{
		id: 1,
		name: `Ada Lovelace`,
		role: `Owner`,
		seats: 12
	},
	{
		id: 2,
		name: `Grace Hopper`,
		role: `Editor`,
		seats: 4
	},
	{
		id: 3,
		name: `Alan Turing`,
		role: `Viewer`,
		seats: 1
	}
], Li = [
	{
		id: `name`,
		header: `Name`,
		isRowHeader: !0,
		allowsSorting: !0,
		cell: (e) => e.name
	},
	{
		id: `role`,
		header: `Role`,
		allowsSorting: !0,
		cell: (e) => e.role
	},
	{
		id: `seats`,
		header: `Seats`,
		kind: `numeric`,
		allowsSorting: !0,
		cell: (e) => e.seats
	},
	{
		id: `actions`,
		header: `Actions`,
		kind: `actions`,
		hideHeader: !0,
		cell: (e) => (0, Z.jsx)(v, {
			variant: `outline`,
			size: `sm`,
			"aria-label": `Edit ${e.name}`,
			children: `Edit`
		})
	}
];
function Ri(e, t, n) {
	return e.toSorted((e, r) => {
		let i = n(e, t.column), a = n(r, t.column), o = typeof i == `number` && typeof a == `number` ? i - a : String(i).localeCompare(String(a));
		return t.direction === `descending` ? -o : o;
	});
}
function zi() {
	let [e, t] = (0, G.useState)({
		column: `name`,
		direction: `ascending`
	}), n = (0, G.useMemo)(() => Ri(Ii, e, (e, t) => e[t]), [e]);
	return (0, Z.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [
			(0, Z.jsx)(_t, {
				caption: `Team members`,
				columns: Li,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Z.jsx)(_t, {
				caption: `Team members, stacked on narrow screens`,
				layout: `stack`,
				columns: Li,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Z.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-3`,
				children: [
					(0, Z.jsx)(_t, {
						caption: `Empty`,
						columns: Li.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						emptyState: `Nobody has joined yet.`
					}),
					(0, Z.jsx)(_t, {
						caption: `Loading`,
						columns: Li.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						isLoading: !0,
						loadingLabel: `Loading members`
					}),
					(0, Z.jsx)(_t, {
						caption: `Error`,
						columns: Li.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						error: `Could not load members. Try again.`
					})
				]
			})
		]
	});
}
var Bi = [
	{
		id: `version`,
		header: `Version`,
		isRowHeader: !0,
		allowsSorting: !0,
		cell: (e) => (0, Z.jsx)(`span`, {
			className: `font-mono`,
			children: e.version
		})
	},
	{
		id: `project`,
		header: `Project`,
		allowsSorting: !0,
		cell: (e) => e.project
	},
	{
		id: `status`,
		header: `Status`,
		cell: (e) => (0, Z.jsx)(Fi, { status: e.status })
	},
	{
		id: `downloads`,
		header: `Downloads`,
		kind: `numeric`,
		allowsSorting: !0,
		cell: (e) => Ni.format(e.downloads)
	},
	{
		id: `actions`,
		header: `Actions`,
		kind: `actions`,
		hideHeader: !0,
		cell: (e) => (0, Z.jsx)(v, {
			variant: `ghost`,
			size: `sm`,
			"aria-label": `Download ${e.version}`,
			children: `Download`
		})
	}
];
function Vi() {
	let [e, t] = (0, G.useState)({
		column: `number`,
		direction: `ascending`
	}), [n, r] = (0, G.useState)(Mi), [i, a] = (0, G.useState)(new Set([`inv-1044`])), o = (0, G.useMemo)(() => Ri(n, {
		column: String(e.column),
		direction: e.direction
	}, (e, t) => e[t]), [n, e]), s = i === `all` ? n.length : i.size, c = i === `all` ? new Set(n.map((e) => e.id)) : i;
	return (0, Z.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, Z.jsxs)(x, {
			"aria-label": `Actions for selected releases`,
			count: s,
			countLabel: (e) => e === 0 ? `No releases selected` : e === 1 ? `1 release selected` : `${e} releases selected`,
			onClear: () => a(new Set()),
			clearLabel: `Clear selection`,
			children: [(0, Z.jsx)(v, {
				variant: `outline`,
				size: `sm`,
				children: `Send reminder`
			}), (0, Z.jsx)(v, {
				variant: `danger`,
				size: `sm`,
				onPress: () => {
					r((e) => e.filter((e) => !c.has(e.id))), a(new Set());
				},
				children: `Delete`
			})]
		}), (0, Z.jsx)(bi, {
			"aria-label": `Releases`,
			className: `max-h-72`,
			tableClassName: `min-w-[640px]`,
			columns: Bi,
			items: o,
			rowKey: (e) => e.id,
			rowTextValue: (e) => `${e.version} ${e.project}`,
			selectionMode: `multiple`,
			selectedKeys: i,
			onSelectionChange: a,
			sortDescriptor: e,
			onSortChange: t,
			emptyState: (0, Z.jsxs)(Z.Fragment, { children: [(0, Z.jsx)(`p`, {
				className: `font-medium text-fg`,
				children: `No releases left`
			}), (0, Z.jsx)(v, {
				variant: `outline`,
				size: `sm`,
				className: `mt-2`,
				onPress: () => r(Mi),
				children: `Restore the examples`
			})] })
		})]
	});
}
function Hi() {
	let e = Bi.slice(0, 2);
	return (0, Z.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Z.jsx)(bi, {
				"aria-label": `Releases, empty`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				emptyState: `No releases match these filters.`
			}),
			(0, Z.jsx)(bi, {
				"aria-label": `Releases, loading`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				isLoading: !0,
				loadingLabel: `Loading releases`
			}),
			(0, Z.jsx)(bi, {
				"aria-label": `Releases, failed`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				error: `Could not load releases. Check the connection and try again.`
			})
		]
	});
}
var Ui = [
	{
		id: `atlas`,
		name: `Atlas`,
		description: `Documentation site and search`,
		status: {
			tone: `ok`,
			label: `Live`
		},
		updated: `2 min ago`
	},
	{
		id: `beacon`,
		name: `Beacon notifications service, with a deliberately long name to show wrapping`,
		description: `Email and push delivery for every product, retried with backoff`,
		status: {
			tone: `warn`,
			label: `Degraded`
		},
		updated: `1 h ago`
	},
	{
		id: `comet`,
		name: `Comet`,
		description: `Internal analytics`,
		status: {
			tone: `neutral`,
			label: `Paused`
		},
		updated: `Yesterday`
	}
];
function Wi() {
	let [e, t] = (0, G.useState)(new Set([`atlas`]));
	return (0, Z.jsx)(yt, {
		"aria-label": `Projects`,
		items: Ui,
		selectionMode: `multiple`,
		selectedKeys: e,
		onSelectionChange: t,
		className: `max-w-2xl`,
		children: (e) => (0, Z.jsx)(Q, {
			id: e.id,
			title: e.name,
			description: e.description,
			icon: (0, Z.jsx)(h, { "aria-hidden": `true` }),
			meta: (0, Z.jsxs)(Z.Fragment, { children: [(0, Z.jsx)(b, {
				tone: e.status.tone,
				children: e.status.label
			}), (0, Z.jsx)(`span`, {
				className: `hidden sm:inline`,
				children: e.updated
			})] }),
			actions: (0, Z.jsx)(y, {
				label: `Deploy ${e.name}`,
				size: `sm`,
				children: (0, Z.jsx)(_, {
					"aria-hidden": `true`,
					className: `size-4`
				})
			}),
			selectLabel: `Select`
		})
	});
}
function Gi() {
	let e = d({ initialItems: Ui.map(({ id: e, name: t }) => ({
		id: e,
		name: t
	})) }), { dragAndDropHooks: t } = u({
		getItems: (t) => [...t].map((t) => ({ "text/plain": e.getItem(t)?.name ?? `` })),
		onReorder: (t) => {
			t.target.dropPosition === `before` ? e.moveBefore(t.target.key, t.keys) : t.target.dropPosition === `after` && e.moveAfter(t.target.key, t.keys);
		},
		renderDropIndicator: (e) => (0, Z.jsx)(i, {
			target: e,
			className: `mx-2 h-0.5 rounded-full outline-hidden data-drop-target:bg-accent forced-colors:data-drop-target:bg-[Highlight]`
		})
	});
	return (0, Z.jsx)(yt, {
		"aria-label": `Release order`,
		items: e.items,
		dragAndDropHooks: t,
		className: `max-w-md`,
		children: (e) => (0, Z.jsx)(Q, {
			id: e.id,
			title: e.name,
			truncate: !0
		})
	});
}
function Ki() {
	return (0, Z.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Z.jsx)(yt, {
				"aria-label": `Projects, empty`,
				items: [],
				emptyState: `No projects yet.`,
				children: (e) => (0, Z.jsx)(Q, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Z.jsx)(yt, {
				"aria-label": `Projects, loading`,
				items: Ui,
				isLoading: !0,
				loadingLabel: `Loading projects`,
				children: (e) => (0, Z.jsx)(Q, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Z.jsx)(yt, {
				"aria-label": `Projects, failed`,
				items: Ui,
				error: `Could not load projects.`,
				children: (e) => (0, Z.jsx)(Q, {
					id: e.id,
					title: e.name
				})
			})
		]
	});
}
var qi = 1e4, Ji = Array.from({ length: qi }, (e, t) => ({
	id: t,
	name: `src/modules/module-${String(t).padStart(5, `0`)}.ts`,
	size: `${(t * 37 % 900 + 12) / 10} KB`
}));
function Yi() {
	return (0, Z.jsx)(Ai, {
		"aria-label": `Search results, ${qi.toLocaleString(`en-GB`)} files`,
		items: Ji,
		selectionMode: `single`,
		className: `h-72 max-w-xl`,
		children: (e) => (0, Z.jsx)(Q, {
			id: e.id,
			title: e.name,
			meta: e.size,
			icon: (0, Z.jsx)(f, { "aria-hidden": `true` }),
			truncate: !0
		})
	});
}
function Xi() {
	return (0, Z.jsxs)(`div`, {
		className: `grid gap-6 md:grid-cols-2`,
		children: [(0, Z.jsxs)(Et, {
			"aria-label": `Repository files`,
			selectionMode: `single`,
			defaultSelectedKeys: [`button`],
			defaultExpandedKeys: [`src`, `actions`],
			className: `max-h-80`,
			children: [
				(0, Z.jsxs)($, {
					id: `src`,
					title: `src`,
					icon: (0, Z.jsx)(m, { "aria-hidden": `true` }),
					expandedIcon: (0, Z.jsx)(g, { "aria-hidden": `true` }),
					children: [(0, Z.jsxs)($, {
						id: `actions`,
						title: `actions`,
						icon: (0, Z.jsx)(m, { "aria-hidden": `true` }),
						expandedIcon: (0, Z.jsx)(g, { "aria-hidden": `true` }),
						children: [(0, Z.jsx)($, {
							id: `button`,
							title: `Button.tsx`,
							icon: (0, Z.jsx)(f, { "aria-hidden": `true` }),
							meta: (0, Z.jsx)(b, {
								tone: `warn`,
								children: `Modified`
							})
						}), (0, Z.jsx)($, {
							id: `icon-button`,
							title: `IconButton.tsx`,
							icon: (0, Z.jsx)(f, { "aria-hidden": `true` })
						})]
					}), (0, Z.jsx)($, {
						id: `data`,
						title: `data`,
						icon: (0, Z.jsx)(m, { "aria-hidden": `true` }),
						expandedIcon: (0, Z.jsx)(g, { "aria-hidden": `true` }),
						children: (0, Z.jsx)($, {
							id: `table`,
							title: `Table.tsx`,
							icon: (0, Z.jsx)(f, { "aria-hidden": `true` }),
							meta: (0, Z.jsx)(b, {
								tone: `ok`,
								children: `Added`
							})
						})
					})]
				}),
				(0, Z.jsx)($, {
					id: `readme`,
					title: `README.md`,
					icon: (0, Z.jsx)(p, { "aria-hidden": `true` })
				}),
				(0, Z.jsx)($, {
					id: `long`,
					title: `a-file-with-a-very-long-name-that-is-cut-to-one-line.config.ts`,
					icon: (0, Z.jsx)(f, { "aria-hidden": `true` })
				})
			]
		}), (0, Z.jsxs)(Et, {
			"aria-label": `Site sections`,
			selectionMode: `multiple`,
			defaultExpandedKeys: [`guides`],
			children: [(0, Z.jsxs)($, {
				id: `guides`,
				title: `Guides`,
				selectLabel: `Select`,
				actions: (0, Z.jsx)(v, {
					variant: `ghost`,
					size: `sm`,
					"aria-label": `Edit Guides`,
					children: `Edit`
				}),
				children: [(0, Z.jsx)($, {
					id: `start`,
					title: `Getting started`,
					selectLabel: `Select`,
					actions: (0, Z.jsx)(v, {
						variant: `ghost`,
						size: `sm`,
						"aria-label": `Edit Getting started`,
						children: `Edit`
					})
				}), (0, Z.jsx)($, {
					id: `deploy`,
					title: `Deploying`,
					selectLabel: `Select`,
					meta: (0, Z.jsx)(b, {
						tone: `warn`,
						children: `Draft`
					})
				})]
			}), (0, Z.jsx)($, {
				id: `changelog`,
				title: `Changelog`,
				selectLabel: `Select`
			})]
		})]
	});
}
function Zi() {
	return (0, Z.jsxs)(`div`, {
		className: `grid gap-8 md:grid-cols-2`,
		children: [(0, Z.jsxs)(Ti, {
			"aria-label": `Deploy history`,
			className: `max-w-md`,
			children: [
				(0, Z.jsx)(Oi, {
					title: `Deployed to production`,
					tone: `ok`,
					toneLabel: `Succeeded`,
					time: `5 min ago`,
					dateTime: `2026-11-08T14:05:00Z`,
					actor: `Ada Lovelace`
				}),
				(0, Z.jsx)(Oi, {
					title: `Health check slow`,
					tone: `warn`,
					toneLabel: `Warning`,
					time: `12 min ago`,
					dateTime: `2026-11-08T13:58:00Z`,
					actor: `Monitor`,
					children: `Response time reached 1.8 s for two minutes.`
				}),
				(0, Z.jsx)(Oi, {
					title: `Build failed`,
					tone: `danger`,
					toneLabel: `Failed`,
					time: `1 h ago`,
					dateTime: `2026-11-08T13:04:00Z`,
					actor: `Grace Hopper`,
					actions: (0, Z.jsx)(v, {
						variant: `outline`,
						size: `sm`,
						children: `View log`
					}),
					children: `Type error in src/data/Table.tsx, line 42.`
				}),
				(0, Z.jsx)(Oi, {
					title: `Branch created`,
					tone: `info`,
					toneLabel: `Info`,
					time: `Yesterday`,
					dateTime: `2026-11-07`,
					actor: `Alan Turing`
				}),
				(0, Z.jsx)(Oi, {
					title: `Project started`,
					time: `1 November`,
					dateTime: `2026-11-01`
				})
			]
		}), (0, Z.jsx)(Ti, {
			"aria-label": `Empty history`,
			emptyState: `Nothing has happened here yet.`
		})]
	});
}
function Qi() {
	return (0, Z.jsxs)(`div`, {
		className: `grid gap-8 lg:grid-cols-2`,
		children: [(0, Z.jsx)(Ci, {
			"aria-label": `Account details`,
			divided: !0,
			emptyValue: `Not set`,
			items: [
				{
					label: `Name`,
					value: `Ada Lovelace`
				},
				{
					label: `Email`,
					value: `ada.lovelace@analytical-engine.example.com`
				},
				{
					label: `Phone`,
					value: null
				},
				{
					label: `Role`,
					value: (0, Z.jsx)(b, {
						tone: `accent`,
						children: `Maintainer`
					}),
					hint: `Since 1 December 2026`
				},
				{
					label: `Open issues`,
					value: 0
				}
			]
		}), (0, Z.jsx)(Ci, {
			"aria-label": `Server`,
			layout: `columns`,
			items: [
				{
					label: `Region`,
					value: `Frankfurt`
				},
				{
					label: `Uptime`,
					value: `41 days`
				},
				{
					label: `Version`,
					value: (0, Z.jsx)(`code`, { children: `2.4.1` })
				},
				{
					label: `Memory`,
					value: `3.1 of 8 GB`
				},
				{
					label: `Disk`,
					value: `62%`,
					hint: `Warns at 80%`
				},
				{
					label: `Last backup`,
					value: `Today, 03:00`
				}
			]
		})]
	});
}
var $i = {
	title: `Data`,
	description: `Tables, lists, trees and timelines for showing records. Each collection has the same loading, empty and error states, and every interactive one runs on React Aria for keyboard, selection and screen reader support. Built to WCAG 2.2 AA as a target.`,
	pl: {
		title: `Dane`,
		description: `Tabele, listy, drzewa i osie czasu do pokazywania rekordów. Każda kolekcja ma te same stany ładowania, braku danych i błędu, a każda interaktywna działa na React Aria, który zapewnia obsługę klawiatury, zaznaczanie i wsparcie czytników ekranu. Budowane z celem WCAG 2.2 AA.`
	},
	demos: [
		{
			name: `Table`,
			components: [`Table`],
			description: `A read-only table on native table markup with a caption, row headers and optional sorting. Pick it for reports and summaries; on a phone it either scrolls in its own box or stacks each row into a labelled card.`,
			usage: `<Table
  caption="Team members"
  columns={[
    { id: 'name', header: 'Name', isRowHeader: true, allowsSorting: true, cell: (m) => m.name },
    { id: 'seats', header: 'Seats', kind: 'numeric', cell: (m) => m.seats }
  ]}
  rows={members}
  rowKey={(m) => m.id}
  layout="stack"
  sort={sort}
  onSortChange={setSort}
  emptyState="Nobody has joined yet."
/>`,
			accessibility: `Native table semantics: the caption names it, sortable headers carry aria-sort and hold a real button, and row headers are read while moving down a column. The stacked layout keeps explicit table roles and shows each column name next to its value. A box that overflows becomes a focusable, named region so it scrolls from the keyboard. Loading is a polite status with aria-busy on the table; an error is an assertive alert.`,
			pl: {
				description: `Tabela tylko do odczytu na natywnym znaczniku tabeli, z podpisem, nagłówkami wierszy i opcjonalnym sortowaniem. Wybierz ją dla raportów i podsumowań; na telefonie albo przewija się we własnym polu, albo układa każdy wiersz w kartę z etykietami.`,
				accessibility: `Natywna semantyka tabeli: podpis ją nazywa, sortowalne nagłówki mają aria-sort i zawierają prawdziwy przycisk, a nagłówki wierszy są odczytywane podczas schodzenia w dół kolumny. Układ w stosie zachowuje jawne role tabeli i pokazuje nazwę każdej kolumny obok jej wartości. Pole, które się przepełnia, staje się nazwanym regionem z fokusem, więc przewija się z klawiatury. Ładowanie jest statusem typu polite z aria-busy na tabeli; błąd jest komunikatem typu assertive.`
			},
			render: () => (0, Z.jsx)(zi, {})
		},
		{
			name: `DataTable with bulk actions`,
			components: [`DataTable`, `BulkActionBar`],
			description: `An interactive grid for records people select, sort and open: a sticky header, numeric and action columns, and a selected row marked with a tint and a leading rule. BulkActionBar sits above it and acts on the selection.`,
			usage: `<BulkActionBar aria-label="Actions for selected releases" count={count}
  countLabel={(n) => \`\${n} selected\`} onClear={clear} clearLabel="Clear selection">
  <Button variant="danger" size="sm" onPress={remove}>Delete</Button>
</BulkActionBar>
<DataTable
  aria-label="Releases"
  className="max-h-72"
  columns={columns}
  items={releases}
  rowKey={(i) => i.id}
  selectionMode="multiple"
  selectedKeys={selected}
  onSelectionChange={setSelected}
  sortDescriptor={sort}
  onSortChange={setSort}
/>`,
			accessibility: `Tab enters the grid once; arrow keys move between cells, Space toggles a row, Enter opens it when onRowAction is set, and typing jumps to a row. Column headers sort with Enter and React Aria announces the new order. Row checkboxes are named after the row header. The bulk bar is a toolbar with one tab stop and arrow keys between its actions; its buttons disable while nothing is selected, and focus moves to the count when an action empties the selection.`,
			pl: {
				description: `Interaktywna siatka dla rekordów, które ludzie zaznaczają, sortują i otwierają: przyklejony nagłówek, kolumny liczbowe i akcji oraz zaznaczony wiersz oznaczony podbarwieniem i linią z przodu. BulkActionBar leży nad nią i działa na zaznaczeniu.`,
				accessibility: `Tab wchodzi do siatki raz; klawisze strzałek przechodzą między komórkami, Spacja przełącza wiersz, Enter go otwiera, gdy ustawiono onRowAction, a wpisywanie przeskakuje do wiersza. Nagłówki kolumn sortują klawiszem Enter, a React Aria ogłasza nową kolejność. Pola wyboru wierszy są nazwane nagłówkiem wiersza. Pasek akcji zbiorczych jest paskiem narzędzi z jednym przystankiem Tab i klawiszami strzałek między akcjami; jego przyciski są wyłączone, gdy nic nie jest zaznaczone, a fokus przechodzi na licznik, gdy akcja opróżnia zaznaczenie.`
			},
			render: () => (0, Z.jsx)(Vi, {})
		},
		{
			name: `DataTable states`,
			components: [`DataTable`],
			description: `The same three states every collection in this group shows in place of its rows: nothing to show, loading and a blocking error.`,
			usage: `<DataTable aria-label="Releases" columns={columns} items={[]} rowKey={(i) => i.id}
  isLoading={isLoading} loadingLabel="Loading releases"
  error={failed ? 'Could not load releases.' : undefined}
  emptyState="No releases match these filters." />`,
			accessibility: `Loading is a polite status with a spinner that stops under reduced motion. An error is an assertive alert with an icon and its own words, never colour alone. The empty state may hold a button, which stays reachable inside the grid.`,
			pl: {
				description: `Te same trzy stany, które pokazuje każda kolekcja z tej grupy zamiast wierszy: brak czegokolwiek do pokazania, ładowanie i błąd blokujący.`,
				accessibility: `Ładowanie jest statusem typu polite ze wskaźnikiem, który zatrzymuje się przy ograniczonym ruchu. Błąd jest komunikatem typu assertive z ikoną i własnymi słowami, nigdy samym kolorem. Pusty stan może zawierać przycisk, który pozostaje osiągalny wewnątrz siatki.`
			},
			render: () => (0, Z.jsx)(Hi, {})
		},
		{
			name: `SortHeader`,
			components: [`SortHeader`],
			description: `The label and direction arrow of a sortable column. DataTable and Table use it already; use it alone for a custom header, with onSort when it should be a button.`,
			usage: `<th aria-sort={direction ?? 'none'}>
  <SortHeader direction={direction} onSort={toggle}>Name</SortHeader>
</th>`,
			accessibility: `The arrow is hidden from screen readers; the surrounding column header says the direction through aria-sort. With onSort it is a button with a 24px target, a visible focus ring and the label as its name.`,
			pl: {
				description: `Etykieta i strzałka kierunku sortowalnej kolumny. DataTable i Table już go używają; użyj go osobno dla własnego nagłówka, z onSort, gdy ma być przyciskiem.`,
				accessibility: `Strzałka jest ukryta przed czytnikami ekranu; otaczający nagłówek kolumny podaje kierunek przez aria-sort. Z onSort jest przyciskiem o celu 24 px, widocznej obwódce fokusa i etykiecie jako nazwie.`
			},
			render: () => (0, Z.jsxs)(`div`, {
				className: `flex flex-wrap gap-6 text-label font-semibold text-muted uppercase`,
				children: [
					(0, Z.jsx)(gt, { children: `Unsorted` }),
					(0, Z.jsx)(gt, {
						direction: `ascending`,
						children: `Ascending`
					}),
					(0, Z.jsx)(gt, {
						direction: `descending`,
						children: `Descending`
					}),
					(0, Z.jsx)(gt, {
						onSort: () => void 0,
						children: `As a button`
					})
				]
			})
		},
		{
			name: `List`,
			components: [`List`, `ListItem`],
			description: `An interactive list of records with an icon, title, description, trailing meta and row actions. Pick it over a table when each record reads as one line of text rather than as columns.`,
			usage: `<List aria-label="Projects" items={projects} selectionMode="multiple">
  {(p) => (
    <ListItem id={p.id} title={p.name} description={p.description}
      meta={<Badge tone="ok">Live</Badge>}
      actions={<IconButton label={\`Deploy \${p.name}\`} size="sm"><Rocket aria-hidden="true" /></IconButton>} />
  )}
</List>`,
			accessibility: `One tab stop; Up and Down move between items, Home and End jump, typing finds an item, Space selects and Enter runs onAction. Right arrow reaches the buttons inside an item. Selected items have a checkbox named after the item, a tint and a leading rule, and the system highlight in forced colours. Titles wrap at large zoom unless truncate is set.`,
			pl: {
				description: `Interaktywna lista rekordów z ikoną, tytułem, opisem, metadanymi na końcu i akcjami wiersza. Wybierz ją zamiast tabeli, gdy każdy rekord czyta się jako jedna linia tekstu, a nie jako kolumny.`,
				accessibility: `Jeden przystanek w kolejności Tab; strzałka w górę i w dół przechodzi między pozycjami, Home i End skaczą, wpisywanie znajduje pozycję, Spacja zaznacza, a Enter uruchamia onAction. Strzałka w prawo dociera do przycisków wewnątrz pozycji. Zaznaczone pozycje mają pole wyboru nazwane pozycją, podbarwienie i linię z przodu, a w trybie wymuszonych kolorów systemowe wyróżnienie. Tytuły się zawijają przy dużym powiększeniu, chyba że ustawiono truncate.`
			},
			render: () => (0, Z.jsx)(Wi, {})
		},
		{
			name: `List reordering`,
			components: [`List`, `ListItem`],
			description: `Pass React Aria drag and drop hooks to let people reorder items by mouse, touch or keyboard.`,
			usage: `const { dragAndDropHooks } = useDragAndDrop({ getItems, onReorder, renderDropIndicator })
<List aria-label="Release order" items={list.items} dragAndDropHooks={dragAndDropHooks}>
  {(item) => <ListItem id={item.id} title={item.name} />}
</List>`,
			accessibility: `Each item gets a drag handle with a 24px target. From the keyboard, focus the handle and press Enter to pick the item up, move with the arrow keys and press Enter to drop; React Aria announces each step, and Escape cancels.`,
			pl: {
				description: `Przekaż hooki przeciągania i upuszczania z React Aria, aby pozwolić zmieniać kolejność pozycji myszą, dotykiem lub klawiaturą.`,
				accessibility: `Każda pozycja dostaje uchwyt przeciągania o celu 24 px. Z klawiatury ustaw fokus na uchwycie i naciśnij Enter, aby podnieść pozycję, przesuń klawiszami strzałek i naciśnij Enter, aby upuścić; React Aria ogłasza każdy krok, a Escape anuluje.`
			},
			render: () => (0, Z.jsx)(Gi, {})
		},
		{
			name: `List states`,
			components: [`List`],
			description: `Empty, loading and error states shown in place of the items, the same as in tables and trees.`,
			usage: `<List aria-label="Projects" items={items} isLoading={loading} loadingLabel="Loading projects"
  error={failed ? 'Could not load projects.' : undefined} emptyState="No projects yet.">
  {(p) => <ListItem id={p.id} title={p.name} />}
</List>`,
			accessibility: `Loading is a polite status, an error an assertive alert with an icon and words, and the empty state stays inside the named list.`,
			pl: {
				description: `Stany pustej listy, ładowania i błędu pokazane zamiast pozycji, takie same jak w tabelach i drzewach.`,
				accessibility: `Ładowanie jest statusem typu polite, błąd komunikatem typu assertive z ikoną i słowami, a pusty stan zostaje wewnątrz nazwanej listy.`
			},
			render: () => (0, Z.jsx)(Ki, {})
		},
		{
			name: `VirtualList`,
			components: [`VirtualList`],
			description: `A List that renders only what is on screen, for thousands of results such as a file search. Give it a height; items are measured, so wrapped text and the compact density still fit.`,
			usage: `<VirtualList aria-label="Files" items={files} className="h-72">
  {(file) => <ListItem id={file.id} title={file.name} meta={file.size} truncate />}
</VirtualList>`,
			accessibility: `Behaves like List: arrow keys, Home, End, Page Up and Page Down reach items that are not rendered yet, and the grid reports the full count with aria-rowcount and each item its position.`,
			pl: {
				description: `List, który renderuje tylko to, co jest na ekranie, dla tysięcy wyników, takich jak wyszukiwanie plików. Podaj wysokość; pozycje są mierzone, więc zawinięty tekst i zwarta gęstość nadal się mieszczą.`,
				accessibility: `Zachowuje się jak List: klawisze strzałek, Home, End, Page Up i Page Down docierają do pozycji, które nie są jeszcze wyrenderowane, a siatka zgłasza pełną liczbę przez aria-rowcount, a każda pozycja swoje miejsce.`
			},
			render: () => (0, Z.jsx)(Yi, {})
		},
		{
			name: `TreeView`,
			components: [`TreeView`, `TreeRow`],
			description: `A hierarchy such as files or nested sections, with a folder icon that opens, badges and row actions. Pick it when depth matters; use List for flat records.`,
			usage: `<TreeView aria-label="Files" selectionMode="single">
  <TreeRow id="src" title="src" icon={<Folder aria-hidden="true" />} expandedIcon={<FolderOpen aria-hidden="true" />}>
    <TreeRow id="index" title="index.ts" meta={<Badge tone="warn">Modified</Badge>} />
  </TreeRow>
</TreeView>`,
			accessibility: `A treegrid with aria-level and aria-expanded on every row. Up and Down move, Right opens a branch or moves into it, Left closes it or returns to the parent, typing jumps to a row, and Enter or Space selects. The chevron has a localised Expand or Collapse name from React Aria and points the other way in right-to-left text. Indentation stops growing after eight levels so deep trees fit a phone.`,
			pl: {
				description: `Hierarchia, taka jak pliki albo zagnieżdżone sekcje, z ikoną folderu, która się otwiera, plakietkami i akcjami wiersza. Wybierz ją, gdy ważna jest głębokość; dla płaskich rekordów użyj List.`,
				accessibility: `Siatka drzewa z aria-level i aria-expanded na każdym wierszu. Strzałka w górę i w dół przesuwa, w prawo otwiera gałąź albo wchodzi do niej, w lewo ją zamyka albo wraca do rodzica, wpisywanie przeskakuje do wiersza, a Enter lub Spacja zaznacza. Strzałka rozwijania ma zlokalizowaną nazwę Rozwiń albo Zwiń z React Aria i w tekście od prawej do lewej wskazuje w przeciwną stronę. Wcięcie przestaje rosnąć po ośmiu poziomach, więc głębokie drzewa mieszczą się na telefonie.`
			},
			render: () => (0, Z.jsx)(Xi, {})
		},
		{
			name: `Timeline`,
			components: [`Timeline`, `TimelineItem`],
			description: `An ordered history of events with who and when, such as the changes to a record or the steps of a deploy. Each tone has its own icon and a word, never colour alone.`,
			usage: `<Timeline aria-label="Deploy history">
  <TimelineItem title="Deployed" tone="ok" toneLabel="Succeeded"
    time="5 min ago" dateTime="2026-11-08T14:05:00Z" actor="Ada Lovelace" />
</Timeline>`,
			accessibility: `An ordered list named with aria-label, so screen readers say how many events there are. Times are time elements with a machine-readable dateTime. Icons are hidden; the tone is said by its word. The connecting line is a border, so it stays visible in forced colours.`,
			pl: {
				description: `Uporządkowana historia zdarzeń z informacją, kto i kiedy, na przykład zmiany rekordu albo kroki wdrożenia. Każdy ton ma własną ikonę i słowo, nigdy sam kolor.`,
				accessibility: `Lista uporządkowana nazwana przez aria-label, więc czytniki ekranu mówią, ile jest zdarzeń. Czasy są elementami time z czytelnym dla maszyn dateTime. Ikony są ukryte; ton jest wypowiedziany swoim słowem. Linia łącząca jest ramką, więc pozostaje widoczna w trybie wymuszonych kolorów.`
			},
			render: () => (0, Z.jsx)(Zi, {})
		},
		{
			name: `KeyValueList`,
			components: [`KeyValueList`],
			description: `Labelled facts about one thing, such as account or server details. The inline layout puts labels beside values when there is room and stacks them on a phone; columns fits more facts on wide screens.`,
			usage: `<KeyValueList emptyValue="Not set" items={[
  { label: 'Email', value: user.email },
  { label: 'Plan', value: 'Team', hint: 'Renews on 1 December' }
]} />`,
			accessibility: `A description list, so each value is read with its label. A missing value shows the emptyValue words rather than a blank. Long values such as email addresses wrap instead of overflowing, and the layout follows the width of its own box, so it reflows at 400% zoom.`,
			pl: {
				description: `Opisane fakty o jednej rzeczy, takie jak dane konta albo serwera. Układ inline stawia etykiety obok wartości, gdy jest miejsce, a na telefonie układa je w stos; columns mieści więcej faktów na szerokich ekranach.`,
				accessibility: `Lista opisów, więc każda wartość jest odczytywana razem z etykietą. Brakująca wartość pokazuje słowa z emptyValue zamiast pustego miejsca. Długie wartości, takie jak adresy e-mail, się zawijają zamiast się przepełniać, a układ podąża za szerokością własnego pola, więc układa się przy powiększeniu 400%.`
			},
			render: () => (0, Z.jsx)(Qi, {})
		}
	]
};
export { ji as t };
