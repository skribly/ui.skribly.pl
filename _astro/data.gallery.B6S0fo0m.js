import { n as e, r as t, t as n } from "./rolldown-runtime.XKyaHtl9.js";
import { n as r, t as i } from "./react-dom.B9zIfLd2.js";
import { c as a, d as o, f as s, l as c, u as l } from "./ListBox.DfVEZavp.js";
import { t as u } from "./useDragAndDrop.D4nWJlsR.js";
import { t as d } from "./useListData.NOa4VaOj.js";
import { $ as f, A as p, B as m, Et as h, F as g, I as _, Jt as v, Kt as y, L as b, Nt as x, Q as S, Qt as C, R as w, Tt as T, Vt as E, Xt as D, Yt as O, Zt as k, _t as A, a as ee, an as te, bn as j, bt as M, dn as N, ft as ne, gn as re, hn as P, ht as ie, in as F, mn as I, nn as L, on as R, sn as z, st as B, tt as ae, un as oe, vn as se, vt as ce, xn as le, yt as ue } from "./doc.DoLlUurT.js";
import { t as V } from "./Button.D4_9kLv-.js";
import { t as de } from "./IconButton.CO9JIdQj.js";
import { t as H } from "./Badge.CXZBI9XV.js";
import { t as U } from "./Segmented.BMZgKRB6.js";
import { t as fe } from "./BulkActionBar.BiblF1z_.js";
import { t as pe } from "./shim.DIVImME0.js";
import { a as me, o as he } from "./Checkbox.64MvRCxA.js";
import { _ as ge, a as W, b as _e, c as ve, d as ye, g as be, h as xe, i as Se, l as Ce, m as we, n as Te, o as Ee, r as De, s as Oe, t as ke, v as G } from "./useCollection.DWoaItNc.js";
import { n as Ae, r as je } from "./Autocomplete.D4ncqRMy.js";
import { n as Me, t as Ne } from "./SearchField.WrO_lwho.js";
import { c as Pe, n as Fe, r as Ie, s as Le } from "./FocusScope.bOWhljI-.js";
import { i as Re, n as ze, t as Be } from "./Tree.Cdzc8PUh.js";
import { a as Ve, d as He, i as Ue, l as We, n as Ge, o as Ke, r as qe, t as Je, u as Ye } from "./CollectionBuilder.Dfbyz3n6.js";
import { a as Xe, i as Ze, l as Qe, o as $e, t as et } from "./useLoadMoreSentinel.g4Y1QWZw.js";
import { t as tt } from "./useControlledState.DijOhE0s.js";
import { n as nt } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { r as rt } from "./useOverlayTriggerState.DCpCXuwM.js";
import { i as it, r as at } from "./useGridListItem.DafxZ7_N.js";
import { t as ot } from "./useHasTabbableChild.CbGT5Z8c.js";
import { t as st } from "./useUpdateEffect.CWRnOMkT.js";
import { a as ct, r as lt } from "./GridList.DseMvGUA.js";
import { t as ut } from "./useMove.DHGoL4qi.js";
import { n as dt } from "./VisuallyHidden.DNi0NmtP.js";
import { a as ft, i as pt, n as mt, o as ht, r as gt, s as _t, t as vt } from "./internal.CsNp8ZIU.js";
import { n as yt, t as bt } from "./Table.DjX3mDmA.js";
import { t as xt } from "./Pagination.DSNCgerY.js";
import { a as St, t as Ct } from "./MenuItem.CLiSEgSz.js";
import { t as wt } from "./MenuCheckItem.a-7u_lpB.js";
import { t as Tt } from "./Popover.CeQqiFbO.js";
import { n as Et, t as Dt } from "./List.DtRh5wRc.js";
import { t as Ot } from "./TreeView.GSgiFkVg.js";
for (var K = t(r(), 1), kt = class {
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
}, At = `row-header-column-` + Math.random().toString(36).slice(2), jt = `row-header-column-` + Math.random().toString(36).slice(2); At === jt;) jt = `row-header-column-` + Math.random().toString(36).slice(2);
function Mt(e, t) {
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
var Nt = class extends kt {
	constructor(e, t, n) {
		let r = new Set(), i = null, a = [];
		if (n?.showSelectionCheckboxes) {
			let e = {
				type: `column`,
				key: At,
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
				key: jt,
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
		let l = Mt(s, a);
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
		return ve(this.body.childNodes)?.key ?? null;
	}
	getLastKey() {
		return Oe(this.body.childNodes)?.key ?? null;
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
function Pt(e) {
	return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function Ft(e) {
	if (!e || typeof e == `number`) return 1;
	let t = e.match(/^(.+)(?=fr$)/);
	return t ? parseFloat(t[0]) : 1;
}
function It(e, t) {
	if (typeof e == `string`) {
		let n = e.match(/^(\d+)(?=%$)/);
		if (!n) throw Error(`Only percentages or numbers are supported for static column widths`);
		return t * (parseFloat(n[0]) / 100);
	}
	return e;
}
function Lt(e, t) {
	return e == null ? 2 ** 53 - 1 : It(e, t);
}
function Rt(e, t) {
	return e == null ? 0 : It(e, t);
}
function zt(e, t, n, r, i) {
	let a = e, o = Math.floor(e), s = e - o > 0;
	e = o;
	let c = !1, l = t.map((t, a) => {
		let o = n.get(t.key) == null ? t.width ?? t.defaultWidth ?? r?.(a) ?? `1fr` : n.get(t.key) ?? `1fr`, s = !1, l = 0, u = 0, d = 0;
		Pt(o) ? (l = It(o, e), s = !0) : (u = Ft(o), u <= 0 && (s = !0));
		let f = Rt(t.minWidth ?? i?.(a) ?? 0, e), p = Lt(t.maxWidth, e), m = Math.max(f, Math.min(l, p));
		return s ? d = m : l > m && (s = !0, d = m), s || (c = !0), {
			frozen: s,
			baseSize: l,
			hypotheticalMainSize: m,
			min: f,
			max: p,
			flex: u,
			targetMainSize: d,
			violation: 0
		};
	});
	for (; c;) {
		let t = 0, n = 0;
		l.forEach((e) => {
			e.frozen ? t += e.targetMainSize : (t += e.baseSize, n += e.flex);
		});
		let r = e - t;
		r > 0 && l.forEach((e) => {
			if (!e.frozen) {
				let t = e.flex / n;
				e.targetMainSize = e.baseSize + t * r;
			}
		});
		let i = 0;
		l.forEach((e) => {
			if (e.violation = 0, !e.frozen) {
				let { min: t, max: n, targetMainSize: r } = e;
				e.targetMainSize = Math.max(t, Math.min(r, n)), e.violation = e.targetMainSize - r, i += e.violation;
			}
		}), c = !1, l.forEach((e) => {
			i === 0 || Math.sign(i) === Math.sign(e.violation) ? e.frozen = !0 : e.frozen || (c = !0);
		});
	}
	let u = Bt(l);
	if (s && u.length > 0) {
		let e = a.toString().split(`.`)[1], t = u[u.length - 1].toString();
		u[u.length - 1] = Number(t + `.` + e);
	}
	return u;
}
function Bt(e) {
	let t = 0, n = 0, r = [];
	return e.forEach(function(e) {
		let i = e.targetMainSize, a = Math.round(i + t) - n;
		t += i, n += a, r.push(a);
	}), r;
}
var Vt = class {
	constructor(e) {
		this.columnWidths = new Map(), this.columnMinWidths = new Map(), this.columnMaxWidths = new Map(), this.getDefaultWidth = e?.getDefaultWidth ?? (() => `1fr`), this.getDefaultMinWidth = e?.getDefaultMinWidth ?? (() => 75);
	}
	splitColumnsIntoControlledAndUncontrolled(e) {
		return e.reduce((e, t) => (t.props.width == null ? e[1].set(t.key, t) : e[0].set(t.key, t), e), [new Map(), new Map()]);
	}
	recombineColumns(e, t, n, r) {
		return new Map(e.map((e) => n.has(e.key) ? [e.key, t.get(e.key)] : [e.key, r.get(e.key).props.width]));
	}
	getInitialUncontrolledWidths(e) {
		return new Map(Array.from(e).map(([e, t]) => [e, t.props.defaultWidth ?? this.getDefaultWidth?.(t) ?? `1fr`]));
	}
	getColumnWidth(e) {
		return this.columnWidths.get(e) ?? 0;
	}
	getColumnMinWidth(e) {
		return this.columnMinWidths.get(e) ?? 0;
	}
	getColumnMaxWidth(e) {
		return this.columnMaxWidths.get(e) ?? 0;
	}
	resizeColumnWidth(e, t, n, r) {
		let i = this.columnWidths, a = !0, o = new Map();
		return r = Math.max(this.getColumnMinWidth(n), Math.min(this.getColumnMaxWidth(n), Math.floor(r))), e.columns.forEach((e) => {
			e.key === n ? (o.set(e.key, r), a = !1) : a ? o.set(e.key, i.get(e.key) ?? 0) : o.set(e.key, e.props.width ?? t.get(e.key));
		}), o;
	}
	buildColumnWidths(e, t, n) {
		return this.columnWidths = new Map(), this.columnMinWidths = new Map(), this.columnMaxWidths = new Map(), zt(e, t.columns.map((e) => ({
			...e.props,
			key: e.key
		})), n, (e) => this.getDefaultWidth(t.columns[e]), (e) => this.getDefaultMinWidth(t.columns[e])).forEach((n, r) => {
			let i = t.columns[r].key, a = t.columns[r];
			this.columnWidths.set(i, n), this.columnMinWidths.set(i, Rt(a.props.minWidth ?? this.getDefaultMinWidth(a), e)), this.columnMaxWidths.set(i, Lt(a.props.maxWidth, e));
		}), this.columnWidths;
	}
};
function Ht(e, t) {
	let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: i = 0 } = e, [a, o] = (0, K.useState)(null), s = (0, K.useMemo)(() => new Vt({
		getDefaultWidth: n,
		getDefaultMinWidth: r
	}), [n, r]), [c, l] = (0, K.useMemo)(() => s.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [t.collection.columns, s]), [u, d] = (0, K.useState)(() => s.getInitialUncontrolledWidths(l)), [f, p] = (0, K.useState)(t.collection.columns);
	t.collection.columns !== f && ((t.collection.columns.length !== f.length || t.collection.columns.some((e, t) => e.key !== f[t].key)) && d(s.getInitialUncontrolledWidths(l)), p(t.collection.columns));
	let m = (0, K.useMemo)(() => s.recombineColumns(t.collection.columns, u, l, c), [
		t.collection.columns,
		u,
		l,
		c,
		s
	]), h = (0, K.useCallback)((e) => {
		o(e);
	}, [o]), g = (0, K.useCallback)((e, n) => {
		let r = s.resizeColumnWidth(t.collection, u, e, n), i = new Map(Array.from(l).map(([e]) => [e, r.get(e)]));
		return i.set(e, n), d(i), r;
	}, [
		l,
		d,
		s,
		t.collection,
		u
	]), _ = (0, K.useCallback)(() => {
		o(null);
	}, [o]), v = (0, K.useMemo)(() => s.buildColumnWidths(i, t.collection, m), [
		i,
		t.collection,
		m,
		s
	]);
	return (0, K.useMemo)(() => ({
		resizingColumn: a,
		updateResizedColumns: g,
		startResize: h,
		endResize: _,
		getColumnWidth: (e) => s.getColumnWidth(e),
		getColumnMinWidth: (e) => s.getColumnMinWidth(e),
		getColumnMaxWidth: (e) => s.getColumnMaxWidth(e),
		tableState: t,
		columnWidths: v
	}), [
		s,
		v,
		a,
		g,
		h,
		_,
		t
	]);
}
function Ut(e) {
	let { collection: t, focusMode: n } = e, r = e.UNSAFE_selectionState || De(e), i = (0, K.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), a = r.setFocusedKey;
	r.setFocusedKey = (e, r) => {
		if (n === `cell` && e != null) {
			let n = t.getItem(e);
			if (n?.type === `item`) {
				let i = W(n, t);
				e = r === `last` ? Oe(i)?.key ?? null : ve(i)?.key ?? null;
			}
		}
		a(e, r);
	};
	let o = (0, K.useMemo)(() => new Te(t, r), [t, r]), s = (0, K.useRef)(null);
	return (0, K.useEffect)(() => {
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
				let i = u.hasChildNodes ? [...W(u, t)] : [], a = u.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : u.key;
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
var Wt = {
	ascending: `descending`,
	descending: `ascending`
};
function Gt(e) {
	let [t, n] = (0, K.useState)(!1), { selectionMode: r = `none`, showSelectionCheckboxes: i, showDragButtons: a, treeColumn: o = null } = e, s = (0, K.useMemo)(() => ({
		showSelectionCheckboxes: i && r !== `none`,
		showDragButtons: a,
		selectionMode: r,
		columns: []
	}), [
		e.children,
		i,
		r,
		a
	]), c = ke(e, (0, K.useCallback)((e) => new Nt(e, null, s), [s]), s), { disabledKeys: l, selectionManager: u } = Ut({
		...e,
		collection: c,
		disabledBehavior: e.disabledBehavior || `selection`
	}), [d, f] = tt(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
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
				direction: n ?? (e.sortDescriptor?.column === t ? Wt[e.sortDescriptor.direction] : `ascending`)
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
function Kt(e, t) {
	let n = (0, K.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return {
		...e,
		collection: n,
		selectionManager: r
	};
}
var qt = class {
	constructor(e) {
		if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || `all`, this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw Error(`Either a layout or a ref must be specified.`);
		this.layoutDelegate = e.layoutDelegate || (e.layout ? new Jt(e.layout) : new $e(e.ref)), this.focusMode = e.focusMode ?? `row`;
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
		for (let e of W(n, this.collection)) {
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
			let e = W(t, this.collection);
			return (this.direction === `rtl` ? Oe(e)?.key : ve(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = W(n, this.collection), i = (this.direction === `rtl` ? Ee(r, t.index - 1) : Ee(r, t.index + 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === `row` ? t.parentKey ?? null : (this.direction === `rtl` ? this.getFirstKey(e) : this.getLastKey(e)) ?? null;
		}
		return null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = W(t, this.collection);
			return (this.direction === `rtl` ? ve(e)?.key : Oe(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = W(n, this.collection), i = (this.direction === `rtl` ? Ee(r, t.index + 1) : Ee(r, t.index - 1)) ?? null;
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
				return e ? ve(W(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findNextKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = ve(W(e, this.collection))?.key ?? null;
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
				let t = W(e, this.collection);
				return Oe(t)?.key ?? null;
			}
		}
		if (n = this.findPreviousKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			let t = W(e, this.collection);
			n = Oe(t)?.key ?? null;
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
				if (this.collator.compare(n, e) === 0) return this.isRow(t) && this.focusMode === `cell` ? ve(W(t, this.collection))?.key ?? null : t.key;
			}
			n = this.findNextKey(n, (e) => e.type === `item`), n == null && !a && (n = this.getFirstKey(), a = !0);
		}
		return null;
	}
}, Jt = class {
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
}, Yt = new WeakMap();
function Xt(e, t, n) {
	let { isVirtualized: r, disallowTypeAhead: i, keyboardDelegate: a, focusMode: o, scrollRef: s, getRowText: c, onRowAction: l, onCellAction: u, escapeKeyBehavior: d = `clearSelection`, shouldSelectOnPressUp: f, keyboardNavigationBehavior: p = `arrow` } = e, { selectionManager: m } = t;
	!e[`aria-label`] && !e[`aria-labelledby`] && console.warn(`An aria-label or aria-labelledby prop is required for accessibility.`);
	let h = Ze({
		usage: `search`,
		sensitivity: `base`
	}), { direction: g } = ce(), _ = t.selectionManager.disabledBehavior, y = (0, K.useMemo)(() => a || new qt({
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
	]), { collectionProps: b } = ye({
		ref: n,
		selectionManager: m,
		keyboardDelegate: y,
		isVirtualized: r,
		scrollRef: s,
		disallowTypeAhead: i,
		escapeKeyBehavior: d
	}), x = se(e.id);
	Yt.set(t, {
		keyboardDelegate: y,
		actions: {
			onRowAction: l,
			onCellAction: u
		},
		shouldSelectOnPressUp: f,
		keyboardNavigationBehavior: p
	});
	let S = at({
		selectionManager: m,
		hasItemActions: !!(l || u)
	}), w = B(e, { labelable: !0 }), T = (0, K.useCallback)((e) => {
		m.isFocused ? v(e.currentTarget, C(e)) || m.setFocused(!1) : v(e.currentTarget, C(e)) && m.setFocused(!0);
	}, [m]), E = (0, K.useMemo)(() => ({
		onBlur: b.onBlur,
		onFocus: T
	}), [T, b.onBlur]), D = ot(n, { isDisabled: t.collection.size !== 0 }), O = P(w, {
		role: `grid`,
		id: x,
		"aria-multiselectable": m.selectionMode === `multiple` ? `true` : void 0
	}, t.isKeyboardNavigationDisabled ? E : b, t.collection.size === 0 && { tabIndex: D ? -1 : 0 } || void 0, S);
	return r && (O[`aria-rowcount`] = t.collection.size, O[`aria-colcount`] = t.collection.columnCount), it({ getRowText: c }, t), { gridProps: O };
}
var Zt = new WeakMap();
function Qt(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function $t(e, t) {
	let n = Zt.get(e);
	if (!n) throw Error(`Unknown grid`);
	return `${n}-${Qt(t)}`;
}
function en(e, t, n) {
	let r = Zt.get(e);
	if (!r) throw Error(`Unknown grid`);
	return `${r}-${Qt(t)}-${Qt(n)}`;
}
function tn(e, t) {
	return [...e.collection.rowHeaderColumnKeys].map((n) => en(e, t, n)).join(` `);
}
var nn = {};
nn = {
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
var rn = {};
rn = {
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
var an = {};
an = {
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
var on = {};
on = {
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
var sn = {};
sn = {
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
var cn = {};
cn = {
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
var ln = {};
ln = {
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
var un = {};
un = {
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
var dn = {};
dn = {
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
var fn = {};
fn = {
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
var pn = {};
pn = {
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
var mn = {};
mn = {
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
var hn = {};
hn = {
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
var gn = {};
gn = {
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
var _n = {};
_n = {
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
var vn = {};
vn = {
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
var yn = {};
yn = {
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
var bn = {};
bn = {
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
var xn = {};
xn = {
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
var Sn = {};
Sn = {
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
var Cn = {};
Cn = {
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
var wn = {};
wn = {
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
var Tn = {};
Tn = {
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
var En = {};
En = {
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
var Dn = {};
Dn = {
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
var On = {};
On = {
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
var kn = {};
kn = {
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
var An = {};
An = {
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
var jn = {};
jn = {
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
var Mn = {};
Mn = {
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
var Nn = {};
Nn = {
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
var Pn = {};
Pn = {
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
var Fn = {};
Fn = {
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
var In = {};
In = {
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
var Ln = {};
Ln = {
	"ar-AE": nn,
	"bg-BG": rn,
	"cs-CZ": an,
	"da-DK": on,
	"de-DE": sn,
	"el-GR": cn,
	"en-US": ln,
	"es-ES": un,
	"et-EE": dn,
	"fi-FI": fn,
	"fr-FR": pn,
	"he-IL": mn,
	"hr-HR": hn,
	"hu-HU": gn,
	"it-IT": _n,
	"ja-JP": vn,
	"ko-KR": yn,
	"lt-LT": bn,
	"lv-LV": xn,
	"nb-NO": Sn,
	"nl-NL": Cn,
	"pl-PL": wn,
	"pt-BR": Tn,
	"pt-PT": En,
	"ro-RO": Dn,
	"ru-RU": On,
	"sk-SK": kn,
	"sl-SI": An,
	"sr-SP": jn,
	"sv-SE": Mn,
	"tr-TR": Nn,
	"uk-UA": Pn,
	"zh-CN": Fn,
	"zh-TW": In
};
var Rn = class extends qt {
	isCell(e) {
		return e.type === `cell` || e.type === `rowheader` || e.type === `column`;
	}
	getKeyBelow(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === `column`) {
			let e = ve(W(n, this.collection));
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
		for (let e of W(n, this.collection)) if (e.type === `column`) return e.key;
		return null;
	}
	findPreviousColumnKey(e) {
		let t = this.findPreviousKey(e.key, (e) => e.type === `column`);
		if (t != null) return t;
		let n = this.collection.headerRows[e.level], r = [...W(n, this.collection)];
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
			for (let r of W(o, this.collection)) {
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
function zn(e) {
	return e && e.__esModule ? e.default : e;
}
function Bn(e, t, n) {
	let { keyboardDelegate: r, isVirtualized: i, layoutDelegate: a, layout: o } = e, s = Ze({
		usage: `search`,
		sensitivity: `base`
	}), { direction: c } = ce(), l = t.selectionManager.disabledBehavior, u = (0, K.useMemo)(() => r || new Rn({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: l,
		ref: n,
		direction: c,
		collator: s,
		layoutDelegate: a,
		layout: o
	}), [
		r,
		t.collection,
		t.disabledKeys,
		l,
		n,
		c,
		s,
		a,
		o
	]), d = se(e.id);
	Zt.set(t, d);
	let { gridProps: f } = Xt({
		...e,
		id: d,
		keyboardDelegate: u
	}, t, n);
	i && (f[`aria-rowcount`] = t.collection.size + t.collection.headerRows.length), t.treeColumn != null && (f.role = `treegrid`);
	let { column: p, direction: h } = t.sortDescriptor || {}, g = nt(zn(Ln), `@react-aria/table`), _ = (0, K.useMemo)(() => {
		let e = t.collection.columns.find((e) => e.key === p)?.textValue ?? ``;
		return h && p ? g.format(`${h}Sort`, { columnName: e }) : void 0;
	}, [
		h,
		p,
		t.collection.columns
	]), v = we(_);
	return st(() => {
		_ && m(_, `assertive`, 500);
	}, [_]), { gridProps: P(f, v, { "aria-describedby": [v[`aria-describedby`], f[`aria-describedby`]].filter(Boolean).join(` `) }) };
}
function Vn(e, t, n) {
	let { node: r, isVirtualized: i, focusMode: a, allowsArrowNavigation: o, shouldSelectOnPressUp: s, onAction: c } = e, { direction: l } = ce(), { keyboardDelegate: u, actions: { onCellAction: d }, keyboardNavigationBehavior: f } = Yt.get(t), p = a ?? (f === `tab` ? `cell` : `child`), m = (0, K.useRef)(null), g = (0, K.useRef)(null), _ = () => {
		if (n.current) {
			let e = Ie(n.current);
			if (p === `child`) {
				let i = D(L(n.current));
				if (O(n.current) && n.current !== i) return;
				let a = L(n.current);
				if (!i || i === a.body || i === n.current) {
					let e = g.current;
					if (e && m.current === r.key && v(n.current, e)) {
						A(e);
						return;
					}
				}
				let o = t.selectionManager.childFocusStrategy === `last` ? Hn(e) : e.firstChild();
				if (o) {
					A(o);
					return;
				}
			}
			(m.current != null && r.key !== m.current || !O(n.current)) && A(n.current);
		}
	}, { itemProps: y, isPressed: b } = Ce({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		focus: _,
		shouldSelectOnPressUp: s,
		onAction: d ? () => d(r.key) : c,
		isDisabled: t.collection.size === 0
	}), x = P(y, {
		role: `gridcell`,
		onKeyDownCapture: f !== `tab` || o ? (e) => {
			let i = D(L(n.current));
			if (!v(e.currentTarget, C(e)) || t.isKeyboardNavigationDisabled || !n.current || !i) return;
			let a = Ie(n.current);
			switch (a.currentNode = i, e.key) {
				case `ArrowLeft`: {
					let t = l === `rtl` ? a.nextNode() : a.previousNode();
					if (p === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) A(t), xe(t, { containingElement: Qe(n.current) });
					else {
						if (u.getKeyLeftOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === `cell` && l === `rtl` ? (A(n.current), xe(n.current, { containingElement: Qe(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? a.firstChild() : Hn(a), t && (A(t), xe(t, { containingElement: Qe(n.current) })));
					}
					break;
				}
				case `ArrowRight`: {
					let t = l === `rtl` ? a.previousNode() : a.nextNode();
					if (p === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) A(t), xe(t, { containingElement: Qe(n.current) });
					else {
						if (u.getKeyRightOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === `cell` && l === `ltr` ? (A(n.current), xe(n.current, { containingElement: Qe(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? Hn(a) : a.firstChild(), t && (A(t), xe(t, { containingElement: Qe(n.current) })));
					}
					break;
				}
				case `ArrowUp`:
				case `ArrowDown`: !e.altKey && v(n.current, C(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
			}
		} : void 0,
		onKeyDown: f === `tab` ? (e) => {
			let r = D(L(n.current));
			if (v(e.currentTarget, C(e)) && !t.isKeyboardNavigationDisabled && n.current && r) {
				if (f === `tab` && C(e) !== n.current && e.key !== `Tab`) e.stopPropagation();
				else if (e.key === `Tab` && f === `tab`) {
					let t = Ie(n.current, { tabbable: !0 });
					t.currentNode = r, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
				}
			}
		} : void 0,
		"aria-colspan": r.colSpan,
		"aria-colindex": r.colIndex == null ? void 0 : r.colIndex + 1,
		colSpan: i ? void 0 : r.colSpan,
		onFocus: (e) => {
			if (m.current = r.key, C(e) !== n.current) {
				let i = C(e);
				n.current && v(n.current, i) && (g.current = i), h() || t.selectionManager.setFocusedKey(r.key);
			} else p === `child` && e.relatedTarget && v(n.current, e.relatedTarget) || requestAnimationFrame(() => {
				p === `child` && D(L(n.current)) === n.current && _();
			});
		},
		...p === `child` && f === `tab` ? { tabIndex: -1 } : {}
	});
	return i && (x[`aria-colindex`] = (r.colIndex ?? r.index) + 1), s && x.tabIndex != null && x.onPointerDown == null && (x.onPointerDown = (e) => {
		let t = e.currentTarget, n = t.getAttribute(`tabindex`);
		t.removeAttribute(`tabindex`), requestAnimationFrame(() => {
			n != null && t.setAttribute(`tabindex`, n);
		});
	}), {
		gridCellProps: x,
		isPressed: b
	};
}
function Hn(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
function Un(e) {
	return e && e.__esModule ? e.default : e;
}
function Wn(e, t, n) {
	let { node: r } = e, i = r.props.allowsSorting, { gridCellProps: a } = Vn({
		focusMode: `child`,
		...e
	}, t, n), o = r.props.isSelectionCell && t.selectionManager.selectionMode === `single`, { pressProps: s, isPressed: c } = ae({
		isDisabled: !i || o,
		onPress() {
			t.sort(r.key);
		},
		ref: n
	}), { focusableProps: l } = ne({}, n), u, d = t.sortDescriptor?.column === r.key, f = t.sortDescriptor?.direction;
	r.props.allowsSorting && !E() && (u = d ? f : `none`);
	let p = nt(Un(Ln), `@react-aria/table`), m;
	i && (m = `${p.format(`sortable`)}`, d && f && E() && (m = `${m}, ${p.format(f)}`));
	let h = we(m), g = t.collection.size === 0;
	return (0, K.useEffect)(() => {
		g && t.selectionManager.focusedKey === r.key && t.selectionManager.setFocusedKey(null);
	}, [
		g,
		t.selectionManager,
		r.key
	]), {
		columnHeaderProps: {
			...P(l, a, s, h, g ? { tabIndex: -1 } : null),
			role: `columnheader`,
			id: $t(t, r.key),
			"aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
			"aria-sort": u
		},
		isPressed: c
	};
}
function Gn(e, t, n) {
	let { node: r, isVirtualized: i, shouldSelectOnPressUp: a, onAction: o } = e, { actions: s, shouldSelectOnPressUp: c } = Yt.get(t), l = s.onRowAction ? () => s.onRowAction?.(r.key) : o, { itemProps: u, ...d } = Ce({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		shouldSelectOnPressUp: c || a,
		onAction: l || r?.props?.onAction ? le(r?.props?.onAction, l) : void 0,
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
function Kn(e) {
	return e && e.__esModule ? e.default : e;
}
var qn = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function Jn(e, t, n) {
	let { node: r, isVirtualized: i } = e, { rowProps: a, ...o } = Gn(e, t, n), { direction: s } = ce();
	i && t.treeColumn == null ? a[`aria-rowindex`] = r.index + 1 + t.collection.headerRows.length : delete a[`aria-rowindex`];
	let c = t.treeColumn != null && (t.expandedKeys === `all` || t.expandedKeys.has(r.key)), l = nt(Kn(Ln), `@react-aria/table`), u = ue({
		"aria-label": c ? l.format(`collapse`) : l.format(`expand`),
		"aria-labelledby": tn(t, r.key)
	}), d = {}, f = {};
	if (t.treeColumn != null) {
		let e = t.collection.getItem(r.key);
		if (e != null) {
			let n = Yn(t.collection, r), i = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || n?.type !== `cell`, a = t.collection.getItem(r.parentKey), c = a.type === `tablebody` || a.type === `body`, l = Yn(t.collection, a);
			for (; l && l.type !== `item` && l.prevKey != null;) l = t.collection.getItem(l.prevKey);
			d = {
				onKeyDown: (n) => {
					n.key === qn.expand[s] && t.selectionManager.focusedKey === e.key && i && t.expandedKeys !== `all` && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : n.key === qn.collapse[s] && t.selectionManager.focusedKey === e.key && (t.expandedKeys === `all` ? t.expandedKeys === `all` && (t.toggleKey(e.key), n.stopPropagation()) : i && t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : !t.expandedKeys.has(e.key) && e.parentKey != null && e.level > 0 && (t.selectionManager.setFocusedKey(e.parentKey), n.stopPropagation()));
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
	let p = x(r.props), m = o.hasAction ? p : {};
	return {
		rowProps: {
			...P(a, d, m),
			"aria-labelledby": tn(t, r.key)
		},
		expandButtonProps: f,
		...o
	};
}
function Yn(e, t) {
	return `lastChildKey` in t ? t.lastChildKey == null ? null : e.getItem(t.lastChildKey) : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
function Xn(e, t, n) {
	let { node: r, isVirtualized: i } = e, a = { role: `row` };
	return i && t.treeColumn == null && (a[`aria-rowindex`] = r.index + 1), { rowProps: a };
}
function Zn(e, t, n) {
	let { gridCellProps: r, isPressed: i } = Vn(e, t, n), a = e.node.column?.key;
	return a != null && t.collection.rowHeaderColumnKeys.has(a) && (r.role = `rowheader`, r.id = en(t, e.node.parentKey, a)), {
		gridCellProps: r,
		isPressed: i
	};
}
function Qn(e) {
	return e && e.__esModule ? e.default : e;
}
function $n(e, t) {
	let { key: n } = e, { checkboxProps: r } = ct(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${tn(t, n)}`
	} };
}
function er(e) {
	let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
	return { checkboxProps: {
		"aria-label": nt(Qn(Ln), `@react-aria/table`).format(r === `single` ? `select` : `selectAll`),
		isSelected: n,
		isDisabled: r !== `multiple` || e.collection.size === 0 || e.collection.rows.length === 1 && e.collection.rows[0].type === `loader`,
		isIndeterminate: !t && !n,
		onChange: () => e.selectionManager.toggleSelectAll()
	} };
}
function tr(e) {
	return e && e.__esModule ? e.default : e;
}
function nr(e, t, n) {
	let { column: r, triggerRef: i, isDisabled: a, onResizeStart: o, onResize: s, onResizeEnd: c, "aria-label": l } = e, u = nt(tr(Ln), `@react-aria/table`), d = se(), f = t.resizingColumn === r.key, p = (0, K.useRef)(f), m = (0, K.useRef)(null), h = (0, K.useRef)(!1), g = t.tableState.isKeyboardNavigationDisabled, [_, v] = (0, K.useState)(!1), { direction: y } = ce(), b = (0, K.useCallback)((e) => {
		p.current || (m.current = t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.startResize(e.key), t.tableState.setKeyboardNavigationDisabled(!0), o?.(m.current)), p.current = !0;
	}, [t, o]), x = (0, K.useCallback)((e, n) => {
		let r = t.updateResizedColumns(e.key, n);
		s?.(r), m.current = r;
	}, [t, s]), S = (0, K.useCallback)((e) => {
		p.current && (m.current ??= t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), c?.(m.current), p.current = !1, i?.current && !h.current && A(i.current)), m.current = null;
	}, [
		t,
		i,
		c
	]), w = () => {
		if (g) S(r);
		else return !1;
	}, { keyboardProps: E } = ie({ shortcuts: {
		Escape: () => w(),
		Enter: () => {
			g ? S(r) : b(r);
		},
		" ": () => w(),
		Tab: () => w()
	} }), O = (0, K.useRef)(0), { moveProps: k } = ut({
		onMoveStart(e) {
			O.current = t.getColumnWidth(r.key), e.pointerType === `mouse` && v(!0), b(r);
		},
		onMove(e) {
			let { deltaX: t, deltaY: n, pointerType: i } = e;
			y === `rtl` && (t *= -1), i === `keyboard` && (n !== 0 && t === 0 && (t = n * -1), t *= 10), t !== 0 && (O.current += t, x(r, O.current));
		},
		onMoveEnd(e) {
			let { pointerType: t } = e;
			O.current = 0, v(!1), (t === `mouse` || t === `touch` && h.current) && S(r);
		}
	}), ee = (0, K.useCallback)((e) => {
		g && k.onKeyDown?.(e);
	}, [g, k]), te = Math.floor(t.getColumnMinWidth(r.key)), j = Math.floor(t.getColumnMaxWidth(r.key));
	j === 1 / 0 && (j = 2 ** 53 - 1);
	let N = Math.floor(t.getColumnWidth(r.key)), ne = T();
	ne === `virtual` && typeof window < `u` && `ontouchstart` in window && (ne = `touch`);
	let re = i?.current == null && (ne === `keyboard` || ne === `virtual`) && !f ? u.format(`resizerDescription`) : void 0, F = we(re), I = {
		"aria-label": l,
		"aria-orientation": `horizontal`,
		"aria-labelledby": `${d} ${$t(t.tableState, r.key)}`,
		"aria-valuetext": u.format(`columnSize`, { value: N }),
		type: `range`,
		min: te,
		max: j,
		value: N,
		...F
	}, L = (0, K.useCallback)(() => {
		n.current && A(n.current);
	}, [n]), R = t.resizingColumn, z = (0, K.useRef)(null), B = M(b);
	(0, K.useEffect)(() => {
		if (z.current !== R && R != null && R === r.key) {
			h.current = D() === n.current, B(r);
			let e = setTimeout(() => L(), 0), t = setTimeout(L, 400);
			return () => {
				clearTimeout(e), clearTimeout(t);
			};
		}
		z.current = R;
	}, [
		R,
		r,
		L,
		n
	]);
	let oe = (e) => {
		let n = t.getColumnWidth(r.key), i = parseFloat(C(e).value);
		i = i > n ? n + 10 : n - 10, x(r, i);
	}, { pressProps: le } = ae({
		preventFocusOnPress: !0,
		onPressStart: (e) => {
			e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || e.pointerType === `keyboard` || (e.pointerType === `virtual` && t.resizingColumn != null ? S(r) : (L(), e.pointerType !== `virtual` && b(r)));
		},
		onPress: (e) => {
			(e.pointerType === `touch` && h.current || e.pointerType === `mouse`) && t.resizingColumn != null && S(r);
		}
	}), { visuallyHiddenProps: ue } = dt();
	return {
		resizerProps: P(E, {
			...k,
			onKeyDown: ee
		}, le, { style: { touchAction: `none` } }),
		inputProps: P(ue, {
			id: d,
			onBlur: () => {
				S(r);
			},
			onChange: oe,
			disabled: a
		}, I),
		isResizing: f,
		isMouseResizing: _
	};
}
function rr() {
	return { rowGroupProps: { role: `rowgroup` } };
}
function ir() {
	return rr();
}
var ar = t(i(), 1);
function or(e) {
	return e && e.__esModule ? e.default : e;
}
var sr = class extends Ke {
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
		return new Or(-2);
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
		if (this.headerRows = Mt(t, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw Error(`A table must have at least one Column with the isRowHeader prop set to true`);
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
		super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set(), this.head = new vr(-1), this.columnsDirty = !0, this.expandedKeys = new Set();
	}
}, cr = (0, K.createContext)(null), lr = (0, K.forwardRef)(function(e, t) {
	let n = I(t), r = (0, K.useRef)(null), i = (0, K.useRef)(null), [a, o] = (0, K.useState)(0);
	j(() => {
		let e = r.current;
		for (; e && e !== n.current && !be(e);) e = e.parentElement;
		i.current = e;
	}, [n]), rt({
		ref: i,
		box: `border-box`,
		onResize() {
			o(i.current?.clientWidth ?? 0);
		}
	}), j(() => {
		o(i.current?.clientWidth ?? 0);
	}, []);
	let s = (0, K.useMemo)(() => ({
		tableRef: r,
		scrollRef: i,
		tableWidth: a,
		useTableColumnResizeState: Ht,
		onResizeStart: e.onResizeStart,
		onResize: e.onResize,
		onResizeEnd: e.onResizeEnd
	}), [
		r,
		a,
		e.onResizeStart,
		e.onResize,
		e.onResizeEnd
	]);
	return K.createElement(N.div, {
		render: e.render,
		...B(e, { global: !0 }),
		ref: n,
		className: e.className || `react-aria-ResizableTableContainer`,
		style: e.style,
		onScroll: e.onScroll
	}, K.createElement(cr.Provider, { value: s }, e.children));
}), ur = (0, K.createContext)(null), dr = (0, K.createContext)(null), fr = (0, K.createContext)(null), pr = (0, K.forwardRef)(function(e, t) {
	[e, t] = R(e, t, ur);
	let n = De(e), { selectionBehavior: r, selectionMode: i, disallowEmptySelection: a } = n, o = !!e.dragAndDropHooks?.useDraggableCollectionState, s = (0, K.useMemo)(() => ({
		selectionBehavior: i === `none` ? null : r,
		selectionMode: i,
		disallowEmptySelection: a,
		allowsDragging: o
	}), [
		r,
		i,
		a,
		o
	]), c = K.createElement(_r.Provider, { value: s }, K.createElement(Ue, e));
	return K.createElement(Ge, {
		content: c,
		createCollection: () => new sr()
	}, (r) => K.createElement(gr, {
		props: e,
		forwardedRef: t,
		selectionState: n,
		collection: r
	}));
}), mr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.table, {
		...e,
		ref: t
	});
}), hr = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function gr({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
	[e, t] = R(e, t, je);
	let { shouldUseVirtualFocus: i, disallowTypeAhead: a, filter: c, ...u } = e, d = (0, K.useContext)(cr);
	t = I((0, K.useMemo)(() => re(t, d?.tableRef), [t, d?.tableRef]));
	let [p, m] = tt(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
	r = (0, K.useMemo)(() => r.withExpandedKeys(p), [r, p]);
	let h = Gt({
		...u,
		collection: r,
		children: void 0,
		UNSAFE_selectionState: n,
		expandedKeys: p,
		onExpandedChange: m
	}), g = Kt(h, c), { isVirtualized: _, layoutDelegate: v, dropTargetDelegate: y, CollectionRoot: b } = (0, K.useContext)(G), { dragAndDropHooks: x } = e, { gridProps: S } = Bn({
		...u,
		layoutDelegate: v,
		isVirtualized: _
	}, g, t), C = g.selectionManager, w = !!x?.useDraggableCollectionState, T = !!x?.useDroppableCollectionState;
	(0, K.useRef)(w), (0, K.useRef)(T), (0, K.useEffect)(() => {}, [w, T]);
	let E, D, O, k = !1, A = null, ee = (0, K.useRef)(null), { direction: j } = ce(), [M] = (0, K.useState)(() => new Re());
	if (w && x) {
		E = x.useDraggableCollectionState({
			collection: g.collection,
			selectionManager: C,
			preview: x.renderDragPreview ? ee : void 0
		}), x.useDraggableCollection({}, E, t);
		let e = x.DragPreview;
		A = x.renderDragPreview ? K.createElement(e, { ref: ee }, x.renderDragPreview) : null;
	}
	if (T && x) {
		D = x.useDroppableCollectionState({
			collection: g.collection,
			selectionManager: C
		});
		let e = new Xe({
			collection: g.collection,
			disabledKeys: C.disabledKeys,
			disabledBehavior: C.disabledBehavior,
			ref: t,
			layoutDelegate: v
		}), n = x.dropTargetDelegate || y || new x.ListDropTargetDelegate(r.rows, t);
		M.setup(n, h, j), O = x.useDroppableCollection({
			keyboardDelegate: e,
			dropTargetDelegate: M,
			onDropActivate: (e) => {
				if (e.target.type === `item`) {
					let t = e.target.key, n = h.collection.getItem(t), r = p.has(t);
					n && n.hasChildNodes && (!r || x?.isVirtualDragging?.()) && h.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = D?.target;
				if (t && t.type === `item` && t.dropPosition === `on`) {
					let n = h.collection.getItem(t.key);
					(e.key === hr.expand[j] && n?.hasChildNodes && !h.expandedKeys.has(t.key) || e.key === hr.collapse[j] && n?.hasChildNodes && h.expandedKeys.has(t.key)) && h.toggleKey(t.key);
				}
			}
		}, D, t), k = D.isDropTarget({ type: `root` });
	}
	let { focusProps: N, isFocused: ne, isFocusVisible: ie } = f(), F = z({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Table`,
		values: {
			isDropTarget: k,
			isFocused: ne,
			isFocusVisible: ie,
			state: g
		}
	}), L = !(!w || E?.isDisabled), ae = F.style, oe = null;
	d && (oe = d.useTableColumnResizeState({ tableWidth: d.tableWidth }, g), _ || (ae = {
		...ae,
		tableLayout: `fixed`,
		width: `min-content`
	}));
	let se = B(e, { global: !0 });
	return K.createElement(te, { values: [
		[dr, g],
		[fr, oe],
		[l, {
			dragAndDropHooks: x,
			dragState: E,
			dropState: D
		}],
		[s, { render: Rr }],
		[je, null],
		[Ae, null]
	] }, K.createElement(Fe, null, K.createElement(mr, {
		...P(se, F, S, N, O?.collectionProps),
		style: ae,
		ref: t,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-allows-dragging": L || void 0,
		"data-drop-target": k || void 0,
		"data-focused": ne || void 0,
		"data-focus-visible": ie || void 0
	}, K.createElement(Pe, null, K.createElement(b, {
		collection: g.collection,
		scrollRef: d?.scrollRef ?? t,
		persistedKeys: o(C, x, D)
	})))), A);
}
var _r = (0, K.createContext)(null), vr = class extends He {
	static {
		this.type = `tableheader`;
	}
}, yr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.thead, {
		...e,
		ref: t
	});
}), br = qe(vr, (e, t) => {
	let n = (0, K.useContext)(dr).collection, r = Ve({
		items: n.headerRows,
		children: (0, K.useCallback)((e) => {
			switch (e.type) {
				case `headerrow`: return K.createElement(Sr, { item: e });
				default: throw Error(`Unsupported node type in TableHeader: ` + e.type);
			}
		}, [])
	}), { rowGroupProps: i } = ir(), { hoverProps: a, isHovered: o } = S({
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), s = z({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TableHeader`,
		values: { isHovered: o }
	});
	return K.createElement(yr, {
		...P(B(e, { global: !0 }), i, a),
		...s,
		ref: t,
		"data-hovered": o || void 0
	}, r);
}, (e) => K.createElement(Ue, {
	dependencies: e.dependencies,
	items: e.columns
}, e.children)), xr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(`div`, {
		...e,
		ref: t
	}) : K.createElement(`tr`, {
		...e,
		ref: t
	});
});
function Sr({ item: e }) {
	let t = (0, K.useRef)(null), n = (0, K.useContext)(dr), { isVirtualized: r, CollectionBranch: i } = (0, K.useContext)(G), { rowProps: a } = Xn({
		node: e,
		isVirtualized: r
	}, n, t), { checkboxProps: o } = er(n);
	return K.createElement(xr, {
		...a,
		ref: t
	}, K.createElement(te, { values: [[me, { slots: { selection: o } }], [he, { slots: { selection: o } }]] }, K.createElement(i, {
		collection: n.collection,
		parent: e
	})));
}
var Cr = class extends He {
	static {
		this.type = `column`;
	}
}, wr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.th, {
		...e,
		ref: t
	});
}), Tr = Je(Cr, (e, t, n) => {
	let r = I(t), i = (0, K.useContext)(dr), { isVirtualized: a } = (0, K.useContext)(G), { columnHeaderProps: o, isPressed: s } = Wn({
		node: n,
		isVirtualized: a,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: c, isFocusVisible: l, focusProps: u } = f(), d = (0, K.useContext)(fr), p = !1;
	d && (p = d.resizingColumn === n.key);
	let { hoverProps: m, isHovered: h } = S({ isDisabled: !e.allowsSorting }), g = z({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-Column`,
		values: {
			isHovered: h,
			isPressed: s,
			isFocused: c,
			isFocusVisible: l,
			allowsSorting: n.props.allowsSorting,
			sortDirection: i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0,
			isResizing: p,
			startResize: () => {
				if (d) d.startResize(n.key), i.setKeyboardNavigationDisabled(!0);
				else throw Error(`Wrap your <Table> in a <ResizableTableContainer> to enable column resizing`);
			},
			sort: (e) => {
				i.sort(n.key, e);
			}
		}
	}), _ = g.style;
	d && (_ = {
		..._,
		width: d.getColumnWidth(n.key)
	});
	let v = B(e, { global: !0 });
	return delete v.id, K.createElement(wr, {
		...P(v, o, u, m),
		...g,
		style: _,
		ref: r,
		"data-hovered": h || void 0,
		"data-pressed": s || void 0,
		"data-focused": c || void 0,
		"data-focus-visible": l || void 0,
		"data-resizing": p || void 0,
		"data-allows-sorting": n.props.allowsSorting || void 0,
		"data-sort-direction": i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0
	}, K.createElement(te, { values: [[Er, {
		column: n,
		triggerRef: r
	}], [G, _e]] }, g.children));
}), Er = (0, K.createContext)(null), Dr = (0, K.forwardRef)(function(e, t) {
	let n = (0, K.useContext)(fr);
	if (!n) throw Error(`Wrap your <Table> in a <ResizableTableContainer> to enable column resizing`);
	let r = nt(or(Me), `react-aria-components`), { onResizeStart: i, onResize: a, onResizeEnd: o } = (0, K.useContext)(cr), { column: s, triggerRef: c } = (0, K.useContext)(Er), l = (0, K.useRef)(null), { resizerProps: u, inputProps: d, isResizing: p, isMouseResizing: m } = nr({
		column: s,
		"aria-label": e[`aria-label`] || r.format(`tableResizer`),
		onResizeStart: i,
		onResize: a,
		onResizeEnd: o,
		triggerRef: c
	}, n, l), { focusProps: h, isFocused: g, isFocusVisible: _ } = f(), { hoverProps: v, isHovered: y } = S(e), b = n.getColumnMinWidth(s.key) >= n.getColumnWidth(s.key), x = n.getColumnMaxWidth(s.key) <= n.getColumnWidth(s.key), { direction: C } = ce(), w = `both`;
	w = b ? C === `rtl` ? `right` : `left` : x ? C === `rtl` ? `left` : `right` : `both`;
	let T = I(t), [E, D] = (0, K.useState)(``);
	(0, K.useEffect)(() => {
		if (!T.current) return;
		let e = window.getComputedStyle(T.current);
		D(e.cursor);
	}, [T, w]);
	let O = z({
		...e,
		defaultClassName: `react-aria-ColumnResizer`,
		values: {
			isFocused: g,
			isFocusVisible: _,
			isResizing: p,
			isHovered: y,
			resizableDirection: w
		}
	}), k = B(e, { global: !0 });
	return K.createElement(N.div, {
		ref: T,
		role: `presentation`,
		...P(k, O, u, v),
		"data-hovered": y || void 0,
		"data-focused": g || void 0,
		"data-focus-visible": _ || void 0,
		"data-resizing": p || void 0,
		"data-resizable-direction": w
	}, O.children, K.createElement(`input`, {
		ref: l,
		...P(d, h)
	}), p && m && ar.createPortal(K.createElement(`div`, {
		style: {
			position: `fixed`,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			cursor: E
		},
		"data-testid": `cursor-overlay`
	}), document.body));
}), Or = class extends Ye {
	static {
		this.type = `tablebody`;
	}
}, kr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.tbody, {
		...e,
		ref: t
	});
}), Ar = qe(Or, (e, t, n) => {
	let r = (0, K.useContext)(dr), { isVirtualized: i } = (0, K.useContext)(G), a = r.collection, { CollectionBranch: o } = (0, K.useContext)(G), { dragAndDropHooks: s, dropState: u } = (0, K.useContext)(l), d = !!s?.useDroppableCollectionState && !u?.isDisabled, f = d && !!u && (u.isDropTarget({ type: `root` }) ?? !1), p = a.size === 0, m = {
		isDropTarget: f,
		isEmpty: p
	}, h = z({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: `react-aria-TableBody`,
		values: m
	}), g, _ = a.columnCount;
	if (p && e.renderEmptyState && r) {
		let t = {}, n = {}, r = {};
		i ? (n[`aria-colspan`] = _, r = { display: `contents` }) : n.colSpan = _, g = K.createElement(Nr, {
			role: `row`,
			...t,
			style: r
		}, K.createElement(Ir, {
			role: `rowheader`,
			...n,
			style: r
		}, e.renderEmptyState(m)));
	}
	let { rowGroupProps: v } = ir(), y = B(e, { global: !0 });
	return K.createElement(kr, {
		...P(y, h, v),
		ref: t,
		"data-empty": p || void 0
	}, d && K.createElement(Ur, null), K.createElement(o, {
		collection: a,
		parent: n,
		renderDropIndicator: c(s, u)
	}), g);
});
(class extends Ye {
	static {
		this.type = `tablefooter`;
	}
});
var jr = (0, K.createContext)({ isFocusVisibleWithinRow: !1 }), Mr = class extends He {
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
}, Nr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.tr, {
		...e,
		ref: t
	});
}), Pr = qe(Mr, (e, t, n) => {
	let r = I(t), i = (0, K.useContext)(dr), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, K.useContext)(l), { isVirtualized: c, CollectionBranch: u } = (0, K.useContext)(G), d = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { rowProps: p, expandButtonProps: m, ...h } = Jn({
		node: n,
		shouldSelectOnPressUp: !!o,
		isVirtualized: c
	}, i, r), { isFocused: g, isFocusVisible: _, focusProps: v } = f(), { isFocusVisible: y, focusProps: x } = f({ within: !0 }), { hoverProps: C, isHovered: w } = S({
		isDisabled: !h.allowsSelection && !h.hasAction && !d,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { checkboxProps: T } = $n({ key: n.key }, i), E;
	o && a && (E = a.useDraggableItem({
		key: n.key,
		hasDragButton: !0
	}, o));
	let D, O = (0, K.useRef)(null), { visuallyHiddenProps: k } = dt();
	s && a && (D = a.useDropIndicator({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, s, O));
	let A = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		o && A.current;
	}, []);
	let ee = o && o.isDragging(n.key), { children: j, ...M } = e, N = e.hasChildItems || i.collection.getItem(n.lastChildKey)?.type !== `cell`, ne = N && i.expandedKeys.has(n.key), re = z({
		...M,
		id: void 0,
		defaultClassName: `react-aria-Row`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: {
			...h,
			state: i,
			isHovered: w,
			isFocused: g,
			isFocusVisible: _,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			isDragging: ee,
			isDropTarget: D?.isDropTarget,
			isFocusVisibleWithin: y,
			id: n.key,
			hasChildItems: N,
			isExpanded: ne,
			level: n.level + 1
		}
	}), ie = B(e, { global: !0 });
	return delete ie.id, delete ie.onClick, K.createElement(K.Fragment, null, D && !D.isHidden && K.createElement(Nr, {
		role: `row`,
		style: { height: 0 }
	}, K.createElement(Ir, {
		role: `gridcell`,
		colSpan: i.collection.columnCount,
		style: { padding: 0 }
	}, K.createElement(`div`, {
		role: `button`,
		...k,
		...D.dropIndicatorProps,
		ref: O
	}))), K.createElement(Nr, {
		...P(ie, re, p, v, C, E?.dragProps, x),
		ref: r,
		"data-disabled": h.isDisabled || void 0,
		"data-selected": h.isSelected || void 0,
		"data-hovered": w || void 0,
		"data-focused": h.isFocused || void 0,
		"data-focus-visible": _ || void 0,
		"data-pressed": h.isPressed || void 0,
		"data-dragging": ee || void 0,
		"data-drop-target": D?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === `none` ? void 0 : i.selectionManager.selectionMode,
		"data-focus-visible-within": y || void 0,
		"data-expanded": ne || void 0,
		"data-has-child-items": N || void 0,
		"data-level": n.level + 1
	}, K.createElement(te, { values: [
		[me, { slots: {
			[oe]: {},
			selection: T
		} }],
		[he, { slots: {
			[oe]: {},
			selection: T
		} }],
		[b, { slots: {
			[oe]: {},
			chevron: m,
			drag: {
				...E?.dragButtonProps,
				ref: A,
				style: { pointerEvents: `none` }
			}
		} }],
		[Le, { isSelected: h.isSelected }],
		[jr, { isFocusVisibleWithinRow: y }]
	] }, K.createElement(u, {
		collection: i.collection,
		parent: n
	}))));
}, (e) => {
	if (e.id == null && typeof e.children == `function`) throw Error(`No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.`);
	let t = [e.value].concat(e.dependencies);
	return K.createElement(Ue, {
		dependencies: t,
		items: e.columns,
		idScope: e.id
	}, e.children);
}), Fr = class extends He {
	static {
		this.type = `cell`;
	}
}, Ir = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.td, {
		...e,
		ref: t
	});
}), Lr = Je(Fr, (e, t, n) => {
	let r = I(t), i = (0, K.useContext)(dr), { dragState: a } = (0, K.useContext)(l), { isVirtualized: o } = (0, K.useContext)(G);
	n.column = i.collection.columns[n.index];
	let { gridCellProps: s, isPressed: c } = Zn({
		node: n,
		shouldSelectOnPressUp: !!a,
		isVirtualized: o,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: u, isFocusVisible: d, focusProps: p } = f(), { hoverProps: m, isHovered: h } = S({}), { isFocusVisibleWithinRow: g } = (0, K.useContext)(jr), _ = n.parentKey != null && i.selectionManager.isSelected(n.parentKey), v = n.colIndex || n.index, y = i.collection.getItem(n.parentKey), b = y.props.hasChildItems || i.collection.getItem(y.lastChildKey)?.type !== `cell`, x = b && i.expandedKeys.has(n.parentKey), C = i.selectionManager.isDisabled(n.parentKey), w = z({
		...e,
		id: void 0,
		defaultClassName: `react-aria-Cell`,
		values: {
			isFocused: u,
			isFocusVisible: d,
			isFocusVisibleWithinRow: g,
			isPressed: c,
			isHovered: h,
			isSelected: _,
			id: n.key,
			columnIndex: v,
			hasChildItems: b,
			isExpanded: x,
			isDisabled: C,
			level: y.level + 1,
			isTreeColumn: n.column.key === i.treeColumn
		}
	}), T = B(e, { global: !0 });
	return delete T.id, K.createElement(Ir, {
		...P(T, w, s, p, m),
		ref: r,
		"data-focused": u || void 0,
		"data-focus-visible": d || void 0,
		"data-focus-visible-within-row": g || void 0,
		"data-pressed": c || void 0,
		"data-selected": _ || void 0,
		"data-column-index": v,
		"data-expanded": x || void 0,
		"data-has-child-items": b || void 0,
		"data-level": y.level + 1,
		"data-tree-column": n.column.key === i.treeColumn || void 0,
		"data-disabled": C || void 0
	}, K.createElement(G.Provider, { value: _e }, w.children));
});
function Rr(e, t) {
	t = I(t);
	let { dragAndDropHooks: n, dropState: r } = (0, K.useContext)(l), i = (0, K.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	if (o) return null;
	let c = r && e.target.type === `item` ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return K.createElement(Hr, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		level: c,
		ref: t
	});
}
var zr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.tr, {
		...e,
		ref: t
	});
}), Br = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(N.div, {
		...e,
		ref: t
	}) : K.createElement(N.td, {
		...e,
		ref: t
	});
});
function Vr(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, level: a, ...o } = e, s = (0, K.useContext)(dr), { visuallyHiddenProps: c } = dt(), l = z({
		...o,
		defaultClassName: `react-aria-DropIndicator`,
		defaultStyle: { "--table-row-level": a + 1 },
		values: { isDropTarget: r }
	});
	return K.createElement(zr, {
		...B(e, { global: !0 }),
		...l,
		role: `row`,
		ref: t,
		"data-drop-target": r || void 0,
		"aria-level": a
	}, K.createElement(Br, {
		role: `gridcell`,
		colSpan: s.collection.columnCount,
		style: { padding: 0 }
	}, K.createElement(`div`, {
		...c,
		role: `button`,
		...n,
		ref: i
	}), l.children));
}
var Hr = (0, K.forwardRef)(Vr);
function Ur() {
	let e = (0, K.useContext)(dr), { dragAndDropHooks: t, dropState: n } = (0, K.useContext)(l), r = (0, K.useRef)(null), { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: `root` } }, n, r), a = n.isDropTarget({ type: `root` }), { visuallyHiddenProps: o } = dt();
	return !a && i[`aria-hidden`] ? null : K.createElement(Nr, {
		role: `row`,
		"aria-hidden": i[`aria-hidden`],
		style: { height: 0 }
	}, K.createElement(Ir, {
		role: `gridcell`,
		colSpan: e.collection.columnCount,
		style: { padding: 0 }
	}, K.createElement(`div`, {
		role: `button`,
		...o,
		...i,
		ref: r
	})));
}
var Wr = Je(We, function(e, t, n) {
	let r = (0, K.useContext)(dr), { isVirtualized: i } = (0, K.useContext)(G), { isLoading: a, onLoadMore: o, scrollOffset: s, ...c } = e, l = r.collection.columns.length, u = (0, K.useRef)(null), d = (0, K.useMemo)(() => ({
		onLoadMore: o,
		collection: r?.collection,
		sentinelRef: u,
		scrollOffset: s
	}), [
		o,
		s,
		r?.collection
	]);
	et(d, u);
	let f = z({
		...c,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-TableLoadingIndicator`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: void 0
	}), p = {}, m = {}, h = {};
	return i ? (m[`aria-colspan`] = l, h = { display: `contents` }) : m.colSpan = l, K.createElement(K.Fragment, null, K.createElement(Nr, {
		style: { height: 0 },
		inert: Se(!0)
	}, K.createElement(Ir, { style: {
		padding: 0,
		border: 0
	} }, K.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: u,
		style: {
			position: `relative`,
			height: 1,
			width: 1
		}
	}))), a && f.children && K.createElement(Nr, {
		...P(B(e, { global: !0 }), p),
		...f,
		role: `row`,
		ref: t,
		"aria-level": n.level + 1,
		"data-level": n.level + 1
	}, K.createElement(Ir, {
		role: `rowheader`,
		...m,
		style: h
	}, f.children)));
}), Gr = class e {
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
}, q = class e {
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
		return new Gr(this.x, this.y);
	}
	get topRight() {
		return new Gr(this.maxX, this.y);
	}
	get bottomLeft() {
		return new Gr(this.x, this.maxY);
	}
	get bottomRight() {
		return new Gr(this.maxX, this.maxY);
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
}, J = class e {
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
}, Kr = 0, qr = class {
	constructor(e, t) {
		this.virtualizer = e, this.key = ++Kr, this.viewType = t, this.children = new Set(), this.reusableViews = new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
	}
	prepareForReuse() {
		this.content = null, this.rendered = null, this.layoutInfo = null;
	}
	getReusableView(e) {
		let t = this.reusableViews.get(e);
		return t && t.length > 0 ? t.shift() : new Yr(this.virtualizer, this, e);
	}
	reuseChild(e) {
		e.prepareForReuse();
		let t = this.reusableViews.get(e.viewType);
		t || (t = [], this.reusableViews.set(e.viewType, t)), t.push(e);
	}
}, Jr = class extends qr {
	constructor(e) {
		super(e, `root`);
	}
}, Yr = class extends qr {
	constructor(e, t, n) {
		super(e, n), this.parent = t;
	}
};
function Xr(e, t) {
	if (e === t) return !0;
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var Zr = class {
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
		this.startTime = 0, this.velocity = new Gr(0, 0), this.visibleRect = new q();
	}
}, Qr = 4;
function $r(e) {
	return e === `x` ? `width` : `height`;
}
function ei(e, t, n, r, i) {
	let a = n(e.key);
	if (!a) return null;
	let o = a.rect[e.corner][t] - r[t] - e.offset;
	if (o === 0) return null;
	let s = r[t] + o, c = $r(t), l = Math.max(0, i[c] - r[c]), u = Math.max(0, Math.min(l, s));
	return u === r[t] ? null : u;
}
function ti(e, t, n, r, i = () => !0) {
	let a = $r(t), o = null;
	for (let [s, c] of r) {
		if (!c || !i(c)) continue;
		let r = c.rect.intersection(n)[a];
		if (c.rect.area > 0 && r >= Qr) {
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
function ni(e, t, n, r) {
	if (e === `start`) return 0;
	let i = $r(t);
	return Math.max(0, n[i] - r[i]);
}
function ri(e, t, n, r, i) {
	if (n === `start`) return e[r] <= i;
	let a = $r(r);
	return t[a] - (e[r] + e[a]) <= i;
}
function ii(e, t, n, r, i, a, o, s, c, l) {
	let u = (e) => t === `x` ? new q(e, c.y, c.width, c.height) : new q(c.x, e, c.width, c.height);
	if (n) {
		let e = ei(n, t, s, c, l);
		if (e != null) return u(e);
	}
	if (r && !i && (!a || o > 0)) {
		let n = u(ni(e, t, l, c));
		return n.equals(c) ? null : n;
	}
	return null;
}
var ai = class {
	reset() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
	captureBeforeLayout(e, t, n) {
		return e ? ti(e.edge, e.axis, n, t, e.isAnchorable) : null;
	}
	resolveAfterLayout(e) {
		let { anchorInfo: t, anchor: n, postLayoutInfos: r, previousVisibleRect: i, previousContentSize: a, contentSize: o, itemSizeChanged: s, isScrolling: c, getLayoutInfo: l } = e;
		if (!t) return null;
		let u = this.hadEstimatedVisibleItems, d = this.wasNearAnchorEdge, f = !1;
		for (let e of r.values()) if (e.estimatedSize) {
			f = !0;
			break;
		}
		if (this.hadEstimatedVisibleItems = f, u || (this.wasNearAnchorEdge = ri(i, a, t.edge, t.axis, t.threshold)), i.area === 0) return null;
		let p = t.axis === `x` ? `width` : `height`, m = o[p] - a[p], h = !this.hasSnappedToEdge;
		if (this.hasSnappedToEdge = !0, !(h || m !== 0 || s)) return null;
		let g = h || u && d || ri(i, a, t.edge, t.axis, t.threshold);
		u || (this.wasNearAnchorEdge = g);
		let _ = h || u && d ? null : n;
		return ii(t.edge, t.axis, _, g, c, s, m, l, i, o);
	}
	constructor() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
}, oi = class {
	constructor(e) {
		this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new J(), this.visibleRect = new q(), this.size = new J(), this.persistedKeys = new Set(), this._visibleViews = new Map(), this._renderedContent = new WeakMap(), this._rootView = new Jr(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Zr(), this._scrollAnchor = new ai();
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
		let t = new q(e.x, e.y, 1, 1), n = t.area === 0 ? [] : this.layout.getVisibleLayoutInfos(t);
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
		this.contentSize = new J(a.width, a.height);
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
			let e = new q(c, l, s.width, s.height);
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
		if (e.collection !== this.collection && (t.collection = e.collection, n = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, t.layout = e.layout, this._scrollAnchor.reset(), n = !0), e.persistedKeys && !Xr(e.persistedKeys, this.persistedKeys) && (t.persistedKeys = e.persistedKeys, l = !0), !this.visibleRect.equals(e.visibleRect) || !this.size.equals(e.size)) {
			this._overscanManager.setVisibleRect(e.visibleRect);
			let s = new q(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height), c = new q(e.visibleRect.x, e.visibleRect.y, e.size.width, e.size.height);
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
}, si = typeof document < `u` ? K.useLayoutEffect : () => {};
function ci(e) {
	let [t, n] = (0, K.useState)(new q(0, 0, 0, 0)), [r, i] = (0, K.useState)(new J()), [a, o] = (0, K.useState)(!1), [s, c] = (0, K.useState)({}), l = (0, K.useRef)(!1), [u] = (0, K.useState)(() => new oi({
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
	si(() => {
		l.current && (l.current = !1, e.onVisibleRectChange(t));
	});
	let d = (0, K.useMemo)(() => e.layoutOptions == null ? s : {
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
	}), p = u.contentSize, m = (0, K.useCallback)(() => {
		o(!0);
	}, []), h = (0, K.useCallback)(() => {
		o(!1);
	}, []);
	return (0, K.useMemo)(() => ({
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
var li = class {
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
}, Y = class e {
	constructor(e, t, n) {
		this.type = e, this.key = t, this.parentKey = null, this.content = null, this.rect = n, this.estimatedSize = !1, this.isSticky = !1, this.opacity = 1, this.transform = null, this.zIndex = 0, this.allowOverflow = !1;
	}
	copy() {
		let t = new e(this.type, this.key, this.rect.copy());
		return t.estimatedSize = this.estimatedSize, t.opacity = this.opacity, t.transform = this.transform, t.parentKey = this.parentKey, t.content = this.content, t.isSticky = this.isSticky, t.zIndex = this.zIndex, t.allowOverflow = this.allowOverflow, t;
	}
}, ui = 48, di = class extends li {
	constructor(e = {}) {
		super(), this.rowSize = e?.rowSize ?? e?.rowHeight ?? null, this.orientation = e.orientation ?? `vertical`, this.estimatedRowSize = e?.estimatedRowSize ?? e?.estimatedRowHeight ?? null, this.headingSize = e?.headingSize ?? e?.headingHeight ?? null, this.estimatedHeadingSize = e?.estimatedHeadingSize ?? e?.estimatedHeadingHeight ?? null, this.loaderSize = e?.loaderSize ?? e?.loaderHeight ?? null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new q(), this.requestedRect = new q(), this.contentSize = new J();
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
			let r = (this.rowSize ?? this.estimatedRowSize ?? ui) + this.gap;
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
		return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new q(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new q(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
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
		let t = this.virtualizer.collection, n = this.orientation === `horizontal` ? `x` : `y`, r = this.orientation === `horizontal` ? `maxX` : `maxY`, i = fi(t, (e) => e.type !== `content`), a = i.filter((e) => e.type === `loader`), o = [], s = t?.size === 0;
		s && (e = 0);
		for (let t of i) {
			let s = (this.rowSize ?? this.estimatedRowSize ?? ui) + this.gap;
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
		return e = Math.max(e - this.gap, 0), e += s ? 0 : this.padding, this.contentSize = this.orientation === `horizontal` ? new J(e, this.virtualizer.size.height) : new J(this.virtualizer.size.width, e), o;
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
		let r = new q(t, n, this.padding, 0), i = new Y(e.type, e.key, r);
		return this.orientation === `horizontal` ? (r.height = this.virtualizer.contentSize.height - this.padding - n, r.width = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? ui : 0) : (r.width = this.virtualizer.contentSize.width - this.padding - t, r.height = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? ui : 0), {
			layoutInfo: i,
			validRect: r.intersection(this.requestedRect)
		};
	}
	buildSection(e, t, n) {
		let r = this.virtualizer.collection, i = this.virtualizer.size.width - this.padding - t, a = this.virtualizer.size.height - this.padding - n, o = this.orientation === `horizontal` ? new q(t, n, 0, a) : new q(t, n, i, 0), s = new Y(e.type, e.key, o), c = this.orientation === `horizontal` ? t : n, l = this.orientation === `horizontal` ? `x` : `y`, u = this.orientation === `horizontal` ? `maxX` : `maxY`, d = this.orientation === `horizontal` ? `width` : `height`, f = 0, p = [];
		for (let i of W(e, r)) {
			if (i.type === `content`) continue;
			let a = (this.rowSize ?? this.estimatedRowSize ?? ui) + this.gap;
			if (c + a < this.requestedRect[l] && !this.isValid(e, c)) {
				c += a, f++;
				continue;
			}
			let o = this.orientation === `horizontal` ? this.buildChild(i, c, n, s.key) : this.buildChild(i, t, c, s.key);
			if (c = o.layoutInfo.rect[u] + this.gap, p.push(o), c > this.requestedRect[u]) {
				c += ([...W(e, r)].length - (p.length + f)) * a;
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
		o ??= ui;
		let c = this.orientation === `horizontal` ? new q(t, n, o, a - n) : new q(t, n, a - t, o), l = new Y(`header`, e.key, c);
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
		o ??= ui;
		let c = this.orientation === `horizontal` ? new q(t, n, o, a) : new q(t, n, a, o), l = new Y(e.type, e.key, c);
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
		let r = new q(e, Math.max(0, t - this.gap), 1, Math.max(1, this.gap * 2)), i = this.getVisibleLayoutInfos(r), a = null, o = 1 / 0;
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
		if (e.dropPosition === `before`) n = this.orientation === `horizontal` ? new q(Math.max(0, t.rect.x - this.dropIndicatorThickness / 2), t.rect.y, this.dropIndicatorThickness, t.rect.height) : new q(t.rect.x, Math.max(0, t.rect.y - this.dropIndicatorThickness / 2), t.rect.width, this.dropIndicatorThickness);
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
			n = this.orientation === `horizontal` ? new q(t.rect.maxX - this.dropIndicatorThickness / 2, t.rect.y, this.dropIndicatorThickness, t.rect.height) : new q(t.rect.x, t.rect.maxY - this.dropIndicatorThickness / 2, t.rect.width, this.dropIndicatorThickness);
		} else n = t.rect;
		return new Y(`dropIndicator`, e.key + `:` + e.dropPosition, n);
	}
};
function fi(e, t) {
	let n = [];
	for (let r of e) t(r) && n.push(r);
	return n;
}
var pi = 48, mi = class extends di {
	constructor(e) {
		super(e), this.lastCollection = null, this.columnWidths = new Map(), this.lastPersistedKeys = null, this.persistedIndices = new Map(), this.stickyColumnIndices = [];
	}
	get collection() {
		return this.virtualizer.collection;
	}
	get rowHeight() {
		return super.rowHeight;
	}
	get estimatedRowHeight() {
		return super.estimatedRowHeight;
	}
	get headingHeight() {
		return super.headingHeight;
	}
	get estimatedHeadingHeight() {
		return super.estimatedHeadingHeight;
	}
	get loaderHeight() {
		return super.loaderHeight;
	}
	columnsChanged(e, t) {
		return !t || e.columns !== t.columns && e.columns.length !== t.columns.length || e.columns.some((e, n) => e.key !== t.columns[n].key || e.props.width !== t.columns[n].props.width || e.props.minWidth !== t.columns[n].props.minWidth || e.props.maxWidth !== t.columns[n].props.maxWidth);
	}
	shouldInvalidateLayoutOptions(e, t) {
		return e.columnWidths !== t.columnWidths || super.shouldInvalidateLayoutOptions(e, t);
	}
	update(e) {
		let t = this.virtualizer.collection;
		if (e.layoutOptions?.columnWidths) {
			for (let [t, n] of e.layoutOptions.columnWidths) if (this.columnWidths.get(t) !== n) {
				this.columnWidths = e.layoutOptions.columnWidths, e.sizeChanged = !0;
				break;
			}
		} else if (e.sizeChanged || this.columnsChanged(t, this.lastCollection)) {
			let n = new Vt({});
			this.columnWidths = n.buildColumnWidths(this.virtualizer.size.width - this.padding * 2, t, new Map()), e.sizeChanged = !0;
		}
		super.update(e);
	}
	buildCollection() {
		this.stickyColumnIndices = [];
		let e = this.virtualizer.collection;
		for (let t of e.columns) (this.isStickyColumn(t) || e.rowHeaderColumnKeys.has(t.key)) && this.stickyColumnIndices.push(t.index);
		let t = [], n = 0, r = 0;
		if (e.head) {
			for (let i of e) switch (i.type) {
				case `tableheader`: {
					let e = this.buildTableHeader();
					n = e.layoutInfo.rect.maxY + this.gap, r = Math.max(r, e.layoutInfo.rect.width), this.layoutNodes.set(e.layoutInfo.key, e), t.push(e);
					break;
				}
				case `tablebody`:
				case `tablefooter`: {
					let e = this.buildRowGroup(n, i);
					n = e.layoutInfo.rect.maxY + this.gap, r = Math.max(r, e.layoutInfo.rect.width), this.layoutNodes.set(e.layoutInfo.key, e), t.push(e);
					break;
				}
			}
			n > 0 && (n -= this.gap);
			for (let e of t) e.layoutInfo.rect.width = r;
		} else {
			let e = this.buildTableHeader();
			this.layoutNodes.set(e.layoutInfo.key, e);
			let i = this.buildBody(e.layoutInfo.rect.maxY + this.gap);
			i.layoutInfo.rect.width = Math.max(e.layoutInfo.rect.width, i.layoutInfo.rect.width), n = i.layoutInfo.rect.maxY, r = i.layoutInfo.rect.width, t = [e, i];
		}
		return this.lastPersistedKeys = null, this.contentSize = new J(r + this.padding * 2, n + this.padding), t;
	}
	buildTableHeader() {
		let e = this.virtualizer.collection, t = new q(this.padding, this.padding, 0, 0), n = new Y(`header`, e.head?.key ?? `header`, t);
		n.isSticky = !0, n.zIndex = 1;
		let r = this.padding, i = 0, a = [];
		for (let t of e.headerRows) {
			let e = this.buildChild(t, this.padding, r, n.key);
			e.layoutInfo.parentKey = n.key, r = e.layoutInfo.rect.maxY, i = Math.max(i, e.layoutInfo.rect.width), e.index = a.length, a.push(e);
		}
		return t.width = i, t.height = r - this.padding, {
			layoutInfo: n,
			children: a,
			validRect: n.rect,
			node: e.head
		};
	}
	buildHeaderRow(e, t, n) {
		let r = new q(t, n, 0, 0), i = new Y(`headerrow`, e.key, r), a = 0, o = [];
		for (let r of W(e, this.virtualizer.collection)) {
			let e = this.buildChild(r, t, n, i.key);
			e.layoutInfo.parentKey = i.key, t = e.layoutInfo.rect.maxX, a = Math.max(a, e.layoutInfo.rect.height), e.index = o.length, o.push(e);
		}
		for (let [e, t] of o.entries()) t.layoutInfo.zIndex = o.length - e + 1;
		return this.setChildHeights(o, a), r.height = a, r.width = t - r.x, {
			layoutInfo: i,
			children: o,
			validRect: r,
			node: e
		};
	}
	setChildHeights(e, t) {
		for (let n of e) n.layoutInfo.rect.height !== t && (n.layoutInfo = n.layoutInfo.copy(), n.layoutInfo.rect.height = t);
	}
	getRenderedColumnWidth(e) {
		let t = this.virtualizer.collection, n = e.colSpan ?? 1, r = e.colIndex ?? e.index, i = 0;
		for (let e = r; e < r + n; e++) {
			let n = t.columns[e];
			n?.key != null && (i += this.columnWidths.get(n.key) ?? 0);
		}
		return i;
	}
	getEstimatedHeight(e, t, n, r) {
		let i = !1;
		if (n == null) {
			let a = this.layoutNodes.get(e.key);
			a ? (n = a.layoutInfo.rect.height, i = e !== a.node || t !== a.layoutInfo.rect.width || a.layoutInfo.estimatedSize) : (n = r ?? pi, i = !0);
		}
		return {
			height: n,
			isEstimated: i
		};
	}
	getEstimatedRowHeight() {
		return this.rowHeight ?? this.estimatedRowHeight ?? pi;
	}
	buildColumn(e, t, n) {
		let r = this.getRenderedColumnWidth(e), { height: i, isEstimated: a } = this.getEstimatedHeight(e, r, this.headingHeight ?? this.rowHeight, this.estimatedHeadingHeight ?? this.estimatedRowHeight), o = new q(t, n, r, i), s = new Y(e.type, e.key, o);
		return s.isSticky = this.isStickyColumn(e), s.zIndex = s.isSticky ? 2 : 1, s.estimatedSize = a, {
			layoutInfo: s,
			children: [],
			validRect: s.rect,
			node: e
		};
	}
	isStickyColumn(e) {
		return !1;
	}
	buildBody(e) {
		let t = this.virtualizer.collection;
		return this.buildRowGroup(e, t.body);
	}
	buildRowGroup(e, t) {
		let n = this.virtualizer.collection, r = new q(this.padding, e, 0, 0), i = new Y(`rowgroup`, t.key, r), a = e, o = 0, s = [], c = this.getEstimatedRowHeight() + this.gap, l = W(t, n);
		for (let t of l) {
			if (e + c < this.requestedRect.y && !this.isValid(t, e) || e > this.requestedRect.maxY && t.type !== `loader`) {
				e += c;
				continue;
			}
			let n = this.buildChild(t, this.padding, e, i.key);
			n.layoutInfo.parentKey = i.key, n.index = s.length, e = n.layoutInfo.rect.maxY + this.gap, o = Math.max(o, n.layoutInfo.rect.width), s.push(n);
		}
		return n?.size === 0 ? e = this.virtualizer.size.height : e -= this.gap, r.width = o, r.height = e - a, {
			layoutInfo: i,
			children: s,
			validRect: i.rect.intersection(this.requestedRect),
			node: t
		};
	}
	buildLoader(e, t, n) {
		let r = super.buildLoader(e, t, n), i = this.virtualizer.collection;
		return r.layoutInfo.rect.width = this.layoutNodes.get(i.head?.key ?? `header`).layoutInfo.rect.width, r.validRect = r.layoutInfo.rect.intersection(this.requestedRect), r;
	}
	buildNode(e, t, n) {
		switch (e.type) {
			case `headerrow`: return this.buildHeaderRow(e, t, n);
			case `item`: return this.buildRow(e, t, n);
			case `column`:
			case `placeholder`: return this.buildColumn(e, t, n);
			case `cell`: return this.buildCell(e, t, n);
			case `loader`: return this.buildLoader(e, t, n);
			default: throw Error(`Unknown node type ` + e.type);
		}
	}
	buildRow(e, t, n) {
		let r = this.virtualizer.collection, i = new q(t, n, 0, 0), a = new Y(`row`, e.key, i), o = [], s = 0;
		for (let i of W(e, r)) if (i.type === `cell`) {
			if (t > this.requestedRect.maxX) {
				let e = this.layoutNodes.get(i.key);
				if (e) e.layoutInfo.rect.x = t, t += e.layoutInfo.rect.width;
				else break;
			} else {
				let e = this.buildChild(i, t, n, a.key);
				t = e.layoutInfo.rect.maxX, s = Math.max(s, e.layoutInfo.rect.height), e.index = o.length, o.push(e);
			}
		}
		return this.setChildHeights(o, s), i.width = this.layoutNodes.get(r.head?.key ?? `header`).layoutInfo.rect.width, i.height = s, {
			layoutInfo: a,
			children: o,
			validRect: i.intersection(this.requestedRect),
			node: e
		};
	}
	buildCell(e, t, n) {
		let r = this.getRenderedColumnWidth(e), { height: i, isEstimated: a } = this.getEstimatedHeight(e, r, this.rowHeight, this.estimatedRowHeight), o = new q(t, n, r, i), s = new Y(e.type, e.key, o);
		return s.isSticky = this.isStickyColumn(e), s.zIndex = s.isSticky ? 2 : 1, s.estimatedSize = a, {
			layoutInfo: s,
			children: [],
			validRect: o,
			node: e
		};
	}
	getVisibleLayoutInfos(e) {
		if (e.height > 1) {
			let t = this.getEstimatedRowHeight();
			e.y = Math.floor(e.y / t) * t, e.height = Math.ceil(e.height / t) * t;
		}
		this.layoutIfNeeded(e);
		let t = [];
		this.buildPersistedIndices();
		for (let n of this.rootNodes) t.push(n.layoutInfo), this.addVisibleLayoutInfos(t, n, e);
		return t;
	}
	addVisibleLayoutInfos(e, t, n) {
		if (t.children && t.children.length !== 0) switch (t.layoutInfo.type) {
			case `header`:
				for (let r of t.children) e.push(r.layoutInfo), this.addVisibleLayoutInfos(e, r, n);
				break;
			case `rowgroup`: {
				let r = this.binarySearch(t.children, n.topLeft, `y`), i = this.binarySearch(t.children, n.bottomRight, `y`), a = this.persistedIndices.get(t.layoutInfo.key), o = 0;
				for (; a && o < a.length && a[o] < r;) {
					let r = a[o];
					r < t.children.length && (e.push(t.children[r].layoutInfo), this.addVisibleLayoutInfos(e, t.children[r], n)), o++;
				}
				for (let s = r; s <= i; s++) {
					for (; a && o < a.length && a[o] < s;) o++;
					e.push(t.children[s].layoutInfo), this.addVisibleLayoutInfos(e, t.children[s], n);
				}
				for (; a && o < a.length;) {
					let r = a[o++];
					r < t.children.length && (e.push(t.children[r].layoutInfo), this.addVisibleLayoutInfos(e, t.children[r], n));
				}
				let s = t.children.at(-1);
				s?.layoutInfo.type === `loader` && e.push(s.layoutInfo);
				break;
			}
			case `headerrow`:
			case `row`: {
				let r = this.binarySearch(t.children, n.topLeft, `x`), i = this.binarySearch(t.children, n.topRight, `x`), a = 0, o = this.persistedIndices.get(t.layoutInfo.key) || this.stickyColumnIndices;
				for (; a < o.length && o[a] < r;) {
					let n = o[a];
					n < t.children.length && e.push(t.children[n].layoutInfo), a++;
				}
				for (let n = r; n <= i; n++) {
					for (; a < o.length && o[a] < n;) a++;
					e.push(t.children[n].layoutInfo);
				}
				for (; a < o.length;) {
					let n = o[a++];
					n < t.children.length && e.push(t.children[n].layoutInfo);
				}
				break;
			}
			default: throw Error(`Unknown node type ` + t.layoutInfo.type);
		}
	}
	binarySearch(e, t, n) {
		let r = 0, i = e.length - 1;
		for (; r <= i;) {
			let a = r + i >> 1, o = e[a];
			if (n === `x` && o.layoutInfo.rect.maxX <= t.x || n === `y` && o.layoutInfo.rect.maxY <= t.y) r = a + 1;
			else if (n === `x` && o.layoutInfo.rect.x > t.x || n === `y` && o.layoutInfo.rect.y > t.y) i = a - 1;
			else return a;
		}
		return Math.max(0, Math.min(e.length - 1, r));
	}
	buildPersistedIndices() {
		if (this.virtualizer.persistedKeys !== this.lastPersistedKeys) {
			this.lastPersistedKeys = this.virtualizer.persistedKeys, this.persistedIndices.clear();
			for (let e of this.virtualizer.persistedKeys) {
				let t = this.layoutNodes.get(e)?.layoutInfo;
				for (; t && t.parentKey;) {
					let e = this.virtualizer.collection.getItem(t.key), n = this.persistedIndices.get(t.parentKey);
					n || (n = e?.type === `cell` || e?.type === `column` ? [...this.stickyColumnIndices] : [], this.persistedIndices.set(t.parentKey, n));
					let r = this.layoutNodes.get(t.key)?.index;
					r != null && !n.includes(r) && n.push(r), t = this.layoutNodes.get(t.parentKey)?.layoutInfo;
				}
			}
			for (let e of this.persistedIndices.values()) e.sort((e, t) => e - t);
		}
	}
	getDropTargetFromPoint(e, t, n) {
		e += this.virtualizer.visibleRect.x, t += this.virtualizer.visibleRect.y;
		let r = new q(e, Math.max(0, t - this.gap), 1, Math.max(1, this.gap * 2)), i = this.getVisibleLayoutInfos(r), a = null, o = 1 / 0;
		for (let e of i) {
			if (e.type !== `row` || !e.rect.intersects(r)) continue;
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
		let t = super.getDropTargetLayoutInfo(e);
		return t.parentKey = this.virtualizer.collection.getItem(e.key)?.parentKey ?? null, t;
	}
}, hi = class extends mi {
	useLayoutOptions() {
		let e = (0, K.useContext)(fr);
		return (0, K.useMemo)(() => ({ columnWidths: e?.columnWidths }), [e?.columnWidths]);
	}
}, gi = null;
function _i(e = !1) {
	if (gi === null || e) {
		let e = document.createElement(`div`), t = e.style;
		t.width = `50px`, t.height = `50px`, t.overflow = `scroll`, t.direction = `rtl`;
		let n = document.createElement(`div`), r = n.style;
		return r.width = `100px`, r.height = `100px`, e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? gi = `positive-descending` : (e.scrollLeft = 1, gi = e.scrollLeft === 0 ? `negative` : `positive-ascending`), document.body.removeChild(e), gi;
	}
	return gi;
}
function vi(e, t) {
	let { scrollLeft: n } = e;
	if (t === `rtl`) {
		let { scrollWidth: t, clientWidth: r } = e;
		switch (_i()) {
			case `negative`:
				n = -n;
				break;
			case `positive-descending`: n = t - r - n;
		}
	}
	return n;
}
function yi(e, t) {
	let { contentSize: n, onVisibleRectChange: r, onSizeChange: i, innerStyle: a, onScrollStart: o, onScrollEnd: s, scrollDirection: c = `both`, onScroll: l, allowsWindowScrolling: u, ...d } = e, f = (0, K.useRef)({
		scrollPosition: new Gr(),
		size: new J(),
		viewportOffset: new Gr(),
		viewportSize: new J(),
		scrollEndTime: 0,
		scrollTimeout: null,
		isScrolling: !1,
		lastVisibleRect: new q()
	}).current, { direction: p } = ce(), m = (0, K.useCallback)(() => {
		let e = u ? new q(f.viewportOffset.x + f.scrollPosition.x, f.viewportOffset.y + f.scrollPosition.y, Math.max(0, Math.min(f.size.width - f.viewportOffset.x, f.viewportSize.width)), Math.max(0, Math.min(f.size.height - f.viewportOffset.y, f.viewportSize.height))) : new q(f.scrollPosition.x, f.scrollPosition.y, f.size.width, f.size.height);
		(e.area > 0 || f.lastVisibleRect.area > 0) && (r(e), f.lastVisibleRect = e);
	}, [
		f,
		u,
		r
	]), [h, g] = (0, K.useState)(!1), _ = (0, K.useCallback)((e) => {
		let r = C(e);
		if (v(r, t.current)) {
			if (l && r === t.current && l(e), r !== t.current) {
				let e = t.current.getBoundingClientRect(), n = e.x < 0 ? -e.x : 0, r = e.y < 0 ? -e.y : 0;
				if (n === f.viewportOffset.x && r === f.viewportOffset.y) return;
				f.viewportOffset = new Gr(n, r);
			} else {
				let e = r.scrollTop, t = vi(r, p);
				f.scrollPosition = new Gr(Math.max(0, Math.min(t, n.width - f.size.width)), Math.max(0, Math.min(e, n.height - f.size.height)));
			}
			(0, ar.flushSync)(() => {
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
	(0, K.useEffect)(() => F(k(t.current, L(t.current)), `scroll`, _, !0), [_, t]), (0, K.useEffect)(() => () => {
		f.scrollTimeout != null && clearTimeout(f.scrollTimeout), f.isScrolling && window.dispatchEvent(new Event(`tk.connect-observer`));
	}, []);
	let y = (0, K.useRef)(!1), b = (0, K.useCallback)((e) => {
		let n = t.current;
		if (!n || y.current) return;
		y.current = !0, Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientWidth`), Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientHeight`);
		let r = n.clientWidth, a = n.clientHeight, o = r, s = a, c = window.innerWidth, l = window.innerHeight, u = f.viewportSize.width !== c || f.viewportSize.height !== l;
		u && (f.viewportSize = new J(c, l)), (f.size.width !== o || f.size.height !== s || u) && (f.size = new J(o, s), e(() => {
			m(), i?.(f.size);
		}), (r !== n.clientWidth || a !== n.clientHeight) && (f.size = new J(n.clientWidth, n.clientHeight), e(() => {
			m(), i?.(f.size);
		}))), y.current = !1;
	}, [
		t,
		f,
		m,
		i
	]), x = M(b);
	j(() => {
		f.viewportSize = new J(window.innerWidth, window.innerHeight);
		let e = () => {
			x(ar.flushSync);
		};
		return window.addEventListener(`resize`, e), () => window.removeEventListener(`resize`, e);
	}, [f]);
	let S = (0, K.useRef)(null), [w, T] = (0, K.useState)({});
	j(() => {
		if (!y.current && (S.current == null || !n.equals(S.current))) {
			if (typeof IS_REACT_ACT_ENVIRONMENT == `boolean` ? IS_REACT_ACT_ENVIRONMENT : typeof jest < `u`) {
				T({}), S.current = n;
				return;
			}
			queueMicrotask(() => x(ar.flushSync));
		}
		S.current = n;
	}), j(() => {
		x((e) => e());
	}, [w]);
	let E = (0, K.useCallback)(() => {
		b(ar.flushSync);
	}, [b]);
	rt({
		ref: t,
		box: `border-box`,
		onResize: E
	});
	let D = {
		padding: 0,
		...d.style
	};
	return c === `horizontal` ? (D.overflowX = `auto`, D.overflowY = `hidden`) : c === `vertical` || n.width === f.size.width ? (D.overflowY = `auto`, D.overflowX = `hidden`) : D.overflow = `auto`, a = {
		width: Number.isFinite(n.width) ? n.width : void 0,
		height: Number.isFinite(n.height) ? n.height : void 0,
		pointerEvents: h ? `none` : `auto`,
		position: `relative`,
		...a
	}, {
		isScrolling: h,
		scrollViewProps: {
			...d,
			style: D
		},
		contentProps: {
			role: `presentation`,
			style: a
		}
	};
}
function bi(e) {
	let { layoutInfo: t, virtualizer: n, ref: r, shouldObserveItemSize: i } = e, a = t?.key, o = (0, K.useCallback)(() => {
		if (a != null && r.current) {
			if (!y(r.current)) return;
			let e = xi(r.current);
			n.updateItemSize(a, e);
		}
	}, [
		n,
		a,
		r
	]), s = M(o);
	return j(() => {
		t?.estimatedSize && s();
	}), (0, K.useEffect)(() => {
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
function xi(e) {
	let t = e.style.height;
	e.style.height = ``;
	let n = new J(e.scrollWidth, e.scrollHeight);
	return e.style.height = t, n;
}
function Si(e) {
	let { style: t, className: n, layoutInfo: r, virtualizer: i, parent: a, children: o, shouldObserveItemSize: s } = e, { direction: c } = ce(), l = (0, K.useRef)(null);
	return bi({
		layoutInfo: r,
		virtualizer: i,
		ref: l,
		shouldObserveItemSize: s
	}), K.createElement(`div`, {
		role: `presentation`,
		ref: l,
		className: n,
		style: {
			...wi(r, c, a),
			...t
		}
	}, o);
}
var Ci = new WeakMap();
function wi(e, t, n) {
	let r = t === `rtl` ? `right` : `left`, i = Ci.get(e);
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
	return Ci.set(e, o), o;
}
var Ti = (0, K.createContext)(null), Ei = (0, K.createContext)(null);
function Di(e) {
	let { children: t, layout: n, layoutOptions: r, shouldObserveItemSize: i } = e, a = (0, K.useMemo)(() => typeof n == `function` ? new n() : n, [n]), o = (0, K.useMemo)(() => ({
		isVirtualized: !0,
		layoutDelegate: a,
		dropTargetDelegate: a.getDropTargetFromPoint ? a : void 0,
		CollectionRoot: Oi,
		CollectionBranch: ki
	}), [a]);
	return K.createElement(G.Provider, { value: o }, K.createElement(Ei.Provider, { value: {
		layout: a,
		layoutOptions: r,
		shouldObserveItemSize: i
	} }, t));
}
function Oi({ collection: e, persistedKeys: t, scrollRef: n, renderDropIndicator: r }) {
	let { layout: i, layoutOptions: a, shouldObserveItemSize: o } = (0, K.useContext)(Ei), s = i.useLayoutOptions?.(), c = ci({
		allowsWindowScrolling: !0,
		layout: i,
		collection: e,
		renderView: (e, t) => t?.render?.(t),
		onVisibleRectChange(e) {
			let t = n?.current;
			t && (t.scrollLeft = e.x, t.scrollTop = e.y);
		},
		persistedKeys: t,
		layoutOptions: (0, K.useMemo)(() => a && s ? {
			...a,
			...s
		} : a || s, [a, s])
	}), { contentProps: l } = yi({
		onVisibleRectChange: c.setVisibleRect,
		onSizeChange: c.setSize,
		contentSize: c.contentSize,
		onScrollStart: c.startScrolling,
		onScrollEnd: c.endScrolling,
		allowsWindowScrolling: !0
	}, n);
	return K.createElement(`div`, l, K.createElement(Ti.Provider, { value: c }, Ai(null, c.visibleViews, r, o)));
}
function ki({ parent: e, renderDropIndicator: t }) {
	let n = (0, K.useContext)(Ti).virtualizer.getVisibleView(e.key), { shouldObserveItemSize: r } = (0, K.useContext)(Ei);
	return Ai(n, Array.from(n.children), t, r);
}
function Ai(e, t, n, r) {
	return t.map((t) => ji(e, t, n, r));
}
function ji(e, t, n, r) {
	let i = K.createElement(Si, {
		key: t.key,
		layoutInfo: t.layoutInfo,
		virtualizer: t.virtualizer,
		parent: e?.layoutInfo,
		shouldObserveItemSize: r
	}, t.rendered), { collection: a, layout: o } = t.virtualizer, s = t.content;
	return s?.type === `item` && n && o.getDropTargetLayoutInfo && (i = K.createElement(K.Fragment, { key: t.key }, Mi(e, t, {
		type: `item`,
		key: t.content.key,
		dropPosition: `before`
	}, n), i, ge(a, s, (r) => Mi(e, t, r, n)))), i;
}
function Mi(e, t, n, r) {
	let i = r(n);
	if (i) {
		let r = t.virtualizer.layout.getDropTargetLayoutInfo(n);
		i = K.createElement(Si, {
			layoutInfo: r,
			virtualizer: t.virtualizer,
			parent: e?.layoutInfo
		}, i);
	}
	return i;
}
function Ni(e) {
	return Pi(e) || typeof e == `function` || Fi(e);
}
function Pi(e) {
	return typeof e == `function` && (() => {
		let t = Object.getPrototypeOf(e);
		return t.prototype && t.prototype.isReactComponent;
	})();
}
function Fi(e) {
	return typeof e == `object` && typeof e.$$typeof == `symbol` && [`react.memo`, `react.forward_ref`].includes(e.$$typeof.description);
}
function Ii(e, t) {
	return e == null ? null : Ni(e) ? K.createElement(e, t) : e;
}
function Li(e) {
	if (`cell` in e && e.cell) {
		let t = e.cell, n = t.column.columnDef, r = t, i = n;
		return r.getIsAggregated?.() ? Ii(i.aggregatedCell ?? n.cell, t.getContext()) : r.getIsPlaceholder?.() ? null : Ii(n.cell, t.getContext());
	}
	return `header` in e && e.header ? Ii(e.header.column.columnDef.header, e.header.getContext()) : `footer` in e && e.footer ? Ii(e.footer.column.columnDef.footer, e.footer.getContext()) : null;
}
function Ri({ update: e, notify: t, unwatched: n }) {
	return {
		link: r,
		unlink: i,
		propagate: a,
		checkDirty: o,
		shallowPropagate: s
	};
	function r(e, t, n) {
		let r = t.depsTail;
		if (r !== void 0 && r.dep === e) return;
		let i = r === void 0 ? t.deps : r.nextDep;
		if (i !== void 0 && i.dep === e) {
			i.version = n, t.depsTail = i;
			return;
		}
		let a = e.subsTail;
		if (a !== void 0 && a.version === n && a.sub === t) return;
		let o = t.depsTail = e.subsTail = {
			version: n,
			dep: e,
			sub: t,
			prevDep: r,
			nextDep: i,
			prevSub: a,
			nextSub: void 0
		};
		i !== void 0 && (i.prevDep = o), r === void 0 ? t.deps = o : r.nextDep = o, a === void 0 ? e.subs = o : a.nextSub = o;
	}
	function i(e, t = e.sub) {
		let r = e.dep, i = e.prevDep, a = e.nextDep, o = e.nextSub, s = e.prevSub;
		return a === void 0 ? t.depsTail = i : a.prevDep = i, i === void 0 ? t.deps = a : i.nextDep = a, o === void 0 ? r.subsTail = s : o.prevSub = s, s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o, a;
	}
	function a(e) {
		let n = e.nextSub, r;
		top: do {
			let i = e.sub, a = i.flags;
			if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40, a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32, a & 2 && t(i), a & 1) {
				let t = i.subs;
				if (t !== void 0) {
					let i = (e = t).nextSub;
					i !== void 0 && (r = {
						value: n,
						prev: r
					}, n = i);
					continue;
				}
			}
			if ((e = n) !== void 0) n = e.nextSub;
			else {
				for (; r !== void 0;) if (e = r.value, r = r.prev, e !== void 0) {
					n = e.nextSub;
					continue top;
				}
				break;
			}
		} while (1);
	}
	function o(t, n) {
		let r, i = 0, a = !1;
		top: do {
			let o = t.dep, c = o.flags;
			if (n.flags & 16) a = !0;
			else if ((c & 17) == 17) {
				if (e(o)) {
					let e = o.subs;
					e.nextSub !== void 0 && s(e), a = !0;
				}
			} else if ((c & 33) == 33) {
				(t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
					value: t,
					prev: r
				}), t = o.deps, n = o, ++i;
				continue;
			}
			if (!a) {
				let e = t.nextDep;
				if (e !== void 0) {
					t = e;
					continue;
				}
			}
			for (; i--;) {
				let i = n.subs, o = i.nextSub !== void 0;
				if (o ? (t = r.value, r = r.prev) : t = i, a) {
					if (e(n)) {
						o && s(i), n = t.sub;
						continue;
					}
					a = !1;
				} else n.flags &= -33;
				n = t.sub;
				let c = t.nextDep;
				if (c !== void 0) {
					t = c;
					continue top;
				}
			}
			return a;
		} while (1);
	}
	function s(e) {
		do {
			let n = e.sub, r = n.flags;
			(r & 48) == 32 && (n.flags = r | 16, (r & 6) == 2 && t(n));
		} while ((e = e.nextSub) !== void 0);
	}
	function c(e, t) {
		let n = t.depsTail;
		for (; n !== void 0;) {
			if (n === e) return !0;
			n = n.prevDep;
		}
		return !1;
	}
}
function zi(e, t, n) {
	let r = typeof e == `object`, i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var Bi = [], Vi = 0, { link: Hi, unlink: Ui, propagate: Wi, checkDirty: Gi, shallowPropagate: Ki } = Ri({
	update(e) {
		return e._update();
	},
	notify(e) {
		Bi[Ji++] = e, e.flags &= -3;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = 17, Zi(e));
	}
}), qi = 0, Ji = 0, X, Yi = 0;
function Xi(e) {
	try {
		++Yi, e();
	} finally {
		--Yi || Qi();
	}
}
function Zi(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = Ui(n, e);
}
function Qi() {
	if (!(Yi > 0)) {
		for (; qi < Ji;) {
			let e = Bi[qi];
			Bi[qi++] = void 0, e.notify();
		}
		qi = 0, Ji = 0;
	}
}
function $i(e, t) {
	let n = typeof e == `function`, r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: +!n,
		get() {
			return X !== void 0 && Hi(i, X, Vi), i._snapshot;
		},
		subscribe(e) {
			let t = zi(e), n = { current: !1 }, r = ea(() => {
				i.get(), n.current ? (X = void 0, t.next?.(i._snapshot)) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = X, o = t?.compare ?? Object.is;
			if (n) X = i, ++Vi, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = 5);
			try {
				let t = i._snapshot, a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				X = a, n && (i.flags &= -5), Zi(i);
			}
		}
	};
	return n ? (i.flags = 17, i.get = function() {
		let e = i.flags;
		if (e & 16 || e & 32 && Gi(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && Ki(e);
			}
		} else e & 32 && (i.flags = e & -33);
		return X !== void 0 && Hi(i, X, Vi), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (Wi(e), Ki(e), Qi());
		}
	}, i;
}
function ea(e) {
	let t = () => {
		let t = X;
		X = n, ++Vi, n.depsTail = void 0, n.flags = 6;
		try {
			return e();
		} finally {
			X = t, n.flags &= -5, Zi(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			let e = this.flags;
			e & 16 || e & 32 && Gi(this.deps, this) ? t() : this.flags = 2;
		},
		stop() {
			this.flags = 0, this.depsTail = void 0, Zi(this);
		}
	};
	return t(), n;
}
function ta(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!t.has(n) || !Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	let n = na(e);
	if (n.length !== na(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
function na(e) {
	return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
var ra = n(((e) => {
	var t = r(), n = pe();
	function i(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var a = typeof Object.is == `function` ? Object.is : i, o = n.useSyncExternalStore, s = t.useRef, c = t.useEffect, l = t.useMemo, u = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!o) {
					if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
						var t = f.value;
						if (i(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, a(s, e)) return t;
				var n = r(e);
				return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var o = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			i
		]);
		var p = o(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), ia = n(((e, t) => {
	t.exports = ra();
}))();
function aa(e, t) {
	return e === t;
}
function oa(e, t = (e) => e, n) {
	let r = n?.compare ?? aa, i = (0, K.useCallback)((t) => {
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), a = (0, K.useCallback)(() => e.get(), [e]);
	return (0, ia.useSyncExternalStoreWithSelector)(i, a, a, t, r);
}
function sa(e) {
	let t = oa(e.source, e.selector, { compare: ta });
	return typeof e.children == `function` ? e.children(t) : e.children;
}
function ca(e) {
	let t = e;
	return Object.defineProperty(e, "state", { get() {
		return e.get();
	} }), `set` in e && (t.setState = e.set.bind(e)), t;
}
function la(e) {
	let { createAtom: t, batch: n } = e, r = t(0);
	return {
		createOptionsStore: !1,
		wrapExternalAtoms: !1,
		addSubscription: () => {
			throw Error(`Feature not supported in current reactivity implementation`);
		},
		unmount: () => {
			throw Error(`Feature not supported in current reactivity implementation`);
		},
		schedule: e.schedule ?? ((e) => queueMicrotask(e)),
		batch: n,
		untrack: (e) => e(),
		createReadonlyAtom: (e, n) => {
			let i = n?.compare ?? Object.is, a = !1, o, s = () => {
				let t = e();
				return a && i(o, t) || (o = t, a = !0), o;
			}, c = t(() => (r.get(), s()), { compare: i });
			return {
				get: s,
				subscribe: c.subscribe.bind(c)
			};
		},
		createWritableAtom: (e, n) => t(e, { compare: n?.compare }),
		commit: () => {
			r.set((e) => e + 1);
		}
	};
}
function ua(e, t = Object.is) {
	let n = !1, r;
	return {
		get: e.get,
		markCommitted: (e) => {
			r = e, n = !0;
		},
		subscribe: (i) => e.subscribe((e) => {
			n && t(r, e) || i(e);
		})
	};
}
function da() {
	return la({
		createAtom: $i,
		batch: Xi
	});
}
function fa(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function pa(e) {
	if (Array.isArray(e)) return e.map(pa);
	if (e && typeof e == `object`) {
		let t = Object.getPrototypeOf(e);
		if (t !== Object.prototype && t !== null) return e;
		let n = t === null ? Z() : {}, r = Object.keys(e);
		for (let t = 0; t < r.length; t++) {
			let i = r[t];
			Object.defineProperty(n, i, {
				configurable: !0,
				enumerable: !0,
				value: pa(e[i]),
				writable: !0
			});
		}
		return n;
	}
	return e;
}
function ma(e, t) {
	let n = Object.keys(t), r = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		!i.startsWith(`_memo_`) && i !== `_cellsCache` && (r[i] = t[i]);
	}
	return e;
}
function Z() {
	return Object.create(null);
}
function ha(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function ga(e, t) {
	return (n) => {
		(t.options.atoms?.[e] ?? t.baseAtoms[e]).set((e) => fa(n, e));
	};
}
function _a(e) {
	if (typeof e != `object` || !e) return !1;
	if (Array.isArray(e)) return !0;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
function va(e) {
	return Reflect.ownKeys(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
var ya = 3;
function ba(e, t) {
	return xa(e, t, ya);
}
function xa(e, t, n) {
	if (Object.is(e, t)) return !0;
	if (n <= 0 || !_a(e) || !_a(t) || (Array.isArray(e) || Array.isArray(t)) && (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)) return !1;
	let r = va(e), i = va(t);
	if (r.length !== i.length) return !1;
	let a = e, o = t;
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		if (!Object.prototype.propertyIsEnumerable.call(t, i) || !xa(a[i], o[i], n - 1)) return !1;
	}
	return !0;
}
function Sa(e, t, n, r = ba) {
	let i = `on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`, a = e.options[i];
	a && a((e) => {
		let t = fa(n, e);
		return r(e, t) ? e : t;
	});
}
function Ca(e) {
	return e instanceof Function;
}
function wa(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i.length && r(i);
		});
	};
	return r(e), n;
}
var Ta = ({ fn: e, memoDeps: t, onAfterCompare: n, onAfterUpdate: r, onBeforeCompare: i, onBeforeUpdate: a }) => {
	let o = [], s;
	return (c) => {
		i?.();
		let l = t?.(c), u = !l || l.length !== o?.length;
		if (!u && l) {
			for (let e = 0; e < l.length; e++) if (l[e] !== o[e]) {
				u = !0;
				break;
			}
		}
		return n?.(u), u && (o = l, a?.(), s = e(...l ?? []), r?.(s)), s;
	};
};
function Ea(e) {
	let t = !1;
	return () => {
		t ? e() : t = !0;
	};
}
function Da({ feature: e, fnName: t, objectId: n, onAfterUpdate: r, table: i, ...a }) {
	let o = { onAfterUpdate: r ? () => {
		let { schedule: e, untrack: t } = i._reactivity;
		e(() => t(() => r()));
	} : void 0 };
	return Ta({
		...a,
		...o
	});
}
function Oa(e, t = `_`) {
	let [n, r] = e.replace(t, ` `).split(` `);
	return {
		fnKey: r,
		fnName: `${n}.${r}`,
		parentName: n
	};
}
function ka(e, t, n) {
	for (let [r, { fn: i, memoDeps: a }] of Object.entries(n)) {
		let { fnKey: n, fnName: o } = Oa(r);
		t[n] = a ? Da({
			memoDeps: a,
			fn: i,
			fnName: o,
			table: t,
			feature: e
		}) : i;
	}
}
function Aa(e, t, n, r) {
	for (let [i, { fn: a, memoDeps: o }] of Object.entries(r)) {
		let { fnKey: r, fnName: s } = Oa(i);
		if (o) {
			let i = `_memo_${r}`;
			t[r] = function(...t) {
				if (!this[i]) {
					let t = this;
					this[i] = Da({
						memoDeps: (e) => o(t, e),
						fn: (...e) => a(t, ...e),
						fnName: s,
						objectId: t.id,
						table: n,
						feature: e
					});
				}
				return this[i](...t);
			};
		} else t[r] = function(...e) {
			return a(this, ...e);
		};
	}
}
function ja(e) {
	return e.row.getValue(e.column.id);
}
function Ma(e) {
	return e.getValue() ?? e.table.options.renderFallbackValue;
}
function Na(e) {
	return {
		table: e.table,
		column: e.column,
		row: e.row,
		cell: e,
		getValue: () => e.getValue(),
		renderValue: () => e.renderValue()
	};
}
var Pa = { assignCellPrototype: (e, t) => {
	Aa(`coreCellsFeature`, e, t, {
		cell_getValue: { fn: (e) => ja(e) },
		cell_renderValue: { fn: (e) => Ma(e) },
		cell_getContext: {
			fn: (e) => Na(e),
			memoDeps: (e) => [e]
		}
	});
} };
function Fa(e) {
	if (!e._columnPrototype) {
		e._columnPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignColumnPrototype?.(e._columnPrototype, e);
	}
	return e._columnPrototype;
}
function Ia(e, t, n, r) {
	let i = {
		...e.getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = a === void 0 ? void 0 : String(a), s = i.id ?? o?.replaceAll(`.`, `_`) ?? (typeof i.header == `string` ? i.header : void 0), c;
	if (i.accessorFn) c = i.accessorFn;
	else if (a !== void 0) {
		if (typeof a == `string` && a.includes(`.`)) {
			let e = a.split(`.`);
			c = (t) => {
				let n = t;
				for (let t = 0; t < e.length; t++) {
					let r = e[t];
					n = n?.[r];
				}
				return n;
			};
		} else c = (e) => e[i.accessorKey];
	}
	if (!s) throw Error();
	let l = Fa(e), u = Object.create(l);
	u.accessorFn = c, u.columnDef = i, u.columns = [], u.depth = n, u.id = `${String(s)}`, u.parent = r;
	let d = e._columnInstanceInitFns;
	for (let e = 0; e < d.length; e++) d[e](u);
	return u;
}
function La(e) {
	return e.getIsVisible?.() ?? !0;
}
function Ra(e) {
	return e.getVisibleLeafColumns?.() ?? e.getAllLeafColumns();
}
function za(e, t) {
	let n = e, r = t;
	return n.getOrderColumnsFn?.()(r) ?? n._orderGroupedColumns?.(r) ?? t;
}
function Ba(e, t, n, r) {
	return e._orderByColumnPinning?.(t, n, r) ?? t;
}
function Va(e) {
	return e.getGlobalFilterFn?.();
}
function Ha(e) {
	return e.getCanGlobalFilter?.() ?? !1;
}
function Ua(e, t) {
	return e._expandRows?.(t) ?? t;
}
function Wa(e) {
	e.autoResetExpanded?.();
}
function Ga(e) {
	e.autoResetPageIndex?.();
}
function Ka(e) {
	e.autoResetSorting?.();
}
function qa(e) {
	e.autoResetCellSelection?.();
}
function Ja(e) {
	return [e, ...e.columns.flatMap((e) => e.getFlatColumns())];
}
function Ya(e) {
	if (e.columns.length) {
		let t = e.columns.flatMap((e) => e.getLeafColumns());
		return za(e.table, t);
	}
	return [e];
}
function Xa(e) {
	return {
		header: (e) => {
			let t = e.header.column.columnDef;
			return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
		},
		cell: (e) => e.renderValue()?.toString?.() ?? null,
		...Object.values(e._features).reduce((e, t) => Object.assign(e, t.getDefaultColumnDef?.()), {}),
		...e.options.defaultColumn
	};
}
function Za(e, t, n, r = 0) {
	let i = Array(t.length);
	for (let a = 0; a < t.length; a++) {
		if (!(a in t)) continue;
		let o = t[a], s = Ia(e, o, r, n), c = o;
		s.columns = c.columns ? Za(e, c.columns, s, r + 1) : [], i[a] = s;
	}
	return i;
}
function Qa(e) {
	return Za(e, e.options.columns);
}
function $a(e) {
	return e.getAllColumns().flatMap((e) => e.getFlatColumns());
}
function eo(e) {
	let t = Z(), n = e.getAllFlatColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function to(e) {
	return za(e, e.getAllColumns().flatMap((e) => e.getLeafColumns()));
}
function no(e) {
	let t = Z(), n = e.getAllLeafColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function ro(e, t) {
	return e.getAllFlatColumnsById()[t];
}
var io = {
	assignColumnPrototype: (e, t) => {
		Aa(`coreColumnsFeature`, e, t, {
			column_getFlatColumns: {
				fn: (e) => Ja(e),
				memoDeps: (e) => [e.table.options.columns]
			},
			column_getLeafColumns: {
				fn: (e) => Ya(e),
				memoDeps: (e) => [
					e.table.atoms.columnOrder?.get(),
					e.table.atoms.grouping?.get(),
					e.table.options.columns,
					e.table.options.groupedColumnMode
				]
			}
		});
	},
	constructTableAPIs: (e) => {
		ka(`coreColumnsFeature`, e, {
			table_getDefaultColumnDef: {
				fn: () => Xa(e),
				memoDeps: () => [e.options.defaultColumn]
			},
			table_getAllColumns: {
				fn: () => Qa(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumns: {
				fn: () => $a(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumnsById: {
				fn: () => eo(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllLeafColumns: {
				fn: () => to(e),
				memoDeps: () => [
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_getAllLeafColumnsById: {
				fn: () => no(e),
				memoDeps: () => [e.getAllLeafColumns()]
			},
			table_getColumn: { fn: (t) => ro(e, t) }
		});
	}
};
function ao(e) {
	if (!e._headerPrototype) {
		e._headerPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignHeaderPrototype?.(e._headerPrototype, e);
	}
	return e._headerPrototype;
}
function oo(e, t, n) {
	let r = ao(e), i = Object.create(r);
	i.colSpan = 0, i.column = t, i.depth = n.depth, i.headerGroup = null, i.id = n.id ?? t.id, i.index = n.index, i.isPlaceholder = !!n.isPlaceholder, i.placeholderId = n.placeholderId, i.rowSpan = 0, i.subHeaders = [];
	let a = e._headerInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
function so(e, t = 1) {
	let n = t;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		La(i) && i.columns.length && (n = Math.max(n, so(i.columns, t + 1)));
	}
	return n;
}
function co(e, t) {
	return e ? `${e}_${t}` : String(t);
}
function lo(e, t, n, r) {
	let i = e ?? ``;
	return t && (i = i ? `${i}_${t}` : String(t)), n && (i = i ? `${i}_${n}` : n), r && (i = i ? `${i}_${r}` : r), i;
}
function uo(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) e[r].column === t && n++;
	return n;
}
function fo(e, t, n, r, i, a) {
	let o = {
		depth: t,
		id: co(r, t),
		headers: []
	}, s = [];
	for (let i = 0; i < e.length; i++) {
		if (!(i in e)) continue;
		let a = e[i], c = s[s.length - 1], l = a.column.depth === o.depth, u, d = !1;
		if (l && a.column.parent ? u = a.column.parent : (u = a.column, d = !0), c && c.column === u) c.subHeaders.push(a);
		else {
			let e = oo(n, u, {
				id: lo(r, t, u.id, a.id),
				isPlaceholder: d,
				placeholderId: d ? String(uo(s, u)) : void 0,
				depth: t,
				index: s.length
			});
			e.subHeaders.push(a), s.push(e);
		}
		o.headers.push(a), a.headerGroup = o;
	}
	for (let e = 0; e < a.length; e++) a[e](o);
	i.push(o), t > 0 && fo(s, t - 1, n, r, i, a);
}
function po(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!La(n.column)) continue;
		let r = 0;
		if (n.subHeaders.length) {
			po(n.subHeaders);
			for (let e = 0; e < n.subHeaders.length; e++) {
				let t = n.subHeaders[e];
				La(t.column) && (r += t.colSpan);
			}
		} else r = 1;
		if (n.colSpan = r, n.isPlaceholder && n.subHeaders.length === 1 && n.subHeaders[0].column === n.column) {
			let e = 1, t = n.subHeaders[0];
			for (; t;) t.rowSpan = 0, e++, t = t.subHeaders.length === 1 && t.subHeaders[0].column === n.column ? t.subHeaders[0] : void 0;
			n.rowSpan = e;
		} else n.rowSpan = 1;
	}
}
function mo(e, t, n, r) {
	let i = so(e), a = [], o = n._headerGroupInstanceInitFns, s = Array(t.length);
	for (let e = 0; e < t.length; e++) e in t && (s[e] = oo(n, t[e], {
		depth: i,
		index: e
	}));
	return fo(s, i - 1, n, r, a, o), a.reverse(), po(a[0]?.headers ?? []), a;
}
function ho(e, t) {
	for (let n = 0; n < e.subHeaders.length; n++) ho(e.subHeaders[n], t);
	t.push(e);
}
function go(e) {
	let t = [];
	return ho(e, t), t;
}
function _o(e) {
	return {
		column: e.column,
		header: e,
		table: e.column.table
	};
}
function vo(e) {
	return mo(e.getAllColumns(), Ba(e, Ra(e), (e) => e.id), e);
}
function yo(e) {
	return [...e.getHeaderGroups()].reverse();
}
function bo(e) {
	let t = e.getHeaderGroups(), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].headers;
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
function xo(e) {
	let t = e.getHeaderGroups()[0]?.headers ?? [], n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].getLeafHeaders();
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
var So = {
	assignHeaderPrototype: (e, t) => {
		Aa(`coreHeadersFeature`, e, t, {
			header_getLeafHeaders: {
				fn: (e) => go(e),
				memoDeps: (e) => [e.column.table.options.columns]
			},
			header_getContext: {
				fn: (e) => _o(e),
				memoDeps: (e) => [e.column.table.options.columns]
			}
		});
	},
	constructTableAPIs: (e) => {
		ka(`coreHeadersFeature`, e, {
			table_getHeaderGroups: {
				fn: () => vo(e),
				memoDeps: () => [
					e.options.columns,
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.atoms.columnPinning?.get(),
					e.atoms.columnVisibility?.get(),
					e.options.groupedColumnMode
				]
			},
			table_getFooterGroups: {
				fn: () => yo(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getFlatHeaders: {
				fn: () => bo(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getLeafHeaders: {
				fn: () => xo(e),
				memoDeps: () => [e.getHeaderGroups()]
			}
		});
	}
};
function Co(e) {
	if (!e._rowPrototype) {
		e._rowPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignRowPrototype?.(e._rowPrototype, e);
	}
	return e._rowPrototype;
}
var wo = (e, t, n, r, i, a, o) => {
	let s = Co(e), c = Object.create(s);
	c._displayIndexCache = -1, c._uniqueValuesCache = Z(), c._valuesCache = Z(), c.depth = i, c.id = t, c.index = r, c.original = n, c.parentId = o, c.subRows = a ?? [];
	let l = e._rowInstanceInitFns;
	for (let e = 0; e < l.length; e++) l[e](c);
	return c;
};
function To() {
	return (e) => Da({
		feature: `coreRowModelsFeature`,
		table: e,
		fnName: `table.getCoreRowModel`,
		memoDeps: () => [e.options.data],
		fn: () => Do(e, e.options.data),
		onAfterUpdate: Ea(() => {
			Wa(e), Ga(e), Ka(e), qa(e);
		})
	});
}
function Eo(e, t, n, r = 0, i) {
	let a = [];
	for (let o = 0; o < n.length; o++) {
		let s = n[o], c = wo(e, e.getRowId(s, o, i), s, o, r, void 0, i?.id);
		t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows && (c.originalSubRows = e.options.getSubRows(s, o), c.originalSubRows?.length && (c.subRows = Eo(e, t, c.originalSubRows, r + 1, c)));
	}
	return a;
}
function Do(e, t) {
	let n = {
		rows: [],
		flatRows: [],
		rowsById: Z()
	};
	return n.rows = Eo(e, n, t), n;
}
function Oo(e) {
	return e._rowModels.coreRowModel || (e._rowModels.coreRowModel = e.options.features.coreRowModel?.(e) ?? To()(e)), e._rowModels.coreRowModel();
}
function ko(e) {
	return e.getCoreRowModel();
}
function Ao(e) {
	return e._rowModels.filteredRowModel || (e._rowModels.filteredRowModel = e.options.features.filteredRowModel?.(e)), e.options.manualFiltering || !e._rowModels.filteredRowModel ? e.getPreFilteredRowModel() : e._rowModels.filteredRowModel();
}
function jo(e) {
	return e.getFilteredRowModel();
}
function Mo(e) {
	return e._rowModels.groupedRowModel || (e._rowModels.groupedRowModel = e.options.features.groupedRowModel?.(e)), e.options.manualGrouping || !e._rowModels.groupedRowModel ? e.getPreGroupedRowModel() : e._rowModels.groupedRowModel();
}
function No(e) {
	return e.getGroupedRowModel();
}
function Po(e) {
	return e._rowModels.sortedRowModel || (e._rowModels.sortedRowModel = e.options.features.sortedRowModel?.(e)), e.options.manualSorting || !e._rowModels.sortedRowModel ? e.getPreSortedRowModel() : e._rowModels.sortedRowModel();
}
function Fo(e) {
	return e.getSortedRowModel();
}
function Io(e) {
	return e._rowModels.expandedRowModel || (e._rowModels.expandedRowModel = e.options.features.expandedRowModel?.(e)), e.options.manualExpanding || !e._rowModels.expandedRowModel ? e.getPreExpandedRowModel() : e._rowModels.expandedRowModel();
}
function Lo(e) {
	return e.getExpandedRowModel();
}
function Ro(e) {
	return e._rowModels.paginatedRowModel || (e._rowModels.paginatedRowModel = e.options.features.paginatedRowModel?.(e)), e.options.manualPagination || !e._rowModels.paginatedRowModel ? e.getPrePaginatedRowModel() : e._rowModels.paginatedRowModel();
}
function zo(e) {
	return e.getPaginatedRowModel();
}
var Bo = { constructTableAPIs: (e) => {
	ka(`coreRowModelsFeature`, e, {
		table_getCoreRowModel: { fn: () => Oo(e) },
		table_getPreFilteredRowModel: { fn: () => ko(e) },
		table_getFilteredRowModel: { fn: () => Ao(e) },
		table_getPreGroupedRowModel: { fn: () => jo(e) },
		table_getGroupedRowModel: { fn: () => Mo(e) },
		table_getPreSortedRowModel: { fn: () => No(e) },
		table_getSortedRowModel: { fn: () => Po(e) },
		table_getPreExpandedRowModel: { fn: () => Fo(e) },
		table_getExpandedRowModel: { fn: () => Io(e) },
		table_getPrePaginatedRowModel: { fn: () => Lo(e) },
		table_getPaginatedRowModel: { fn: () => Ro(e) },
		table_getRowModel: { fn: () => zo(e) }
	});
} };
function Vo(e) {
	if (!e._cellPrototype) {
		e._cellPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignCellPrototype?.(e._cellPrototype, e);
	}
	return e._cellPrototype;
}
function Ho(e, t, n) {
	let r = Vo(n), i = Object.create(r);
	i.column = e, i.id = `${t.id}_${e.id}`, i.row = t;
	let a = n._cellInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
function Uo(e) {
	let t = e.table.getRowsInDisplayOrder(), n = e._displayIndexCache;
	return t[n] === e ? n : -1;
}
function Wo(e) {
	let t = e.getPrePaginatedRowModel(), n = e.options.paginateExpandedRows === !1 ? Ua(e, t).rows : t.rows;
	for (let e = 0; e < n.length; e++) n[e]._displayIndexCache = e;
	return n;
}
function Go(e, t) {
	if (ha(e._valuesCache, t)) return e._valuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return e._valuesCache[t] = n.accessorFn(e.original, e.index), e._valuesCache[t];
}
function Ko(e, t) {
	if (ha(e._uniqueValuesCache, t)) return e._uniqueValuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return n.columnDef.getUniqueValues ? (e._uniqueValuesCache[t] = n.columnDef.getUniqueValues(e.original, e.index), e._uniqueValuesCache[t]) : (e._uniqueValuesCache[t] = [e.getValue(t)], e._uniqueValuesCache[t]);
}
function qo(e, t) {
	return e.getValue(t) ?? e.table.options.renderFallbackValue;
}
function Jo(e) {
	return wa(e.subRows, (e) => e.subRows);
}
function Yo(e) {
	let t = e.getCoreRowModel().flatRows, n = 0;
	for (let e = 0; e < t.length; e++) n = Math.max(n, t[e].depth);
	return n;
}
function Xo(e) {
	if (e.parentId) return e.table.getCoreRowModel().rowsById[e.parentId] ?? e.table.getRow(e.parentId, !0);
}
function Zo(e) {
	let t = [], n = e;
	for (;;) {
		let e = n.getParentRow();
		if (!e) break;
		t.push(e), n = e;
	}
	return t.reverse();
}
function Qo(e) {
	let t = e.table.getAllLeafColumns(), n = e._cellsCache;
	n ||= e._cellsCache = new WeakMap();
	let r = Array(t.length);
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = n.get(a);
		o || (o = Ho(a, e, e.table), n.set(a, o)), r[i] = o;
	}
	return r;
}
function $o(e) {
	let t = Z(), n = e.getAllCells();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.column.id] = r;
	}
	return t;
}
function es(e, t, n, r) {
	return t.options.getRowId?.(e, n, r) ?? (r ? `${r.id}.${n}` : String(n));
}
function ts(e, t, n) {
	let r = (n ? e.getPrePaginatedRowModel() : e.getRowModel()).rowsById[t];
	if (!r && (r = e.getCoreRowModel().rowsById[t], !r)) throw Error();
	return r;
}
var ns = {
	assignRowPrototype: (e, t) => {
		Aa(`coreRowsFeature`, e, t, {
			row_getDisplayIndex: { fn: (e) => Uo(e) },
			row_getAllCellsByColumnId: {
				fn: (e) => $o(e),
				memoDeps: (e) => [e.getAllCells()]
			},
			row_getAllCells: {
				fn: (e) => Qo(e),
				memoDeps: (e) => [e.table.getAllLeafColumns()]
			},
			row_getLeafRows: {
				fn: (e) => Jo(e),
				memoDeps: (e) => [e.subRows]
			},
			row_getParentRow: { fn: (e) => Xo(e) },
			row_getParentRows: { fn: (e) => Zo(e) },
			row_getUniqueValues: { fn: (e, t) => Ko(e, t) },
			row_getValue: { fn: (e, t) => Go(e, t) },
			row_renderValue: { fn: (e, t) => qo(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		ka(`coreRowsFeature`, e, {
			table_getRowsInDisplayOrder: {
				fn: () => Wo(e),
				memoDeps: () => [
					e.getPrePaginatedRowModel().rows,
					e.options.paginateExpandedRows,
					e.options.paginateExpandedRows === !1 ? e.atoms.expanded?.get() : void 0
				]
			},
			table_getRowId: { fn: (t, n, r) => es(t, e, n, r) },
			table_getRow: { fn: (t, n) => ts(e, t, n) },
			table_getMaxSubRowDepth: {
				fn: () => Yo(e),
				memoDeps: () => [e.getCoreRowModel()]
			}
		});
	}
};
function rs(e, t, n = (e, t) => e === t) {
	let r = t === void 0 ? e.options.state : t;
	e._reactivity.batch(() => {
		if (r) for (let t in r) {
			let i = e.baseAtoms[t];
			if (!i) continue;
			let a = r[t], o = a === void 0 ? e.initialState[t] : a;
			n(e._reactivity.untrack(() => i.get()), o) || i.set(() => o);
		}
	});
}
function is(e, t, n = (e, t) => e === t) {
	e._reactivity.batch(() => {
		rs(e, t, n), e._reactivity.commit?.();
	});
}
function as(e) {
	let t = pa(e.initialState);
	e._reactivity.batch(() => {
		let n = Object.keys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r];
			e.baseAtoms[i].set(t[i]);
		}
	});
	let n = Object.values(e._features);
	for (let t = 0; t < n.length; t++) n[t].resetTableInstanceData?.(e);
}
function os(e, t) {
	let { features: n, atoms: r, initialState: i } = e.options;
	if (!e.options.mergeOptions) return {
		...e.options,
		...t,
		features: n,
		atoms: r,
		initialState: i
	};
	let a = e.options.mergeOptions(e.options, t), o = { ...Object.getOwnPropertyDescriptors(a) };
	return Object.defineProperties(Object.create(Object.getPrototypeOf(a)), {
		...o,
		features: {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		atoms: {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		initialState: {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}
	});
}
function ss(e, t, n) {
	let r = os(e, fa(t, e.options));
	e.optionsStore ? e.optionsStore.set(() => r) : e.options = r, n?.syncExternalState !== !1 && is(e, r.state ?? null);
}
var cs = {
	coreCellsFeature: Pa,
	coreColumnsFeature: io,
	coreHeadersFeature: So,
	coreRowModelsFeature: Bo,
	coreRowsFeature: ns,
	coreTablesFeature: { constructTableAPIs: (e) => {
		ka(`coreTablesFeature`, e, {
			table_reset: { fn: () => as(e) },
			table_setOptions: { fn: (t) => ss(e, t) }
		});
	} }
};
function ls(e) {
	return e;
}
function us(e, t = {}) {
	return Object.values(e).forEach((e) => {
		t = e.getInitialState?.(t) ?? t;
	}), pa(t);
}
function ds(e) {
	let t = e.features.coreReactivityFeature, { aggregationFns: n, columnMeta: r, coreRowModel: i, expandedRowModel: a, facetedMinMaxValues: o, facetedRowModel: s, facetedUniqueValues: c, filterFns: l, filterMeta: u, filteredRowModel: d, groupedRowModel: f, paginatedRowModel: p, sortFns: m, sortedRowModel: h, tableMeta: g, ..._ } = e.features, v = {
		_cellInstanceInitFns: [],
		_columnInstanceInitFns: [],
		_features: {
			...cs,
			..._
		},
		_headerGroupInstanceInitFns: [],
		_headerInstanceInitFns: [],
		_reactivity: t,
		_rowInstanceInitFns: [],
		_rowModelFns: {
			aggregationFns: n,
			filterFns: l,
			sortFns: m
		},
		_rowModels: {},
		atoms: {},
		baseAtoms: {}
	}, y = Object.values(v._features), b = {
		...y.reduce((e, t) => Object.assign(e, t.getDefaultTableOptions?.(v)), {}),
		...e
	};
	if (t.wrapExternalAtoms && b.atoms) for (let [e, n] of Object.entries(b.atoms)) {
		let r = n, i = t.createWritableAtom(r.get(), { debugName: `externalAtom/${e}` });
		b.atoms[e] = i;
		let a = !1, o = r.subscribe((e) => {
			a || i.set(e);
		}), s = i.subscribe((e) => {
			a = !0, r.set(e), a = !1;
		});
		t.addSubscription(o), t.addSubscription(s);
	}
	t.createOptionsStore ? (v.optionsStore = t.createWritableAtom(b, { debugName: `table/optionsStore` }), Object.defineProperty(v, "options", {
		configurable: !0,
		enumerable: !0,
		get() {
			return v.optionsStore.get();
		},
		set(e) {
			v.optionsStore.set(() => e);
		}
	})) : v.options = b, v.initialState = us(v._features, v.options.initialState);
	let x = Object.keys(v.initialState);
	for (let e = 0; e < x.length; e++) {
		let n = x[e];
		v.baseAtoms[n] = t.createWritableAtom(v.initialState[n], { debugName: `table/baseAtoms/${n}` }), v.atoms[n] = t.createReadonlyAtom(() => {
			let e = v.options, t = e.atoms?.[n], r = t ? t.get() : v.baseAtoms[n].get();
			if (t) return r;
			let i = e.state;
			if (i && ha(i, n)) {
				let e = i[n];
				return e === void 0 ? v.initialState[n] : e;
			}
			return r;
		}, { debugName: `table/atoms/${n}` });
	}
	rs(v), v.store = ca(t.createReadonlyAtom(() => {
		let e = {};
		for (let t = 0; t < x.length; t++) {
			let n = x[t];
			e[n] = v.atoms[n].get();
		}
		return e;
	}, {
		compare: ta,
		debugName: `table/store`
	}));
	for (let e = 0; e < y.length; e++) {
		let t = y[e];
		t.initTableInstanceData?.(v), t.initCellInstanceData && v._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)), t.initColumnInstanceData && v._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)), t.initHeaderGroupInstanceData && v._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)), t.initHeaderInstanceData && v._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)), t.initRowInstanceData && v._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)), t.constructTableAPIs?.(v);
	}
	return v;
}
function fs() {
	return [];
}
function ps(e) {
	let t = e.table._rowModelFns.filterFns, n = e.table.getCoreRowModel().flatRows, r;
	for (let t = 0; t < n.length; t++) {
		let i = n[t].getValue(e.id);
		if (i != null) {
			r = i;
			break;
		}
	}
	let i;
	return i = typeof r == `string` ? `includesString` : typeof r == `number` ? `inNumberRange` : typeof r == `boolean` ? `equals` : Array.isArray(r) ? `arrIncludes` : Object.prototype.toString.call(r) === `[object Date]` ? `inDateRange` : typeof r == `object` && r ? `equals` : `weakEquals`, t?.[i];
}
function ms(e) {
	let t = null, n = e.table._rowModelFns.filterFns;
	return t = Ca(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === `auto` ? ps(e) : n?.[e.columnDef.filterFn], t ?? void 0;
}
function hs(e) {
	return (e.columnDef.enableColumnFilter ?? !0) && (e.table.options.enableColumnFilters ?? !0) && (e.table.options.enableFilters ?? !0) && !!e.accessorFn;
}
function gs(e) {
	return vs(e) > -1;
}
function _s(e) {
	return e.table.atoms.columnFilters?.get()?.find((t) => t.id === e.id)?.value;
}
function vs(e) {
	return e.table.atoms.columnFilters?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function ys(e, t) {
	bs(e.table, (n) => {
		let r = ms(e), i = n.find((t) => t.id === e.id), a = fa(t, i ? i.value : void 0);
		if (Ss(r, a, e)) return n.filter((t) => t.id !== e.id);
		let o = {
			id: e.id,
			value: a
		};
		return i ? n.map((t) => t.id === e.id ? o : t) : n.length ? [...n, o] : [o];
	});
}
function bs(e, t) {
	let n = e.getAllLeafColumnsById();
	Sa(e, `columnFilters`, (e) => fa(t, e).filter((e) => {
		let t = n[e.id];
		return !(t && Ss(ms(t), e.value, t));
	}));
}
function xs(e, t) {
	bs(e, t ? [] : pa(e.initialState.columnFilters ?? []));
}
function Ss(e, t, n) {
	return t === void 0 ? !0 : e?.autoRemove ? !!e.autoRemove(t, n) : typeof t == `string` && !t;
}
var Cs = {
	getInitialState: (e) => ({
		columnFilters: fs(),
		...e
	}),
	getDefaultColumnDef: () => ({ filterFn: `auto` }),
	getDefaultTableOptions: (e) => ({
		onColumnFiltersChange: ga(`columnFilters`, e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	assignColumnPrototype: (e, t) => {
		Aa(`columnFilteringFeature`, e, t, {
			column_getAutoFilterFn: { fn: (e) => ps(e) },
			column_getFilterFn: { fn: (e) => ms(e) },
			column_getCanFilter: { fn: (e) => hs(e) },
			column_getIsFiltered: { fn: (e) => gs(e) },
			column_getFilterValue: { fn: (e) => _s(e) },
			column_getFilterIndex: { fn: (e) => vs(e) },
			column_setFilterValue: { fn: (e, t) => ys(e, t) }
		});
	},
	initRowInstanceData: (e) => {
		e.columnFilters = Z(), e.columnFiltersMeta = Z();
	},
	constructTableAPIs: (e) => {
		ka(`columnFilteringFeature`, e, {
			table_setColumnFilters: { fn: (t) => bs(e, t) },
			table_resetColumnFilters: { fn: (t) => xs(e, t) }
		});
	}
};
function ws(e) {
	let t = Object.assign((e, n, r, i) => {
		let a = e.getValue(n), o = t.resolveDataValue ? t.resolveDataValue(a) : a;
		return t.filter(o, r, e, n, i);
	}, e);
	return t;
}
var Ts = ws({
	filter: (e, t) => !!e?.includes(t),
	autoRemove: (e) => Es(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
});
function Es(e) {
	return e == null || e === ``;
}
function Ds(e) {
	return (e.columnDef.enableGlobalFilter ?? !0) && (e.table.options.enableGlobalFilter ?? !0) && (e.table.options.enableFilters ?? !0) && (e.table.options.getColumnCanGlobalFilter?.(e) ?? !0) && !!e.accessorFn;
}
function Os() {
	return Ts;
}
function ks(e) {
	let { globalFilterFn: t } = e.options, n = e._rowModelFns.filterFns;
	return Ca(t) ? t : t === `auto` ? Os() : n?.[t];
}
function As(e, t) {
	e.options.onGlobalFilterChange?.(t);
}
function js(e, t) {
	As(e, t ? void 0 : pa(e.initialState.globalFilter));
}
var Ms = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultTableOptions: (e) => ({
		onGlobalFilterChange: ga(`globalFilter`, e),
		globalFilterFn: `auto`,
		getColumnCanGlobalFilter: (t) => {
			if (`enableGlobalFilter` in t.columnDef && t.columnDef.enableGlobalFilter === !0) return !0;
			let n = e.getCoreRowModel().flatRows.find((e) => e.getAllCellsByColumnId()[t.id]?.getValue() != null)?.getAllCellsByColumnId()[t.id]?.getValue();
			return typeof n == `string` || typeof n == `number`;
		}
	}),
	assignColumnPrototype: (e, t) => {
		Aa(`globalFilteringFeature`, e, t, { column_getCanGlobalFilter: { fn: (e) => Ds(e) } });
	},
	constructTableAPIs: (e) => {
		ka(`globalFilteringFeature`, e, {
			table_getGlobalAutoFilterFn: { fn: () => Os() },
			table_getGlobalFilterFn: { fn: () => ks(e) },
			table_setGlobalFilter: { fn: (t) => As(e, t) },
			table_resetGlobalFilter: { fn: (t) => js(e, t) }
		});
	}
}, Ns = 0, Ps = 10;
function Fs() {
	return {
		pageIndex: Ns,
		pageSize: Ps
	};
}
function Is(e) {
	if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
		if ((e.atoms.pagination?.get()?.pageIndex ?? Ns) === Ns) return;
		Bs(e, !0);
	}
}
function Ls(e, t) {
	Sa(e, `pagination`, t);
}
function Rs(e, t) {
	Ls(e, t ? Fs() : pa(e.initialState.pagination ?? Fs()));
}
function zs(e, t) {
	Ls(e, (n) => {
		let r = fa(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
		return r = Math.max(0, Math.min(r, i)), {
			...n,
			pageIndex: r
		};
	});
}
function Bs(e, t) {
	zs(e, t ? Ns : e.initialState.pagination?.pageIndex ?? Ns);
}
function Vs(e, t) {
	Hs(e, t ? Ps : e.initialState.pagination?.pageSize ?? Ps);
}
function Hs(e, t) {
	Ls(e, (e) => {
		let n = Math.max(1, fa(t, e.pageSize)), r = e.pageSize === 1 / 0 ? 0 : e.pageSize * e.pageIndex, i = n === 1 / 0 ? 0 : Math.floor(r / n);
		return {
			...e,
			pageIndex: i,
			pageSize: n
		};
	});
}
function Us(e) {
	let t = Zs(e), n = [];
	return t && t > 0 && (n = [...Array(t)].fill(null).map((e, t) => t)), n;
}
function Ws(e) {
	return (e.atoms.pagination?.get()?.pageIndex ?? 0) > 0;
}
function Gs(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Ns, n = Zs(e);
	return n === -1 || n !== 0 && t < n - 1;
}
function Ks(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Ns, n = Zs(e);
	return Number.isFinite(n) && n > 0 && t < n - 1;
}
function qs(e) {
	return zs(e, (e) => e - 1);
}
function Js(e) {
	return zs(e, (e) => e + 1);
}
function Ys(e) {
	return zs(e, 0);
}
function Xs(e) {
	let t = Zs(e);
	if (!(!Number.isFinite(t) || t <= 0)) return zs(e, t - 1);
}
function Zs(e) {
	let t = e.options.pageCount;
	if (t != null) return t;
	let n = Qs(e), r = e.atoms.pagination?.get()?.pageSize ?? Ps;
	return r === 1 / 0 && Number.isFinite(n) && n > 0 ? 1 : Math.ceil(n / r);
}
function Qs(e) {
	return e.options.rowCount ?? e.getPrePaginatedRowModel().rows.length;
}
var $s = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...Fs(),
			...e.pagination
		}
	}),
	getDefaultTableOptions: (e) => ({ onPaginationChange: ga(`pagination`, e) }),
	constructTableAPIs: (e) => {
		ka(`rowPaginationFeature`, e, {
			table_autoResetPageIndex: { fn: () => Is(e) },
			table_setPagination: { fn: (t) => Ls(e, t) },
			table_resetPagination: { fn: (t) => Rs(e, t) },
			table_setPageIndex: { fn: (t) => zs(e, t) },
			table_resetPageIndex: { fn: (t) => Bs(e, t) },
			table_setPageSize: { fn: (t) => Hs(e, t) },
			table_getPageCount: { fn: () => Zs(e) },
			table_resetPageSize: { fn: (t) => Vs(e, t) },
			table_getPageOptions: { fn: () => Us(e) },
			table_getCanPreviousPage: { fn: () => Ws(e) },
			table_getCanNextPage: { fn: () => Gs(e) },
			table_getCanLastPage: { fn: () => Ks(e) },
			table_previousPage: { fn: () => qs(e) },
			table_nextPage: { fn: () => Js(e) },
			table_firstPage: { fn: () => Ys(e) },
			table_lastPage: { fn: () => Xs(e) },
			table_getRowCount: { fn: () => Qs(e) }
		});
	}
}, ec = /([0-9]+)/gm;
function tc(e) {
	let t = Object.assign((e, n, r) => {
		let i = e.getValue(r), a = n.getValue(r), o = t.resolveDataValue;
		return o && (i = o(i), a = o(a)), t.sort(i, a, e, n, r);
	}, e);
	return t;
}
var nc = tc({
	resolveDataValue: (e) => sc(e).toLowerCase(),
	sort: (e, t) => cc(e, t)
}), rc = tc({
	resolveDataValue: (e) => oc(e),
	sort: (e, t) => e > t ? 1 : e < t ? -1 : 0
}), ic = tc({ sort: (e, t) => ac(e, t) });
function ac(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function oc(e) {
	return e instanceof Date ? e.getTime() : e;
}
function sc(e) {
	return typeof e == `number` ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? `` : String(e) : typeof e == `string` ? e : ``;
}
function cc(e, t) {
	let n = 0, r = 0, i = e.length, a = t.length;
	for (; n < i && r < a;) {
		let i = lc(e.charCodeAt(n)), a = lc(t.charCodeAt(r)), o = uc(e, n, i), s = uc(t, r, a);
		if (!i && !a) {
			let i = dc(e, n, o, t, r, s);
			if (i) return i;
			n = o, r = s;
			continue;
		}
		if (i !== a) return i ? 1 : -1;
		let c = fc(e, n, o, t, r, s);
		if (c) return c;
		n = o, r = s;
	}
	return mc(e, n) - mc(t, r);
}
function lc(e) {
	return e >= 48 && e <= 57;
}
function uc(e, t, n) {
	let r = t + 1;
	for (; r < e.length && lc(e.charCodeAt(r)) === n;) r++;
	return r;
}
function dc(e, t, n, r, i, a) {
	let o = n - t, s = a - i, c = o < s ? o : s;
	for (let n = 0; n < c; n++) {
		let a = e.charCodeAt(t + n), o = r.charCodeAt(i + n);
		if (a > o) return 1;
		if (o > a) return -1;
	}
	return o > s ? 1 : s > o ? -1 : 0;
}
function fc(e, t, n, r, i, a) {
	let o = t;
	for (; o < n && e.charCodeAt(o) === 48;) o++;
	let s = i;
	for (; s < a && r.charCodeAt(s) === 48;) s++;
	let c = n - o, l = a - s;
	if (c === 0 && l === 0) return 0;
	if (c <= 15 && l <= 15) {
		let t = pc(e, o, n), i = pc(r, s, a);
		return t > i ? 1 : i > t ? -1 : 0;
	}
	let u = parseInt(e.slice(t, n), 10), d = parseInt(r.slice(i, a), 10);
	return u > d ? 1 : d > u ? -1 : 0;
}
function pc(e, t, n) {
	let r = 0;
	for (let i = t; i < n; i++) r = r * 10 + e.charCodeAt(i) - 48;
	return r;
}
function mc(e, t) {
	let n = 0, r = t;
	for (; r < e.length;) n++, r = uc(e, r, lc(e.charCodeAt(r)));
	return n;
}
function hc() {
	return [];
}
function gc(e, t) {
	Sa(e, `sorting`, t);
}
function _c(e, t) {
	gc(e, t ? [] : pa(e.initialState.sorting ?? []));
}
function vc(e) {
	e.atoms.sorting && (e.options.autoResetAll ?? e.options.autoResetSorting ?? !1) && _c(e);
}
function yc(e) {
	let t = e.table._rowModelFns.sortFns, n = e.table.getFilteredRowModel().flatRows.slice(0, 10), r, i = !1;
	for (let t = 0; t < n.length; t++) {
		let a = n[t].getValue(e.id);
		if (Object.prototype.toString.call(a) === `[object Date]`) {
			r = `datetime`;
			break;
		}
		if (typeof a == `string` && (i = !0, a.split(ec).length > 1)) {
			r = `alphanumeric`;
			break;
		}
	}
	if (!r && i && (r = `text`), r) {
		let e = t?.[r];
		if (e || r === `alphanumeric` && (e = t?.text), e) return e;
	}
	return ic;
}
function bc(e) {
	let t = e.table.getFilteredRowModel().flatRows.slice(0, 10);
	for (let n = 0; n < t.length; n++) {
		let r = t[n].getValue(e.id);
		if (r != null) return typeof r == `string` ? `asc` : `desc`;
	}
	return `desc`;
}
function xc(e) {
	let t = e.table._rowModelFns.sortFns;
	return Ca(e.columnDef.sortFn) ? e.columnDef.sortFn : e.columnDef.sortFn === `auto` ? yc(e) : t?.[e.columnDef.sortFn] ?? ic;
}
function Sc(e, t, n) {
	let r = wc(e, n && Ec(e)), i = t !== void 0;
	gc(e.table, (a) => {
		let o = a.findIndex((t) => t.id === e.id), s = o === -1 ? void 0 : a[o], c = [], l, u = i ? t : r === `desc`, d = !!(a.length && Ec(e) && n);
		return l = d ? s ? `toggle` : `add` : s ? `toggle` : `replace`, l === `toggle` && (i || r || (l = `remove`)), l === `add` ? (c = [...a, {
			id: e.id,
			desc: u
		}], c.splice(0, c.length - (e.table.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : c = l === `toggle` ? d ? a.map((t) => t.id === e.id ? {
			...t,
			desc: u
		} : t) : [{
			id: e.id,
			desc: u
		}] : l === `remove` ? d ? a.filter((t) => t.id !== e.id) : [] : [{
			id: e.id,
			desc: u
		}], c;
	});
}
function Cc(e) {
	return e.columnDef.sortDescFirst ?? e.table.options.sortDescFirst ?? bc(e) === `desc` ? `desc` : `asc`;
}
function wc(e, t) {
	let n = Cc(e), r = Dc(e);
	return r ? r !== n && (e.table.options.enableSortingRemoval ?? !0) && (!t || (e.table.options.enableMultiRemove ?? !0)) ? !1 : r === `desc` ? `asc` : `desc` : n;
}
function Tc(e) {
	return (e.columnDef.enableSorting ?? !0) && (e.table.options.enableSorting ?? !0) && !!e.accessorFn;
}
function Ec(e) {
	return e.columnDef.enableMultiSort ?? e.table.options.enableMultiSort ?? !!e.accessorFn;
}
function Dc(e) {
	let t = e.table.atoms.sorting?.get()?.find((t) => t.id === e.id);
	return t ? t.desc ? `desc` : `asc` : !1;
}
function Oc(e) {
	return e.table.atoms.sorting?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function kc(e) {
	gc(e.table, (t) => t.length ? t.filter((t) => t.id !== e.id) : []);
}
function Ac(e) {
	let t = Tc(e);
	return (n) => {
		t && Sc(e, void 0, Ec(e) ? e.table.options.isMultiSortEvent?.(n) : !1);
	};
}
var jc = {
	getInitialState(e) {
		return {
			sorting: hc(),
			...e
		};
	},
	getDefaultColumnDef() {
		return {
			sortFn: `auto`,
			sortUndefined: 1
		};
	},
	getDefaultTableOptions(e) {
		return {
			autoResetSorting: !1,
			onSortingChange: ga(`sorting`, e),
			isMultiSortEvent: (e) => e.shiftKey
		};
	},
	assignColumnPrototype(e, t) {
		Aa(`rowSortingFeature`, e, t, {
			column_getAutoSortFn: { fn: (e) => yc(e) },
			column_getAutoSortDir: { fn: (e) => bc(e) },
			column_getSortFn: { fn: (e) => xc(e) },
			column_toggleSorting: { fn: (e, t, n) => Sc(e, t, n) },
			column_getFirstSortDir: { fn: (e) => Cc(e) },
			column_getNextSortingOrder: { fn: (e, t) => wc(e, t) },
			column_getCanSort: { fn: (e) => Tc(e) },
			column_getCanMultiSort: { fn: (e) => Ec(e) },
			column_getIsSorted: { fn: (e) => Dc(e) },
			column_getSortIndex: { fn: (e) => Oc(e) },
			column_clearSorting: { fn: (e) => kc(e) },
			column_getToggleSortingHandler: { fn: (e) => Ac(e) }
		});
	},
	constructTableAPIs(e) {
		ka(`rowSortingFeature`, e, {
			table_autoResetSorting: { fn: () => vc(e) },
			table_setSorting: { fn: (t) => gc(e, t) },
			table_resetSorting: { fn: (t) => _c(e, t) }
		});
	}
};
function Mc(e, t, n) {
	return n.options.filterFromLeafRows ? Nc(e, t, n) : Pc(e, t, n);
}
function Nc(e, t, n) {
	let r = [], i = Z(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, r = 0) => {
		let i = [];
		for (let s of e) {
			let e = wo(n, s.id, s.original, s.index, s.depth, void 0, s.parentId);
			e.columnFilters = s.columnFilters, e.columnFiltersMeta = s.columnFiltersMeta, s.subRows.length && r < a ? (e.subRows = o(s.subRows, r + 1), (e.subRows.length || t(e)) && i.push(e)) : t(e) && (e.subRows = s.subRows, i.push(e));
		}
		return i;
	}, s = o(e);
	return Fc(s, r, i), {
		rows: s,
		flatRows: r,
		rowsById: i
	};
}
function Pc(e, t, n) {
	let r = [], i = Z(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, s = 0) => {
		let c = [];
		for (let l of e) if (t(l)) {
			if (l.subRows.length && s < a) {
				let e = wo(n, l.id, l.original, l.index, l.depth, void 0, l.parentId), t = l;
				e.columnFilters = t.columnFilters, e.columnFiltersMeta = t.columnFiltersMeta, c.push(e), r.push(e), i[e.id] = e, e.subRows = o(l.subRows, s + 1);
			} else c.push(l), r.push(l), i[l.id] = l, l.subRows.length && s >= a && Fc(l.subRows, r, i);
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function Fc(e, t, n) {
	for (let r of e) t.push(r), n[r.id] = r, r.subRows.length && Fc(r.subRows, t, n);
}
function Ic() {
	return (e) => {
		let t = e;
		return Da({
			feature: `columnFilteringFeature`,
			table: t,
			fnName: `table.getFilteredRowModel`,
			memoDeps: () => [
				t.getPreFilteredRowModel(),
				t.atoms.columnFilters?.get(),
				t.atoms.globalFilter?.get()
			],
			fn: () => Lc(t),
			onAfterUpdate: Ea(() => Ga(t))
		});
	};
}
function Lc(e) {
	let t = e.getPreFilteredRowModel(), n = e.atoms.columnFilters?.get(), r = e.atoms.globalFilter?.get(), i = r != null && r !== ``;
	if (!t.rows.length || !n?.length && !i) {
		let e = t.flatRows;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			n.columnFilters = Z(), n.columnFiltersMeta = Z();
		}
		return t;
	}
	let a = [], o = [];
	n?.forEach((t) => {
		let n = ro(e, t.id);
		if (!n) return;
		let r = ms(n);
		r && a.push({
			id: t.id,
			filterFn: r,
			resolvedValue: r.resolveFilterValue?.(t.value) ?? t.value
		});
	});
	let s = n?.map((e) => e.id) ?? [];
	if (i) {
		let t = Va(e), n = t ? e.getAllLeafColumns().filter(Ha) : [];
		t && n.length && (s.push(`__global__`), n.forEach((e) => {
			o.push({
				id: e.id,
				filterFn: t,
				resolvedValue: t.resolveFilterValue?.(r) ?? r
			});
		}));
	}
	let c = t.flatRows;
	for (let e = 0; e < c.length; e++) {
		let t = c[e];
		if (t.columnFilters = Z(), t.columnFiltersMeta = Z(), a.length) for (let e = 0; e < a.length; e++) {
			let n = a[e], r = n.id;
			t.columnFilters[r] = n.filterFn(t, r, n.resolvedValue, (e) => {
				t.columnFiltersMeta ||= Z(), t.columnFiltersMeta[r] = e;
			});
		}
		if (o.length) {
			for (let e = 0; e < o.length; e++) {
				let n = o[e], r = n.id;
				if (n.filterFn(t, r, n.resolvedValue, (e) => {
					t.columnFiltersMeta ||= Z(), t.columnFiltersMeta[r] = e;
				})) {
					t.columnFilters.__global__ = !0;
					break;
				}
			}
			t.columnFilters.__global__ !== !0 && (t.columnFilters.__global__ = !1);
		}
	}
	return Mc(t.rows, (e) => {
		for (let t = 0; t < s.length; t++) if (e.columnFilters[s[t]] === !1) return !1;
		return !0;
	}, e);
}
function Rc() {
	return (e) => {
		let t = e;
		return Da({
			feature: `rowPaginationFeature`,
			table: t,
			fnName: `table.getPaginatedRowModel`,
			memoDeps: () => [
				t.getPrePaginatedRowModel(),
				t.atoms.pagination?.get(),
				t.options.paginateExpandedRows ? void 0 : t.atoms.expanded?.get()
			],
			fn: () => zc(t)
		});
	};
}
function zc(e) {
	let t = e.getPrePaginatedRowModel(), n = e.atoms.pagination?.get();
	if (!t.rows.length) return t;
	let { pageSize: r, pageIndex: i } = n ?? Fs(), { rows: a, flatRows: o, rowsById: s } = t, c = a;
	if (r !== 1 / 0 || i !== 0) {
		let e = r * i, t = e + r;
		c = a.slice(e, t);
	}
	let l;
	l = e.options.paginateExpandedRows ? {
		rows: c,
		flatRows: o,
		rowsById: s
	} : Ua(e, {
		rows: c,
		flatRows: o,
		rowsById: s
	}), l.flatRows = [];
	let u = new Set(), d = (e) => {
		u.has(e.id) || (u.add(e.id), l.flatRows.push(e), e.subRows.length && e.subRows.forEach(d));
	};
	return l.rows.forEach(d), l;
}
function Bc() {
	return (e) => {
		let t = e;
		return Da({
			feature: `rowSortingFeature`,
			table: t,
			fnName: `table.getSortedRowModel`,
			memoDeps: () => [t.atoms.sorting?.get(), t.getPreSortedRowModel()],
			fn: () => Vc(t),
			onAfterUpdate: Ea(() => Ga(t))
		});
	};
}
function Vc(e) {
	let t = e.getPreSortedRowModel(), n = e.atoms.sorting?.get();
	if (!t.rows.length || !n?.length) return t;
	let r = [], i = n.filter((t) => {
		let n = e.getColumn(t.id);
		return n ? Tc(n) : !1;
	});
	if (!i.length) return t;
	let a = [];
	for (let t = 0; t < i.length; t++) {
		let n = i[t], r = e.getColumn(n.id);
		r && a.push({
			id: n.id,
			desc: n.desc,
			sortUndefined: r.columnDef.sortUndefined,
			invertSorting: r.columnDef.invertSorting,
			sortFn: xc(r)
		});
	}
	let o = (e, t) => {
		for (let n = 0; n < a.length; n++) {
			let r = a[n], i = r.sortUndefined, o = r.desc, s = 0;
			if (i) {
				let n = e.getValue(r.id), a = t.getValue(r.id), o = n === void 0, c = a === void 0;
				if (o && c) continue;
				if (o || c) {
					if (i === `first`) return o ? -1 : 1;
					if (i === `last`) return o ? 1 : -1;
					s = o ? i : -i;
				}
			}
			if (s === 0 && (s = r.sortFn(e, t, r.id)), s !== 0) return o && (s *= -1), r.invertSorting && (s *= -1), s;
		}
		return e.index - t.index;
	}, s = (e) => {
		let t = e.slice();
		t.sort(o);
		let n = !1;
		for (let i = 0; i < t.length; i++) {
			let a = t[i];
			a !== e[i] && (n = !0);
			let o = r.length;
			if (r.push(a), a.subRows.length) {
				let e = s(a.subRows);
				if (e.changed) {
					let s = Object.create(Object.getPrototypeOf(a));
					ma(s, a), s.subRows = e.rows, t[i] = s, r[o] = s, n = !0;
				}
			}
		}
		return {
			rows: t,
			changed: n
		};
	};
	return {
		rows: s(t.rows).rows,
		flatRows: r,
		rowsById: t.rowsById
	};
}
var Hc = typeof window > `u` ? K.useEffect : K.useLayoutEffect;
function Uc(e, t) {
	let [{ table: n, rootSource: r }] = (0, K.useState)(() => {
		let t = ds({
			...e,
			features: {
				coreReactivityFeature: da(),
				...e.features
			}
		});
		return t.Subscribe = ((e) => sa({
			...e,
			source: e.source ?? t.store
		})), t.FlexRender = Li, {
			table: t,
			rootSource: ua(t.store, ta)
		};
	}), i = n;
	ss(i, (t) => ({
		...t,
		...e
	}), { syncExternalState: !1 });
	let a = i.options.state, o = r.get(), s = oa(r, t, { compare: ta });
	return Hc(() => {
		r.markCommitted(o), is(i, a ?? null, ta);
	}), (0, K.useMemo)(() => ({
		...n,
		options: e,
		state: s
	}), [
		n,
		e,
		s
	]);
}
function Wc(e) {
	return e == null ? `` : e instanceof Date ? Number.isNaN(e.getTime()) ? `` : e.toISOString() : String(e);
}
var Gc = /^-?\d+([.,]\d+)?$/;
function Kc(e) {
	let t = Wc(e);
	return /^[=+\-@\t\r]/.test(t) && !Gc.test(t) && (t = `'${t}`), t = t.replace(/([;\t])([=+\-@][^;\t]*)/g, (e, t, n) => Gc.test(n) ? e : `${t}'${n}`), `"${t.replaceAll(`"`, `""`)}"`;
}
function qc(e, t) {
	let n = [t.map((e) => Kc(e.header)).join(`,`)];
	for (let r of e) n.push(t.map((e) => Kc(e.value(r))).join(`,`));
	return `﻿${n.join(`\r
`)}\r\n`;
}
function Jc(e, t) {
	if (typeof document > `u` || typeof URL.createObjectURL != `function`) return;
	let n = URL.createObjectURL(new Blob([t], { type: `text/csv;charset=utf-8` })), r = document.createElement(`a`);
	r.href = n, r.download = e.endsWith(`.csv`) ? e : `${e}.csv`, r.hidden = !0, document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 0);
}
var Q = g(), Yc = {
	more: `action.more`,
	columns: `layout.columns-2`,
	download: `action.download`,
	filter: `action.filter`,
	up: `chevron.up`,
	down: `chevron.down`,
	close: `action.close`,
	arrowUp: `arrow.up`,
	arrowDown: `arrow.down`
};
function Xc({ name: e, className: t }) {
	return (0, Q.jsx)(p, {
		name: Yc[e],
		"aria-hidden": `true`,
		className: _(`size-4 shrink-0`, t)
	});
}
var Zc = [];
function Qc({ facet: e, selected: t, label: n, onChange: r, container: i }) {
	let a = (0, K.useMemo)(() => new Set(t), [t]), o = (0, K.useCallback)((t) => r(e.id, t === `all` ? e.options.map((e) => e.value) : [...t].map(String)), [e, r]), s = (0, K.useMemo)(() => (0, Q.jsxs)(V, {
		variant: `outline`,
		size: `sm`,
		className: _(t.length > 0 && `border-accent bg-accent-soft`),
		children: [
			(0, Q.jsx)(Xc, { name: `filter` }),
			n,
			t.length > 0 ? (0, Q.jsx)(`span`, {
				className: `rounded-full bg-accent px-1.5 text-label font-semibold text-accent-fg tabular-nums`,
				children: t.length
			}) : null
		]
	}), [n, t.length]);
	return (0, Q.jsx)(St, {
		trigger: s,
		selectionMode: `multiple`,
		selectedKeys: a,
		onSelectionChange: o,
		placement: `bottom start`,
		container: i ?? null,
		children: e.options.map((e) => (0, Q.jsx)(wt, {
			id: e.value,
			textValue: e.label,
			children: (0, Q.jsxs)(`span`, {
				className: `flex w-full items-center justify-between gap-4`,
				children: [(0, Q.jsx)(`span`, { children: e.label }), e.count === void 0 ? null : (0, Q.jsx)(`span`, {
					className: `text-caption text-muted tabular-nums`,
					children: e.count
				})]
			})
		}, e.value))
	});
}
function $c({ column: e, value: t, label: n, removeLabel: r, onRemove: i }) {
	let a = (0, K.useCallback)(() => i(e, t), [
		e,
		t,
		i
	]);
	return (0, Q.jsxs)(`li`, {
		className: `inline-flex h-control-sm items-center gap-1 rounded-full border border-accent bg-accent-soft ps-2.5 pe-0.5 text-caption font-medium text-fg`,
		children: [n, (0, Q.jsx)(w, {
			"aria-label": r,
			onPress: a,
			className: `inline-grid size-6 cursor-pointer place-items-center rounded-full text-muted outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-hovered:bg-hover data-hovered:text-fg`,
			children: (0, Q.jsx)(Xc, {
				name: `close`,
				className: `size-3.5`
			})
		})]
	});
}
function el({ column: e, index: t, count: n, isHidden: r, labels: i, onToggle: a, onMove: o }) {
	let s = (0, K.useCallback)(() => a(e.id), [e.id, a]), c = (0, K.useCallback)(() => o(e.id, -1), [e.id, o]), l = (0, K.useCallback)(() => o(e.id, 1), [e.id, o]), u = `inline-grid size-8 cursor-pointer place-items-center rounded-md text-muted outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-hovered:bg-hover data-hovered:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-40`;
	return (0, Q.jsxs)(`li`, {
		className: `flex items-center gap-1`,
		children: [
			(0, Q.jsxs)(`label`, {
				className: `flex min-h-8 flex-1 cursor-pointer items-center gap-2 rounded-md px-1 text-body has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-muted has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid`,
				children: [(0, Q.jsx)(`input`, {
					type: `checkbox`,
					checked: !r,
					disabled: !e.canHide,
					onChange: s,
					className: `size-4 accent-(--sk-accent)`
				}), e.header]
			}),
			i.moveColumnUp ? (0, Q.jsx)(w, {
				"aria-label": i.moveColumnUp(e.header),
				isDisabled: t === 0,
				onPress: c,
				className: u,
				children: (0, Q.jsx)(Xc, { name: `up` })
			}) : null,
			i.moveColumnDown ? (0, Q.jsx)(w, {
				"aria-label": i.moveColumnDown(e.header),
				isDisabled: t === n - 1,
				onPress: l,
				className: u,
				children: (0, Q.jsx)(Xc, { name: `down` })
			}) : null
		]
	});
}
var tl = (e) => [{
	value: `comfortable`,
	label: e.comfortable ?? ``
}, {
	value: `compact`,
	label: e.compact ?? ``
}];
function nl({ labels: e, state: t, facets: n, columns: r, onState: i, onExport: a, container: o }) {
	let s = (0, K.useCallback)((e) => i({
		search: e,
		page: 0
	}), [i]), c = (0, K.useCallback)((e, n) => {
		let r = { ...t.filters };
		n.length > 0 ? r[e] = n : delete r[e], i({
			filters: r,
			page: 0
		});
	}, [i, t.filters]), l = (0, K.useCallback)((e, n) => c(e, (t.filters[e] ?? []).filter((e) => e !== n)), [c, t.filters]), u = (0, K.useCallback)(() => i({
		filters: {},
		search: ``,
		page: 0
	}), [i]), d = (0, K.useCallback)((e) => i({ hidden: t.hidden.includes(e) ? t.hidden.filter((t) => t !== e) : [...t.hidden, e] }), [i, t.hidden]), f = (0, K.useCallback)((e, t) => {
		let n = r.map((e) => e.id), a = n.indexOf(e), o = a + t;
		a < 0 || o < 0 || o >= n.length || (n.splice(a, 1), n.splice(o, 0, e), i({ order: n }));
	}, [r, i]), p = (0, K.useCallback)((e) => i({ density: e }), [i]), m = (0, K.useMemo)(() => tl(e), [e]), h = (0, K.useMemo)(() => (0, Q.jsxs)(V, {
		variant: `outline`,
		size: `sm`,
		children: [(0, Q.jsx)(Xc, { name: `columns` }), e.columns]
	}), [e.columns]), g = n.flatMap((e) => (t.filters[e.id] ?? []).map((t) => ({
		facet: e,
		value: t,
		label: e.options.find((e) => e.value === t)?.label ?? t
	})));
	return e.search || e.facet && n.length > 0 || e.columns || e.density || e.exportCsv && a ? (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: [
				e.search ? (0, Q.jsx)(Ne, {
					"aria-label": e.search,
					value: t.search,
					onChange: s,
					...e.searchPlaceholder ? { placeholder: e.searchPlaceholder } : {},
					className: `w-full min-w-0 sm:w-64`
				}) : null,
				e.facet ? n.map((n) => (0, Q.jsx)(Qc, {
					facet: n,
					selected: t.filters[n.id] ?? Zc,
					label: e.facet?.(n.header) ?? n.header,
					onChange: c,
					container: o ?? null
				}, n.id)) : null,
				(0, Q.jsx)(`span`, { className: `flex-1` }),
				e.density ? (0, Q.jsx)(U, {
					label: e.density,
					options: m,
					value: t.density,
					onChange: p,
					size: `sm`
				}) : null,
				e.columns ? (0, Q.jsx)(Tt, {
					trigger: h,
					label: e.columns,
					container: o ?? null,
					children: (0, Q.jsx)(`ul`, {
						className: `flex min-w-56 flex-col gap-0.5`,
						children: r.map((n, i) => (0, Q.jsx)(el, {
							column: n,
							index: i,
							count: r.length,
							isHidden: t.hidden.includes(n.id),
							labels: e,
							onToggle: d,
							onMove: f
						}, n.id))
					})
				}) : null,
				e.exportCsv && a ? (0, Q.jsxs)(V, {
					variant: `outline`,
					size: `sm`,
					onPress: a,
					children: [(0, Q.jsx)(Xc, { name: `download` }), e.exportCsv]
				}) : null
			]
		}), g.length > 0 ? (0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: [(0, Q.jsx)(`ul`, {
				className: `flex flex-wrap items-center gap-1.5`,
				children: g.map((t) => (0, Q.jsx)($c, {
					column: t.facet.id,
					value: t.value,
					label: `${t.facet.header}: ${t.label}`,
					removeLabel: e.removeFilter?.(t.facet.header, t.label) ?? `${t.facet.header}: ${t.label}`,
					onRemove: l
				}, `${t.facet.id}:${t.value}`))
			}), e.clearFilters ? (0, Q.jsx)(V, {
				variant: `ghost`,
				size: `sm`,
				onPress: u,
				children: e.clearFilters
			}) : null]
		}) : null]
	}) : null;
}
function rl({ label: e, sizes: t, value: n, optionLabel: r, onChange: i, container: a }) {
	let o = (0, K.useMemo)(() => new Set([String(n)]), [n]), s = (0, K.useCallback)((e) => {
		let t = e === `all` ? void 0 : [...e][0];
		t !== void 0 && i(Number(t));
	}, [i]), c = (0, K.useMemo)(() => (0, Q.jsxs)(V, {
		variant: `ghost`,
		size: `sm`,
		"aria-label": `${e}: ${r(n)}`,
		children: [r(n), (0, Q.jsx)(Xc, {
			name: `down`,
			className: `size-3.5`
		})]
	}), [
		e,
		r,
		n
	]);
	return (0, Q.jsxs)(`span`, {
		className: `inline-flex items-center gap-1 text-caption text-muted`,
		children: [(0, Q.jsx)(`span`, {
			"aria-hidden": !0,
			children: e
		}), (0, Q.jsx)(St, {
			trigger: c,
			selectionMode: `single`,
			selectedKeys: o,
			onSelectionChange: s,
			placement: `top start`,
			container: a ?? null,
			children: t.map((e) => (0, Q.jsx)(wt, {
				id: String(e),
				children: r(e)
			}, e))
		})]
	});
}
function il({ labels: e, page: t, pageSize: n, total: r, sizes: i, onState: a, container: o }) {
	let s = Math.max(1, Math.ceil(r / n)), c = r === 0 ? 0 : t * n + 1, l = Math.min(r, (t + 1) * n), u = (0, K.useCallback)((e) => a({ page: e - 1 }), [a]), d = (0, K.useCallback)((e) => a({
		pageSize: e,
		page: 0
	}), [a]), f = (0, K.useCallback)((t) => e.pageSizeOption?.(t) ?? String(t), [e]);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-caption text-muted`,
		children: [(0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-x-4 gap-y-1`,
			children: [e.range ? (0, Q.jsx)(`span`, {
				className: `tabular-nums`,
				children: e.range(c, l, r)
			}) : null, e.pageSize && i.length > 1 ? (0, Q.jsx)(rl, {
				label: e.pageSize,
				sizes: i,
				value: n,
				optionLabel: f,
				onChange: d,
				container: o ?? null
			}) : null]
		}), e.pagination && e.previous && e.next && e.page && e.pageStatus && s > 1 ? (0, Q.jsx)(`div`, {
			className: `ms-auto min-w-0 grow basis-72 [&>nav]:justify-end`,
			children: (0, Q.jsx)(xt, {
				label: e.pagination,
				page: t + 1,
				pageCount: s,
				onChange: u,
				previousLabel: e.previous,
				nextLabel: e.next,
				pageLabel: e.page,
				statusLabel: e.pageStatus
			})
		}) : null]
	});
}
function al({ columns: e, rows: t, label: n }) {
	let r = Array.from({ length: t }, (e, t) => t), i = Array.from({ length: Math.max(1, e) }, (e, t) => t);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col`,
		children: [(0, Q.jsx)(`output`, {
			className: `sr-only`,
			children: n
		}), (0, Q.jsx)(`div`, {
			"aria-hidden": !0,
			className: `flex flex-col`,
			children: r.map((e) => (0, Q.jsx)(`div`, {
				className: `flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0`,
				children: i.map((e) => (0, Q.jsx)(`span`, { className: _(`h-3 rounded-full bg-sunken motion-safe:animate-pulse [.a11y-reduce-motion_&]:animate-none`, e === 0 ? `w-40` : `flex-1`) }, e))
			}, e))
		})]
	});
}
function ol({ src: e, alt: t = `` }) {
	return (0, Q.jsx)(`img`, {
		src: e,
		alt: t,
		loading: `lazy`,
		decoding: `async`,
		className: `size-10 shrink-0 rounded-md border border-border bg-sunken object-cover`
	});
}
function sl({ label: e, tone: t, icon: n }) {
	return (0, Q.jsx)(H, {
		tone: t ?? `neutral`,
		...n ? { icon: n } : {},
		children: e
	});
}
function cl({ actions: e, label: t, container: n }) {
	let r = (0, K.useCallback)((t) => e.find((e) => e.id === t)?.onAction(), [e]), i = (0, K.useMemo)(() => e.filter((e) => e.isDisabled).map((e) => e.id), [e]), a = (0, K.useMemo)(() => (0, Q.jsx)(w, {
		"aria-label": t,
		className: `inline-grid size-8 cursor-pointer place-items-center rounded-md text-muted outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-focus-visible:outline-solid data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`,
		children: (0, Q.jsx)(Xc, {
			name: `more`,
			className: `size-5`
		})
	}), [t]);
	return (0, Q.jsx)(St, {
		trigger: a,
		onAction: r,
		disabledKeys: i,
		container: n ?? null,
		children: e.map((e) => (0, Q.jsx)(Ct, {
			id: e.id,
			textValue: e.label,
			...e.icon ? { icon: e.icon } : {},
			...e.tone === `danger` ? { tone: `danger` } : {},
			children: e.label
		}, e.id))
	});
}
var ll = {
	sorting: [],
	search: ``,
	filters: {},
	hidden: [],
	order: [],
	page: 0,
	pageSize: 25,
	density: `comfortable`
};
function ul(...e) {
	return Object.assign({}, ll, ...e.filter(Boolean));
}
var dl = (e) => e ? e.split(`,`).filter(Boolean) : [];
function fl(e, t = ``, n) {
	let r = new URLSearchParams(e), i = (e) => `${t}${e}`, a = ul(n), o = {};
	for (let [e, t] of r) e.startsWith(i(`f.`)) && (o[e.slice(i(`f.`).length)] = dl(t));
	let s = r.get(i(`sort`)), c = Number(r.get(i(`page`))), l = Number(r.get(i(`size`))), u = r.get(i(`density`));
	return {
		...a,
		sorting: s === null ? a.sorting : dl(s).map((e) => {
			let [t = ``, n] = e.split(`.`);
			return {
				id: t,
				desc: n === `desc`
			};
		}),
		search: r.get(i(`q`)) ?? a.search,
		filters: Object.keys(o).length > 0 ? o : a.filters,
		hidden: r.has(i(`hide`)) ? dl(r.get(i(`hide`))) : a.hidden,
		order: r.has(i(`order`)) ? dl(r.get(i(`order`))) : a.order,
		page: Number.isInteger(c) && c > 0 ? c - 1 : a.page,
		pageSize: Number.isInteger(l) && l > 0 ? l : a.pageSize,
		density: u === `compact` || u === `comfortable` ? u : a.density
	};
}
var pl = (e) => e.map((e) => `${e.id}.${e.desc ? `desc` : `asc`}`).join(`,`);
function ml(e, t, n = ``, r) {
	let i = new URLSearchParams(t), a = (e) => `${n}${e}`, o = ul(r), s = Array.from(i.keys()).filter((e) => e.startsWith(a(`f.`)));
	for (let e of s) i.delete(e);
	let c = (e, t, n) => {
		t === n ? i.delete(a(e)) : i.set(a(e), t);
	};
	c(`q`, e.search, o.search), c(`sort`, pl(e.sorting), pl(o.sorting)), c(`page`, String(e.page + 1), String(o.page + 1)), c(`size`, String(e.pageSize), String(o.pageSize)), c(`hide`, e.hidden.join(`,`), o.hidden.join(`,`)), c(`order`, e.order.join(`,`), o.order.join(`,`)), c(`density`, e.density, o.density);
	for (let [t, n] of Object.entries(e.filters)) n.length > 0 && i.set(a(`f.${t}`), n.join(`,`));
	let l = i.toString();
	return l ? `?${l}` : ``;
}
var hl = `sk-table-url`;
function gl(e) {
	return window.addEventListener(`popstate`, e), window.addEventListener(hl, e), () => {
		window.removeEventListener(`popstate`, e), window.removeEventListener(hl, e);
	};
}
var _l = () => window.location.search, vl = () => ``;
function yl({ prefix: e = ``, defaults: t, history: n = `replace` } = {}) {
	let r = (0, K.useSyncExternalStore)(gl, _l, vl);
	return {
		state: (0, K.useMemo)(() => fl(r, e, t), [
			r,
			e,
			t
		]),
		onStateChange: (0, K.useCallback)((r) => {
			let i = ml(r, window.location.search, e, t), a = `${window.location.pathname}${i}${window.location.hash}`;
			n === `push` ? window.history.pushState(window.history.state, ``, a) : window.history.replaceState(window.history.state, ``, a), window.dispatchEvent(new Event(hl));
		}, [
			e,
			t,
			n
		])
	};
}
var bl = ls({
	rowSortingFeature: jc,
	sortedRowModel: Bc(),
	sortFns: {
		alphanumeric: nc,
		basic: ic,
		datetime: rc
	},
	columnFilteringFeature: Cs,
	globalFilteringFeature: Ms,
	filteredRowModel: Ic(),
	rowPaginationFeature: $s,
	paginatedRowModel: Rc()
});
function xl(e) {
	return e.normalize(`NFD`).replace(/\p{Diacritic}/gu, ``).replaceAll(`ł`, `l`).toLowerCase();
}
var Sl = (e, t, n) => xl(String(e.getValue(t) ?? ``)).includes(xl(n)), Cl = (e, t, n) => n.length === 0 || n.includes(String(e.getValue(t) ?? ``));
Cl.autoRemove = (e) => !Array.isArray(e) || e.length === 0;
function wl(e) {
	return e.columnDef.enableGlobalFilter !== !1;
}
var Tl = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
}, El = [], Dl = {}, Ol = [], kl = _(`border-b border-border bg-sunken px-4 align-bottom text-label font-semibold whitespace-nowrap text-muted uppercase`, `data-allows-sorting:cursor-default data-hovered:data-allows-sorting:text-fg`, pt), Al = _(`cursor-default bg-surface transition-colors data-hovered:not-data-selected:bg-hover data-disabled:cursor-not-allowed data-disabled:opacity-50 [&:last-child>*]:border-b-0`, pt, ht), jl = _(Al, `h-full`), Ml = _(`border-b border-border px-4 align-middle [overflow-wrap:anywhere]`, pt), Nl = {
	comfortable: {
		head: `py-2.5`,
		cell: `py-3`
	},
	compact: {
		head: `py-1.5`,
		cell: `py-1.5`
	}
};
function Pl(e) {
	return e.kind ?? (e.type === `number` ? `numeric` : `text`);
}
function Fl(e) {
	return e == null ? null : e instanceof Date ? Number.isNaN(e.getTime()) ? null : e.toLocaleDateString() : typeof e == `number` ? e.toLocaleString() : String(e);
}
function Il(e, t) {
	if (e.cell) return e.cell(t);
	let n = e.thumbnail?.(t);
	if (n) return (0, Q.jsx)(ol, {
		src: n.src,
		alt: n.alt
	});
	let r = e.badge?.(t);
	return r ? (0, Q.jsx)(sl, {
		label: r.label,
		tone: r.tone,
		icon: r.icon
	}) : Fl(e.value?.(t));
}
function Ll(e) {
	return typeof e.facet == `object` ? e.facet : {};
}
function Rl({ columns: e, items: t, rowKey: n, rowTextValue: r, selectAllLabel: i, selectLabel: a, emptyState: o, isLoading: s, loadingLabel: c, error: l, onLoadMore: u, isLoadingMore: d = !1, loadingMoreLabel: f, labels: m = Dl, state: h, defaultState: g, onStateChange: v, manual: y = !1, total: b, pageSizes: x = Ol, rowActions: S, bulkActions: C, resizable: w = !1, stickyFirstColumn: T = !0, virtualized: E = !1, rowHeight: D, exportFileName: O = `table`, onExport: k, container: A, className: ee, tableClassName: te, ...j }) {
	let M = j.sortDescriptor !== void 0 || j.onSortChange !== void 0, N = x.length > 0, ne = w && !E, re = w || E, [P, ie] = (0, K.useState)(() => ul(g)), F = (0, K.useMemo)(() => ul(P, h), [P, h]), I = (0, K.useCallback)((e) => {
		let t = {
			...F,
			...e
		};
		ie(t), v?.(t);
	}, [F, v]), L = (0, K.useMemo)(() => e.map((e) => ({
		id: e.id,
		accessorFn: (t) => {
			let n = e.value?.(t);
			return n instanceof Date ? n : n === void 0 ? null : n;
		},
		sortFn: e.type === `date` ? `datetime` : e.type === `number` ? `basic` : `alphanumeric`,
		sortUndefined: `last`,
		enableSorting: e.value !== void 0,
		enableGlobalFilter: e.value !== void 0 && e.type !== `date`,
		filterFn: Cl
	})), [e]), R = t, z = (0, K.useMemo)(() => M ? [] : F.sorting, [M, F.sorting]), B = (0, K.useMemo)(() => Object.entries(F.filters).map(([e, t]) => ({
		id: e,
		value: t
	})), [F.filters]), ae = (0, K.useMemo)(() => ({
		pageIndex: N ? F.page : 0,
		pageSize: N ? F.pageSize : Math.max(1, R.length)
	}), [
		N,
		F.page,
		F.pageSize,
		R.length
	]), oe = (0, K.useCallback)((e) => String(n(e)), [n]), se = Uc((0, K.useMemo)(() => ({
		features: bl,
		columns: L,
		data: R,
		getRowId: oe,
		state: {
			sorting: z,
			globalFilter: F.search,
			columnFilters: B,
			pagination: ae
		},
		manualSorting: y || M,
		manualFiltering: y,
		manualPagination: y || !N,
		...y && b !== void 0 ? { rowCount: b } : {},
		globalFilterFn: Sl,
		getColumnCanGlobalFilter: wl,
		enableMultiSort: !0,
		autoResetPageIndex: !1
	}), [
		L,
		R,
		oe,
		z,
		F.search,
		B,
		ae,
		y,
		M,
		N,
		b
	])), ce = se.getRowModel().rows.map((e) => e.original), le = y ? b ?? t.length : se.getFilteredRowModel().rows.length, ue = Math.max(1, Math.ceil(le / F.pageSize)), V = N ? Math.min(F.page, ue - 1) : 0, de = (0, K.useMemo)(() => {
		let t = new Map(e.map((e) => [e.id, e]));
		return [...F.order.map((e) => t.get(e)).filter((e) => e !== void 0), ...e.filter((e) => !F.order.includes(e.id))];
	}, [e, F.order]), H = e.find((e) => e.isRowHeader)?.id ?? e.find((e) => Pl(e) !== `actions`)?.id, U = (0, K.useMemo)(() => de.filter((e) => e.id === H || !F.hidden.includes(e.id)), [
		de,
		H,
		F.hidden
	]), pe = (0, K.useMemo)(() => de.map((e) => ({
		id: e.id,
		header: e.header,
		canHide: e.id !== H && e.canHide !== !1
	})), [de, H]), me = (0, K.useMemo)(() => {
		let n = xl(F.search.trim()), r = e.filter((e) => e.value && e.type !== `date`), i = (t, i) => (!n || r.some((e) => xl(String(e.value?.(t) ?? ``)).includes(n))) && Object.entries(F.filters).every(([n, r]) => n === i || r.length === 0 || r.includes(String(e.find((e) => e.id === n)?.value?.(t) ?? ``)));
		return e.filter((e) => e.facet).map((e) => {
			let n = Ll(e);
			if (n.options || y) return {
				id: e.id,
				header: e.header,
				options: (n.options ?? []).map((e) => ({
					value: e.value,
					label: e.label
				}))
			};
			let r = new Map();
			for (let n of t) {
				let t = e.value?.(n);
				t != null && t !== `` && i(n, e.id) && r.set(String(t), (r.get(String(t)) ?? 0) + 1);
			}
			return {
				id: e.id,
				header: e.header,
				options: [...r.entries()].map(([e, t]) => ({
					value: e,
					label: n.label?.(e) ?? e,
					count: t
				})).toSorted((e, t) => e.label.localeCompare(t.label))
			};
		});
	}, [
		e,
		t,
		y,
		F.filters,
		F.search
	]), he = j.selectionMode === `multiple` && j.selectionBehavior !== `replace`, [ge, W] = (0, K.useState)(() => new Set()), _e = j.selectedKeys ?? ge, { onSelectionChange: ve } = j, ye = (0, K.useCallback)((e) => {
		W(e), ve?.(e);
	}, [ve]), be = (0, K.useCallback)(() => ye(new Set()), [ye]), xe = _e === `all` ? le : _e.size, Se = (0, K.useMemo)(() => _e === `all` ? `all` : t.filter((e) => _e.has(n(e))), [
		_e,
		t,
		n
	]), Ce = (0, K.useRef)(!1), we = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		let e = we.current;
		if (!e) return;
		let t = (e) => {
			Ce.current = e.shiftKey;
		};
		return e.addEventListener(`pointerdown`, t, !0), e.addEventListener(`keydown`, t, !0), () => {
			e.removeEventListener(`pointerdown`, t, !0), e.removeEventListener(`keydown`, t, !0);
		};
	}, []);
	let { onSortChange: Te } = j, Ee = (0, K.useCallback)((e) => {
		if (M) {
			Te?.(e);
			return;
		}
		let t = String(e.column), n = F.sorting.find((e) => e.id === t), r = Ce.current ? n ? F.sorting.map((e) => e.id === t ? {
			id: t,
			desc: !e.desc
		} : e) : [...F.sorting, {
			id: t,
			desc: !1
		}] : [{
			id: t,
			desc: e.direction === `descending`
		}];
		I({
			sorting: r,
			page: 0
		});
	}, [
		M,
		Te,
		F.sorting,
		I
	]), De = F.sorting[0], Oe = j.sortDescriptor ?? (De && !M ? {
		column: De.id,
		direction: De.desc ? `descending` : `ascending`
	} : void 0), ke = (0, K.useCallback)(() => {
		let e = y ? [...t] : se.getPrePaginatedRowModel().rows.map((e) => e.original);
		k ? k(e) : Jc(O, qc(e, U.filter((e) => e.value || e.csv).map((e) => ({
			header: e.header,
			value: (t) => (e.csv ?? e.value)?.(t)
		}))));
	}, [
		y,
		t,
		se,
		k,
		U,
		O
	]), G = !!(s && y && t.length > 0), Ae = (0, K.useMemo)(() => ft({
		emptyState: o,
		isLoading: s && !G,
		loadingLabel: c,
		error: l
	}), [
		o,
		s,
		G,
		c,
		l
	]), je = !Ae || Ae.kind === `empty`, Me = je ? ce : El, Ne = Nl[F.density], Pe = T && !E, Fe = m.rowActions, Ie = !!(S && Fe), Le = (0, K.useMemo)(() => [
		U,
		he,
		a,
		H,
		Ne,
		Ie,
		Pe,
		E,
		F.sorting
	], [
		U,
		he,
		a,
		H,
		Ne,
		Ie,
		Pe,
		E,
		F.sorting
	]), Re = (0, K.useCallback)(() => Ae ? Ae.kind === `loading` ? (0, Q.jsx)(al, {
		columns: U.length,
		rows: Math.min(N ? F.pageSize : 8, 8),
		label: Ae.content
	}) : (0, Q.jsx)(vt, {
		kind: Ae.kind,
		children: Ae.content
	}) : null, [
		Ae,
		U.length,
		N,
		F.pageSize
	]), ze = (0, K.useMemo)(() => ({
		rowHeight: D ?? (F.density === `compact` ? 40 : 52),
		headingHeight: 40
	}), [D, F.density]), Be = (e, t) => Pe ? _(`sticky`, t, e === `checkbox` || !he ? `start-0` : `start-12`) : void 0, Ve = (0, Q.jsxs)(pr, {
		...j,
		...Oe ? { sortDescriptor: Oe } : {},
		onSortChange: Ee,
		...j.selectionMode ? {
			selectedKeys: _e,
			onSelectionChange: ye
		} : {},
		"aria-busy": G || void 0,
		className: _(`w-full border-separate border-spacing-0 text-start text-body text-fg`, G && `opacity-60`, E && `block h-full overflow-auto`, te),
		children: [(0, Q.jsxs)(br, {
			className: `sticky top-0 z-(--sk-z-sticky)`,
			children: [
				he ? (0, Q.jsx)(Tr, {
					width: 48,
					minWidth: 48,
					className: _(kl, Ne.head, `w-12 px-3`, Be(`checkbox`, `z-2 bg-sunken`)),
					children: (0, Q.jsx)(gt, { label: i })
				}) : null,
				U.map((e) => {
					let t = Pl(e), n = F.sorting.findIndex((t) => t.id === e.id), r = n >= 0 ? F.sorting[n] : void 0, i = M ? e.allowsSorting ?? !1 : e.allowsSorting ?? e.value !== void 0, a = e.id === H;
					return (0, Q.jsx)(Tr, {
						id: e.id,
						textValue: e.header,
						isRowHeader: a,
						allowsSorting: i,
						...re && e.width ? { defaultWidth: e.width } : {},
						...re ? { minWidth: e.minWidth ?? 80 } : {},
						className: _(kl, Ne.head, Tl[t], a && Be(`first`, `z-2 bg-sunken`)),
						children: ({ sortDirection: a }) => (0, Q.jsxs)(`span`, {
							className: `flex items-center gap-1`,
							children: [e.hideHeader ? (0, Q.jsx)(`span`, {
								className: `sr-only`,
								children: e.header
							}) : i ? (0, Q.jsxs)(yt, {
								direction: a ?? (r && !M ? r.desc ? `descending` : `ascending` : void 0),
								align: t === `numeric` ? `end` : `start`,
								className: `min-w-0 flex-1`,
								children: [e.header, n >= 0 && F.sorting.length > 1 && r ? (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(`sup`, {
									"aria-hidden": !0,
									className: `ms-0.5 text-[0.625rem] text-accent-text tabular-nums`,
									children: n + 1
								}), n > 0 && m.sortPosition ? (0, Q.jsxs)(`span`, {
									className: `sr-only`,
									children: [`, `, m.sortPosition(n + 1, r.desc ? `descending` : `ascending`)]
								}) : null] }) : null]
							}) : (0, Q.jsx)(`span`, {
								className: `min-w-0 flex-1`,
								children: e.header
							}), ne ? (0, Q.jsx)(Dr, {
								...m.resizeColumn ? { "aria-label": m.resizeColumn(e.header) } : {},
								className: `-me-3 ms-auto h-5 w-1.5 shrink-0 cursor-col-resize rounded-full bg-border outline-none data-focus-visible:bg-focus data-hovered:bg-border-strong data-resizing:bg-accent`
							}) : null]
						})
					}, e.id);
				}),
				Ie ? (0, Q.jsx)(Tr, {
					width: 56,
					minWidth: 56,
					className: _(kl, Ne.head, `w-14 px-2 text-end`),
					children: (0, Q.jsx)(`span`, {
						className: `sr-only`,
						children: m.actionsColumn
					})
				}) : null
			]
		}), (0, Q.jsxs)(Ar, {
			renderEmptyState: Re,
			dependencies: Le,
			children: [(0, Q.jsx)(Ue, {
				items: Me,
				dependencies: Le,
				children: (e) => {
					let t = r?.(e);
					return (0, Q.jsxs)(Pr, {
						id: n(e),
						...t ? { textValue: t } : {},
						className: E ? jl : Al,
						children: [
							he ? (0, Q.jsx)(Lr, {
								className: _(Ml, Ne.cell, `w-12 px-3`, Be(`checkbox`, `z-1 bg-inherit`)),
								children: (0, Q.jsx)(gt, { label: a })
							}) : null,
							U.map((t) => (0, Q.jsx)(Lr, {
								className: _(Ml, Ne.cell, Tl[Pl(t)], t.id === H && `font-medium`, t.id === H && Be(`first`, `z-1 bg-inherit`), E && `truncate`),
								children: Il(t, e)
							}, t.id)),
							Ie && S && Fe ? (0, Q.jsx)(Lr, {
								className: _(Ml, `w-14 px-2 py-0 text-end`),
								children: (0, Q.jsx)(cl, {
									actions: S(e),
									label: Fe(t ?? String(n(e))),
									container: A
								})
							}) : null
						]
					});
				}
			}), u && je ? (0, Q.jsx)(Wr, {
				onLoadMore: u,
				isLoading: d,
				className: `[&>td]:border-t [&>td]:border-border`,
				children: (0, Q.jsxs)(`output`, {
					className: `flex items-center justify-center gap-2 py-3 text-caption text-muted`,
					children: [(0, Q.jsx)(p, {
						name: `status.loading`,
						"aria-hidden": `true`,
						className: _(`size-4`, _t)
					}), (0, Q.jsx)(`span`, { children: f })]
				})
			}) : null]
		})]
	}), He = _(`relative max-w-full overscroll-contain rounded-lg border border-border bg-surface`, E ? `flex flex-col overflow-hidden` : `overflow-auto`, ee), We = E ? (0, Q.jsx)(Di, {
		layout: hi,
		layoutOptions: ze,
		children: Ve
	}) : Ve;
	return (0, Q.jsxs)(`div`, {
		ref: we,
		"data-density": F.density,
		className: `flex min-w-0 flex-col gap-3`,
		children: [
			(0, Q.jsx)(nl, {
				labels: m,
				state: F,
				facets: me,
				columns: pe,
				onState: I,
				onExport: m.exportCsv ? ke : void 0,
				container: A
			}),
			C && he && m.selected && m.bulkActions ? (0, Q.jsx)(fe, {
				count: xe,
				countLabel: m.selected,
				"aria-label": m.bulkActions,
				...m.clearSelection ? {
					onClear: be,
					clearLabel: m.clearSelection
				} : {},
				children: C(Se)
			}) : null,
			m.results && (F.search || Object.keys(F.filters).length > 0) ? (0, Q.jsx)(`span`, {
				className: `sr-only`,
				"aria-live": `polite`,
				children: m.results(le)
			}) : null,
			ne ? (0, Q.jsx)(lr, {
				className: He,
				children: We
			}) : (0, Q.jsx)(`div`, {
				className: He,
				children: We
			}),
			N ? (0, Q.jsx)(il, {
				labels: m,
				page: V,
				pageSize: F.pageSize,
				total: le,
				sizes: x,
				onState: I,
				container: A
			}) : null
		]
	});
}
var zl = {
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
function Bl(e) {
	return e == null || e === ``;
}
function Vl({ items: e, layout: t = `inline`, emptyValue: n, divided: r = !1, className: i, ...a }) {
	return (0, Q.jsx)(`dl`, {
		...a,
		className: _(`@container min-w-0 text-body`, zl[t].list, r && t !== `columns` && `divide-y divide-border`, i),
		children: e.map((e, r) => (0, Q.jsxs)(`div`, {
			className: _(`min-w-0`, zl[t].group),
			children: [(0, Q.jsx)(`dt`, {
				className: `text-caption font-medium text-muted [overflow-wrap:anywhere]`,
				children: e.label
			}), (0, Q.jsxs)(`dd`, {
				className: `min-w-0 text-fg [overflow-wrap:anywhere]`,
				children: [Bl(e.value) ? (0, Q.jsx)(`span`, {
					className: `text-muted`,
					children: n ?? `—`
				}) : e.value, e.hint ? (0, Q.jsx)(`span`, {
					className: `mt-0.5 block text-caption text-muted`,
					children: e.hint
				}) : null]
			})]
		}, e.id ?? r))
	});
}
var Hl = _(`group/item flex min-w-0 cursor-default items-center gap-3 rounded-md px-3 py-2 transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, pt, ht);
function Ul({ title: e, textValue: t, description: n, icon: r, meta: i, actions: a, truncate: o = !1, selectLabel: s, dragLabel: c, className: l, ...u }) {
	let d = t ?? (typeof e == `string` ? e : void 0);
	return (0, Q.jsx)(lt, {
		...u,
		...d === void 0 ? {} : { textValue: d },
		className: _(Hl, l),
		children: ({ selectionMode: t, selectionBehavior: l, allowsDragging: u }) => (0, Q.jsxs)(Q.Fragment, { children: [
			u ? (0, Q.jsx)(mt, { label: c }) : null,
			t !== `none` && l === `toggle` ? (0, Q.jsx)(gt, { label: s }) : null,
			r ? (0, Q.jsx)(`span`, {
				className: `flex size-6 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
				children: r
			}) : null,
			(0, Q.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col`,
				children: [(0, Q.jsx)(`span`, {
					className: _(`font-medium`, o ? `truncate` : `[overflow-wrap:anywhere]`),
					children: e
				}), n ? (0, Q.jsx)(`span`, {
					className: _(`text-caption text-muted`, o ? `truncate` : `[overflow-wrap:anywhere]`),
					children: n
				}) : null]
			}),
			i ? (0, Q.jsx)(`span`, {
				className: `flex shrink-0 items-center gap-2 text-caption text-muted`,
				children: i
			}) : null,
			a ? (0, Q.jsx)(`span`, {
				className: `flex shrink-0 items-center gap-1`,
				children: a
			}) : null
		] })
	});
}
function Wl({ children: e, emptyState: t, isLoading: n, loadingLabel: r, error: i, className: a, ...o }) {
	let s = K.Children.toArray(e).length === 0, c = ft({
		emptyState: s ? t : void 0,
		isLoading: n,
		loadingLabel: r,
		error: i
	});
	return c ? (0, Q.jsx)(vt, {
		kind: c.kind,
		className: a,
		children: c.content
	}) : (0, Q.jsx)(`ol`, {
		...o,
		className: _(`flex min-w-0 flex-col text-body text-fg`, a),
		children: e
	});
}
var Gl = {
	neutral: `border-border-strong bg-surface text-muted`,
	accent: `border-accent bg-accent-soft text-accent-text`,
	ok: `border-ok bg-ok-soft text-ok`,
	warn: `border-warn bg-warn-soft text-warn`,
	danger: `border-danger bg-danger-soft text-danger`,
	info: `border-info bg-info-soft text-info`
}, Kl = {
	neutral: (0, Q.jsx)(p, {
		name: `status.todo`,
		"aria-hidden": `true`,
		className: `size-2 fill-current`
	}),
	accent: (0, Q.jsx)(p, {
		name: `ai.spark`,
		"aria-hidden": `true`,
		className: `size-3.5`
	}),
	ok: (0, Q.jsx)(p, {
		name: `status.ok`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	warn: (0, Q.jsx)(p, {
		name: `status.warning`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	danger: (0, Q.jsx)(p, {
		name: `status.failed`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	info: (0, Q.jsx)(p, {
		name: `status.info`,
		"aria-hidden": `true`,
		className: `size-4`
	})
};
function ql({ title: e, dateTime: t, time: n, actor: r, tone: i = `neutral`, toneLabel: a, icon: o, actions: s, children: c, className: l, ...u }) {
	return (0, Q.jsxs)(`li`, {
		...u,
		className: _(`relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 pb-5 last:pb-0`, `before:absolute before:start-[calc(0.875rem-0.5px)] before:top-8 before:bottom-1 before:border-s before:border-border last:before:hidden`, l),
		children: [(0, Q.jsx)(`span`, {
			className: _(`relative grid size-7 place-items-center rounded-full border [&_svg]:shrink-0`, Gl[i]),
			children: o ?? Kl[i]
		}), (0, Q.jsxs)(`div`, {
			className: `min-w-0 pt-0.5`,
			children: [
				(0, Q.jsxs)(`div`, {
					className: `flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1`,
					children: [(0, Q.jsxs)(`p`, {
						className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 font-medium [overflow-wrap:anywhere]`,
						children: [(0, Q.jsx)(`span`, {
							className: `min-w-0`,
							children: e
						}), a ? (0, Q.jsx)(H, {
							tone: i,
							children: a
						}) : null]
					}), n ? (0, Q.jsx)(`time`, {
						...t === void 0 ? {} : { dateTime: t },
						className: `shrink-0 text-caption text-muted tabular-nums`,
						children: n
					}) : null]
				}),
				r ? (0, Q.jsx)(`p`, {
					className: `text-caption text-muted [overflow-wrap:anywhere]`,
					children: r
				}) : null,
				c ? (0, Q.jsx)(`div`, {
					className: `mt-1.5 text-body text-muted [overflow-wrap:anywhere]`,
					children: c
				}) : null,
				s ? (0, Q.jsx)(`div`, {
					className: `mt-2 flex flex-wrap items-center gap-2`,
					children: s
				}) : null
			]
		})]
	});
}
var Jl = _(`group/row cursor-default rounded-md transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, pt, ht);
function $({ title: e, textValue: t, icon: n, expandedIcon: r, meta: i, actions: a, children: o, truncate: s = !0, selectLabel: c, dragLabel: l, className: u, ...d }) {
	let f = t ?? (typeof e == `string` ? e : ``);
	return (0, Q.jsxs)(ze, {
		...d,
		textValue: f,
		className: _(Jl, u),
		children: [(0, Q.jsx)(Be, { children: ({ hasChildItems: t, isExpanded: o, selectionMode: u, selectionBehavior: d, allowsDragging: f }) => (0, Q.jsxs)(`div`, {
			className: `flex min-h-control-sm min-w-0 items-center gap-1 py-0.5 ps-[calc(min(var(--tree-item-level,1)_-_1,8)*1.25rem)] pe-1`,
			children: [
				f ? (0, Q.jsx)(mt, { label: l }) : null,
				t ? (0, Q.jsx)(w, {
					slot: `chevron`,
					className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted outline-hidden data-hovered:bg-hover data-hovered:text-fg`,
					children: (0, Q.jsx)(p, {
						name: `chevron.right`,
						"aria-hidden": `true`,
						className: _(`size-4 transition-transform duration-(--sk-duration-fast) motion-reduce:transition-none rtl:-scale-x-100`, o && `rotate-90`)
					})
				}) : (0, Q.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `size-6 shrink-0`
				}),
				u !== `none` && d === `toggle` ? (0, Q.jsx)(gt, { label: c }) : null,
				n ? (0, Q.jsx)(`span`, {
					className: `flex size-5 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
					children: o && r ? r : n
				}) : null,
				(0, Q.jsx)(`span`, {
					className: _(`min-w-0 flex-1`, s ? `truncate` : `[overflow-wrap:anywhere]`),
					children: e
				}),
				i ? (0, Q.jsx)(`span`, {
					className: `flex shrink-0 items-center gap-1.5 text-caption text-muted`,
					children: i
				}) : null,
				a ? (0, Q.jsx)(`span`, {
					className: `flex shrink-0 items-center gap-1`,
					children: a
				}) : null
			]
		}) }), o]
	});
}
function Yl({ estimatedRowHeight: e = 44, className: t, ...n }) {
	let r = (0, K.useMemo)(() => ({
		estimatedRowHeight: e,
		gap: 2,
		padding: 4
	}), [e]);
	return (0, Q.jsx)(Di, {
		layout: di,
		layoutOptions: r,
		children: (0, Q.jsx)(Et, {
			...n,
			virtual: !0,
			...t === void 0 ? {} : { className: t }
		})
	});
}
var Xl = e({ default: () => Au }), Zl = [
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
], Ql = new Intl.NumberFormat(`en-GB`), $l = {
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
function eu({ status: e }) {
	let { tone: t, label: n } = $l[e];
	return (0, Q.jsx)(H, {
		tone: t,
		children: n
	});
}
var tu = [
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
], nu = [
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
		cell: (e) => (0, Q.jsx)(V, {
			variant: `outline`,
			size: `sm`,
			"aria-label": `Edit ${e.name}`,
			children: `Edit`
		})
	}
];
function ru(e, t, n) {
	return e.toSorted((e, r) => {
		let i = n(e, t.column), a = n(r, t.column), o = typeof i == `number` && typeof a == `number` ? i - a : String(i).localeCompare(String(a));
		return t.direction === `descending` ? -o : o;
	});
}
function iu() {
	let [e, t] = (0, K.useState)({
		column: `name`,
		direction: `ascending`
	}), n = (0, K.useMemo)(() => ru(tu, e, (e, t) => e[t]), [e]);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [
			(0, Q.jsx)(bt, {
				caption: `Team members`,
				columns: nu,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Q.jsx)(bt, {
				caption: `Team members, stacked on narrow screens`,
				layout: `stack`,
				columns: nu,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Q.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-3`,
				children: [
					(0, Q.jsx)(bt, {
						caption: `Empty`,
						columns: nu.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						emptyState: `Nobody has joined yet.`
					}),
					(0, Q.jsx)(bt, {
						caption: `Loading`,
						columns: nu.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						isLoading: !0,
						loadingLabel: `Loading members`
					}),
					(0, Q.jsx)(bt, {
						caption: `Error`,
						columns: nu.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						error: `Could not load members. Try again.`
					})
				]
			})
		]
	});
}
var au = [
	{
		id: `version`,
		header: `Version`,
		isRowHeader: !0,
		allowsSorting: !0,
		cell: (e) => (0, Q.jsx)(`span`, {
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
		cell: (e) => (0, Q.jsx)(eu, { status: e.status })
	},
	{
		id: `downloads`,
		header: `Downloads`,
		kind: `numeric`,
		allowsSorting: !0,
		cell: (e) => Ql.format(e.downloads)
	},
	{
		id: `actions`,
		header: `Actions`,
		kind: `actions`,
		hideHeader: !0,
		cell: (e) => (0, Q.jsx)(V, {
			variant: `ghost`,
			size: `sm`,
			"aria-label": `Download ${e.version}`,
			children: `Download`
		})
	}
];
function ou() {
	let [e, t] = (0, K.useState)({
		column: `number`,
		direction: `ascending`
	}), [n, r] = (0, K.useState)(Zl), [i, a] = (0, K.useState)(new Set([`inv-1044`])), o = (0, K.useMemo)(() => ru(n, {
		column: String(e.column),
		direction: e.direction
	}, (e, t) => e[t]), [n, e]), s = i === `all` ? n.length : i.size, c = i === `all` ? new Set(n.map((e) => e.id)) : i;
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, Q.jsxs)(fe, {
			"aria-label": `Actions for selected releases`,
			count: s,
			countLabel: (e) => e === 0 ? `No releases selected` : e === 1 ? `1 release selected` : `${e} releases selected`,
			onClear: () => a(new Set()),
			clearLabel: `Clear selection`,
			children: [(0, Q.jsx)(V, {
				variant: `outline`,
				size: `sm`,
				children: `Send reminder`
			}), (0, Q.jsx)(V, {
				variant: `danger`,
				size: `sm`,
				onPress: () => {
					r((e) => e.filter((e) => !c.has(e.id))), a(new Set());
				},
				children: `Delete`
			})]
		}), (0, Q.jsx)(Rl, {
			"aria-label": `Releases`,
			className: `max-h-72`,
			tableClassName: `min-w-[640px]`,
			columns: au,
			items: o,
			rowKey: (e) => e.id,
			rowTextValue: (e) => `${e.version} ${e.project}`,
			selectionMode: `multiple`,
			selectedKeys: i,
			onSelectionChange: a,
			sortDescriptor: e,
			onSortChange: t,
			emptyState: (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(`p`, {
				className: `font-medium text-fg`,
				children: `No releases left`
			}), (0, Q.jsx)(V, {
				variant: `outline`,
				size: `sm`,
				className: `mt-2`,
				onPress: () => r(Zl),
				children: `Restore the examples`
			})] })
		})]
	});
}
var su = {
	en: {
		topics: [
			`Release notes`,
			`Field guide`,
			`Design review`,
			`Accessibility audit`,
			`Migration plan`,
			`Weekly digest`,
			`Case study`,
			`Team update`
		],
		subjects: [
			`the editor`,
			`search`,
			`the newsletter`,
			`dark mode`,
			`keyboard paths`,
			`the media library`,
			`exports`,
			`the mobile app`
		],
		sections: {
			news: `News`,
			guides: `Guides`,
			product: `Product`,
			community: `Community`
		},
		statuses: {
			published: `Published`,
			draft: `Draft`,
			scheduled: `Scheduled`,
			archived: `Archived`
		}
	},
	pl: {
		topics: [
			`Informacje o wydaniu`,
			`Przewodnik`,
			`Przegląd projektu`,
			`Audyt dostępności`,
			`Plan migracji`,
			`Przegląd tygodnia`,
			`Studium przypadku`,
			`Wieści z zespołu`
		],
		subjects: [
			`edytora`,
			`wyszukiwania`,
			`newslettera`,
			`motywu nocnego`,
			`ścieżek klawiatury`,
			`biblioteki mediów`,
			`eksportu`,
			`aplikacji mobilnej`
		],
		sections: {
			news: `Aktualności`,
			guides: `Przewodniki`,
			product: `Produkt`,
			community: `Społeczność`
		},
		statuses: {
			published: `Opublikowany`,
			draft: `Szkic`,
			scheduled: `Zaplanowany`,
			archived: `W archiwum`
		}
	}
}, cu = [
	`Ada Lovelace`,
	`Grace Hopper`,
	`Alan Turing`,
	`Zofia Kowalczyk`,
	`Łukasz Żółkiewski`,
	`Hedy Lamarr`,
	`Małgorzata Ślęzak`,
	`Katherine Johnson`
], lu = [
	`/media/ui-dialog-poster.webp`,
	`/media/ui-themes-poster.webp`,
	`/media/ui-toasts-poster.webp`,
	`/media/ui-command-palette-poster.webp`,
	`/media/ui-form-validation-poster.webp`
], uu = [
	`news`,
	`guides`,
	`product`,
	`community`
], du = [
	`published`,
	`draft`,
	`scheduled`,
	`archived`
], fu = {
	published: `ok`,
	draft: `neutral`,
	scheduled: `info`,
	archived: `warn`
};
function pu(e, t = 2e3) {
	let n = su[e], r = 42, i = () => (r = (r * 1103515245 + 12345) % 2147483648, r / 2147483648), a = (e) => e[Math.floor(i() * e.length)], o = Date.UTC(2026, 10, 14);
	return Array.from({ length: t }, (e, t) => {
		let r = a(du);
		return {
			id: `post-${10001 + t}`,
			title: `${a(n.topics)}: ${a(n.subjects)} #${10001 + t}`,
			image: a(lu),
			author: a(cu),
			section: a(uu),
			status: r,
			words: 300 + Math.floor(i() * 2700),
			views: r === `draft` ? 0 : Math.floor(i() * i() * 48e3),
			updated: new Date(o - Math.floor(i() * 400) * 864e5)
		};
	});
}
var mu = {
	en: {
		label: `Posts`,
		source: `Data source`,
		client: `In the browser`,
		server: `From a server`,
		show: `Show`,
		rows: `Rows`,
		loading: `Loading`,
		empty: `Empty`,
		error: `Error`,
		columns: {
			title: `Title`,
			image: `Picture`,
			author: `Author`,
			section: `Section`,
			status: `Status`,
			words: `Words`,
			views: `Views`,
			updated: `Updated`
		},
		labels: {
			search: `Search posts`,
			searchPlaceholder: `Search posts`,
			facet: (e) => e,
			removeFilter: (e, t) => `Remove the filter ${e}: ${t}`,
			clearFilters: `Clear filters`,
			columns: `Columns`,
			moveColumnUp: (e) => `Move ${e} up`,
			moveColumnDown: (e) => `Move ${e} down`,
			density: `Row density`,
			comfortable: `Comfortable`,
			compact: `Compact`,
			exportCsv: `Export CSV`,
			rowActions: (e) => `Actions for ${e}`,
			actionsColumn: `Actions`,
			sortPosition: (e, t) => `sorted ${e === 2 ? `second` : `${e}th`}, ${t}`,
			resizeColumn: (e) => `Resize the ${e} column`,
			selected: (e) => e === 0 ? `No posts selected` : `${e.toLocaleString(`en`)} selected`,
			bulkActions: `Actions for selected posts`,
			clearSelection: `Clear selection`,
			range: (e, t, n) => `${e.toLocaleString(`en`)}–${t.toLocaleString(`en`)} of ${n.toLocaleString(`en`)}`,
			pageSize: `Rows per page`,
			pageSizeOption: (e) => e >= 2e3 ? `All` : String(e),
			pagination: `Pages of posts`,
			previous: `Previous page`,
			next: `Next page`,
			page: (e) => `Page ${e}`,
			pageStatus: (e, t) => `Page ${e} of ${t}`,
			results: (e) => `${e.toLocaleString(`en`)} posts match`
		},
		selectAll: `Select all posts`,
		loadingLabel: `Loading posts`,
		emptyTitle: `No posts match.`,
		emptyAction: `Clear the search and filters`,
		errorText: `Could not load posts.`,
		retry: `Try again`,
		open: `Open`,
		duplicate: `Duplicate`,
		remove: `Delete`,
		publish: `Publish`,
		archive: `Archive`
	},
	pl: {
		label: `Wpisy`,
		source: `Źródło danych`,
		client: `W przeglądarce`,
		server: `Z serwera`,
		show: `Pokaż`,
		rows: `Wiersze`,
		loading: `Ładowanie`,
		empty: `Pusto`,
		error: `Błąd`,
		columns: {
			title: `Tytuł`,
			image: `Obraz`,
			author: `Autor`,
			section: `Dział`,
			status: `Stan`,
			words: `Słowa`,
			views: `Odsłony`,
			updated: `Zmieniono`
		},
		labels: {
			search: `Szukaj wpisów`,
			searchPlaceholder: `Szukaj wpisów`,
			facet: (e) => e,
			removeFilter: (e, t) => `Usuń filtr ${e}: ${t}`,
			clearFilters: `Wyczyść filtry`,
			columns: `Kolumny`,
			moveColumnUp: (e) => `Przesuń ${e} wyżej`,
			moveColumnDown: (e) => `Przesuń ${e} niżej`,
			density: `Gęstość wierszy`,
			comfortable: `Wygodna`,
			compact: `Zwarta`,
			exportCsv: `Eksportuj CSV`,
			rowActions: (e) => `Akcje dla: ${e}`,
			actionsColumn: `Akcje`,
			sortPosition: (e, t) => `sortowanie ${e}., ${t === `ascending` ? `rosnąco` : `malejąco`}`,
			resizeColumn: (e) => `Zmień szerokość kolumny ${e}`,
			selected: (e) => e === 0 ? `Nie zaznaczono wpisów` : `Zaznaczono: ${e.toLocaleString(`pl`)}`,
			bulkActions: `Akcje dla zaznaczonych wpisów`,
			clearSelection: `Wyczyść zaznaczenie`,
			range: (e, t, n) => `${e.toLocaleString(`pl`)}–${t.toLocaleString(`pl`)} z ${n.toLocaleString(`pl`)}`,
			pageSize: `Wierszy na stronę`,
			pageSizeOption: (e) => e >= 2e3 ? `Wszystkie` : String(e),
			pagination: `Strony wpisów`,
			previous: `Poprzednia strona`,
			next: `Następna strona`,
			page: (e) => `Strona ${e}`,
			pageStatus: (e, t) => `Strona ${e} z ${t}`,
			results: (e) => `Pasujące wpisy: ${e.toLocaleString(`pl`)}`
		},
		selectAll: `Zaznacz wszystkie wpisy`,
		loadingLabel: `Ładowanie wpisów`,
		emptyTitle: `Żaden wpis nie pasuje.`,
		emptyAction: `Wyczyść wyszukiwanie i filtry`,
		errorText: `Nie udało się wczytać wpisów.`,
		retry: `Spróbuj ponownie`,
		open: `Otwórz`,
		duplicate: `Duplikuj`,
		remove: `Usuń`,
		publish: `Opublikuj`,
		archive: `Przenieś do archiwum`
	}
}, hu = [
	25,
	50,
	100,
	2e3
];
function gu(e, t, n) {
	let [r, i] = (0, K.useState)(null);
	return (0, K.useEffect)(() => {
		if (!n) return;
		let r = !0, a = setTimeout(() => {
			let n = t.search.trim().toLowerCase(), a = e.filter((e) => (!n || `${e.title} ${e.author}`.toLowerCase().includes(n)) && Object.entries(t.filters).every(([t, n]) => n.length === 0 || n.includes(String(e[t]))));
			for (let e of t.sorting.toReversed()) a = a.toSorted((t, n) => {
				let r = t[e.id], i = n[e.id], a = r < i ? -1 : +(r > i);
				return e.desc ? -a : a;
			});
			r && i({
				rows: a.slice(t.page * t.pageSize, (t.page + 1) * t.pageSize),
				total: a.length,
				asked: t
			});
		}, 450);
		return () => {
			r = !1, clearTimeout(a);
		};
	}, [
		e,
		t,
		n
	]), {
		page: r,
		isLoading: n && r?.asked !== t
	};
}
function _u(e) {
	return function() {
		return (0, Q.jsxs)(Q.Fragment, { children: [
			(0, Q.jsx)(V, {
				size: `sm`,
				variant: `outline`,
				children: e.publish
			}),
			(0, Q.jsx)(V, {
				size: `sm`,
				variant: `outline`,
				children: e.archive
			}),
			(0, Q.jsx)(V, {
				size: `sm`,
				variant: `danger`,
				children: e.remove
			})
		] });
	};
}
function vu() {
	let e = (0, K.useContext)(ee) === `pl` ? `pl` : `en`, t = mu[e], n = su[e], r = (0, K.useMemo)(() => pu(e), [e]), [i, a] = (0, K.useState)(`client`), [o, s] = (0, K.useState)(`rows`), [c, l] = (0, K.useState)(new Set()), [u, d] = (0, K.useState)(null), f = yl({
		prefix: `posts.`,
		defaults: { pageSize: 25 }
	}), [p, m] = (0, K.useState)(() => ul({ pageSize: 25 })), h = i === `client` ? f.state : p, g = i === `client` ? f.onStateChange : m, _ = gu(r, p, i === `server`), v = (0, K.useMemo)(() => [
		{
			id: `image`,
			header: t.columns.image,
			thumbnail: (e) => ({ src: e.image }),
			hideHeader: !0,
			width: 72,
			allowsSorting: !1
		},
		{
			id: `title`,
			header: t.columns.title,
			value: (e) => e.title,
			isRowHeader: !0,
			width: 320,
			canHide: !1
		},
		{
			id: `author`,
			header: t.columns.author,
			value: (e) => e.author,
			width: 180
		},
		{
			id: `section`,
			header: t.columns.section,
			value: (e) => e.section,
			cell: (e) => n.sections[e.section],
			csv: (e) => n.sections[e.section],
			facet: {
				label: (e) => n.sections[e] ?? e,
				options: uu.map((e) => ({
					value: e,
					label: n.sections[e]
				}))
			},
			width: 140
		},
		{
			id: `status`,
			header: t.columns.status,
			value: (e) => e.status,
			badge: (e) => ({
				label: n.statuses[e.status],
				tone: fu[e.status]
			}),
			csv: (e) => n.statuses[e.status],
			facet: {
				label: (e) => n.statuses[e] ?? e,
				options: du.map((e) => ({
					value: e,
					label: n.statuses[e]
				}))
			},
			width: 150
		},
		{
			id: `words`,
			header: t.columns.words,
			value: (e) => e.words,
			type: `number`,
			width: 110
		},
		{
			id: `views`,
			header: t.columns.views,
			value: (e) => e.views,
			type: `number`,
			width: 110
		},
		{
			id: `updated`,
			header: t.columns.updated,
			value: (e) => e.updated,
			type: `date`,
			csv: (e) => e.updated.toISOString().slice(0, 10),
			width: 130
		}
	], [t, n]), y = (0, K.useMemo)(() => _u(t), [t]), b = () => g({
		...h,
		search: ``,
		filters: {},
		page: 0
	}), x = o === `rows` ? i === `client` ? r : _.page?.rows ?? [] : [], S = o === `loading` || i === `server` && o === `rows` && _.isLoading, C = h.pageSize >= 2e3;
	return (0, Q.jsxs)(`div`, {
		ref: d,
		className: `flex min-w-0 flex-col gap-3`,
		children: [(0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-3`,
			children: [(0, Q.jsx)(U, {
				label: t.source,
				size: `sm`,
				value: i,
				onChange: a,
				options: [{
					value: `client`,
					label: t.client
				}, {
					value: `server`,
					label: t.server
				}]
			}), (0, Q.jsx)(U, {
				label: t.show,
				size: `sm`,
				value: o,
				onChange: s,
				options: [
					{
						value: `rows`,
						label: t.rows
					},
					{
						value: `loading`,
						label: t.loading
					},
					{
						value: `empty`,
						label: t.empty
					},
					{
						value: `error`,
						label: t.error
					}
				]
			})]
		}), (0, Q.jsx)(Rl, {
			"aria-label": t.label,
			columns: v,
			items: x,
			rowKey: (e) => e.id,
			rowTextValue: (e) => e.title,
			labels: t.labels,
			state: h,
			onStateChange: g,
			manual: i === `server`,
			...i === `server` && _.page ? { total: _.page.total } : {},
			pageSizes: hu,
			virtualized: C,
			resizable: !0,
			selectionMode: `multiple`,
			selectedKeys: c,
			onSelectionChange: l,
			selectAllLabel: t.selectAll,
			bulkActions: y,
			rowActions: () => [
				{
					id: `open`,
					label: t.open,
					onAction: () => void 0
				},
				{
					id: `duplicate`,
					label: t.duplicate,
					onAction: () => void 0
				},
				{
					id: `delete`,
					label: t.remove,
					tone: `danger`,
					onAction: () => void 0
				}
			],
			isLoading: S,
			loadingLabel: t.loadingLabel,
			error: o === `error` ? (0, Q.jsxs)(`span`, {
				className: `flex flex-wrap items-center justify-center gap-3`,
				children: [t.errorText, (0, Q.jsx)(V, {
					size: `sm`,
					variant: `outline`,
					onPress: () => s(`rows`),
					children: t.retry
				})]
			}) : void 0,
			emptyState: (0, Q.jsxs)(`span`, {
				className: `flex flex-col items-center gap-2`,
				children: [t.emptyTitle, (0, Q.jsx)(V, {
					size: `sm`,
					variant: `outline`,
					onPress: b,
					children: t.emptyAction
				})]
			}),
			exportFileName: `posts`,
			container: u,
			className: C ? `h-[36rem]` : `max-h-[36rem]`
		})]
	});
}
function yu() {
	let e = au.slice(0, 2);
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Q.jsx)(Rl, {
				"aria-label": `Releases, empty`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				emptyState: `No releases match these filters.`
			}),
			(0, Q.jsx)(Rl, {
				"aria-label": `Releases, loading`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				isLoading: !0,
				loadingLabel: `Loading releases`
			}),
			(0, Q.jsx)(Rl, {
				"aria-label": `Releases, failed`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				error: `Could not load releases. Check the connection and try again.`
			})
		]
	});
}
var bu = [
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
function xu() {
	let [e, t] = (0, K.useState)(new Set([`atlas`]));
	return (0, Q.jsx)(Dt, {
		"aria-label": `Projects`,
		items: bu,
		selectionMode: `multiple`,
		selectedKeys: e,
		onSelectionChange: t,
		className: `max-w-2xl`,
		children: (e) => (0, Q.jsx)(Ul, {
			id: e.id,
			title: e.name,
			description: e.description,
			icon: (0, Q.jsx)(p, {
				name: `vcs.repository`,
				"aria-hidden": `true`
			}),
			meta: (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(H, {
				tone: e.status.tone,
				children: e.status.label
			}), (0, Q.jsx)(`span`, {
				className: `hidden sm:inline`,
				children: e.updated
			})] }),
			actions: (0, Q.jsx)(de, {
				label: `Deploy ${e.name}`,
				size: `sm`,
				children: (0, Q.jsx)(p, {
					name: `ops.deploy`,
					"aria-hidden": `true`,
					className: `size-4`
				})
			}),
			selectLabel: `Select`
		})
	});
}
function Su() {
	let e = d({ initialItems: bu.map(({ id: e, name: t }) => ({
		id: e,
		name: t
	})) }), { dragAndDropHooks: t } = u({
		getItems: (t) => [...t].map((t) => ({ "text/plain": e.getItem(t)?.name ?? `` })),
		onReorder: (t) => {
			t.target.dropPosition === `before` ? e.moveBefore(t.target.key, t.keys) : t.target.dropPosition === `after` && e.moveAfter(t.target.key, t.keys);
		},
		renderDropIndicator: (e) => (0, Q.jsx)(a, {
			target: e,
			className: `mx-2 h-0.5 rounded-full outline-hidden data-drop-target:bg-accent forced-colors:data-drop-target:bg-[Highlight]`
		})
	});
	return (0, Q.jsx)(Dt, {
		"aria-label": `Release order`,
		items: e.items,
		dragAndDropHooks: t,
		className: `max-w-md`,
		children: (e) => (0, Q.jsx)(Ul, {
			id: e.id,
			title: e.name,
			truncate: !0
		})
	});
}
function Cu() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Q.jsx)(Dt, {
				"aria-label": `Projects, empty`,
				items: [],
				emptyState: `No projects yet.`,
				children: (e) => (0, Q.jsx)(Ul, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Q.jsx)(Dt, {
				"aria-label": `Projects, loading`,
				items: bu,
				isLoading: !0,
				loadingLabel: `Loading projects`,
				children: (e) => (0, Q.jsx)(Ul, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Q.jsx)(Dt, {
				"aria-label": `Projects, failed`,
				items: bu,
				error: `Could not load projects.`,
				children: (e) => (0, Q.jsx)(Ul, {
					id: e.id,
					title: e.name
				})
			})
		]
	});
}
var wu = 1e4, Tu = Array.from({ length: wu }, (e, t) => ({
	id: t,
	name: `src/modules/module-${String(t).padStart(5, `0`)}.ts`,
	size: `${(t * 37 % 900 + 12) / 10} KB`
}));
function Eu() {
	return (0, Q.jsx)(Yl, {
		"aria-label": `Search results, ${wu.toLocaleString(`en-GB`)} files`,
		items: Tu,
		selectionMode: `single`,
		className: `h-72 max-w-xl`,
		children: (e) => (0, Q.jsx)(Ul, {
			id: e.id,
			title: e.name,
			meta: e.size,
			icon: (0, Q.jsx)(p, {
				name: `file.source`,
				"aria-hidden": `true`
			}),
			truncate: !0
		})
	});
}
function Du() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-6 md:grid-cols-2`,
		children: [(0, Q.jsxs)(Ot, {
			"aria-label": `Repository files`,
			selectionMode: `single`,
			defaultSelectedKeys: [`button`],
			defaultExpandedKeys: [`src`, `actions`],
			className: `max-h-80`,
			children: [
				(0, Q.jsxs)($, {
					id: `src`,
					title: `src`,
					icon: (0, Q.jsx)(p, {
						name: `folder.closed`,
						"aria-hidden": `true`
					}),
					expandedIcon: (0, Q.jsx)(p, {
						name: `folder.open`,
						"aria-hidden": `true`
					}),
					children: [(0, Q.jsxs)($, {
						id: `actions`,
						title: `actions`,
						icon: (0, Q.jsx)(p, {
							name: `folder.closed`,
							"aria-hidden": `true`
						}),
						expandedIcon: (0, Q.jsx)(p, {
							name: `folder.open`,
							"aria-hidden": `true`
						}),
						children: [(0, Q.jsx)($, {
							id: `button`,
							title: `Button.tsx`,
							icon: (0, Q.jsx)(p, {
								name: `file.source`,
								"aria-hidden": `true`
							}),
							meta: (0, Q.jsx)(H, {
								tone: `warn`,
								children: `Modified`
							})
						}), (0, Q.jsx)($, {
							id: `icon-button`,
							title: `IconButton.tsx`,
							icon: (0, Q.jsx)(p, {
								name: `file.source`,
								"aria-hidden": `true`
							})
						})]
					}), (0, Q.jsx)($, {
						id: `data`,
						title: `data`,
						icon: (0, Q.jsx)(p, {
							name: `folder.closed`,
							"aria-hidden": `true`
						}),
						expandedIcon: (0, Q.jsx)(p, {
							name: `folder.open`,
							"aria-hidden": `true`
						}),
						children: (0, Q.jsx)($, {
							id: `table`,
							title: `Table.tsx`,
							icon: (0, Q.jsx)(p, {
								name: `file.source`,
								"aria-hidden": `true`
							}),
							meta: (0, Q.jsx)(H, {
								tone: `ok`,
								children: `Added`
							})
						})
					})]
				}),
				(0, Q.jsx)($, {
					id: `readme`,
					title: `README.md`,
					icon: (0, Q.jsx)(p, {
						name: `file.document`,
						"aria-hidden": `true`
					})
				}),
				(0, Q.jsx)($, {
					id: `long`,
					title: `a-file-with-a-very-long-name-that-is-cut-to-one-line.config.ts`,
					icon: (0, Q.jsx)(p, {
						name: `file.source`,
						"aria-hidden": `true`
					})
				})
			]
		}), (0, Q.jsxs)(Ot, {
			"aria-label": `Site sections`,
			selectionMode: `multiple`,
			defaultExpandedKeys: [`guides`],
			children: [(0, Q.jsxs)($, {
				id: `guides`,
				title: `Guides`,
				selectLabel: `Select`,
				actions: (0, Q.jsx)(V, {
					variant: `ghost`,
					size: `sm`,
					"aria-label": `Edit Guides`,
					children: `Edit`
				}),
				children: [(0, Q.jsx)($, {
					id: `start`,
					title: `Getting started`,
					selectLabel: `Select`,
					actions: (0, Q.jsx)(V, {
						variant: `ghost`,
						size: `sm`,
						"aria-label": `Edit Getting started`,
						children: `Edit`
					})
				}), (0, Q.jsx)($, {
					id: `deploy`,
					title: `Deploying`,
					selectLabel: `Select`,
					meta: (0, Q.jsx)(H, {
						tone: `warn`,
						children: `Draft`
					})
				})]
			}), (0, Q.jsx)($, {
				id: `changelog`,
				title: `Changelog`,
				selectLabel: `Select`
			})]
		})]
	});
}
function Ou() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-8 md:grid-cols-2`,
		children: [(0, Q.jsxs)(Wl, {
			"aria-label": `Deploy history`,
			className: `max-w-md`,
			children: [
				(0, Q.jsx)(ql, {
					title: `Deployed to production`,
					tone: `ok`,
					toneLabel: `Succeeded`,
					time: `5 min ago`,
					dateTime: `2026-11-08T14:05:00Z`,
					actor: `Ada Lovelace`
				}),
				(0, Q.jsx)(ql, {
					title: `Health check slow`,
					tone: `warn`,
					toneLabel: `Warning`,
					time: `12 min ago`,
					dateTime: `2026-11-08T13:58:00Z`,
					actor: `Monitor`,
					children: `Response time reached 1.8 s for two minutes.`
				}),
				(0, Q.jsx)(ql, {
					title: `Build failed`,
					tone: `danger`,
					toneLabel: `Failed`,
					time: `1 h ago`,
					dateTime: `2026-11-08T13:04:00Z`,
					actor: `Grace Hopper`,
					actions: (0, Q.jsx)(V, {
						variant: `outline`,
						size: `sm`,
						children: `View log`
					}),
					children: `Type error in src/data/Table.tsx, line 42.`
				}),
				(0, Q.jsx)(ql, {
					title: `Branch created`,
					tone: `info`,
					toneLabel: `Info`,
					time: `Yesterday`,
					dateTime: `2026-11-07`,
					actor: `Alan Turing`
				}),
				(0, Q.jsx)(ql, {
					title: `Project started`,
					time: `1 November`,
					dateTime: `2026-11-01`
				})
			]
		}), (0, Q.jsx)(Wl, {
			"aria-label": `Empty history`,
			emptyState: `Nothing has happened here yet.`
		})]
	});
}
function ku() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-8 lg:grid-cols-2`,
		children: [(0, Q.jsx)(Vl, {
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
					value: (0, Q.jsx)(H, {
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
		}), (0, Q.jsx)(Vl, {
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
					value: (0, Q.jsx)(`code`, { children: `2.4.1` })
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
var Au = {
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
			render: () => (0, Q.jsx)(iu, {})
		},
		{
			name: `DataTable for an admin view`,
			components: [`DataTable`],
			description: `The full grid of an admin panel on 2,000 posts: search, faceted filters with chips, sort by several columns (Shift with a click adds the next key), columns to hide, reorder and resize, two densities, selection with bulk actions, a menu on every row, thumbnails and badges, pages with a page size, CSV export of the view, and the view kept in the address. Switch the source to a server to see paging and a skeleton while the next page loads, and choose All rows to render only the rows in view.`,
			usage: `const url = useTableUrlState({ prefix: 'posts.' })
<DataTable aria-label="Posts" columns={columns} items={posts} rowKey={(p) => p.id}
  labels={labels} {...url} pageSizes={[25, 50, 100]} resizable
  selectionMode="multiple" bulkActions={(rows) => <Button size="sm">Publish</Button>}
  rowActions={(post) => [{ id: 'open', label: 'Open', onAction: () => open(post) }]}
  isLoading={isLoading} loadingLabel="Loading posts" error={error} emptyState={empty} />
// Server data: manual total={page.total} items={page.rows}, and fetch with url.state.`,
			accessibility: `One tab stop enters the grid; arrow keys move between cells, Home and End along a row, Space selects a row, and typing jumps to a row. A header sorts on Enter or a click and only the main sort key carries aria-sort; further keys show their position and say it in words. Column edges are separators the arrow keys resize. The toolbar fields and menus are named, the filter chips each have a remove button, and the count of matching rows is read politely after a search. The row header column and the header stay in view while the box scrolls. Loading is a status, an error an alert with its retry button, and every state is said in words.`,
			pl: {
				description: `Pełna siatka panelu administracyjnego na 2000 wpisach: wyszukiwanie, filtry fasetowe z chipami, sortowanie po kilku kolumnach (Shift z kliknięciem dodaje kolejny klucz), kolumny do ukrycia, przestawienia i zmiany szerokości, dwie gęstości, zaznaczanie z akcjami zbiorczymi, menu przy każdym wierszu, miniatury i plakietki, strony z wyborem ich rozmiaru, eksport widoku do CSV i widok zapisany w adresie. Przełącz źródło na serwer, aby zobaczyć stronicowanie i szkielet podczas wczytywania kolejnej strony, a wybierz wszystkie wiersze, aby renderować tylko te widoczne.`,
				accessibility: `Jeden przystanek Tab wchodzi do siatki; klawisze strzałek przechodzą między komórkami, Home i End wzdłuż wiersza, Spacja zaznacza wiersz, a wpisywanie przeskakuje do wiersza. Nagłówek sortuje klawiszem Enter albo kliknięciem i tylko główny klucz sortowania ma aria-sort; kolejne klucze pokazują swoją pozycję i mówią ją słowami. Krawędzie kolumn są separatorami, których szerokość zmieniają klawisze strzałek. Pola i menu paska narzędzi mają nazwy, każdy chip filtra ma przycisk usuwania, a liczba pasujących wierszy jest odczytywana po wyszukiwaniu. Kolumna nagłówków wierszy i nagłówek zostają na widoku podczas przewijania. Ładowanie jest statusem, błąd komunikatem z przyciskiem ponowienia, a każdy stan jest wypowiedziany słowami.`
			},
			render: () => (0, Q.jsx)(vu, {})
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
			render: () => (0, Q.jsx)(ou, {})
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
			render: () => (0, Q.jsx)(yu, {})
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
			render: () => (0, Q.jsxs)(`div`, {
				className: `flex flex-wrap gap-6 text-label font-semibold text-muted uppercase`,
				children: [
					(0, Q.jsx)(yt, { children: `Unsorted` }),
					(0, Q.jsx)(yt, {
						direction: `ascending`,
						children: `Ascending`
					}),
					(0, Q.jsx)(yt, {
						direction: `descending`,
						children: `Descending`
					}),
					(0, Q.jsx)(yt, {
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
      actions={<IconButton label={\`Deploy \${p.name}\`} size="sm"><Icon name="ops.deploy" aria-hidden="true" /></IconButton>} />
  )}
</List>`,
			accessibility: `One tab stop; Up and Down move between items, Home and End jump, typing finds an item, Space selects and Enter runs onAction. Right arrow reaches the buttons inside an item. Selected items have a checkbox named after the item, a tint and a leading rule, and the system highlight in forced colours. Titles wrap at large zoom unless truncate is set.`,
			pl: {
				description: `Interaktywna lista rekordów z ikoną, tytułem, opisem, metadanymi na końcu i akcjami wiersza. Wybierz ją zamiast tabeli, gdy każdy rekord czyta się jako jedna linia tekstu, a nie jako kolumny.`,
				accessibility: `Jeden przystanek w kolejności Tab; strzałka w górę i w dół przechodzi między pozycjami, Home i End skaczą, wpisywanie znajduje pozycję, Spacja zaznacza, a Enter uruchamia onAction. Strzałka w prawo dociera do przycisków wewnątrz pozycji. Zaznaczone pozycje mają pole wyboru nazwane pozycją, podbarwienie i linię z przodu, a w trybie wymuszonych kolorów systemowe wyróżnienie. Tytuły się zawijają przy dużym powiększeniu, chyba że ustawiono truncate.`
			},
			render: () => (0, Q.jsx)(xu, {})
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
			render: () => (0, Q.jsx)(Su, {})
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
			render: () => (0, Q.jsx)(Cu, {})
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
			render: () => (0, Q.jsx)(Eu, {})
		},
		{
			name: `TreeView`,
			components: [`TreeView`, `TreeRow`],
			description: `A hierarchy such as files or nested sections, with a folder icon that opens, badges and row actions. Pick it when depth matters; use List for flat records.`,
			usage: `<TreeView aria-label="Files" selectionMode="single">
  <TreeRow id="src" title="src" icon={<Icon name="folder.closed" aria-hidden="true" />} expandedIcon={<Icon name="folder.open" aria-hidden="true" />}>
    <TreeRow id="index" title="index.ts" meta={<Badge tone="warn">Modified</Badge>} />
  </TreeRow>
</TreeView>`,
			accessibility: `A treegrid with aria-level and aria-expanded on every row. Up and Down move, Right opens a branch or moves into it, Left closes it or returns to the parent, typing jumps to a row, and Enter or Space selects. The chevron has a localised Expand or Collapse name from React Aria and points the other way in right-to-left text. Indentation stops growing after eight levels so deep trees fit a phone.`,
			pl: {
				description: `Hierarchia, taka jak pliki albo zagnieżdżone sekcje, z ikoną folderu, która się otwiera, plakietkami i akcjami wiersza. Wybierz ją, gdy ważna jest głębokość; dla płaskich rekordów użyj List.`,
				accessibility: `Siatka drzewa z aria-level i aria-expanded na każdym wierszu. Strzałka w górę i w dół przesuwa, w prawo otwiera gałąź albo wchodzi do niej, w lewo ją zamyka albo wraca do rodzica, wpisywanie przeskakuje do wiersza, a Enter lub Spacja zaznacza. Strzałka rozwijania ma zlokalizowaną nazwę Rozwiń albo Zwiń z React Aria i w tekście od prawej do lewej wskazuje w przeciwną stronę. Wcięcie przestaje rosnąć po ośmiu poziomach, więc głębokie drzewa mieszczą się na telefonie.`
			},
			render: () => (0, Q.jsx)(Du, {})
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
			render: () => (0, Q.jsx)(Ou, {})
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
			render: () => (0, Q.jsx)(ku, {})
		}
	]
};
export { Xl as t };
