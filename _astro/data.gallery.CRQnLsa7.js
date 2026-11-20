import { n as e, r as t, t as n } from "./rolldown-runtime.XKyaHtl9.js";
import { n as r, t as i } from "./react-dom.B9zIfLd2.js";
import { c as a, d as o, f as s, l as c, u as l } from "./ListBox.8u6ak81Y.js";
import { t as u } from "./useDragAndDrop.BOi4ujj5.js";
import { t as d } from "./useListData.NOa4VaOj.js";
import { a as f } from "./doc.CpwJe6Re.js";
import { $ as p, $t as m, At as h, Bt as g, Dt as _, Gt as v, H as y, Ht as b, I as x, Kt as S, Lt as C, Mt as w, N as T, Nt as E, P as D, Q as O, St as k, Vt as A, X as j, Xt as M, Yt as N, Zt as ee, _ as P, d as F, et as te, g as ne, jt as I, kt as L, mt as re, nn as ie, ot as ae, q as oe, st as se, t as ce, tn as R, tt as le, v as ue, x as de, y as z, zt as fe } from "./useOverflow.Dq483xd0.js";
import { t as B } from "./Button.reJVLFTj.js";
import { t as pe } from "./IconButton.BlECy7MW.js";
import { t as V } from "./Badge.BtjCZkbj.js";
import { t as H } from "./Segmented.Dipfd2Xh.js";
import { t as me } from "./BulkActionBar.DZKJaWTz.js";
import { t as he } from "./shim.DIVImME0.js";
import { a as ge, o as _e } from "./Checkbox.5YNEJrfk.js";
import { _ as ve, a as U, b as ye, c as W, d as be, g as xe, h as Se, i as Ce, l as we, m as Te, n as Ee, o as De, r as Oe, s as ke, t as Ae, v as G } from "./useCollection.DQc_Iacd.js";
import { n as je, r as Me } from "./Autocomplete.CGc8yklO.js";
import { n as Ne, t as Pe } from "./SearchField.B5AzRyeE.js";
import { c as Fe, n as Ie, r as Le, s as Re } from "./FocusScope.aBBixRPA.js";
import { i as ze, n as Be, t as Ve } from "./Tree.Cu_mgKtP.js";
import { a as He, d as Ue, i as We, l as Ge, n as Ke, o as qe, r as Je, t as Ye, u as Xe } from "./CollectionBuilder.OeX_9-Zv.js";
import { a as Ze, i as Qe, l as $e, o as et, t as tt } from "./useLoadMoreSentinel.CCe53T__.js";
import { t as nt } from "./useControlledState.DijOhE0s.js";
import { n as rt } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { r as it } from "./useOverlayTriggerState.DoeSTtz6.js";
import { i as at, r as ot } from "./useGridListItem.Daw7DFMj.js";
import { t as st } from "./useHasTabbableChild.CNAJ57B9.js";
import { t as ct } from "./useUpdateEffect.CegO75zp.js";
import { a as lt, r as ut } from "./GridList.CVxLYl-l.js";
import { t as dt } from "./useMove.BC0TXBd6.js";
import { n as ft } from "./VisuallyHidden.CPLGlJAY.js";
import { a as pt, i as mt, n as ht, o as gt, r as _t, s as vt, t as yt } from "./internal.h4zWFYiZ.js";
import { n as bt, t as xt } from "./Table.Dtnnu1CW.js";
import { t as St } from "./Pagination.C3N7H4XP.js";
import { a as Ct, t as wt } from "./MenuItem.BpnCl8UA.js";
import { t as Tt } from "./MenuCheckItem.BZiO0Re4.js";
import { t as Et } from "./Popover.CfKp3Zes.js";
import { n as Dt, t as Ot } from "./List.BGugEX2g.js";
import { t as kt } from "./TreeView.CcmilX-O.js";
for (var K = t(r(), 1), At = class {
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
}, jt = `row-header-column-` + Math.random().toString(36).slice(2), Mt = `row-header-column-` + Math.random().toString(36).slice(2); jt === Mt;) Mt = `row-header-column-` + Math.random().toString(36).slice(2);
function Nt(e, t) {
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
var Pt = class extends At {
	constructor(e, t, n) {
		let r = new Set(), i = null, a = [];
		if (n?.showSelectionCheckboxes) {
			let e = {
				type: `column`,
				key: jt,
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
				key: Mt,
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
		let l = Nt(s, a);
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
		return W(this.body.childNodes)?.key ?? null;
	}
	getLastKey() {
		return ke(this.body.childNodes)?.key ?? null;
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
function Ft(e) {
	return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function It(e) {
	if (!e || typeof e == `number`) return 1;
	let t = e.match(/^(.+)(?=fr$)/);
	return t ? parseFloat(t[0]) : 1;
}
function Lt(e, t) {
	if (typeof e == `string`) {
		let n = e.match(/^(\d+)(?=%$)/);
		if (!n) throw Error(`Only percentages or numbers are supported for static column widths`);
		return t * (parseFloat(n[0]) / 100);
	}
	return e;
}
function Rt(e, t) {
	return e == null ? 2 ** 53 - 1 : Lt(e, t);
}
function zt(e, t) {
	return e == null ? 0 : Lt(e, t);
}
function Bt(e, t, n, r, i) {
	let a = e, o = Math.floor(e), s = e - o > 0;
	e = o;
	let c = !1, l = t.map((t, a) => {
		let o = n.get(t.key) == null ? t.width ?? t.defaultWidth ?? r?.(a) ?? `1fr` : n.get(t.key) ?? `1fr`, s = !1, l = 0, u = 0, d = 0;
		Ft(o) ? (l = Lt(o, e), s = !0) : (u = It(o), u <= 0 && (s = !0));
		let f = zt(t.minWidth ?? i?.(a) ?? 0, e), p = Rt(t.maxWidth, e), m = Math.max(f, Math.min(l, p));
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
	let u = Vt(l);
	if (s && u.length > 0) {
		let e = a.toString().split(`.`)[1], t = u[u.length - 1].toString();
		u[u.length - 1] = Number(t + `.` + e);
	}
	return u;
}
function Vt(e) {
	let t = 0, n = 0, r = [];
	return e.forEach(function(e) {
		let i = e.targetMainSize, a = Math.round(i + t) - n;
		t += i, n += a, r.push(a);
	}), r;
}
var Ht = class {
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
		return this.columnWidths = new Map(), this.columnMinWidths = new Map(), this.columnMaxWidths = new Map(), Bt(e, t.columns.map((e) => ({
			...e.props,
			key: e.key
		})), n, (e) => this.getDefaultWidth(t.columns[e]), (e) => this.getDefaultMinWidth(t.columns[e])).forEach((n, r) => {
			let i = t.columns[r].key, a = t.columns[r];
			this.columnWidths.set(i, n), this.columnMinWidths.set(i, zt(a.props.minWidth ?? this.getDefaultMinWidth(a), e)), this.columnMaxWidths.set(i, Rt(a.props.maxWidth, e));
		}), this.columnWidths;
	}
};
function Ut(e, t) {
	let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: i = 0 } = e, [a, o] = (0, K.useState)(null), s = (0, K.useMemo)(() => new Ht({
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
function Wt(e) {
	let { collection: t, focusMode: n } = e, r = e.UNSAFE_selectionState || Oe(e), i = (0, K.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), a = r.setFocusedKey;
	r.setFocusedKey = (e, r) => {
		if (n === `cell` && e != null) {
			let n = t.getItem(e);
			if (n?.type === `item`) {
				let i = U(n, t);
				e = r === `last` ? ke(i)?.key ?? null : W(i)?.key ?? null;
			}
		}
		a(e, r);
	};
	let o = (0, K.useMemo)(() => new Ee(t, r), [t, r]), s = (0, K.useRef)(null);
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
				let i = u.hasChildNodes ? [...U(u, t)] : [], a = u.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : u.key;
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
var Gt = {
	ascending: `descending`,
	descending: `ascending`
};
function Kt(e) {
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
	]), c = Ae(e, (0, K.useCallback)((e) => new Pt(e, null, s), [s]), s), { disabledKeys: l, selectionManager: u } = Wt({
		...e,
		collection: c,
		disabledBehavior: e.disabledBehavior || `selection`
	}), [d, f] = nt(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
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
				direction: n ?? (e.sortDescriptor?.column === t ? Gt[e.sortDescriptor.direction] : `ascending`)
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
function qt(e, t) {
	let n = (0, K.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return {
		...e,
		collection: n,
		selectionManager: r
	};
}
var Jt = class {
	constructor(e) {
		if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || `all`, this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw Error(`Either a layout or a ref must be specified.`);
		this.layoutDelegate = e.layoutDelegate || (e.layout ? new Yt(e.layout) : new et(e.ref)), this.focusMode = e.focusMode ?? `row`;
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
		for (let e of U(n, this.collection)) {
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
			let e = U(t, this.collection);
			return (this.direction === `rtl` ? ke(e)?.key : W(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = U(n, this.collection), i = (this.direction === `rtl` ? De(r, t.index - 1) : De(r, t.index + 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === `row` ? t.parentKey ?? null : (this.direction === `rtl` ? this.getFirstKey(e) : this.getLastKey(e)) ?? null;
		}
		return null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = U(t, this.collection);
			return (this.direction === `rtl` ? W(e)?.key : ke(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = U(n, this.collection), i = (this.direction === `rtl` ? De(r, t.index + 1) : De(r, t.index - 1)) ?? null;
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
				return e ? W(U(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findNextKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = W(U(e, this.collection))?.key ?? null;
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
				let t = U(e, this.collection);
				return ke(t)?.key ?? null;
			}
		}
		if (n = this.findPreviousKey(void 0, (e) => e.type === `item`), n != null && (r && this.isCell(r) && t || this.focusMode === `cell`)) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			let t = U(e, this.collection);
			n = ke(t)?.key ?? null;
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
				if (this.collator.compare(n, e) === 0) return this.isRow(t) && this.focusMode === `cell` ? W(U(t, this.collection))?.key ?? null : t.key;
			}
			n = this.findNextKey(n, (e) => e.type === `item`), n == null && !a && (n = this.getFirstKey(), a = !0);
		}
		return null;
	}
}, Yt = class {
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
}, Xt = new WeakMap();
function Zt(e, t, n) {
	let { isVirtualized: r, disallowTypeAhead: i, keyboardDelegate: a, focusMode: o, scrollRef: s, getRowText: c, onRowAction: l, onCellAction: u, escapeKeyBehavior: d = `clearSelection`, shouldSelectOnPressUp: f, keyboardNavigationBehavior: h = `arrow` } = e, { selectionManager: g } = t;
	!e[`aria-label`] && !e[`aria-labelledby`] && console.warn(`An aria-label or aria-labelledby prop is required for accessibility.`);
	let _ = Qe({
		usage: `search`,
		sensitivity: `base`
	}), { direction: v } = p(), b = t.selectionManager.disabledBehavior, x = (0, K.useMemo)(() => a || new Jt({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: b,
		ref: n,
		direction: v,
		collator: _,
		focusMode: o
	}), [
		a,
		t.collection,
		t.disabledKeys,
		b,
		n,
		v,
		_,
		o
	]), { collectionProps: S } = be({
		ref: n,
		selectionManager: g,
		keyboardDelegate: x,
		isVirtualized: r,
		scrollRef: s,
		disallowTypeAhead: i,
		escapeKeyBehavior: d
	}), C = m(e.id);
	Xt.set(t, {
		keyboardDelegate: x,
		actions: {
			onRowAction: l,
			onCellAction: u
		},
		shouldSelectOnPressUp: f,
		keyboardNavigationBehavior: h
	});
	let w = ot({
		selectionManager: g,
		hasItemActions: !!(l || u)
	}), T = y(e, { labelable: !0 }), D = (0, K.useCallback)((e) => {
		g.isFocused ? L(e.currentTarget, E(e)) || g.setFocused(!1) : L(e.currentTarget, E(e)) && g.setFocused(!0);
	}, [g]), O = (0, K.useMemo)(() => ({
		onBlur: S.onBlur,
		onFocus: D
	}), [D, S.onBlur]), k = st(n, { isDisabled: t.collection.size !== 0 }), A = M(T, {
		role: `grid`,
		id: C,
		"aria-multiselectable": g.selectionMode === `multiple` ? `true` : void 0
	}, t.isKeyboardNavigationDisabled ? O : S, t.collection.size === 0 && { tabIndex: k ? -1 : 0 } || void 0, w);
	return r && (A[`aria-rowcount`] = t.collection.size, A[`aria-colcount`] = t.collection.columnCount), at({ getRowText: c }, t), { gridProps: A };
}
var Qt = new WeakMap();
function $t(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function en(e, t) {
	let n = Qt.get(e);
	if (!n) throw Error(`Unknown grid`);
	return `${n}-${$t(t)}`;
}
function tn(e, t, n) {
	let r = Qt.get(e);
	if (!r) throw Error(`Unknown grid`);
	return `${r}-${$t(t)}-${$t(n)}`;
}
function nn(e, t) {
	return [...e.collection.rowHeaderColumnKeys].map((n) => tn(e, t, n)).join(` `);
}
var rn = {};
rn = {
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
var an = {};
an = {
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
var on = {};
on = {
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
var sn = {};
sn = {
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
var cn = {};
cn = {
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
var ln = {};
ln = {
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
var un = {};
un = {
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
var dn = {};
dn = {
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
var fn = {};
fn = {
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
var pn = {};
pn = {
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
var mn = {};
mn = {
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
var hn = {};
hn = {
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
var gn = {};
gn = {
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
var _n = {};
_n = {
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
var vn = {};
vn = {
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
var yn = {};
yn = {
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
var bn = {};
bn = {
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
var xn = {};
xn = {
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
var Sn = {};
Sn = {
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
var Cn = {};
Cn = {
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
var wn = {};
wn = {
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
var Tn = {};
Tn = {
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
var En = {};
En = {
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
var Dn = {};
Dn = {
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
var On = {};
On = {
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
var kn = {};
kn = {
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
var An = {};
An = {
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
var jn = {};
jn = {
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
var Mn = {};
Mn = {
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
var Nn = {};
Nn = {
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
var Pn = {};
Pn = {
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
var Fn = {};
Fn = {
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
var In = {};
In = {
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
var Ln = {};
Ln = {
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
var Rn = {};
Rn = {
	"ar-AE": rn,
	"bg-BG": an,
	"cs-CZ": on,
	"da-DK": sn,
	"de-DE": cn,
	"el-GR": ln,
	"en-US": un,
	"es-ES": dn,
	"et-EE": fn,
	"fi-FI": pn,
	"fr-FR": mn,
	"he-IL": hn,
	"hr-HR": gn,
	"hu-HU": _n,
	"it-IT": vn,
	"ja-JP": yn,
	"ko-KR": bn,
	"lt-LT": xn,
	"lv-LV": Sn,
	"nb-NO": Cn,
	"nl-NL": wn,
	"pl-PL": Tn,
	"pt-BR": En,
	"pt-PT": Dn,
	"ro-RO": On,
	"ru-RU": kn,
	"sk-SK": An,
	"sl-SI": jn,
	"sr-SP": Mn,
	"sv-SE": Nn,
	"tr-TR": Pn,
	"uk-UA": Fn,
	"zh-CN": In,
	"zh-TW": Ln
};
var zn = class extends Jt {
	isCell(e) {
		return e.type === `cell` || e.type === `rowheader` || e.type === `column`;
	}
	getKeyBelow(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === `column`) {
			let e = W(U(n, this.collection));
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
		for (let e of U(n, this.collection)) if (e.type === `column`) return e.key;
		return null;
	}
	findPreviousColumnKey(e) {
		let t = this.findPreviousKey(e.key, (e) => e.type === `column`);
		if (t != null) return t;
		let n = this.collection.headerRows[e.level], r = [...U(n, this.collection)];
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
			for (let r of U(o, this.collection)) {
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
function Bn(e) {
	return e && e.__esModule ? e.default : e;
}
function Vn(e, t, n) {
	let { keyboardDelegate: r, isVirtualized: i, layoutDelegate: a, layout: o } = e, s = Qe({
		usage: `search`,
		sensitivity: `base`
	}), { direction: c } = p(), l = t.selectionManager.disabledBehavior, u = (0, K.useMemo)(() => r || new zn({
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
	]), d = m(e.id);
	Qt.set(t, d);
	let { gridProps: f } = Zt({
		...e,
		id: d,
		keyboardDelegate: u
	}, t, n);
	i && (f[`aria-rowcount`] = t.collection.size + t.collection.headerRows.length), t.treeColumn != null && (f.role = `treegrid`);
	let { column: h, direction: g } = t.sortDescriptor || {}, _ = rt(Bn(Rn), `@react-aria/table`), v = (0, K.useMemo)(() => {
		let e = t.collection.columns.find((e) => e.key === h)?.textValue ?? ``;
		return g && h ? _.format(`${g}Sort`, { columnName: e }) : void 0;
	}, [
		g,
		h,
		t.collection.columns
	]), y = Te(v);
	return ct(() => {
		v && de(v, `assertive`, 500);
	}, [v]), { gridProps: M(f, y, { "aria-describedby": [y[`aria-describedby`], f[`aria-describedby`]].filter(Boolean).join(` `) }) };
}
function Hn(e, t, n) {
	let { node: r, isVirtualized: i, focusMode: a, allowsArrowNavigation: o, shouldSelectOnPressUp: s, onAction: c } = e, { direction: l } = p(), { keyboardDelegate: u, actions: { onCellAction: d }, keyboardNavigationBehavior: f } = Xt.get(t), m = a ?? (f === `tab` ? `cell` : `child`), g = (0, K.useRef)(null), _ = (0, K.useRef)(null), v = () => {
		if (n.current) {
			let e = Le(n.current);
			if (m === `child`) {
				let i = I(C(n.current));
				if (h(n.current) && n.current !== i) return;
				let a = C(n.current);
				if (!i || i === a.body || i === n.current) {
					let e = _.current;
					if (e && g.current === r.key && L(n.current, e)) {
						O(e);
						return;
					}
				}
				let o = t.selectionManager.childFocusStrategy === `last` ? Un(e) : e.firstChild();
				if (o) {
					O(o);
					return;
				}
			}
			(g.current != null && r.key !== g.current || !h(n.current)) && O(n.current);
		}
	}, { itemProps: y, isPressed: b } = we({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		focus: v,
		shouldSelectOnPressUp: s,
		onAction: d ? () => d(r.key) : c,
		isDisabled: t.collection.size === 0
	}), x = M(y, {
		role: `gridcell`,
		onKeyDownCapture: f !== `tab` || o ? (e) => {
			let i = I(C(n.current));
			if (!L(e.currentTarget, E(e)) || t.isKeyboardNavigationDisabled || !n.current || !i) return;
			let a = Le(n.current);
			switch (a.currentNode = i, e.key) {
				case `ArrowLeft`: {
					let t = l === `rtl` ? a.nextNode() : a.previousNode();
					if (m === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) O(t), Se(t, { containingElement: $e(n.current) });
					else {
						if (u.getKeyLeftOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						m === `cell` && l === `rtl` ? (O(n.current), Se(n.current, { containingElement: $e(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? a.firstChild() : Un(a), t && (O(t), Se(t, { containingElement: $e(n.current) })));
					}
					break;
				}
				case `ArrowRight`: {
					let t = l === `rtl` ? a.previousNode() : a.nextNode();
					if (m === `child` && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) O(t), Se(t, { containingElement: $e(n.current) });
					else {
						if (u.getKeyRightOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						m === `cell` && l === `ltr` ? (O(n.current), Se(n.current, { containingElement: $e(n.current) })) : (a.currentNode = n.current, t = l === `rtl` ? Un(a) : a.firstChild(), t && (O(t), Se(t, { containingElement: $e(n.current) })));
					}
					break;
				}
				case `ArrowUp`:
				case `ArrowDown`: !e.altKey && L(n.current, E(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
			}
		} : void 0,
		onKeyDown: f === `tab` ? (e) => {
			let r = I(C(n.current));
			if (L(e.currentTarget, E(e)) && !t.isKeyboardNavigationDisabled && n.current && r) {
				if (f === `tab` && E(e) !== n.current && e.key !== `Tab`) e.stopPropagation();
				else if (e.key === `Tab` && f === `tab`) {
					let t = Le(n.current, { tabbable: !0 });
					t.currentNode = r, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
				}
			}
		} : void 0,
		"aria-colspan": r.colSpan,
		"aria-colindex": r.colIndex == null ? void 0 : r.colIndex + 1,
		colSpan: i ? void 0 : r.colSpan,
		onFocus: (e) => {
			if (g.current = r.key, E(e) !== n.current) {
				let i = E(e);
				n.current && L(n.current, i) && (_.current = i), se() || t.selectionManager.setFocusedKey(r.key);
			} else m === `child` && e.relatedTarget && L(n.current, e.relatedTarget) || requestAnimationFrame(() => {
				m === `child` && I(C(n.current)) === n.current && v();
			});
		},
		...m === `child` && f === `tab` ? { tabIndex: -1 } : {}
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
function Un(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
function Wn(e) {
	return e && e.__esModule ? e.default : e;
}
function Gn(e, t, n) {
	let { node: r } = e, i = r.props.allowsSorting, { gridCellProps: a } = Hn({
		focusMode: `child`,
		...e
	}, t, n), o = r.props.isSelectionCell && t.selectionManager.selectionMode === `single`, { pressProps: s, isPressed: c } = x({
		isDisabled: !i || o,
		onPress() {
			t.sort(r.key);
		},
		ref: n
	}), { focusableProps: l } = oe({}, n), u, d = t.sortDescriptor?.column === r.key, f = t.sortDescriptor?.direction;
	r.props.allowsSorting && !k() && (u = d ? f : `none`);
	let p = rt(Wn(Rn), `@react-aria/table`), m;
	i && (m = `${p.format(`sortable`)}`, d && f && k() && (m = `${m}, ${p.format(f)}`));
	let h = Te(m), g = t.collection.size === 0;
	return (0, K.useEffect)(() => {
		g && t.selectionManager.focusedKey === r.key && t.selectionManager.setFocusedKey(null);
	}, [
		g,
		t.selectionManager,
		r.key
	]), {
		columnHeaderProps: {
			...M(l, a, s, h, g ? { tabIndex: -1 } : null),
			role: `columnheader`,
			id: en(t, r.key),
			"aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
			"aria-sort": u
		},
		isPressed: c
	};
}
function Kn(e, t, n) {
	let { node: r, isVirtualized: i, shouldSelectOnPressUp: a, onAction: o } = e, { actions: s, shouldSelectOnPressUp: c } = Xt.get(t), l = s.onRowAction ? () => s.onRowAction?.(r.key) : o, { itemProps: u, ...d } = we({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		shouldSelectOnPressUp: c || a,
		onAction: l || r?.props?.onAction ? ie(r?.props?.onAction, l) : void 0,
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
function qn(e) {
	return e && e.__esModule ? e.default : e;
}
var Jn = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function Yn(e, t, n) {
	let { node: r, isVirtualized: i } = e, { rowProps: a, ...o } = Kn(e, t, n), { direction: s } = p();
	i && t.treeColumn == null ? a[`aria-rowindex`] = r.index + 1 + t.collection.headerRows.length : delete a[`aria-rowindex`];
	let c = t.treeColumn != null && (t.expandedKeys === `all` || t.expandedKeys.has(r.key)), l = rt(qn(Rn), `@react-aria/table`), u = te({
		"aria-label": c ? l.format(`collapse`) : l.format(`expand`),
		"aria-labelledby": nn(t, r.key)
	}), d = {}, f = {};
	if (t.treeColumn != null) {
		let e = t.collection.getItem(r.key);
		if (e != null) {
			let n = Xn(t.collection, r), i = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || n?.type !== `cell`, a = t.collection.getItem(r.parentKey), c = a.type === `tablebody` || a.type === `body`, l = Xn(t.collection, a);
			for (; l && l.type !== `item` && l.prevKey != null;) l = t.collection.getItem(l.prevKey);
			d = {
				onKeyDown: (n) => {
					n.key === Jn.expand[s] && t.selectionManager.focusedKey === e.key && i && t.expandedKeys !== `all` && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : n.key === Jn.collapse[s] && t.selectionManager.focusedKey === e.key && (t.expandedKeys === `all` ? t.expandedKeys === `all` && (t.toggleKey(e.key), n.stopPropagation()) : i && t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : !t.expandedKeys.has(e.key) && e.parentKey != null && e.level > 0 && (t.selectionManager.setFocusedKey(e.parentKey), n.stopPropagation()));
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
	let m = re(r.props), h = o.hasAction ? m : {};
	return {
		rowProps: {
			...M(a, d, h),
			"aria-labelledby": nn(t, r.key)
		},
		expandButtonProps: f,
		...o
	};
}
function Xn(e, t) {
	return `lastChildKey` in t ? t.lastChildKey == null ? null : e.getItem(t.lastChildKey) : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
function Zn(e, t, n) {
	let { node: r, isVirtualized: i } = e, a = { role: `row` };
	return i && t.treeColumn == null && (a[`aria-rowindex`] = r.index + 1), { rowProps: a };
}
function Qn(e, t, n) {
	let { gridCellProps: r, isPressed: i } = Hn(e, t, n), a = e.node.column?.key;
	return a != null && t.collection.rowHeaderColumnKeys.has(a) && (r.role = `rowheader`, r.id = tn(t, e.node.parentKey, a)), {
		gridCellProps: r,
		isPressed: i
	};
}
function $n(e) {
	return e && e.__esModule ? e.default : e;
}
function er(e, t) {
	let { key: n } = e, { checkboxProps: r } = lt(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${nn(t, n)}`
	} };
}
function tr(e) {
	let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
	return { checkboxProps: {
		"aria-label": rt($n(Rn), `@react-aria/table`).format(r === `single` ? `select` : `selectAll`),
		isSelected: n,
		isDisabled: r !== `multiple` || e.collection.size === 0 || e.collection.rows.length === 1 && e.collection.rows[0].type === `loader`,
		isIndeterminate: !t && !n,
		onChange: () => e.selectionManager.toggleSelectAll()
	} };
}
function nr(e) {
	return e && e.__esModule ? e.default : e;
}
function rr(e, t, n) {
	let { column: r, triggerRef: i, isDisabled: a, onResizeStart: o, onResize: s, onResizeEnd: c, "aria-label": l } = e, u = rt(nr(Rn), `@react-aria/table`), d = m(), f = t.resizingColumn === r.key, h = (0, K.useRef)(f), g = (0, K.useRef)(null), _ = (0, K.useRef)(!1), v = t.tableState.isKeyboardNavigationDisabled, [y, b] = (0, K.useState)(!1), { direction: S } = p(), C = (0, K.useCallback)((e) => {
		h.current || (g.current = t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.startResize(e.key), t.tableState.setKeyboardNavigationDisabled(!0), o?.(g.current)), h.current = !0;
	}, [t, o]), w = (0, K.useCallback)((e, n) => {
		let r = t.updateResizedColumns(e.key, n);
		s?.(r), g.current = r;
	}, [t, s]), T = (0, K.useCallback)((e) => {
		h.current && (g.current ??= t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), c?.(g.current), h.current = !1, i?.current && !_.current && O(i.current)), g.current = null;
	}, [
		t,
		i,
		c
	]), D = () => {
		if (v) T(r);
		else return !1;
	}, { keyboardProps: k } = j({ shortcuts: {
		Escape: () => D(),
		Enter: () => {
			v ? T(r) : C(r);
		},
		" ": () => D(),
		Tab: () => D()
	} }), A = (0, K.useRef)(0), { moveProps: N } = dt({
		onMoveStart(e) {
			A.current = t.getColumnWidth(r.key), e.pointerType === `mouse` && b(!0), C(r);
		},
		onMove(e) {
			let { deltaX: t, deltaY: n, pointerType: i } = e;
			S === `rtl` && (t *= -1), i === `keyboard` && (n !== 0 && t === 0 && (t = n * -1), t *= 10), t !== 0 && (A.current += t, w(r, A.current));
		},
		onMoveEnd(e) {
			let { pointerType: t } = e;
			A.current = 0, b(!1), (t === `mouse` || t === `touch` && _.current) && T(r);
		}
	}), ee = (0, K.useCallback)((e) => {
		v && N.onKeyDown?.(e);
	}, [v, N]), P = Math.floor(t.getColumnMinWidth(r.key)), F = Math.floor(t.getColumnMaxWidth(r.key));
	F === 1 / 0 && (F = 2 ** 53 - 1);
	let te = Math.floor(t.getColumnWidth(r.key)), ne = ae();
	ne === `virtual` && typeof window < `u` && `ontouchstart` in window && (ne = `touch`);
	let L = i?.current == null && (ne === `keyboard` || ne === `virtual`) && !f ? u.format(`resizerDescription`) : void 0, re = Te(L), ie = {
		"aria-label": l,
		"aria-orientation": `horizontal`,
		"aria-labelledby": `${d} ${en(t.tableState, r.key)}`,
		"aria-valuetext": u.format(`columnSize`, { value: te }),
		type: `range`,
		min: P,
		max: F,
		value: te,
		...re
	}, oe = (0, K.useCallback)(() => {
		n.current && O(n.current);
	}, [n]), se = t.resizingColumn, ce = (0, K.useRef)(null), R = le(C);
	(0, K.useEffect)(() => {
		if (ce.current !== se && se != null && se === r.key) {
			_.current = I() === n.current, R(r);
			let e = setTimeout(() => oe(), 0), t = setTimeout(oe, 400);
			return () => {
				clearTimeout(e), clearTimeout(t);
			};
		}
		ce.current = se;
	}, [
		se,
		r,
		oe,
		n
	]);
	let ue = (e) => {
		let n = t.getColumnWidth(r.key), i = parseFloat(E(e).value);
		i = i > n ? n + 10 : n - 10, w(r, i);
	}, { pressProps: de } = x({
		preventFocusOnPress: !0,
		onPressStart: (e) => {
			e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || e.pointerType === `keyboard` || (e.pointerType === `virtual` && t.resizingColumn != null ? T(r) : (oe(), e.pointerType !== `virtual` && C(r)));
		},
		onPress: (e) => {
			(e.pointerType === `touch` && _.current || e.pointerType === `mouse`) && t.resizingColumn != null && T(r);
		}
	}), { visuallyHiddenProps: z } = ft();
	return {
		resizerProps: M(k, {
			...N,
			onKeyDown: ee
		}, de, { style: { touchAction: `none` } }),
		inputProps: M(z, {
			id: d,
			onBlur: () => {
				T(r);
			},
			onChange: ue,
			disabled: a
		}, ie),
		isResizing: f,
		isMouseResizing: y
	};
}
function ir() {
	return { rowGroupProps: { role: `rowgroup` } };
}
function ar() {
	return ir();
}
var or = t(i(), 1);
function sr(e) {
	return e && e.__esModule ? e.default : e;
}
var cr = class extends qe {
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
		return new kr(-2);
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
		if (this.headerRows = Nt(t, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw Error(`A table must have at least one Column with the isRowHeader prop set to true`);
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
		super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set(), this.head = new yr(-1), this.columnsDirty = !0, this.expandedKeys = new Set();
	}
}, lr = (0, K.createContext)(null), ur = (0, K.forwardRef)(function(e, t) {
	let n = N(t), r = (0, K.useRef)(null), i = (0, K.useRef)(null), [a, o] = (0, K.useState)(0);
	R(() => {
		let e = r.current;
		for (; e && e !== n.current && !xe(e);) e = e.parentElement;
		i.current = e;
	}, [n]), it({
		ref: i,
		box: `border-box`,
		onResize() {
			o(i.current?.clientWidth ?? 0);
		}
	}), R(() => {
		o(i.current?.clientWidth ?? 0);
	}, []);
	let s = (0, K.useMemo)(() => ({
		tableRef: r,
		scrollRef: i,
		tableWidth: a,
		useTableColumnResizeState: Ut,
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
	return K.createElement(S.div, {
		render: e.render,
		...y(e, { global: !0 }),
		ref: n,
		className: e.className || `react-aria-ResizableTableContainer`,
		style: e.style,
		onScroll: e.onScroll
	}, K.createElement(lr.Provider, { value: s }, e.children));
}), dr = (0, K.createContext)(null), fr = (0, K.createContext)(null), pr = (0, K.createContext)(null), mr = (0, K.forwardRef)(function(e, t) {
	[e, t] = A(e, t, dr);
	let n = Oe(e), { selectionBehavior: r, selectionMode: i, disallowEmptySelection: a } = n, o = !!e.dragAndDropHooks?.useDraggableCollectionState, s = (0, K.useMemo)(() => ({
		selectionBehavior: i === `none` ? null : r,
		selectionMode: i,
		disallowEmptySelection: a,
		allowsDragging: o
	}), [
		r,
		i,
		a,
		o
	]), c = K.createElement(vr.Provider, { value: s }, K.createElement(We, e));
	return K.createElement(Ke, {
		content: c,
		createCollection: () => new cr()
	}, (r) => K.createElement(_r, {
		props: e,
		forwardedRef: t,
		selectionState: n,
		collection: r
	}));
}), hr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.table, {
		...e,
		ref: t
	});
}), gr = {
	expand: {
		ltr: `ArrowRight`,
		rtl: `ArrowLeft`
	},
	collapse: {
		ltr: `ArrowLeft`,
		rtl: `ArrowRight`
	}
};
function _r({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
	[e, t] = A(e, t, Me);
	let { shouldUseVirtualFocus: i, disallowTypeAhead: a, filter: c, ...u } = e, d = (0, K.useContext)(lr);
	t = N((0, K.useMemo)(() => ee(t, d?.tableRef), [t, d?.tableRef]));
	let [f, m] = nt(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange);
	r = (0, K.useMemo)(() => r.withExpandedKeys(f), [r, f]);
	let h = Kt({
		...u,
		collection: r,
		children: void 0,
		UNSAFE_selectionState: n,
		expandedKeys: f,
		onExpandedChange: m
	}), _ = qt(h, c), { isVirtualized: v, layoutDelegate: x, dropTargetDelegate: S, CollectionRoot: C } = (0, K.useContext)(G), { dragAndDropHooks: w } = e, { gridProps: T } = Vn({
		...u,
		layoutDelegate: x,
		isVirtualized: v
	}, _, t), E = _.selectionManager, O = !!w?.useDraggableCollectionState, k = !!w?.useDroppableCollectionState;
	(0, K.useRef)(O), (0, K.useRef)(k), (0, K.useEffect)(() => {}, [O, k]);
	let j, P, F, te = !1, ne = null, I = (0, K.useRef)(null), { direction: L } = p(), [re] = (0, K.useState)(() => new ze());
	if (O && w) {
		j = w.useDraggableCollectionState({
			collection: _.collection,
			selectionManager: E,
			preview: w.renderDragPreview ? I : void 0
		}), w.useDraggableCollection({}, j, t);
		let e = w.DragPreview;
		ne = w.renderDragPreview ? K.createElement(e, { ref: I }, w.renderDragPreview) : null;
	}
	if (k && w) {
		P = w.useDroppableCollectionState({
			collection: _.collection,
			selectionManager: E
		});
		let e = new Ze({
			collection: _.collection,
			disabledKeys: E.disabledKeys,
			disabledBehavior: E.disabledBehavior,
			ref: t,
			layoutDelegate: x
		}), n = w.dropTargetDelegate || S || new w.ListDropTargetDelegate(r.rows, t);
		re.setup(n, h, L), F = w.useDroppableCollection({
			keyboardDelegate: e,
			dropTargetDelegate: re,
			onDropActivate: (e) => {
				if (e.target.type === `item`) {
					let t = e.target.key, n = h.collection.getItem(t), r = f.has(t);
					n && n.hasChildNodes && (!r || w?.isVirtualDragging?.()) && h.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = P?.target;
				if (t && t.type === `item` && t.dropPosition === `on`) {
					let n = h.collection.getItem(t.key);
					(e.key === gr.expand[L] && n?.hasChildNodes && !h.expandedKeys.has(t.key) || e.key === gr.collapse[L] && n?.hasChildNodes && h.expandedKeys.has(t.key)) && h.toggleKey(t.key);
				}
			}
		}, P, t), te = P.isDropTarget({ type: `root` });
	}
	let { focusProps: ie, isFocused: ae, isFocusVisible: oe } = D(), se = b({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Table`,
		values: {
			isDropTarget: te,
			isFocused: ae,
			isFocusVisible: oe,
			state: _
		}
	}), ce = !(!O || j?.isDisabled), R = se.style, le = null;
	d && (le = d.useTableColumnResizeState({ tableWidth: d.tableWidth }, _), v || (R = {
		...R,
		tableLayout: `fixed`,
		width: `min-content`
	}));
	let ue = y(e, { global: !0 });
	return K.createElement(g, { values: [
		[fr, _],
		[pr, le],
		[l, {
			dragAndDropHooks: w,
			dragState: j,
			dropState: P
		}],
		[s, { render: zr }],
		[Me, null],
		[je, null]
	] }, K.createElement(Ie, null, K.createElement(hr, {
		...M(ue, se, T, ie, F?.collectionProps),
		style: R,
		ref: t,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-allows-dragging": ce || void 0,
		"data-drop-target": te || void 0,
		"data-focused": ae || void 0,
		"data-focus-visible": oe || void 0
	}, K.createElement(Fe, null, K.createElement(C, {
		collection: _.collection,
		scrollRef: d?.scrollRef ?? t,
		persistedKeys: o(E, w, P)
	})))), ne);
}
var vr = (0, K.createContext)(null), yr = class extends Ue {
	static {
		this.type = `tableheader`;
	}
}, br = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.thead, {
		...e,
		ref: t
	});
}), xr = Je(yr, (e, t) => {
	let n = (0, K.useContext)(fr).collection, r = He({
		items: n.headerRows,
		children: (0, K.useCallback)((e) => {
			switch (e.type) {
				case `headerrow`: return K.createElement(Cr, { item: e });
				default: throw Error(`Unsupported node type in TableHeader: ` + e.type);
			}
		}, [])
	}), { rowGroupProps: i } = ar(), { hoverProps: a, isHovered: o } = T({
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), s = b({
		...e,
		children: void 0,
		defaultClassName: `react-aria-TableHeader`,
		values: { isHovered: o }
	});
	return K.createElement(br, {
		...M(y(e, { global: !0 }), i, a),
		...s,
		ref: t,
		"data-hovered": o || void 0
	}, r);
}, (e) => K.createElement(We, {
	dependencies: e.dependencies,
	items: e.columns
}, e.children)), Sr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(`div`, {
		...e,
		ref: t
	}) : K.createElement(`tr`, {
		...e,
		ref: t
	});
});
function Cr({ item: e }) {
	let t = (0, K.useRef)(null), n = (0, K.useContext)(fr), { isVirtualized: r, CollectionBranch: i } = (0, K.useContext)(G), { rowProps: a } = Zn({
		node: e,
		isVirtualized: r
	}, n, t), { checkboxProps: o } = tr(n);
	return K.createElement(Sr, {
		...a,
		ref: t
	}, K.createElement(g, { values: [[ge, { slots: { selection: o } }], [_e, { slots: { selection: o } }]] }, K.createElement(i, {
		collection: n.collection,
		parent: e
	})));
}
var wr = class extends Ue {
	static {
		this.type = `column`;
	}
}, Tr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.th, {
		...e,
		ref: t
	});
}), Er = Ye(wr, (e, t, n) => {
	let r = N(t), i = (0, K.useContext)(fr), { isVirtualized: a } = (0, K.useContext)(G), { columnHeaderProps: o, isPressed: s } = Gn({
		node: n,
		isVirtualized: a,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: c, isFocusVisible: l, focusProps: u } = D(), d = (0, K.useContext)(pr), f = !1;
	d && (f = d.resizingColumn === n.key);
	let { hoverProps: p, isHovered: m } = T({ isDisabled: !e.allowsSorting }), h = b({
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
	}), _ = h.style;
	d && (_ = {
		..._,
		width: d.getColumnWidth(n.key)
	});
	let v = y(e, { global: !0 });
	return delete v.id, K.createElement(Tr, {
		...M(v, o, u, p),
		...h,
		style: _,
		ref: r,
		"data-hovered": m || void 0,
		"data-pressed": s || void 0,
		"data-focused": c || void 0,
		"data-focus-visible": l || void 0,
		"data-resizing": f || void 0,
		"data-allows-sorting": n.props.allowsSorting || void 0,
		"data-sort-direction": i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0
	}, K.createElement(g, { values: [[Dr, {
		column: n,
		triggerRef: r
	}], [G, ye]] }, h.children));
}), Dr = (0, K.createContext)(null), Or = (0, K.forwardRef)(function(e, t) {
	let n = (0, K.useContext)(pr);
	if (!n) throw Error(`Wrap your <Table> in a <ResizableTableContainer> to enable column resizing`);
	let r = rt(sr(Ne), `react-aria-components`), { onResizeStart: i, onResize: a, onResizeEnd: o } = (0, K.useContext)(lr), { column: s, triggerRef: c } = (0, K.useContext)(Dr), l = (0, K.useRef)(null), { resizerProps: u, inputProps: d, isResizing: f, isMouseResizing: m } = rr({
		column: s,
		"aria-label": e[`aria-label`] || r.format(`tableResizer`),
		onResizeStart: i,
		onResize: a,
		onResizeEnd: o,
		triggerRef: c
	}, n, l), { focusProps: h, isFocused: g, isFocusVisible: _ } = D(), { hoverProps: v, isHovered: x } = T(e), C = n.getColumnMinWidth(s.key) >= n.getColumnWidth(s.key), w = n.getColumnMaxWidth(s.key) <= n.getColumnWidth(s.key), { direction: E } = p(), O = `both`;
	O = C ? E === `rtl` ? `right` : `left` : w ? E === `rtl` ? `left` : `right` : `both`;
	let k = N(t), [A, j] = (0, K.useState)(``);
	(0, K.useEffect)(() => {
		if (!k.current) return;
		let e = window.getComputedStyle(k.current);
		j(e.cursor);
	}, [k, O]);
	let ee = b({
		...e,
		defaultClassName: `react-aria-ColumnResizer`,
		values: {
			isFocused: g,
			isFocusVisible: _,
			isResizing: f,
			isHovered: x,
			resizableDirection: O
		}
	}), P = y(e, { global: !0 });
	return K.createElement(S.div, {
		ref: k,
		role: `presentation`,
		...M(P, ee, u, v),
		"data-hovered": x || void 0,
		"data-focused": g || void 0,
		"data-focus-visible": _ || void 0,
		"data-resizing": f || void 0,
		"data-resizable-direction": O
	}, ee.children, K.createElement(`input`, {
		ref: l,
		...M(d, h)
	}), f && m && or.createPortal(K.createElement(`div`, {
		style: {
			position: `fixed`,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			cursor: A
		},
		"data-testid": `cursor-overlay`
	}), document.body));
}), kr = class extends Xe {
	static {
		this.type = `tablebody`;
	}
}, Ar = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.tbody, {
		...e,
		ref: t
	});
}), jr = Je(kr, (e, t, n) => {
	let r = (0, K.useContext)(fr), { isVirtualized: i } = (0, K.useContext)(G), a = r.collection, { CollectionBranch: o } = (0, K.useContext)(G), { dragAndDropHooks: s, dropState: u } = (0, K.useContext)(l), d = !!s?.useDroppableCollectionState && !u?.isDisabled, f = d && !!u && (u.isDropTarget({ type: `root` }) ?? !1), p = a.size === 0, m = {
		isDropTarget: f,
		isEmpty: p
	}, h = b({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: `react-aria-TableBody`,
		values: m
	}), g, _ = a.columnCount;
	if (p && e.renderEmptyState && r) {
		let t = {}, n = {}, r = {};
		i ? (n[`aria-colspan`] = _, r = { display: `contents` }) : n.colSpan = _, g = K.createElement(Pr, {
			role: `row`,
			...t,
			style: r
		}, K.createElement(Lr, {
			role: `rowheader`,
			...n,
			style: r
		}, e.renderEmptyState(m)));
	}
	let { rowGroupProps: v } = ar(), x = y(e, { global: !0 });
	return K.createElement(Ar, {
		...M(x, h, v),
		ref: t,
		"data-empty": p || void 0
	}, d && K.createElement(Wr, null), K.createElement(o, {
		collection: a,
		parent: n,
		renderDropIndicator: c(s, u)
	}), g);
});
(class extends Xe {
	static {
		this.type = `tablefooter`;
	}
});
var Mr = (0, K.createContext)({ isFocusVisibleWithinRow: !1 }), Nr = class extends Ue {
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
}, Pr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.tr, {
		...e,
		ref: t
	});
}), Fr = Je(Nr, (e, t, n) => {
	let r = N(t), i = (0, K.useContext)(fr), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, K.useContext)(l), { isVirtualized: c, CollectionBranch: u } = (0, K.useContext)(G), d = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { rowProps: f, expandButtonProps: p, ...m } = Yn({
		node: n,
		shouldSelectOnPressUp: !!o,
		isVirtualized: c
	}, i, r), { isFocused: h, isFocusVisible: _, focusProps: x } = D(), { isFocusVisible: S, focusProps: C } = D({ within: !0 }), { hoverProps: w, isHovered: E } = T({
		isDisabled: !m.allowsSelection && !m.hasAction && !d,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { checkboxProps: O } = er({ key: n.key }, i), k;
	o && a && (k = a.useDraggableItem({
		key: n.key,
		hasDragButton: !0
	}, o));
	let A, j = (0, K.useRef)(null), { visuallyHiddenProps: ee } = ft();
	s && a && (A = a.useDropIndicator({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, s, j));
	let P = (0, K.useRef)(null);
	(0, K.useEffect)(() => {
		o && P.current;
	}, []);
	let F = o && o.isDragging(n.key), { children: te, ...ne } = e, I = e.hasChildItems || i.collection.getItem(n.lastChildKey)?.type !== `cell`, L = I && i.expandedKeys.has(n.key), re = b({
		...ne,
		id: void 0,
		defaultClassName: `react-aria-Row`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: {
			...m,
			state: i,
			isHovered: E,
			isFocused: h,
			isFocusVisible: _,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			isDragging: F,
			isDropTarget: A?.isDropTarget,
			isFocusVisibleWithin: S,
			id: n.key,
			hasChildItems: I,
			isExpanded: L,
			level: n.level + 1
		}
	}), ie = y(e, { global: !0 });
	return delete ie.id, delete ie.onClick, K.createElement(K.Fragment, null, A && !A.isHidden && K.createElement(Pr, {
		role: `row`,
		style: { height: 0 }
	}, K.createElement(Lr, {
		role: `gridcell`,
		colSpan: i.collection.columnCount,
		style: { padding: 0 }
	}, K.createElement(`div`, {
		role: `button`,
		...ee,
		...A.dropIndicatorProps,
		ref: j
	}))), K.createElement(Pr, {
		...M(ie, re, f, x, w, k?.dragProps, C),
		ref: r,
		"data-disabled": m.isDisabled || void 0,
		"data-selected": m.isSelected || void 0,
		"data-hovered": E || void 0,
		"data-focused": m.isFocused || void 0,
		"data-focus-visible": _ || void 0,
		"data-pressed": m.isPressed || void 0,
		"data-dragging": F || void 0,
		"data-drop-target": A?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === `none` ? void 0 : i.selectionManager.selectionMode,
		"data-focus-visible-within": S || void 0,
		"data-expanded": L || void 0,
		"data-has-child-items": I || void 0,
		"data-level": n.level + 1
	}, K.createElement(g, { values: [
		[ge, { slots: {
			[v]: {},
			selection: O
		} }],
		[_e, { slots: {
			[v]: {},
			selection: O
		} }],
		[ue, { slots: {
			[v]: {},
			chevron: p,
			drag: {
				...k?.dragButtonProps,
				ref: P,
				style: { pointerEvents: `none` }
			}
		} }],
		[Re, { isSelected: m.isSelected }],
		[Mr, { isFocusVisibleWithinRow: S }]
	] }, K.createElement(u, {
		collection: i.collection,
		parent: n
	}))));
}, (e) => {
	if (e.id == null && typeof e.children == `function`) throw Error(`No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.`);
	let t = [e.value].concat(e.dependencies);
	return K.createElement(We, {
		dependencies: t,
		items: e.columns,
		idScope: e.id
	}, e.children);
}), Ir = class extends Ue {
	static {
		this.type = `cell`;
	}
}, Lr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.td, {
		...e,
		ref: t
	});
}), Rr = Ye(Ir, (e, t, n) => {
	let r = N(t), i = (0, K.useContext)(fr), { dragState: a } = (0, K.useContext)(l), { isVirtualized: o } = (0, K.useContext)(G);
	n.column = i.collection.columns[n.index];
	let { gridCellProps: s, isPressed: c } = Qn({
		node: n,
		shouldSelectOnPressUp: !!a,
		isVirtualized: o,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: u, isFocusVisible: d, focusProps: f } = D(), { hoverProps: p, isHovered: m } = T({}), { isFocusVisibleWithinRow: h } = (0, K.useContext)(Mr), g = n.parentKey != null && i.selectionManager.isSelected(n.parentKey), _ = n.colIndex || n.index, v = i.collection.getItem(n.parentKey), x = v.props.hasChildItems || i.collection.getItem(v.lastChildKey)?.type !== `cell`, S = x && i.expandedKeys.has(n.parentKey), C = i.selectionManager.isDisabled(n.parentKey), w = b({
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
			hasChildItems: x,
			isExpanded: S,
			isDisabled: C,
			level: v.level + 1,
			isTreeColumn: n.column.key === i.treeColumn
		}
	}), E = y(e, { global: !0 });
	return delete E.id, K.createElement(Lr, {
		...M(E, w, s, f, p),
		ref: r,
		"data-focused": u || void 0,
		"data-focus-visible": d || void 0,
		"data-focus-visible-within-row": h || void 0,
		"data-pressed": c || void 0,
		"data-selected": g || void 0,
		"data-column-index": _,
		"data-expanded": S || void 0,
		"data-has-child-items": x || void 0,
		"data-level": v.level + 1,
		"data-tree-column": n.column.key === i.treeColumn || void 0,
		"data-disabled": C || void 0
	}, K.createElement(G.Provider, { value: ye }, w.children));
});
function zr(e, t) {
	t = N(t);
	let { dragAndDropHooks: n, dropState: r } = (0, K.useContext)(l), i = (0, K.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	if (o) return null;
	let c = r && e.target.type === `item` ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return K.createElement(Ur, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		level: c,
		ref: t
	});
}
var Br = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.tr, {
		...e,
		ref: t
	});
}), Vr = (0, K.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, K.useContext)(G);
	return n ? K.createElement(S.div, {
		...e,
		ref: t
	}) : K.createElement(S.td, {
		...e,
		ref: t
	});
});
function Hr(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, level: a, ...o } = e, s = (0, K.useContext)(fr), { visuallyHiddenProps: c } = ft(), l = b({
		...o,
		defaultClassName: `react-aria-DropIndicator`,
		defaultStyle: { "--table-row-level": a + 1 },
		values: { isDropTarget: r }
	});
	return K.createElement(Br, {
		...y(e, { global: !0 }),
		...l,
		role: `row`,
		ref: t,
		"data-drop-target": r || void 0,
		"aria-level": a
	}, K.createElement(Vr, {
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
var Ur = (0, K.forwardRef)(Hr);
function Wr() {
	let e = (0, K.useContext)(fr), { dragAndDropHooks: t, dropState: n } = (0, K.useContext)(l), r = (0, K.useRef)(null), { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: `root` } }, n, r), a = n.isDropTarget({ type: `root` }), { visuallyHiddenProps: o } = ft();
	return !a && i[`aria-hidden`] ? null : K.createElement(Pr, {
		role: `row`,
		"aria-hidden": i[`aria-hidden`],
		style: { height: 0 }
	}, K.createElement(Lr, {
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
var Gr = Ye(Ge, function(e, t, n) {
	let r = (0, K.useContext)(fr), { isVirtualized: i } = (0, K.useContext)(G), { isLoading: a, onLoadMore: o, scrollOffset: s, ...c } = e, l = r.collection.columns.length, u = (0, K.useRef)(null), d = (0, K.useMemo)(() => ({
		onLoadMore: o,
		collection: r?.collection,
		sentinelRef: u,
		scrollOffset: s
	}), [
		o,
		s,
		r?.collection
	]);
	tt(d, u);
	let f = b({
		...c,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-TableLoadingIndicator`,
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: void 0
	}), p = {}, m = {}, h = {};
	return i ? (m[`aria-colspan`] = l, h = { display: `contents` }) : m.colSpan = l, K.createElement(K.Fragment, null, K.createElement(Pr, {
		style: { height: 0 },
		inert: Ce(!0)
	}, K.createElement(Lr, { style: {
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
	}))), a && f.children && K.createElement(Pr, {
		...M(y(e, { global: !0 }), p),
		...f,
		role: `row`,
		ref: t,
		"aria-level": n.level + 1,
		"data-level": n.level + 1
	}, K.createElement(Lr, {
		role: `rowheader`,
		...m,
		style: h
	}, f.children)));
}), Kr = class e {
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
		return new Kr(this.x, this.y);
	}
	get topRight() {
		return new Kr(this.maxX, this.y);
	}
	get bottomLeft() {
		return new Kr(this.x, this.maxY);
	}
	get bottomRight() {
		return new Kr(this.maxX, this.maxY);
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
}, qr = 0, Jr = class {
	constructor(e, t) {
		this.virtualizer = e, this.key = ++qr, this.viewType = t, this.children = new Set(), this.reusableViews = new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
	}
	prepareForReuse() {
		this.content = null, this.rendered = null, this.layoutInfo = null;
	}
	getReusableView(e) {
		let t = this.reusableViews.get(e);
		return t && t.length > 0 ? t.shift() : new Xr(this.virtualizer, this, e);
	}
	reuseChild(e) {
		e.prepareForReuse();
		let t = this.reusableViews.get(e.viewType);
		t || (t = [], this.reusableViews.set(e.viewType, t)), t.push(e);
	}
}, Yr = class extends Jr {
	constructor(e) {
		super(e, `root`);
	}
}, Xr = class extends Jr {
	constructor(e, t, n) {
		super(e, n), this.parent = t;
	}
};
function Zr(e, t) {
	if (e === t) return !0;
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var Qr = class {
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
		this.startTime = 0, this.velocity = new Kr(0, 0), this.visibleRect = new q();
	}
}, $r = 4;
function ei(e) {
	return e === `x` ? `width` : `height`;
}
function ti(e, t, n, r, i) {
	let a = n(e.key);
	if (!a) return null;
	let o = a.rect[e.corner][t] - r[t] - e.offset;
	if (o === 0) return null;
	let s = r[t] + o, c = ei(t), l = Math.max(0, i[c] - r[c]), u = Math.max(0, Math.min(l, s));
	return u === r[t] ? null : u;
}
function ni(e, t, n, r, i = () => !0) {
	let a = ei(t), o = null;
	for (let [s, c] of r) {
		if (!c || !i(c)) continue;
		let r = c.rect.intersection(n)[a];
		if (c.rect.area > 0 && r >= $r) {
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
function ri(e, t, n, r) {
	if (e === `start`) return 0;
	let i = ei(t);
	return Math.max(0, n[i] - r[i]);
}
function ii(e, t, n, r, i) {
	if (n === `start`) return e[r] <= i;
	let a = ei(r);
	return t[a] - (e[r] + e[a]) <= i;
}
function ai(e, t, n, r, i, a, o, s, c, l) {
	let u = (e) => t === `x` ? new q(e, c.y, c.width, c.height) : new q(c.x, e, c.width, c.height);
	if (n) {
		let e = ti(n, t, s, c, l);
		if (e != null) return u(e);
	}
	if (r && !i && (!a || o > 0)) {
		let n = u(ri(e, t, l, c));
		return n.equals(c) ? null : n;
	}
	return null;
}
var oi = class {
	reset() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
	captureBeforeLayout(e, t, n) {
		return e ? ni(e.edge, e.axis, n, t, e.isAnchorable) : null;
	}
	resolveAfterLayout(e) {
		let { anchorInfo: t, anchor: n, postLayoutInfos: r, previousVisibleRect: i, previousContentSize: a, contentSize: o, itemSizeChanged: s, isScrolling: c, getLayoutInfo: l } = e;
		if (!t) return null;
		let u = this.hadEstimatedVisibleItems, d = this.wasNearAnchorEdge, f = !1;
		for (let e of r.values()) if (e.estimatedSize) {
			f = !0;
			break;
		}
		if (this.hadEstimatedVisibleItems = f, u || (this.wasNearAnchorEdge = ii(i, a, t.edge, t.axis, t.threshold)), i.area === 0) return null;
		let p = t.axis === `x` ? `width` : `height`, m = o[p] - a[p], h = !this.hasSnappedToEdge;
		if (this.hasSnappedToEdge = !0, !(h || m !== 0 || s)) return null;
		let g = h || u && d || ii(i, a, t.edge, t.axis, t.threshold);
		u || (this.wasNearAnchorEdge = g);
		let _ = h || u && d ? null : n;
		return ai(t.edge, t.axis, _, g, c, s, m, l, i, o);
	}
	constructor() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
}, si = class {
	constructor(e) {
		this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new J(), this.visibleRect = new q(), this.size = new J(), this.persistedKeys = new Set(), this._visibleViews = new Map(), this._renderedContent = new WeakMap(), this._rootView = new Yr(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Qr(), this._scrollAnchor = new oi();
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
		if (e.collection !== this.collection && (t.collection = e.collection, n = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, t.layout = e.layout, this._scrollAnchor.reset(), n = !0), e.persistedKeys && !Zr(e.persistedKeys, this.persistedKeys) && (t.persistedKeys = e.persistedKeys, l = !0), !this.visibleRect.equals(e.visibleRect) || !this.size.equals(e.size)) {
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
}, ci = typeof document < `u` ? K.useLayoutEffect : () => {};
function li(e) {
	let [t, n] = (0, K.useState)(new q(0, 0, 0, 0)), [r, i] = (0, K.useState)(new J()), [a, o] = (0, K.useState)(!1), [s, c] = (0, K.useState)({}), l = (0, K.useRef)(!1), [u] = (0, K.useState)(() => new si({
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
	ci(() => {
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
var ui = class {
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
}, di = 48, fi = class extends ui {
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
			let r = (this.rowSize ?? this.estimatedRowSize ?? di) + this.gap;
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
		let t = this.virtualizer.collection, n = this.orientation === `horizontal` ? `x` : `y`, r = this.orientation === `horizontal` ? `maxX` : `maxY`, i = pi(t, (e) => e.type !== `content`), a = i.filter((e) => e.type === `loader`), o = [], s = t?.size === 0;
		s && (e = 0);
		for (let t of i) {
			let s = (this.rowSize ?? this.estimatedRowSize ?? di) + this.gap;
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
		return this.orientation === `horizontal` ? (r.height = this.virtualizer.contentSize.height - this.padding - n, r.width = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? di : 0) : (r.width = this.virtualizer.contentSize.width - this.padding - t, r.height = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? di : 0), {
			layoutInfo: i,
			validRect: r.intersection(this.requestedRect)
		};
	}
	buildSection(e, t, n) {
		let r = this.virtualizer.collection, i = this.virtualizer.size.width - this.padding - t, a = this.virtualizer.size.height - this.padding - n, o = this.orientation === `horizontal` ? new q(t, n, 0, a) : new q(t, n, i, 0), s = new Y(e.type, e.key, o), c = this.orientation === `horizontal` ? t : n, l = this.orientation === `horizontal` ? `x` : `y`, u = this.orientation === `horizontal` ? `maxX` : `maxY`, d = this.orientation === `horizontal` ? `width` : `height`, f = 0, p = [];
		for (let i of U(e, r)) {
			if (i.type === `content`) continue;
			let a = (this.rowSize ?? this.estimatedRowSize ?? di) + this.gap;
			if (c + a < this.requestedRect[l] && !this.isValid(e, c)) {
				c += a, f++;
				continue;
			}
			let o = this.orientation === `horizontal` ? this.buildChild(i, c, n, s.key) : this.buildChild(i, t, c, s.key);
			if (c = o.layoutInfo.rect[u] + this.gap, p.push(o), c > this.requestedRect[u]) {
				c += ([...U(e, r)].length - (p.length + f)) * a;
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
		o ??= di;
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
		o ??= di;
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
function pi(e, t) {
	let n = [];
	for (let r of e) t(r) && n.push(r);
	return n;
}
var mi = 48, hi = class extends fi {
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
			let n = new Ht({});
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
		for (let r of U(e, this.virtualizer.collection)) {
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
			a ? (n = a.layoutInfo.rect.height, i = e !== a.node || t !== a.layoutInfo.rect.width || a.layoutInfo.estimatedSize) : (n = r ?? mi, i = !0);
		}
		return {
			height: n,
			isEstimated: i
		};
	}
	getEstimatedRowHeight() {
		return this.rowHeight ?? this.estimatedRowHeight ?? mi;
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
		let n = this.virtualizer.collection, r = new q(this.padding, e, 0, 0), i = new Y(`rowgroup`, t.key, r), a = e, o = 0, s = [], c = this.getEstimatedRowHeight() + this.gap, l = U(t, n);
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
		for (let i of U(e, r)) if (i.type === `cell`) {
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
}, gi = class extends hi {
	useLayoutOptions() {
		let e = (0, K.useContext)(pr);
		return (0, K.useMemo)(() => ({ columnWidths: e?.columnWidths }), [e?.columnWidths]);
	}
}, _i = null;
function vi(e = !1) {
	if (_i === null || e) {
		let e = document.createElement(`div`), t = e.style;
		t.width = `50px`, t.height = `50px`, t.overflow = `scroll`, t.direction = `rtl`;
		let n = document.createElement(`div`), r = n.style;
		return r.width = `100px`, r.height = `100px`, e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? _i = `positive-descending` : (e.scrollLeft = 1, _i = e.scrollLeft === 0 ? `negative` : `positive-ascending`), document.body.removeChild(e), _i;
	}
	return _i;
}
function yi(e, t) {
	let { scrollLeft: n } = e;
	if (t === `rtl`) {
		let { scrollWidth: t, clientWidth: r } = e;
		switch (vi()) {
			case `negative`:
				n = -n;
				break;
			case `positive-descending`: n = t - r - n;
		}
	}
	return n;
}
function bi(e, t) {
	let { contentSize: n, onVisibleRectChange: r, onSizeChange: i, innerStyle: a, onScrollStart: o, onScrollEnd: s, scrollDirection: c = `both`, onScroll: l, allowsWindowScrolling: u, ...d } = e, f = (0, K.useRef)({
		scrollPosition: new Kr(),
		size: new J(),
		viewportOffset: new Kr(),
		viewportSize: new J(),
		scrollEndTime: 0,
		scrollTimeout: null,
		isScrolling: !1,
		lastVisibleRect: new q()
	}).current, { direction: m } = p(), h = (0, K.useCallback)(() => {
		let e = u ? new q(f.viewportOffset.x + f.scrollPosition.x, f.viewportOffset.y + f.scrollPosition.y, Math.max(0, Math.min(f.size.width - f.viewportOffset.x, f.viewportSize.width)), Math.max(0, Math.min(f.size.height - f.viewportOffset.y, f.viewportSize.height))) : new q(f.scrollPosition.x, f.scrollPosition.y, f.size.width, f.size.height);
		(e.area > 0 || f.lastVisibleRect.area > 0) && (r(e), f.lastVisibleRect = e);
	}, [
		f,
		u,
		r
	]), [g, _] = (0, K.useState)(!1), v = (0, K.useCallback)((e) => {
		let r = E(e);
		if (L(r, t.current)) {
			if (l && r === t.current && l(e), r !== t.current) {
				let e = t.current.getBoundingClientRect(), n = e.x < 0 ? -e.x : 0, r = e.y < 0 ? -e.y : 0;
				if (n === f.viewportOffset.x && r === f.viewportOffset.y) return;
				f.viewportOffset = new Kr(n, r);
			} else {
				let e = r.scrollTop, t = yi(r, m);
				f.scrollPosition = new Kr(Math.max(0, Math.min(t, n.width - f.size.width)), Math.max(0, Math.min(e, n.height - f.size.height)));
			}
			(0, or.flushSync)(() => {
				h(), f.isScrolling || (f.isScrolling = !0, _(!0), window.dispatchEvent(new Event(`tk.disconnect-observer`)), o && o());
				let e = Date.now();
				f.scrollEndTime <= e + 50 && (f.scrollEndTime = e + 300, f.scrollTimeout != null && clearTimeout(f.scrollTimeout), f.scrollTimeout = setTimeout(() => {
					f.isScrolling = !1, _(!1), f.scrollTimeout = null, window.dispatchEvent(new Event(`tk.connect-observer`)), s && s();
				}, 300));
			});
		}
	}, [
		l,
		t,
		m,
		f,
		n,
		h,
		o,
		s
	]);
	(0, K.useEffect)(() => fe(w(t.current, C(t.current)), `scroll`, v, !0), [v, t]), (0, K.useEffect)(() => () => {
		f.scrollTimeout != null && clearTimeout(f.scrollTimeout), f.isScrolling && window.dispatchEvent(new Event(`tk.connect-observer`));
	}, []);
	let y = (0, K.useRef)(!1), b = (0, K.useCallback)((e) => {
		let n = t.current;
		if (!n || y.current) return;
		y.current = !0, Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientWidth`), Object.getOwnPropertyNames(window.HTMLElement.prototype).includes(`clientHeight`);
		let r = n.clientWidth, a = n.clientHeight, o = r, s = a, c = window.innerWidth, l = window.innerHeight, u = f.viewportSize.width !== c || f.viewportSize.height !== l;
		u && (f.viewportSize = new J(c, l)), (f.size.width !== o || f.size.height !== s || u) && (f.size = new J(o, s), e(() => {
			h(), i?.(f.size);
		}), (r !== n.clientWidth || a !== n.clientHeight) && (f.size = new J(n.clientWidth, n.clientHeight), e(() => {
			h(), i?.(f.size);
		}))), y.current = !1;
	}, [
		t,
		f,
		h,
		i
	]), x = le(b);
	R(() => {
		f.viewportSize = new J(window.innerWidth, window.innerHeight);
		let e = () => {
			x(or.flushSync);
		};
		return window.addEventListener(`resize`, e), () => window.removeEventListener(`resize`, e);
	}, [f]);
	let S = (0, K.useRef)(null), [T, D] = (0, K.useState)({});
	R(() => {
		if (!y.current && (S.current == null || !n.equals(S.current))) {
			if (typeof IS_REACT_ACT_ENVIRONMENT == `boolean` ? IS_REACT_ACT_ENVIRONMENT : typeof jest < `u`) {
				D({}), S.current = n;
				return;
			}
			queueMicrotask(() => x(or.flushSync));
		}
		S.current = n;
	}), R(() => {
		x((e) => e());
	}, [T]);
	let O = (0, K.useCallback)(() => {
		b(or.flushSync);
	}, [b]);
	it({
		ref: t,
		box: `border-box`,
		onResize: O
	});
	let k = {
		padding: 0,
		...d.style
	};
	return c === `horizontal` ? (k.overflowX = `auto`, k.overflowY = `hidden`) : c === `vertical` || n.width === f.size.width ? (k.overflowY = `auto`, k.overflowX = `hidden`) : k.overflow = `auto`, a = {
		width: Number.isFinite(n.width) ? n.width : void 0,
		height: Number.isFinite(n.height) ? n.height : void 0,
		pointerEvents: g ? `none` : `auto`,
		position: `relative`,
		...a
	}, {
		isScrolling: g,
		scrollViewProps: {
			...d,
			style: k
		},
		contentProps: {
			role: `presentation`,
			style: a
		}
	};
}
function xi(e) {
	let { layoutInfo: t, virtualizer: n, ref: r, shouldObserveItemSize: i } = e, a = t?.key, o = (0, K.useCallback)(() => {
		if (a != null && r.current) {
			if (!_(r.current)) return;
			let e = Si(r.current);
			n.updateItemSize(a, e);
		}
	}, [
		n,
		a,
		r
	]), s = le(o);
	return R(() => {
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
function Si(e) {
	let t = e.style.height;
	e.style.height = ``;
	let n = new J(e.scrollWidth, e.scrollHeight);
	return e.style.height = t, n;
}
function Ci(e) {
	let { style: t, className: n, layoutInfo: r, virtualizer: i, parent: a, children: o, shouldObserveItemSize: s } = e, { direction: c } = p(), l = (0, K.useRef)(null);
	return xi({
		layoutInfo: r,
		virtualizer: i,
		ref: l,
		shouldObserveItemSize: s
	}), K.createElement(`div`, {
		role: `presentation`,
		ref: l,
		className: n,
		style: {
			...Ti(r, c, a),
			...t
		}
	}, o);
}
var wi = new WeakMap();
function Ti(e, t, n) {
	let r = t === `rtl` ? `right` : `left`, i = wi.get(e);
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
	return wi.set(e, o), o;
}
var Ei = (0, K.createContext)(null), Di = (0, K.createContext)(null);
function Oi(e) {
	let { children: t, layout: n, layoutOptions: r, shouldObserveItemSize: i } = e, a = (0, K.useMemo)(() => typeof n == `function` ? new n() : n, [n]), o = (0, K.useMemo)(() => ({
		isVirtualized: !0,
		layoutDelegate: a,
		dropTargetDelegate: a.getDropTargetFromPoint ? a : void 0,
		CollectionRoot: ki,
		CollectionBranch: Ai
	}), [a]);
	return K.createElement(G.Provider, { value: o }, K.createElement(Di.Provider, { value: {
		layout: a,
		layoutOptions: r,
		shouldObserveItemSize: i
	} }, t));
}
function ki({ collection: e, persistedKeys: t, scrollRef: n, renderDropIndicator: r }) {
	let { layout: i, layoutOptions: a, shouldObserveItemSize: o } = (0, K.useContext)(Di), s = i.useLayoutOptions?.(), c = li({
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
	}), { contentProps: l } = bi({
		onVisibleRectChange: c.setVisibleRect,
		onSizeChange: c.setSize,
		contentSize: c.contentSize,
		onScrollStart: c.startScrolling,
		onScrollEnd: c.endScrolling,
		allowsWindowScrolling: !0
	}, n);
	return K.createElement(`div`, l, K.createElement(Ei.Provider, { value: c }, ji(null, c.visibleViews, r, o)));
}
function Ai({ parent: e, renderDropIndicator: t }) {
	let n = (0, K.useContext)(Ei).virtualizer.getVisibleView(e.key), { shouldObserveItemSize: r } = (0, K.useContext)(Di);
	return ji(n, Array.from(n.children), t, r);
}
function ji(e, t, n, r) {
	return t.map((t) => Mi(e, t, n, r));
}
function Mi(e, t, n, r) {
	let i = K.createElement(Ci, {
		key: t.key,
		layoutInfo: t.layoutInfo,
		virtualizer: t.virtualizer,
		parent: e?.layoutInfo,
		shouldObserveItemSize: r
	}, t.rendered), { collection: a, layout: o } = t.virtualizer, s = t.content;
	return s?.type === `item` && n && o.getDropTargetLayoutInfo && (i = K.createElement(K.Fragment, { key: t.key }, Ni(e, t, {
		type: `item`,
		key: t.content.key,
		dropPosition: `before`
	}, n), i, ve(a, s, (r) => Ni(e, t, r, n)))), i;
}
function Ni(e, t, n, r) {
	let i = r(n);
	if (i) {
		let r = t.virtualizer.layout.getDropTargetLayoutInfo(n);
		i = K.createElement(Ci, {
			layoutInfo: r,
			virtualizer: t.virtualizer,
			parent: e?.layoutInfo
		}, i);
	}
	return i;
}
function Pi(e) {
	return Fi(e) || typeof e == `function` || Ii(e);
}
function Fi(e) {
	return typeof e == `function` && (() => {
		let t = Object.getPrototypeOf(e);
		return t.prototype && t.prototype.isReactComponent;
	})();
}
function Ii(e) {
	return typeof e == `object` && typeof e.$$typeof == `symbol` && [`react.memo`, `react.forward_ref`].includes(e.$$typeof.description);
}
function Li(e, t) {
	return e == null ? null : Pi(e) ? K.createElement(e, t) : e;
}
function Ri(e) {
	if (`cell` in e && e.cell) {
		let t = e.cell, n = t.column.columnDef, r = t, i = n;
		return r.getIsAggregated?.() ? Li(i.aggregatedCell ?? n.cell, t.getContext()) : r.getIsPlaceholder?.() ? null : Li(n.cell, t.getContext());
	}
	return `header` in e && e.header ? Li(e.header.column.columnDef.header, e.header.getContext()) : `footer` in e && e.footer ? Li(e.footer.column.columnDef.footer, e.footer.getContext()) : null;
}
function zi({ update: e, notify: t, unwatched: n }) {
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
function Bi(e, t, n) {
	let r = typeof e == `object`, i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var Vi = [], Hi = 0, { link: Ui, unlink: Wi, propagate: Gi, checkDirty: Ki, shallowPropagate: qi } = zi({
	update(e) {
		return e._update();
	},
	notify(e) {
		Vi[Yi++] = e, e.flags &= -3;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = 17, Qi(e));
	}
}), Ji = 0, Yi = 0, X, Xi = 0;
function Zi(e) {
	try {
		++Xi, e();
	} finally {
		--Xi || $i();
	}
}
function Qi(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = Wi(n, e);
}
function $i() {
	if (!(Xi > 0)) {
		for (; Ji < Yi;) {
			let e = Vi[Ji];
			Vi[Ji++] = void 0, e.notify();
		}
		Ji = 0, Yi = 0;
	}
}
function ea(e, t) {
	let n = typeof e == `function`, r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: +!n,
		get() {
			return X !== void 0 && Ui(i, X, Hi), i._snapshot;
		},
		subscribe(e) {
			let t = Bi(e), n = { current: !1 }, r = ta(() => {
				i.get(), n.current ? (X = void 0, t.next?.(i._snapshot)) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = X, o = t?.compare ?? Object.is;
			if (n) X = i, ++Hi, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = 5);
			try {
				let t = i._snapshot, a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				X = a, n && (i.flags &= -5), Qi(i);
			}
		}
	};
	return n ? (i.flags = 17, i.get = function() {
		let e = i.flags;
		if (e & 16 || e & 32 && Ki(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && qi(e);
			}
		} else e & 32 && (i.flags = e & -33);
		return X !== void 0 && Ui(i, X, Hi), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (Gi(e), qi(e), $i());
		}
	}, i;
}
function ta(e) {
	let t = () => {
		let t = X;
		X = n, ++Hi, n.depsTail = void 0, n.flags = 6;
		try {
			return e();
		} finally {
			X = t, n.flags &= -5, Qi(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			let e = this.flags;
			e & 16 || e & 32 && Ki(this.deps, this) ? t() : this.flags = 2;
		},
		stop() {
			this.flags = 0, this.depsTail = void 0, Qi(this);
		}
	};
	return t(), n;
}
function na(e, t) {
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
	let n = ra(e);
	if (n.length !== ra(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
function ra(e) {
	return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
var ia = n(((e) => {
	var t = r(), n = he();
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
})), aa = n(((e, t) => {
	t.exports = ia();
}))();
function oa(e, t) {
	return e === t;
}
function sa(e, t = (e) => e, n) {
	let r = n?.compare ?? oa, i = (0, K.useCallback)((t) => {
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), a = (0, K.useCallback)(() => e.get(), [e]);
	return (0, aa.useSyncExternalStoreWithSelector)(i, a, a, t, r);
}
function ca(e) {
	let t = sa(e.source, e.selector, { compare: na });
	return typeof e.children == `function` ? e.children(t) : e.children;
}
function la(e) {
	let t = e;
	return Object.defineProperty(e, "state", { get() {
		return e.get();
	} }), `set` in e && (t.setState = e.set.bind(e)), t;
}
function ua(e) {
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
function da(e, t = Object.is) {
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
function fa() {
	return ua({
		createAtom: ea,
		batch: Zi
	});
}
function pa(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function ma(e) {
	if (Array.isArray(e)) return e.map(ma);
	if (e && typeof e == `object`) {
		let t = Object.getPrototypeOf(e);
		if (t !== Object.prototype && t !== null) return e;
		let n = t === null ? Z() : {}, r = Object.keys(e);
		for (let t = 0; t < r.length; t++) {
			let i = r[t];
			Object.defineProperty(n, i, {
				configurable: !0,
				enumerable: !0,
				value: ma(e[i]),
				writable: !0
			});
		}
		return n;
	}
	return e;
}
function ha(e, t) {
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
function ga(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function _a(e, t) {
	return (n) => {
		(t.options.atoms?.[e] ?? t.baseAtoms[e]).set((e) => pa(n, e));
	};
}
function va(e) {
	if (typeof e != `object` || !e) return !1;
	if (Array.isArray(e)) return !0;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
function ya(e) {
	return Reflect.ownKeys(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
var ba = 3;
function xa(e, t) {
	return Sa(e, t, ba);
}
function Sa(e, t, n) {
	if (Object.is(e, t)) return !0;
	if (n <= 0 || !va(e) || !va(t) || (Array.isArray(e) || Array.isArray(t)) && (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)) return !1;
	let r = ya(e), i = ya(t);
	if (r.length !== i.length) return !1;
	let a = e, o = t;
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		if (!Object.prototype.propertyIsEnumerable.call(t, i) || !Sa(a[i], o[i], n - 1)) return !1;
	}
	return !0;
}
function Ca(e, t, n, r = xa) {
	let i = `on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`, a = e.options[i];
	a && a((e) => {
		let t = pa(n, e);
		return r(e, t) ? e : t;
	});
}
function wa(e) {
	return e instanceof Function;
}
function Ta(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i.length && r(i);
		});
	};
	return r(e), n;
}
var Ea = ({ fn: e, memoDeps: t, onAfterCompare: n, onAfterUpdate: r, onBeforeCompare: i, onBeforeUpdate: a }) => {
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
function Da(e) {
	let t = !1;
	return () => {
		t ? e() : t = !0;
	};
}
function Oa({ feature: e, fnName: t, objectId: n, onAfterUpdate: r, table: i, ...a }) {
	let o = { onAfterUpdate: r ? () => {
		let { schedule: e, untrack: t } = i._reactivity;
		e(() => t(() => r()));
	} : void 0 };
	return Ea({
		...a,
		...o
	});
}
function ka(e, t = `_`) {
	let [n, r] = e.replace(t, ` `).split(` `);
	return {
		fnKey: r,
		fnName: `${n}.${r}`,
		parentName: n
	};
}
function Aa(e, t, n) {
	for (let [r, { fn: i, memoDeps: a }] of Object.entries(n)) {
		let { fnKey: n, fnName: o } = ka(r);
		t[n] = a ? Oa({
			memoDeps: a,
			fn: i,
			fnName: o,
			table: t,
			feature: e
		}) : i;
	}
}
function ja(e, t, n, r) {
	for (let [i, { fn: a, memoDeps: o }] of Object.entries(r)) {
		let { fnKey: r, fnName: s } = ka(i);
		if (o) {
			let i = `_memo_${r}`;
			t[r] = function(...t) {
				if (!this[i]) {
					let t = this;
					this[i] = Oa({
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
function Ma(e) {
	return e.row.getValue(e.column.id);
}
function Na(e) {
	return e.getValue() ?? e.table.options.renderFallbackValue;
}
function Pa(e) {
	return {
		table: e.table,
		column: e.column,
		row: e.row,
		cell: e,
		getValue: () => e.getValue(),
		renderValue: () => e.renderValue()
	};
}
var Fa = { assignCellPrototype: (e, t) => {
	ja(`coreCellsFeature`, e, t, {
		cell_getValue: { fn: (e) => Ma(e) },
		cell_renderValue: { fn: (e) => Na(e) },
		cell_getContext: {
			fn: (e) => Pa(e),
			memoDeps: (e) => [e]
		}
	});
} };
function Ia(e) {
	if (!e._columnPrototype) {
		e._columnPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignColumnPrototype?.(e._columnPrototype, e);
	}
	return e._columnPrototype;
}
function La(e, t, n, r) {
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
	let l = Ia(e), u = Object.create(l);
	u.accessorFn = c, u.columnDef = i, u.columns = [], u.depth = n, u.id = `${String(s)}`, u.parent = r;
	let d = e._columnInstanceInitFns;
	for (let e = 0; e < d.length; e++) d[e](u);
	return u;
}
function Ra(e) {
	return e.getIsVisible?.() ?? !0;
}
function za(e) {
	return e.getVisibleLeafColumns?.() ?? e.getAllLeafColumns();
}
function Ba(e, t) {
	let n = e, r = t;
	return n.getOrderColumnsFn?.()(r) ?? n._orderGroupedColumns?.(r) ?? t;
}
function Va(e, t, n, r) {
	return e._orderByColumnPinning?.(t, n, r) ?? t;
}
function Ha(e) {
	return e.getGlobalFilterFn?.();
}
function Ua(e) {
	return e.getCanGlobalFilter?.() ?? !1;
}
function Wa(e, t) {
	return e._expandRows?.(t) ?? t;
}
function Ga(e) {
	e.autoResetExpanded?.();
}
function Ka(e) {
	e.autoResetPageIndex?.();
}
function qa(e) {
	e.autoResetSorting?.();
}
function Ja(e) {
	e.autoResetCellSelection?.();
}
function Ya(e) {
	return [e, ...e.columns.flatMap((e) => e.getFlatColumns())];
}
function Xa(e) {
	if (e.columns.length) {
		let t = e.columns.flatMap((e) => e.getLeafColumns());
		return Ba(e.table, t);
	}
	return [e];
}
function Za(e) {
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
function Qa(e, t, n, r = 0) {
	let i = Array(t.length);
	for (let a = 0; a < t.length; a++) {
		if (!(a in t)) continue;
		let o = t[a], s = La(e, o, r, n), c = o;
		s.columns = c.columns ? Qa(e, c.columns, s, r + 1) : [], i[a] = s;
	}
	return i;
}
function $a(e) {
	return Qa(e, e.options.columns);
}
function eo(e) {
	return e.getAllColumns().flatMap((e) => e.getFlatColumns());
}
function to(e) {
	let t = Z(), n = e.getAllFlatColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function no(e) {
	return Ba(e, e.getAllColumns().flatMap((e) => e.getLeafColumns()));
}
function ro(e) {
	let t = Z(), n = e.getAllLeafColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function io(e, t) {
	return e.getAllFlatColumnsById()[t];
}
var ao = {
	assignColumnPrototype: (e, t) => {
		ja(`coreColumnsFeature`, e, t, {
			column_getFlatColumns: {
				fn: (e) => Ya(e),
				memoDeps: (e) => [e.table.options.columns]
			},
			column_getLeafColumns: {
				fn: (e) => Xa(e),
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
		Aa(`coreColumnsFeature`, e, {
			table_getDefaultColumnDef: {
				fn: () => Za(e),
				memoDeps: () => [e.options.defaultColumn]
			},
			table_getAllColumns: {
				fn: () => $a(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumns: {
				fn: () => eo(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumnsById: {
				fn: () => to(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllLeafColumns: {
				fn: () => no(e),
				memoDeps: () => [
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_getAllLeafColumnsById: {
				fn: () => ro(e),
				memoDeps: () => [e.getAllLeafColumns()]
			},
			table_getColumn: { fn: (t) => io(e, t) }
		});
	}
};
function oo(e) {
	if (!e._headerPrototype) {
		e._headerPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignHeaderPrototype?.(e._headerPrototype, e);
	}
	return e._headerPrototype;
}
function so(e, t, n) {
	let r = oo(e), i = Object.create(r);
	i.colSpan = 0, i.column = t, i.depth = n.depth, i.headerGroup = null, i.id = n.id ?? t.id, i.index = n.index, i.isPlaceholder = !!n.isPlaceholder, i.placeholderId = n.placeholderId, i.rowSpan = 0, i.subHeaders = [];
	let a = e._headerInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
function co(e, t = 1) {
	let n = t;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		Ra(i) && i.columns.length && (n = Math.max(n, co(i.columns, t + 1)));
	}
	return n;
}
function lo(e, t) {
	return e ? `${e}_${t}` : String(t);
}
function uo(e, t, n, r) {
	let i = e ?? ``;
	return t && (i = i ? `${i}_${t}` : String(t)), n && (i = i ? `${i}_${n}` : n), r && (i = i ? `${i}_${r}` : r), i;
}
function fo(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) e[r].column === t && n++;
	return n;
}
function po(e, t, n, r, i, a) {
	let o = {
		depth: t,
		id: lo(r, t),
		headers: []
	}, s = [];
	for (let i = 0; i < e.length; i++) {
		if (!(i in e)) continue;
		let a = e[i], c = s[s.length - 1], l = a.column.depth === o.depth, u, d = !1;
		if (l && a.column.parent ? u = a.column.parent : (u = a.column, d = !0), c && c.column === u) c.subHeaders.push(a);
		else {
			let e = so(n, u, {
				id: uo(r, t, u.id, a.id),
				isPlaceholder: d,
				placeholderId: d ? String(fo(s, u)) : void 0,
				depth: t,
				index: s.length
			});
			e.subHeaders.push(a), s.push(e);
		}
		o.headers.push(a), a.headerGroup = o;
	}
	for (let e = 0; e < a.length; e++) a[e](o);
	i.push(o), t > 0 && po(s, t - 1, n, r, i, a);
}
function mo(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!Ra(n.column)) continue;
		let r = 0;
		if (n.subHeaders.length) {
			mo(n.subHeaders);
			for (let e = 0; e < n.subHeaders.length; e++) {
				let t = n.subHeaders[e];
				Ra(t.column) && (r += t.colSpan);
			}
		} else r = 1;
		if (n.colSpan = r, n.isPlaceholder && n.subHeaders.length === 1 && n.subHeaders[0].column === n.column) {
			let e = 1, t = n.subHeaders[0];
			for (; t;) t.rowSpan = 0, e++, t = t.subHeaders.length === 1 && t.subHeaders[0].column === n.column ? t.subHeaders[0] : void 0;
			n.rowSpan = e;
		} else n.rowSpan = 1;
	}
}
function ho(e, t, n, r) {
	let i = co(e), a = [], o = n._headerGroupInstanceInitFns, s = Array(t.length);
	for (let e = 0; e < t.length; e++) e in t && (s[e] = so(n, t[e], {
		depth: i,
		index: e
	}));
	return po(s, i - 1, n, r, a, o), a.reverse(), mo(a[0]?.headers ?? []), a;
}
function go(e, t) {
	for (let n = 0; n < e.subHeaders.length; n++) go(e.subHeaders[n], t);
	t.push(e);
}
function _o(e) {
	let t = [];
	return go(e, t), t;
}
function vo(e) {
	return {
		column: e.column,
		header: e,
		table: e.column.table
	};
}
function yo(e) {
	return ho(e.getAllColumns(), Va(e, za(e), (e) => e.id), e);
}
function bo(e) {
	return [...e.getHeaderGroups()].reverse();
}
function xo(e) {
	let t = e.getHeaderGroups(), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].headers;
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
function So(e) {
	let t = e.getHeaderGroups()[0]?.headers ?? [], n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].getLeafHeaders();
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
var Co = {
	assignHeaderPrototype: (e, t) => {
		ja(`coreHeadersFeature`, e, t, {
			header_getLeafHeaders: {
				fn: (e) => _o(e),
				memoDeps: (e) => [e.column.table.options.columns]
			},
			header_getContext: {
				fn: (e) => vo(e),
				memoDeps: (e) => [e.column.table.options.columns]
			}
		});
	},
	constructTableAPIs: (e) => {
		Aa(`coreHeadersFeature`, e, {
			table_getHeaderGroups: {
				fn: () => yo(e),
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
				fn: () => bo(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getFlatHeaders: {
				fn: () => xo(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getLeafHeaders: {
				fn: () => So(e),
				memoDeps: () => [e.getHeaderGroups()]
			}
		});
	}
};
function wo(e) {
	if (!e._rowPrototype) {
		e._rowPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignRowPrototype?.(e._rowPrototype, e);
	}
	return e._rowPrototype;
}
var To = (e, t, n, r, i, a, o) => {
	let s = wo(e), c = Object.create(s);
	c._displayIndexCache = -1, c._uniqueValuesCache = Z(), c._valuesCache = Z(), c.depth = i, c.id = t, c.index = r, c.original = n, c.parentId = o, c.subRows = a ?? [];
	let l = e._rowInstanceInitFns;
	for (let e = 0; e < l.length; e++) l[e](c);
	return c;
};
function Eo() {
	return (e) => Oa({
		feature: `coreRowModelsFeature`,
		table: e,
		fnName: `table.getCoreRowModel`,
		memoDeps: () => [e.options.data],
		fn: () => Oo(e, e.options.data),
		onAfterUpdate: Da(() => {
			Ga(e), Ka(e), qa(e), Ja(e);
		})
	});
}
function Do(e, t, n, r = 0, i) {
	let a = [];
	for (let o = 0; o < n.length; o++) {
		let s = n[o], c = To(e, e.getRowId(s, o, i), s, o, r, void 0, i?.id);
		t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows && (c.originalSubRows = e.options.getSubRows(s, o), c.originalSubRows?.length && (c.subRows = Do(e, t, c.originalSubRows, r + 1, c)));
	}
	return a;
}
function Oo(e, t) {
	let n = {
		rows: [],
		flatRows: [],
		rowsById: Z()
	};
	return n.rows = Do(e, n, t), n;
}
function ko(e) {
	return e._rowModels.coreRowModel || (e._rowModels.coreRowModel = e.options.features.coreRowModel?.(e) ?? Eo()(e)), e._rowModels.coreRowModel();
}
function Ao(e) {
	return e.getCoreRowModel();
}
function jo(e) {
	return e._rowModels.filteredRowModel || (e._rowModels.filteredRowModel = e.options.features.filteredRowModel?.(e)), e.options.manualFiltering || !e._rowModels.filteredRowModel ? e.getPreFilteredRowModel() : e._rowModels.filteredRowModel();
}
function Mo(e) {
	return e.getFilteredRowModel();
}
function No(e) {
	return e._rowModels.groupedRowModel || (e._rowModels.groupedRowModel = e.options.features.groupedRowModel?.(e)), e.options.manualGrouping || !e._rowModels.groupedRowModel ? e.getPreGroupedRowModel() : e._rowModels.groupedRowModel();
}
function Po(e) {
	return e.getGroupedRowModel();
}
function Fo(e) {
	return e._rowModels.sortedRowModel || (e._rowModels.sortedRowModel = e.options.features.sortedRowModel?.(e)), e.options.manualSorting || !e._rowModels.sortedRowModel ? e.getPreSortedRowModel() : e._rowModels.sortedRowModel();
}
function Io(e) {
	return e.getSortedRowModel();
}
function Lo(e) {
	return e._rowModels.expandedRowModel || (e._rowModels.expandedRowModel = e.options.features.expandedRowModel?.(e)), e.options.manualExpanding || !e._rowModels.expandedRowModel ? e.getPreExpandedRowModel() : e._rowModels.expandedRowModel();
}
function Ro(e) {
	return e.getExpandedRowModel();
}
function zo(e) {
	return e._rowModels.paginatedRowModel || (e._rowModels.paginatedRowModel = e.options.features.paginatedRowModel?.(e)), e.options.manualPagination || !e._rowModels.paginatedRowModel ? e.getPrePaginatedRowModel() : e._rowModels.paginatedRowModel();
}
function Bo(e) {
	return e.getPaginatedRowModel();
}
var Vo = { constructTableAPIs: (e) => {
	Aa(`coreRowModelsFeature`, e, {
		table_getCoreRowModel: { fn: () => ko(e) },
		table_getPreFilteredRowModel: { fn: () => Ao(e) },
		table_getFilteredRowModel: { fn: () => jo(e) },
		table_getPreGroupedRowModel: { fn: () => Mo(e) },
		table_getGroupedRowModel: { fn: () => No(e) },
		table_getPreSortedRowModel: { fn: () => Po(e) },
		table_getSortedRowModel: { fn: () => Fo(e) },
		table_getPreExpandedRowModel: { fn: () => Io(e) },
		table_getExpandedRowModel: { fn: () => Lo(e) },
		table_getPrePaginatedRowModel: { fn: () => Ro(e) },
		table_getPaginatedRowModel: { fn: () => zo(e) },
		table_getRowModel: { fn: () => Bo(e) }
	});
} };
function Ho(e) {
	if (!e._cellPrototype) {
		e._cellPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignCellPrototype?.(e._cellPrototype, e);
	}
	return e._cellPrototype;
}
function Uo(e, t, n) {
	let r = Ho(n), i = Object.create(r);
	i.column = e, i.id = `${t.id}_${e.id}`, i.row = t;
	let a = n._cellInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
function Wo(e) {
	let t = e.table.getRowsInDisplayOrder(), n = e._displayIndexCache;
	return t[n] === e ? n : -1;
}
function Go(e) {
	let t = e.getPrePaginatedRowModel(), n = e.options.paginateExpandedRows === !1 ? Wa(e, t).rows : t.rows;
	for (let e = 0; e < n.length; e++) n[e]._displayIndexCache = e;
	return n;
}
function Ko(e, t) {
	if (ga(e._valuesCache, t)) return e._valuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return e._valuesCache[t] = n.accessorFn(e.original, e.index), e._valuesCache[t];
}
function qo(e, t) {
	if (ga(e._uniqueValuesCache, t)) return e._uniqueValuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return n.columnDef.getUniqueValues ? (e._uniqueValuesCache[t] = n.columnDef.getUniqueValues(e.original, e.index), e._uniqueValuesCache[t]) : (e._uniqueValuesCache[t] = [e.getValue(t)], e._uniqueValuesCache[t]);
}
function Jo(e, t) {
	return e.getValue(t) ?? e.table.options.renderFallbackValue;
}
function Yo(e) {
	return Ta(e.subRows, (e) => e.subRows);
}
function Xo(e) {
	let t = e.getCoreRowModel().flatRows, n = 0;
	for (let e = 0; e < t.length; e++) n = Math.max(n, t[e].depth);
	return n;
}
function Zo(e) {
	if (e.parentId) return e.table.getCoreRowModel().rowsById[e.parentId] ?? e.table.getRow(e.parentId, !0);
}
function Qo(e) {
	let t = [], n = e;
	for (;;) {
		let e = n.getParentRow();
		if (!e) break;
		t.push(e), n = e;
	}
	return t.reverse();
}
function $o(e) {
	let t = e.table.getAllLeafColumns(), n = e._cellsCache;
	n ||= e._cellsCache = new WeakMap();
	let r = Array(t.length);
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = n.get(a);
		o || (o = Uo(a, e, e.table), n.set(a, o)), r[i] = o;
	}
	return r;
}
function es(e) {
	let t = Z(), n = e.getAllCells();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.column.id] = r;
	}
	return t;
}
function ts(e, t, n, r) {
	return t.options.getRowId?.(e, n, r) ?? (r ? `${r.id}.${n}` : String(n));
}
function ns(e, t, n) {
	let r = (n ? e.getPrePaginatedRowModel() : e.getRowModel()).rowsById[t];
	if (!r && (r = e.getCoreRowModel().rowsById[t], !r)) throw Error();
	return r;
}
var rs = {
	assignRowPrototype: (e, t) => {
		ja(`coreRowsFeature`, e, t, {
			row_getDisplayIndex: { fn: (e) => Wo(e) },
			row_getAllCellsByColumnId: {
				fn: (e) => es(e),
				memoDeps: (e) => [e.getAllCells()]
			},
			row_getAllCells: {
				fn: (e) => $o(e),
				memoDeps: (e) => [e.table.getAllLeafColumns()]
			},
			row_getLeafRows: {
				fn: (e) => Yo(e),
				memoDeps: (e) => [e.subRows]
			},
			row_getParentRow: { fn: (e) => Zo(e) },
			row_getParentRows: { fn: (e) => Qo(e) },
			row_getUniqueValues: { fn: (e, t) => qo(e, t) },
			row_getValue: { fn: (e, t) => Ko(e, t) },
			row_renderValue: { fn: (e, t) => Jo(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		Aa(`coreRowsFeature`, e, {
			table_getRowsInDisplayOrder: {
				fn: () => Go(e),
				memoDeps: () => [
					e.getPrePaginatedRowModel().rows,
					e.options.paginateExpandedRows,
					e.options.paginateExpandedRows === !1 ? e.atoms.expanded?.get() : void 0
				]
			},
			table_getRowId: { fn: (t, n, r) => ts(t, e, n, r) },
			table_getRow: { fn: (t, n) => ns(e, t, n) },
			table_getMaxSubRowDepth: {
				fn: () => Xo(e),
				memoDeps: () => [e.getCoreRowModel()]
			}
		});
	}
};
function is(e, t, n = (e, t) => e === t) {
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
function as(e, t, n = (e, t) => e === t) {
	e._reactivity.batch(() => {
		is(e, t, n), e._reactivity.commit?.();
	});
}
function os(e) {
	let t = ma(e.initialState);
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
function ss(e, t) {
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
function cs(e, t, n) {
	let r = ss(e, pa(t, e.options));
	e.optionsStore ? e.optionsStore.set(() => r) : e.options = r, n?.syncExternalState !== !1 && as(e, r.state ?? null);
}
var ls = {
	coreCellsFeature: Fa,
	coreColumnsFeature: ao,
	coreHeadersFeature: Co,
	coreRowModelsFeature: Vo,
	coreRowsFeature: rs,
	coreTablesFeature: { constructTableAPIs: (e) => {
		Aa(`coreTablesFeature`, e, {
			table_reset: { fn: () => os(e) },
			table_setOptions: { fn: (t) => cs(e, t) }
		});
	} }
};
function us(e) {
	return e;
}
function ds(e, t = {}) {
	return Object.values(e).forEach((e) => {
		t = e.getInitialState?.(t) ?? t;
	}), ma(t);
}
function fs(e) {
	let t = e.features.coreReactivityFeature, { aggregationFns: n, columnMeta: r, coreRowModel: i, expandedRowModel: a, facetedMinMaxValues: o, facetedRowModel: s, facetedUniqueValues: c, filterFns: l, filterMeta: u, filteredRowModel: d, groupedRowModel: f, paginatedRowModel: p, sortFns: m, sortedRowModel: h, tableMeta: g, ..._ } = e.features, v = {
		_cellInstanceInitFns: [],
		_columnInstanceInitFns: [],
		_features: {
			...ls,
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
	})) : v.options = b, v.initialState = ds(v._features, v.options.initialState);
	let x = Object.keys(v.initialState);
	for (let e = 0; e < x.length; e++) {
		let n = x[e];
		v.baseAtoms[n] = t.createWritableAtom(v.initialState[n], { debugName: `table/baseAtoms/${n}` }), v.atoms[n] = t.createReadonlyAtom(() => {
			let e = v.options, t = e.atoms?.[n], r = t ? t.get() : v.baseAtoms[n].get();
			if (t) return r;
			let i = e.state;
			if (i && ga(i, n)) {
				let e = i[n];
				return e === void 0 ? v.initialState[n] : e;
			}
			return r;
		}, { debugName: `table/atoms/${n}` });
	}
	is(v), v.store = la(t.createReadonlyAtom(() => {
		let e = {};
		for (let t = 0; t < x.length; t++) {
			let n = x[t];
			e[n] = v.atoms[n].get();
		}
		return e;
	}, {
		compare: na,
		debugName: `table/store`
	}));
	for (let e = 0; e < y.length; e++) {
		let t = y[e];
		t.initTableInstanceData?.(v), t.initCellInstanceData && v._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)), t.initColumnInstanceData && v._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)), t.initHeaderGroupInstanceData && v._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)), t.initHeaderInstanceData && v._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)), t.initRowInstanceData && v._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)), t.constructTableAPIs?.(v);
	}
	return v;
}
function ps() {
	return [];
}
function ms(e) {
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
function hs(e) {
	let t = null, n = e.table._rowModelFns.filterFns;
	return t = wa(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === `auto` ? ms(e) : n?.[e.columnDef.filterFn], t ?? void 0;
}
function gs(e) {
	return (e.columnDef.enableColumnFilter ?? !0) && (e.table.options.enableColumnFilters ?? !0) && (e.table.options.enableFilters ?? !0) && !!e.accessorFn;
}
function _s(e) {
	return ys(e) > -1;
}
function vs(e) {
	return e.table.atoms.columnFilters?.get()?.find((t) => t.id === e.id)?.value;
}
function ys(e) {
	return e.table.atoms.columnFilters?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function bs(e, t) {
	xs(e.table, (n) => {
		let r = hs(e), i = n.find((t) => t.id === e.id), a = pa(t, i ? i.value : void 0);
		if (Cs(r, a, e)) return n.filter((t) => t.id !== e.id);
		let o = {
			id: e.id,
			value: a
		};
		return i ? n.map((t) => t.id === e.id ? o : t) : n.length ? [...n, o] : [o];
	});
}
function xs(e, t) {
	let n = e.getAllLeafColumnsById();
	Ca(e, `columnFilters`, (e) => pa(t, e).filter((e) => {
		let t = n[e.id];
		return !(t && Cs(hs(t), e.value, t));
	}));
}
function Ss(e, t) {
	xs(e, t ? [] : ma(e.initialState.columnFilters ?? []));
}
function Cs(e, t, n) {
	return t === void 0 ? !0 : e?.autoRemove ? !!e.autoRemove(t, n) : typeof t == `string` && !t;
}
var ws = {
	getInitialState: (e) => ({
		columnFilters: ps(),
		...e
	}),
	getDefaultColumnDef: () => ({ filterFn: `auto` }),
	getDefaultTableOptions: (e) => ({
		onColumnFiltersChange: _a(`columnFilters`, e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	assignColumnPrototype: (e, t) => {
		ja(`columnFilteringFeature`, e, t, {
			column_getAutoFilterFn: { fn: (e) => ms(e) },
			column_getFilterFn: { fn: (e) => hs(e) },
			column_getCanFilter: { fn: (e) => gs(e) },
			column_getIsFiltered: { fn: (e) => _s(e) },
			column_getFilterValue: { fn: (e) => vs(e) },
			column_getFilterIndex: { fn: (e) => ys(e) },
			column_setFilterValue: { fn: (e, t) => bs(e, t) }
		});
	},
	initRowInstanceData: (e) => {
		e.columnFilters = Z(), e.columnFiltersMeta = Z();
	},
	constructTableAPIs: (e) => {
		Aa(`columnFilteringFeature`, e, {
			table_setColumnFilters: { fn: (t) => xs(e, t) },
			table_resetColumnFilters: { fn: (t) => Ss(e, t) }
		});
	}
};
function Ts(e) {
	let t = Object.assign((e, n, r, i) => {
		let a = e.getValue(n), o = t.resolveDataValue ? t.resolveDataValue(a) : a;
		return t.filter(o, r, e, n, i);
	}, e);
	return t;
}
var Es = Ts({
	filter: (e, t) => !!e?.includes(t),
	autoRemove: (e) => Ds(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
});
function Ds(e) {
	return e == null || e === ``;
}
function Os(e) {
	return (e.columnDef.enableGlobalFilter ?? !0) && (e.table.options.enableGlobalFilter ?? !0) && (e.table.options.enableFilters ?? !0) && (e.table.options.getColumnCanGlobalFilter?.(e) ?? !0) && !!e.accessorFn;
}
function ks() {
	return Es;
}
function As(e) {
	let { globalFilterFn: t } = e.options, n = e._rowModelFns.filterFns;
	return wa(t) ? t : t === `auto` ? ks() : n?.[t];
}
function js(e, t) {
	e.options.onGlobalFilterChange?.(t);
}
function Ms(e, t) {
	js(e, t ? void 0 : ma(e.initialState.globalFilter));
}
var Ns = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultTableOptions: (e) => ({
		onGlobalFilterChange: _a(`globalFilter`, e),
		globalFilterFn: `auto`,
		getColumnCanGlobalFilter: (t) => {
			if (`enableGlobalFilter` in t.columnDef && t.columnDef.enableGlobalFilter === !0) return !0;
			let n = e.getCoreRowModel().flatRows.find((e) => e.getAllCellsByColumnId()[t.id]?.getValue() != null)?.getAllCellsByColumnId()[t.id]?.getValue();
			return typeof n == `string` || typeof n == `number`;
		}
	}),
	assignColumnPrototype: (e, t) => {
		ja(`globalFilteringFeature`, e, t, { column_getCanGlobalFilter: { fn: (e) => Os(e) } });
	},
	constructTableAPIs: (e) => {
		Aa(`globalFilteringFeature`, e, {
			table_getGlobalAutoFilterFn: { fn: () => ks() },
			table_getGlobalFilterFn: { fn: () => As(e) },
			table_setGlobalFilter: { fn: (t) => js(e, t) },
			table_resetGlobalFilter: { fn: (t) => Ms(e, t) }
		});
	}
}, Ps = 0, Fs = 10;
function Is() {
	return {
		pageIndex: Ps,
		pageSize: Fs
	};
}
function Ls(e) {
	if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
		if ((e.atoms.pagination?.get()?.pageIndex ?? Ps) === Ps) return;
		Vs(e, !0);
	}
}
function Rs(e, t) {
	Ca(e, `pagination`, t);
}
function zs(e, t) {
	Rs(e, t ? Is() : ma(e.initialState.pagination ?? Is()));
}
function Bs(e, t) {
	Rs(e, (n) => {
		let r = pa(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
		return r = Math.max(0, Math.min(r, i)), {
			...n,
			pageIndex: r
		};
	});
}
function Vs(e, t) {
	Bs(e, t ? Ps : e.initialState.pagination?.pageIndex ?? Ps);
}
function Hs(e, t) {
	Us(e, t ? Fs : e.initialState.pagination?.pageSize ?? Fs);
}
function Us(e, t) {
	Rs(e, (e) => {
		let n = Math.max(1, pa(t, e.pageSize)), r = e.pageSize === 1 / 0 ? 0 : e.pageSize * e.pageIndex, i = n === 1 / 0 ? 0 : Math.floor(r / n);
		return {
			...e,
			pageIndex: i,
			pageSize: n
		};
	});
}
function Ws(e) {
	let t = Qs(e), n = [];
	return t && t > 0 && (n = [...Array(t)].fill(null).map((e, t) => t)), n;
}
function Gs(e) {
	return (e.atoms.pagination?.get()?.pageIndex ?? 0) > 0;
}
function Ks(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Ps, n = Qs(e);
	return n === -1 || n !== 0 && t < n - 1;
}
function qs(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Ps, n = Qs(e);
	return Number.isFinite(n) && n > 0 && t < n - 1;
}
function Js(e) {
	return Bs(e, (e) => e - 1);
}
function Ys(e) {
	return Bs(e, (e) => e + 1);
}
function Xs(e) {
	return Bs(e, 0);
}
function Zs(e) {
	let t = Qs(e);
	if (!(!Number.isFinite(t) || t <= 0)) return Bs(e, t - 1);
}
function Qs(e) {
	let t = e.options.pageCount;
	if (t != null) return t;
	let n = $s(e), r = e.atoms.pagination?.get()?.pageSize ?? Fs;
	return r === 1 / 0 && Number.isFinite(n) && n > 0 ? 1 : Math.ceil(n / r);
}
function $s(e) {
	return e.options.rowCount ?? e.getPrePaginatedRowModel().rows.length;
}
var ec = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...Is(),
			...e.pagination
		}
	}),
	getDefaultTableOptions: (e) => ({ onPaginationChange: _a(`pagination`, e) }),
	constructTableAPIs: (e) => {
		Aa(`rowPaginationFeature`, e, {
			table_autoResetPageIndex: { fn: () => Ls(e) },
			table_setPagination: { fn: (t) => Rs(e, t) },
			table_resetPagination: { fn: (t) => zs(e, t) },
			table_setPageIndex: { fn: (t) => Bs(e, t) },
			table_resetPageIndex: { fn: (t) => Vs(e, t) },
			table_setPageSize: { fn: (t) => Us(e, t) },
			table_getPageCount: { fn: () => Qs(e) },
			table_resetPageSize: { fn: (t) => Hs(e, t) },
			table_getPageOptions: { fn: () => Ws(e) },
			table_getCanPreviousPage: { fn: () => Gs(e) },
			table_getCanNextPage: { fn: () => Ks(e) },
			table_getCanLastPage: { fn: () => qs(e) },
			table_previousPage: { fn: () => Js(e) },
			table_nextPage: { fn: () => Ys(e) },
			table_firstPage: { fn: () => Xs(e) },
			table_lastPage: { fn: () => Zs(e) },
			table_getRowCount: { fn: () => $s(e) }
		});
	}
}, tc = /([0-9]+)/gm;
function nc(e) {
	let t = Object.assign((e, n, r) => {
		let i = e.getValue(r), a = n.getValue(r), o = t.resolveDataValue;
		return o && (i = o(i), a = o(a)), t.sort(i, a, e, n, r);
	}, e);
	return t;
}
var rc = nc({
	resolveDataValue: (e) => cc(e).toLowerCase(),
	sort: (e, t) => lc(e, t)
}), ic = nc({
	resolveDataValue: (e) => sc(e),
	sort: (e, t) => e > t ? 1 : e < t ? -1 : 0
}), ac = nc({ sort: (e, t) => oc(e, t) });
function oc(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function sc(e) {
	return e instanceof Date ? e.getTime() : e;
}
function cc(e) {
	return typeof e == `number` ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? `` : String(e) : typeof e == `string` ? e : ``;
}
function lc(e, t) {
	let n = 0, r = 0, i = e.length, a = t.length;
	for (; n < i && r < a;) {
		let i = uc(e.charCodeAt(n)), a = uc(t.charCodeAt(r)), o = dc(e, n, i), s = dc(t, r, a);
		if (!i && !a) {
			let i = fc(e, n, o, t, r, s);
			if (i) return i;
			n = o, r = s;
			continue;
		}
		if (i !== a) return i ? 1 : -1;
		let c = pc(e, n, o, t, r, s);
		if (c) return c;
		n = o, r = s;
	}
	return hc(e, n) - hc(t, r);
}
function uc(e) {
	return e >= 48 && e <= 57;
}
function dc(e, t, n) {
	let r = t + 1;
	for (; r < e.length && uc(e.charCodeAt(r)) === n;) r++;
	return r;
}
function fc(e, t, n, r, i, a) {
	let o = n - t, s = a - i, c = o < s ? o : s;
	for (let n = 0; n < c; n++) {
		let a = e.charCodeAt(t + n), o = r.charCodeAt(i + n);
		if (a > o) return 1;
		if (o > a) return -1;
	}
	return o > s ? 1 : s > o ? -1 : 0;
}
function pc(e, t, n, r, i, a) {
	let o = t;
	for (; o < n && e.charCodeAt(o) === 48;) o++;
	let s = i;
	for (; s < a && r.charCodeAt(s) === 48;) s++;
	let c = n - o, l = a - s;
	if (c === 0 && l === 0) return 0;
	if (c <= 15 && l <= 15) {
		let t = mc(e, o, n), i = mc(r, s, a);
		return t > i ? 1 : i > t ? -1 : 0;
	}
	let u = parseInt(e.slice(t, n), 10), d = parseInt(r.slice(i, a), 10);
	return u > d ? 1 : d > u ? -1 : 0;
}
function mc(e, t, n) {
	let r = 0;
	for (let i = t; i < n; i++) r = r * 10 + e.charCodeAt(i) - 48;
	return r;
}
function hc(e, t) {
	let n = 0, r = t;
	for (; r < e.length;) n++, r = dc(e, r, uc(e.charCodeAt(r)));
	return n;
}
function gc() {
	return [];
}
function _c(e, t) {
	Ca(e, `sorting`, t);
}
function vc(e, t) {
	_c(e, t ? [] : ma(e.initialState.sorting ?? []));
}
function yc(e) {
	e.atoms.sorting && (e.options.autoResetAll ?? e.options.autoResetSorting ?? !1) && vc(e);
}
function bc(e) {
	let t = e.table._rowModelFns.sortFns, n = e.table.getFilteredRowModel().flatRows.slice(0, 10), r, i = !1;
	for (let t = 0; t < n.length; t++) {
		let a = n[t].getValue(e.id);
		if (Object.prototype.toString.call(a) === `[object Date]`) {
			r = `datetime`;
			break;
		}
		if (typeof a == `string` && (i = !0, a.split(tc).length > 1)) {
			r = `alphanumeric`;
			break;
		}
	}
	if (!r && i && (r = `text`), r) {
		let e = t?.[r];
		if (e || r === `alphanumeric` && (e = t?.text), e) return e;
	}
	return ac;
}
function xc(e) {
	let t = e.table.getFilteredRowModel().flatRows.slice(0, 10);
	for (let n = 0; n < t.length; n++) {
		let r = t[n].getValue(e.id);
		if (r != null) return typeof r == `string` ? `asc` : `desc`;
	}
	return `desc`;
}
function Sc(e) {
	let t = e.table._rowModelFns.sortFns;
	return wa(e.columnDef.sortFn) ? e.columnDef.sortFn : e.columnDef.sortFn === `auto` ? bc(e) : t?.[e.columnDef.sortFn] ?? ac;
}
function Cc(e, t, n) {
	let r = Tc(e, n && Dc(e)), i = t !== void 0;
	_c(e.table, (a) => {
		let o = a.findIndex((t) => t.id === e.id), s = o === -1 ? void 0 : a[o], c = [], l, u = i ? t : r === `desc`, d = !!(a.length && Dc(e) && n);
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
function wc(e) {
	return e.columnDef.sortDescFirst ?? e.table.options.sortDescFirst ?? xc(e) === `desc` ? `desc` : `asc`;
}
function Tc(e, t) {
	let n = wc(e), r = Oc(e);
	return r ? r !== n && (e.table.options.enableSortingRemoval ?? !0) && (!t || (e.table.options.enableMultiRemove ?? !0)) ? !1 : r === `desc` ? `asc` : `desc` : n;
}
function Ec(e) {
	return (e.columnDef.enableSorting ?? !0) && (e.table.options.enableSorting ?? !0) && !!e.accessorFn;
}
function Dc(e) {
	return e.columnDef.enableMultiSort ?? e.table.options.enableMultiSort ?? !!e.accessorFn;
}
function Oc(e) {
	let t = e.table.atoms.sorting?.get()?.find((t) => t.id === e.id);
	return t ? t.desc ? `desc` : `asc` : !1;
}
function kc(e) {
	return e.table.atoms.sorting?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function Ac(e) {
	_c(e.table, (t) => t.length ? t.filter((t) => t.id !== e.id) : []);
}
function jc(e) {
	let t = Ec(e);
	return (n) => {
		t && Cc(e, void 0, Dc(e) ? e.table.options.isMultiSortEvent?.(n) : !1);
	};
}
var Mc = {
	getInitialState(e) {
		return {
			sorting: gc(),
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
			onSortingChange: _a(`sorting`, e),
			isMultiSortEvent: (e) => e.shiftKey
		};
	},
	assignColumnPrototype(e, t) {
		ja(`rowSortingFeature`, e, t, {
			column_getAutoSortFn: { fn: (e) => bc(e) },
			column_getAutoSortDir: { fn: (e) => xc(e) },
			column_getSortFn: { fn: (e) => Sc(e) },
			column_toggleSorting: { fn: (e, t, n) => Cc(e, t, n) },
			column_getFirstSortDir: { fn: (e) => wc(e) },
			column_getNextSortingOrder: { fn: (e, t) => Tc(e, t) },
			column_getCanSort: { fn: (e) => Ec(e) },
			column_getCanMultiSort: { fn: (e) => Dc(e) },
			column_getIsSorted: { fn: (e) => Oc(e) },
			column_getSortIndex: { fn: (e) => kc(e) },
			column_clearSorting: { fn: (e) => Ac(e) },
			column_getToggleSortingHandler: { fn: (e) => jc(e) }
		});
	},
	constructTableAPIs(e) {
		Aa(`rowSortingFeature`, e, {
			table_autoResetSorting: { fn: () => yc(e) },
			table_setSorting: { fn: (t) => _c(e, t) },
			table_resetSorting: { fn: (t) => vc(e, t) }
		});
	}
};
function Nc(e, t, n) {
	return n.options.filterFromLeafRows ? Pc(e, t, n) : Fc(e, t, n);
}
function Pc(e, t, n) {
	let r = [], i = Z(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, r = 0) => {
		let i = [];
		for (let s of e) {
			let e = To(n, s.id, s.original, s.index, s.depth, void 0, s.parentId);
			e.columnFilters = s.columnFilters, e.columnFiltersMeta = s.columnFiltersMeta, s.subRows.length && r < a ? (e.subRows = o(s.subRows, r + 1), (e.subRows.length || t(e)) && i.push(e)) : t(e) && (e.subRows = s.subRows, i.push(e));
		}
		return i;
	}, s = o(e);
	return Ic(s, r, i), {
		rows: s,
		flatRows: r,
		rowsById: i
	};
}
function Fc(e, t, n) {
	let r = [], i = Z(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, s = 0) => {
		let c = [];
		for (let l of e) if (t(l)) {
			if (l.subRows.length && s < a) {
				let e = To(n, l.id, l.original, l.index, l.depth, void 0, l.parentId), t = l;
				e.columnFilters = t.columnFilters, e.columnFiltersMeta = t.columnFiltersMeta, c.push(e), r.push(e), i[e.id] = e, e.subRows = o(l.subRows, s + 1);
			} else c.push(l), r.push(l), i[l.id] = l, l.subRows.length && s >= a && Ic(l.subRows, r, i);
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function Ic(e, t, n) {
	for (let r of e) t.push(r), n[r.id] = r, r.subRows.length && Ic(r.subRows, t, n);
}
function Lc() {
	return (e) => {
		let t = e;
		return Oa({
			feature: `columnFilteringFeature`,
			table: t,
			fnName: `table.getFilteredRowModel`,
			memoDeps: () => [
				t.getPreFilteredRowModel(),
				t.atoms.columnFilters?.get(),
				t.atoms.globalFilter?.get()
			],
			fn: () => Rc(t),
			onAfterUpdate: Da(() => Ka(t))
		});
	};
}
function Rc(e) {
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
		let n = io(e, t.id);
		if (!n) return;
		let r = hs(n);
		r && a.push({
			id: t.id,
			filterFn: r,
			resolvedValue: r.resolveFilterValue?.(t.value) ?? t.value
		});
	});
	let s = n?.map((e) => e.id) ?? [];
	if (i) {
		let t = Ha(e), n = t ? e.getAllLeafColumns().filter(Ua) : [];
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
	return Nc(t.rows, (e) => {
		for (let t = 0; t < s.length; t++) if (e.columnFilters[s[t]] === !1) return !1;
		return !0;
	}, e);
}
function zc() {
	return (e) => {
		let t = e;
		return Oa({
			feature: `rowPaginationFeature`,
			table: t,
			fnName: `table.getPaginatedRowModel`,
			memoDeps: () => [
				t.getPrePaginatedRowModel(),
				t.atoms.pagination?.get(),
				t.options.paginateExpandedRows ? void 0 : t.atoms.expanded?.get()
			],
			fn: () => Bc(t)
		});
	};
}
function Bc(e) {
	let t = e.getPrePaginatedRowModel(), n = e.atoms.pagination?.get();
	if (!t.rows.length) return t;
	let { pageSize: r, pageIndex: i } = n ?? Is(), { rows: a, flatRows: o, rowsById: s } = t, c = a;
	if (r !== 1 / 0 || i !== 0) {
		let e = r * i, t = e + r;
		c = a.slice(e, t);
	}
	let l;
	l = e.options.paginateExpandedRows ? {
		rows: c,
		flatRows: o,
		rowsById: s
	} : Wa(e, {
		rows: c,
		flatRows: o,
		rowsById: s
	}), l.flatRows = [];
	let u = new Set(), d = (e) => {
		u.has(e.id) || (u.add(e.id), l.flatRows.push(e), e.subRows.length && e.subRows.forEach(d));
	};
	return l.rows.forEach(d), l;
}
function Vc() {
	return (e) => {
		let t = e;
		return Oa({
			feature: `rowSortingFeature`,
			table: t,
			fnName: `table.getSortedRowModel`,
			memoDeps: () => [t.atoms.sorting?.get(), t.getPreSortedRowModel()],
			fn: () => Hc(t),
			onAfterUpdate: Da(() => Ka(t))
		});
	};
}
function Hc(e) {
	let t = e.getPreSortedRowModel(), n = e.atoms.sorting?.get();
	if (!t.rows.length || !n?.length) return t;
	let r = [], i = n.filter((t) => {
		let n = e.getColumn(t.id);
		return n ? Ec(n) : !1;
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
			sortFn: Sc(r)
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
					ha(s, a), s.subRows = e.rows, t[i] = s, r[o] = s, n = !0;
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
var Uc = typeof window > `u` ? K.useEffect : K.useLayoutEffect;
function Wc(e, t) {
	let [{ table: n, rootSource: r }] = (0, K.useState)(() => {
		let t = fs({
			...e,
			features: {
				coreReactivityFeature: fa(),
				...e.features
			}
		});
		return t.Subscribe = ((e) => ca({
			...e,
			source: e.source ?? t.store
		})), t.FlexRender = Ri, {
			table: t,
			rootSource: da(t.store, na)
		};
	}), i = n;
	cs(i, (t) => ({
		...t,
		...e
	}), { syncExternalState: !1 });
	let a = i.options.state, o = r.get(), s = sa(r, t, { compare: na });
	return Uc(() => {
		r.markCommitted(o), as(i, a ?? null, na);
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
function Gc(e) {
	return e == null ? `` : e instanceof Date ? Number.isNaN(e.getTime()) ? `` : e.toISOString() : String(e);
}
var Kc = /^-?\d+([.,]\d+)?$/;
function qc(e) {
	let t = Gc(e);
	return /^[=+\-@\t\r]/.test(t) && !Kc.test(t) && (t = `'${t}`), t = t.replace(/([;\t])([=+\-@][^;\t]*)/g, (e, t, n) => Kc.test(n) ? e : `${t}'${n}`), `"${t.replaceAll(`"`, `""`)}"`;
}
function Jc(e, t) {
	let n = [t.map((e) => qc(e.header)).join(`,`)];
	for (let r of e) n.push(t.map((e) => qc(e.value(r))).join(`,`));
	return `﻿${n.join(`\r
`)}\r\n`;
}
function Yc(e, t) {
	if (typeof document > `u` || typeof URL.createObjectURL != `function`) return;
	let n = URL.createObjectURL(new Blob([t], { type: `text/csv;charset=utf-8` })), r = document.createElement(`a`);
	r.href = n, r.download = e.endsWith(`.csv`) ? e : `${e}.csv`, r.hidden = !0, document.body.append(r), r.click(), r.remove(), setTimeout(() => URL.revokeObjectURL(n), 0);
}
var Q = ne(), Xc = {
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
function Zc({ name: e, className: t }) {
	return (0, Q.jsx)(F, {
		name: Xc[e],
		"aria-hidden": `true`,
		className: P(`size-4 shrink-0`, t)
	});
}
var Qc = [];
function $c({ facet: e, selected: t, label: n, onChange: r, container: i }) {
	let a = (0, K.useMemo)(() => new Set(t), [t]), o = (0, K.useCallback)((t) => r(e.id, t === `all` ? e.options.map((e) => e.value) : [...t].map(String)), [e, r]), s = (0, K.useMemo)(() => (0, Q.jsxs)(B, {
		variant: `outline`,
		size: `sm`,
		className: P(t.length > 0 && `border-accent bg-accent-soft`),
		children: [
			(0, Q.jsx)(Zc, { name: `filter` }),
			n,
			t.length > 0 ? (0, Q.jsx)(`span`, {
				className: `rounded-full bg-accent px-1.5 text-label font-semibold text-accent-fg tabular-nums`,
				children: t.length
			}) : null
		]
	}), [n, t.length]);
	return (0, Q.jsx)(Ct, {
		trigger: s,
		selectionMode: `multiple`,
		selectedKeys: a,
		onSelectionChange: o,
		placement: `bottom start`,
		container: i ?? null,
		children: e.options.map((e) => (0, Q.jsx)(Tt, {
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
function el({ column: e, value: t, label: n, removeLabel: r, onRemove: i }) {
	let a = (0, K.useCallback)(() => i(e, t), [
		e,
		t,
		i
	]);
	return (0, Q.jsxs)(`li`, {
		className: `inline-flex h-control-sm items-center gap-1 rounded-full border border-accent bg-accent-soft ps-2.5 pe-0.5 text-caption font-medium text-fg`,
		children: [n, (0, Q.jsx)(z, {
			"aria-label": r,
			onPress: a,
			className: `inline-grid size-6 cursor-pointer place-items-center rounded-full text-muted outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-hovered:bg-hover data-hovered:text-fg`,
			children: (0, Q.jsx)(Zc, {
				name: `close`,
				className: `size-3.5`
			})
		})]
	});
}
function tl({ column: e, index: t, count: n, isHidden: r, labels: i, onToggle: a, onMove: o }) {
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
			i.moveColumnUp ? (0, Q.jsx)(z, {
				"aria-label": i.moveColumnUp(e.header),
				isDisabled: t === 0,
				onPress: c,
				className: u,
				children: (0, Q.jsx)(Zc, { name: `up` })
			}) : null,
			i.moveColumnDown ? (0, Q.jsx)(z, {
				"aria-label": i.moveColumnDown(e.header),
				isDisabled: t === n - 1,
				onPress: l,
				className: u,
				children: (0, Q.jsx)(Zc, { name: `down` })
			}) : null
		]
	});
}
var nl = (e) => [{
	value: `comfortable`,
	label: e.comfortable ?? ``
}, {
	value: `compact`,
	label: e.compact ?? ``
}];
function rl({ labels: e, state: t, facets: n, columns: r, onState: i, onExport: a, container: o }) {
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
	}, [r, i]), p = (0, K.useCallback)((e) => i({ density: e }), [i]), m = (0, K.useMemo)(() => nl(e), [e]), h = (0, K.useMemo)(() => (0, Q.jsxs)(B, {
		variant: `outline`,
		size: `sm`,
		children: [(0, Q.jsx)(Zc, { name: `columns` }), e.columns]
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
				e.search ? (0, Q.jsx)(Pe, {
					"aria-label": e.search,
					value: t.search,
					onChange: s,
					...e.searchPlaceholder ? { placeholder: e.searchPlaceholder } : {},
					className: `w-full min-w-0 sm:w-64`
				}) : null,
				e.facet ? n.map((n) => (0, Q.jsx)($c, {
					facet: n,
					selected: t.filters[n.id] ?? Qc,
					label: e.facet?.(n.header) ?? n.header,
					onChange: c,
					container: o ?? null
				}, n.id)) : null,
				(0, Q.jsx)(`span`, { className: `flex-1` }),
				e.density ? (0, Q.jsx)(H, {
					label: e.density,
					options: m,
					value: t.density,
					onChange: p,
					size: `sm`
				}) : null,
				e.columns ? (0, Q.jsx)(Et, {
					trigger: h,
					label: e.columns,
					container: o ?? null,
					children: (0, Q.jsx)(`ul`, {
						className: `flex min-w-56 flex-col gap-0.5`,
						children: r.map((n, i) => (0, Q.jsx)(tl, {
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
				e.exportCsv && a ? (0, Q.jsxs)(B, {
					variant: `outline`,
					size: `sm`,
					onPress: a,
					children: [(0, Q.jsx)(Zc, { name: `download` }), e.exportCsv]
				}) : null
			]
		}), g.length > 0 ? (0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: [(0, Q.jsx)(`ul`, {
				className: `flex flex-wrap items-center gap-1.5`,
				children: g.map((t) => (0, Q.jsx)(el, {
					column: t.facet.id,
					value: t.value,
					label: `${t.facet.header}: ${t.label}`,
					removeLabel: e.removeFilter?.(t.facet.header, t.label) ?? `${t.facet.header}: ${t.label}`,
					onRemove: l
				}, `${t.facet.id}:${t.value}`))
			}), e.clearFilters ? (0, Q.jsx)(B, {
				variant: `ghost`,
				size: `sm`,
				onPress: u,
				children: e.clearFilters
			}) : null]
		}) : null]
	}) : null;
}
function il({ label: e, sizes: t, value: n, optionLabel: r, onChange: i, container: a }) {
	let o = (0, K.useMemo)(() => new Set([String(n)]), [n]), s = (0, K.useCallback)((e) => {
		let t = e === `all` ? void 0 : [...e][0];
		t !== void 0 && i(Number(t));
	}, [i]), c = (0, K.useMemo)(() => (0, Q.jsxs)(B, {
		variant: `ghost`,
		size: `sm`,
		"aria-label": `${e}: ${r(n)}`,
		children: [r(n), (0, Q.jsx)(Zc, {
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
		}), (0, Q.jsx)(Ct, {
			trigger: c,
			selectionMode: `single`,
			selectedKeys: o,
			onSelectionChange: s,
			placement: `top start`,
			container: a ?? null,
			children: t.map((e) => (0, Q.jsx)(Tt, {
				id: String(e),
				children: r(e)
			}, e))
		})]
	});
}
function al({ labels: e, page: t, pageSize: n, total: r, sizes: i, onState: a, container: o }) {
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
			}) : null, e.pageSize && i.length > 1 ? (0, Q.jsx)(il, {
				label: e.pageSize,
				sizes: i,
				value: n,
				optionLabel: f,
				onChange: d,
				container: o ?? null
			}) : null]
		}), e.pagination && e.previous && e.next && e.page && e.pageStatus && s > 1 ? (0, Q.jsx)(`div`, {
			className: `ms-auto min-w-0 grow basis-72 [&>nav]:justify-end`,
			children: (0, Q.jsx)(St, {
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
function ol({ columns: e, rows: t, label: n }) {
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
				children: i.map((e) => (0, Q.jsx)(`span`, { className: P(`h-3 rounded-full bg-sunken motion-safe:animate-pulse [.a11y-reduce-motion_&]:animate-none`, e === 0 ? `w-40` : `flex-1`) }, e))
			}, e))
		})]
	});
}
function sl({ src: e, alt: t = `` }) {
	return (0, Q.jsx)(`img`, {
		src: e,
		alt: t,
		loading: `lazy`,
		decoding: `async`,
		className: `size-10 shrink-0 rounded-md border border-border bg-sunken object-cover`
	});
}
function cl({ label: e, tone: t, icon: n }) {
	return (0, Q.jsx)(V, {
		tone: t ?? `neutral`,
		...n ? { icon: n } : {},
		children: e
	});
}
function ll({ actions: e, label: t, container: n }) {
	let r = (0, K.useCallback)((t) => e.find((e) => e.id === t)?.onAction(), [e]), i = (0, K.useMemo)(() => e.filter((e) => e.isDisabled).map((e) => e.id), [e]), a = (0, K.useMemo)(() => (0, Q.jsx)(z, {
		"aria-label": t,
		className: `inline-grid size-8 cursor-pointer place-items-center rounded-md text-muted outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-focus-visible:outline-solid data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`,
		children: (0, Q.jsx)(Zc, {
			name: `more`,
			className: `size-5`
		})
	}), [t]);
	return (0, Q.jsx)(Ct, {
		trigger: a,
		onAction: r,
		disabledKeys: i,
		container: n ?? null,
		children: e.map((e) => (0, Q.jsx)(wt, {
			id: e.id,
			textValue: e.label,
			...e.icon ? { icon: e.icon } : {},
			...e.tone === `danger` ? { tone: `danger` } : {},
			children: e.label
		}, e.id))
	});
}
var ul = {
	sorting: [],
	search: ``,
	filters: {},
	hidden: [],
	order: [],
	page: 0,
	pageSize: 25,
	density: `comfortable`
};
function dl(...e) {
	return Object.assign({}, ul, ...e.filter(Boolean));
}
var fl = (e) => e ? e.split(`,`).filter(Boolean) : [];
function pl(e, t = ``, n) {
	let r = new URLSearchParams(e), i = (e) => `${t}${e}`, a = dl(n), o = {};
	for (let [e, t] of r) e.startsWith(i(`f.`)) && (o[e.slice(i(`f.`).length)] = fl(t));
	let s = r.get(i(`sort`)), c = Number(r.get(i(`page`))), l = Number(r.get(i(`size`))), u = r.get(i(`density`));
	return {
		...a,
		sorting: s === null ? a.sorting : fl(s).map((e) => {
			let [t = ``, n] = e.split(`.`);
			return {
				id: t,
				desc: n === `desc`
			};
		}),
		search: r.get(i(`q`)) ?? a.search,
		filters: Object.keys(o).length > 0 ? o : a.filters,
		hidden: r.has(i(`hide`)) ? fl(r.get(i(`hide`))) : a.hidden,
		order: r.has(i(`order`)) ? fl(r.get(i(`order`))) : a.order,
		page: Number.isInteger(c) && c > 0 ? c - 1 : a.page,
		pageSize: Number.isInteger(l) && l > 0 ? l : a.pageSize,
		density: u === `compact` || u === `comfortable` ? u : a.density
	};
}
var ml = (e) => e.map((e) => `${e.id}.${e.desc ? `desc` : `asc`}`).join(`,`);
function hl(e, t, n = ``, r) {
	let i = new URLSearchParams(t), a = (e) => `${n}${e}`, o = dl(r), s = Array.from(i.keys()).filter((e) => e.startsWith(a(`f.`)));
	for (let e of s) i.delete(e);
	let c = (e, t, n) => {
		t === n ? i.delete(a(e)) : i.set(a(e), t);
	};
	c(`q`, e.search, o.search), c(`sort`, ml(e.sorting), ml(o.sorting)), c(`page`, String(e.page + 1), String(o.page + 1)), c(`size`, String(e.pageSize), String(o.pageSize)), c(`hide`, e.hidden.join(`,`), o.hidden.join(`,`)), c(`order`, e.order.join(`,`), o.order.join(`,`)), c(`density`, e.density, o.density);
	for (let [t, n] of Object.entries(e.filters)) n.length > 0 && i.set(a(`f.${t}`), n.join(`,`));
	let l = i.toString();
	return l ? `?${l}` : ``;
}
var gl = `sk-table-url`;
function _l(e) {
	return window.addEventListener(`popstate`, e), window.addEventListener(gl, e), () => {
		window.removeEventListener(`popstate`, e), window.removeEventListener(gl, e);
	};
}
var vl = () => window.location.search, yl = () => ``;
function bl({ prefix: e = ``, defaults: t, history: n = `replace` } = {}) {
	let r = (0, K.useSyncExternalStore)(_l, vl, yl);
	return {
		state: (0, K.useMemo)(() => pl(r, e, t), [
			r,
			e,
			t
		]),
		onStateChange: (0, K.useCallback)((r) => {
			let i = hl(r, window.location.search, e, t), a = `${window.location.pathname}${i}${window.location.hash}`;
			n === `push` ? window.history.pushState(window.history.state, ``, a) : window.history.replaceState(window.history.state, ``, a), window.dispatchEvent(new Event(gl));
		}, [
			e,
			t,
			n
		])
	};
}
var xl = us({
	rowSortingFeature: Mc,
	sortedRowModel: Vc(),
	sortFns: {
		alphanumeric: rc,
		basic: ac,
		datetime: ic
	},
	columnFilteringFeature: ws,
	globalFilteringFeature: Ns,
	filteredRowModel: Lc(),
	rowPaginationFeature: ec,
	paginatedRowModel: zc()
});
function Sl(e) {
	return e.normalize(`NFD`).replace(/\p{Diacritic}/gu, ``).replaceAll(`ł`, `l`).toLowerCase();
}
var Cl = (e, t, n) => Sl(String(e.getValue(t) ?? ``)).includes(Sl(n)), wl = (e, t, n) => n.length === 0 || n.includes(String(e.getValue(t) ?? ``));
wl.autoRemove = (e) => !Array.isArray(e) || e.length === 0;
function Tl(e) {
	return e.columnDef.enableGlobalFilter !== !1;
}
var El = {
	text: `text-start`,
	numeric: `text-end tabular-nums`,
	actions: `w-px whitespace-nowrap text-end`
}, Dl = [], Ol = {}, kl = [], Al = P(`border-b border-border bg-sunken px-4 align-bottom text-label font-semibold whitespace-nowrap text-muted uppercase`, `data-allows-sorting:cursor-default data-hovered:data-allows-sorting:text-fg`, mt), jl = P(`cursor-default bg-surface transition-colors data-hovered:not-data-selected:bg-hover data-disabled:cursor-not-allowed data-disabled:opacity-50 [&:last-child>*]:border-b-0`, mt, gt), Ml = P(jl, `h-full`), Nl = P(`border-b border-border px-4 align-middle [overflow-wrap:break-word]`, mt), Pl = {
	comfortable: {
		head: `py-2.5`,
		cell: `py-3`
	},
	compact: {
		head: `py-1.5`,
		cell: `py-1.5`
	}
};
function Fl(e) {
	return e.kind ?? (e.type === `number` ? `numeric` : `text`);
}
function Il(e) {
	return e == null ? null : e instanceof Date ? Number.isNaN(e.getTime()) ? null : e.toLocaleDateString() : typeof e == `number` ? e.toLocaleString() : String(e);
}
function Ll(e, t) {
	if (e.cell) return e.cell(t);
	let n = e.thumbnail?.(t);
	if (n) return (0, Q.jsx)(sl, {
		src: n.src,
		alt: n.alt
	});
	let r = e.badge?.(t);
	return r ? (0, Q.jsx)(cl, {
		label: r.label,
		tone: r.tone,
		icon: r.icon
	}) : Il(e.value?.(t));
}
function Rl(e) {
	return typeof e.facet == `object` ? e.facet : {};
}
function zl({ columns: e, items: t, rowKey: n, rowTextValue: r, selectAllLabel: i, selectLabel: a, emptyState: o, isLoading: s, loadingLabel: c, error: l, onLoadMore: u, isLoadingMore: d = !1, loadingMoreLabel: f, labels: p = Ol, state: m, defaultState: h, onStateChange: g, manual: _ = !1, total: v, pageSizes: y = kl, rowActions: b, bulkActions: x, resizable: S = !1, stickyFirstColumn: C = !0, virtualized: w = !1, rowHeight: T, exportFileName: E = `table`, onExport: D, container: O, className: k, tableClassName: A, ...j }) {
	let M = j.sortDescriptor !== void 0 || j.onSortChange !== void 0, N = y.length > 0, ee = S && !w, te = S || w, [ne, I] = (0, K.useState)(() => dl(h)), L = (0, K.useMemo)(() => dl(ne, m), [ne, m]), re = (0, K.useCallback)((e) => {
		let t = {
			...L,
			...e
		};
		I(t), g?.(t);
	}, [L, g]), ie = (0, K.useMemo)(() => e.map((e) => ({
		id: e.id,
		accessorFn: (t) => {
			let n = e.value?.(t);
			return n instanceof Date ? n : n === void 0 ? null : n;
		},
		sortFn: e.type === `date` ? `datetime` : e.type === `number` ? `basic` : `alphanumeric`,
		sortUndefined: `last`,
		enableSorting: e.value !== void 0,
		enableGlobalFilter: e.value !== void 0 && e.type !== `date`,
		filterFn: wl
	})), [e]), ae = t, oe = (0, K.useMemo)(() => M ? [] : L.sorting, [M, L.sorting]), se = (0, K.useMemo)(() => Object.entries(L.filters).map(([e, t]) => ({
		id: e,
		value: t
	})), [L.filters]), R = (0, K.useMemo)(() => ({
		pageIndex: N ? L.page : 0,
		pageSize: N ? L.pageSize : Math.max(1, ae.length)
	}), [
		N,
		L.page,
		L.pageSize,
		ae.length
	]), le = (0, K.useCallback)((e) => String(n(e)), [n]), ue = Wc((0, K.useMemo)(() => ({
		features: xl,
		columns: ie,
		data: ae,
		getRowId: le,
		state: {
			sorting: oe,
			globalFilter: L.search,
			columnFilters: se,
			pagination: R
		},
		manualSorting: _ || M,
		manualFiltering: _,
		manualPagination: _ || !N,
		..._ && v !== void 0 ? { rowCount: v } : {},
		globalFilterFn: Cl,
		getColumnCanGlobalFilter: Tl,
		enableMultiSort: !0,
		autoResetPageIndex: !1
	}), [
		ie,
		ae,
		le,
		oe,
		L.search,
		se,
		R,
		_,
		M,
		N,
		v
	])), de = ue.getRowModel().rows.map((e) => e.original), z = _ ? v ?? t.length : ue.getFilteredRowModel().rows.length, fe = Math.max(1, Math.ceil(z / L.pageSize)), B = N ? Math.min(L.page, fe - 1) : 0, pe = (0, K.useMemo)(() => {
		let t = new Map(e.map((e) => [e.id, e]));
		return [...L.order.map((e) => t.get(e)).filter((e) => e !== void 0), ...e.filter((e) => !L.order.includes(e.id))];
	}, [e, L.order]), V = e.find((e) => e.isRowHeader)?.id ?? e.find((e) => Fl(e) !== `actions`)?.id, H = (0, K.useMemo)(() => pe.filter((e) => e.id === V || !L.hidden.includes(e.id)), [
		pe,
		V,
		L.hidden
	]), he = (0, K.useMemo)(() => pe.map((e) => ({
		id: e.id,
		header: e.header,
		canHide: e.id !== V && e.canHide !== !1
	})), [pe, V]), ge = (0, K.useMemo)(() => {
		let n = Sl(L.search.trim()), r = e.filter((e) => e.value && e.type !== `date`), i = (t, i) => (!n || r.some((e) => Sl(String(e.value?.(t) ?? ``)).includes(n))) && Object.entries(L.filters).every(([n, r]) => n === i || r.length === 0 || r.includes(String(e.find((e) => e.id === n)?.value?.(t) ?? ``)));
		return e.filter((e) => e.facet).map((e) => {
			let n = Rl(e);
			if (n.options || _) return {
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
		_,
		L.filters,
		L.search
	]), _e = j.selectionMode === `multiple` && j.selectionBehavior !== `replace`, [ve, U] = (0, K.useState)(() => new Set()), ye = j.selectedKeys ?? ve, { onSelectionChange: W } = j, be = (0, K.useCallback)((e) => {
		U(e), W?.(e);
	}, [W]), xe = (0, K.useCallback)(() => be(new Set()), [be]), Se = ye === `all` ? z : ye.size, Ce = (0, K.useMemo)(() => ye === `all` ? `all` : t.filter((e) => ye.has(n(e))), [
		ye,
		t,
		n
	]), we = (0, K.useRef)(!1), Te = (0, K.useRef)(null), { attachBox: Ee, frameProps: De, hintProps: Oe } = ce();
	(0, K.useEffect)(() => {
		let e = Te.current;
		if (!e) return;
		let t = (e) => {
			we.current = e.shiftKey;
		};
		return e.addEventListener(`pointerdown`, t, !0), e.addEventListener(`keydown`, t, !0), () => {
			e.removeEventListener(`pointerdown`, t, !0), e.removeEventListener(`keydown`, t, !0);
		};
	}, []);
	let { onSortChange: ke } = j, Ae = (0, K.useCallback)((e) => {
		if (M) {
			ke?.(e);
			return;
		}
		let t = String(e.column), n = L.sorting.find((e) => e.id === t), r = we.current ? n ? L.sorting.map((e) => e.id === t ? {
			id: t,
			desc: !e.desc
		} : e) : [...L.sorting, {
			id: t,
			desc: !1
		}] : [{
			id: t,
			desc: e.direction === `descending`
		}];
		re({
			sorting: r,
			page: 0
		});
	}, [
		M,
		ke,
		L.sorting,
		re
	]), G = L.sorting[0], je = j.sortDescriptor ?? (G && !M ? {
		column: G.id,
		direction: G.desc ? `descending` : `ascending`
	} : void 0), Me = (0, K.useCallback)(() => {
		let e = _ ? [...t] : ue.getPrePaginatedRowModel().rows.map((e) => e.original);
		D ? D(e) : Yc(E, Jc(e, H.filter((e) => e.value || e.csv).map((e) => ({
			header: e.header,
			value: (t) => (e.csv ?? e.value)?.(t)
		}))));
	}, [
		_,
		t,
		ue,
		D,
		H,
		E
	]), Ne = !!(s && _ && t.length > 0), Pe = (0, K.useMemo)(() => pt({
		emptyState: o,
		isLoading: s && !Ne,
		loadingLabel: c,
		error: l
	}), [
		o,
		s,
		Ne,
		c,
		l
	]), Fe = !Pe || Pe.kind === `empty`, Ie = Fe ? de : Dl, Le = Pl[L.density], Re = C && !w, ze = p.rowActions, Be = !!(b && ze), Ve = (0, K.useMemo)(() => [
		H,
		_e,
		a,
		V,
		Le,
		Be,
		Re,
		w,
		L.sorting
	], [
		H,
		_e,
		a,
		V,
		Le,
		Be,
		Re,
		w,
		L.sorting
	]), He = (0, K.useCallback)(() => Pe ? Pe.kind === `loading` ? (0, Q.jsx)(ol, {
		columns: H.length,
		rows: Math.min(N ? L.pageSize : 8, 8),
		label: Pe.content
	}) : (0, Q.jsx)(yt, {
		kind: Pe.kind,
		children: Pe.content
	}) : null, [
		Pe,
		H.length,
		N,
		L.pageSize
	]), Ue = (0, K.useMemo)(() => ({
		rowHeight: T ?? (L.density === `compact` ? 40 : 52),
		headingHeight: 40
	}), [T, L.density]), Ge = (e, t) => Re ? P(`sticky`, t, e === `checkbox` || !_e ? `start-0` : `start-12`) : void 0, Ke = (0, Q.jsxs)(mr, {
		...j,
		...je ? { sortDescriptor: je } : {},
		onSortChange: Ae,
		...j.selectionMode ? {
			selectedKeys: ye,
			onSelectionChange: be
		} : {},
		"aria-busy": Ne || void 0,
		className: P(`w-full border-separate border-spacing-0 text-start text-body text-fg`, Ne && `opacity-60`, w && `block h-full overflow-auto`, A),
		children: [(0, Q.jsxs)(xr, {
			className: `sticky top-0 z-(--sk-z-sticky)`,
			children: [
				_e ? (0, Q.jsx)(Er, {
					width: 48,
					minWidth: 48,
					className: P(Al, Le.head, `w-12 px-3`, Ge(`checkbox`, `z-2 bg-sunken`)),
					children: (0, Q.jsx)(_t, { label: i })
				}) : null,
				H.map((e) => {
					let t = Fl(e), n = L.sorting.findIndex((t) => t.id === e.id), r = n >= 0 ? L.sorting[n] : void 0, i = M ? e.allowsSorting ?? !1 : e.allowsSorting ?? e.value !== void 0, a = e.id === V;
					return (0, Q.jsx)(Er, {
						id: e.id,
						textValue: e.header,
						isRowHeader: a,
						allowsSorting: i,
						...te && e.width ? { defaultWidth: e.width } : {},
						...te ? { minWidth: e.minWidth ?? 80 } : {},
						className: P(Al, Le.head, El[t], a && Ge(`first`, `z-2 bg-sunken`)),
						children: ({ sortDirection: a }) => (0, Q.jsxs)(`span`, {
							className: `flex items-center gap-1`,
							children: [e.hideHeader ? (0, Q.jsx)(`span`, {
								className: `sr-only`,
								children: e.header
							}) : i ? (0, Q.jsxs)(bt, {
								direction: a ?? (r && !M ? r.desc ? `descending` : `ascending` : void 0),
								align: t === `numeric` ? `end` : `start`,
								className: `min-w-0 flex-1`,
								children: [e.header, n >= 0 && L.sorting.length > 1 && r ? (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(`sup`, {
									"aria-hidden": !0,
									className: `ms-0.5 text-[0.625rem] text-accent-text tabular-nums`,
									children: n + 1
								}), n > 0 && p.sortPosition ? (0, Q.jsxs)(`span`, {
									className: `sr-only`,
									children: [`, `, p.sortPosition(n + 1, r.desc ? `descending` : `ascending`)]
								}) : null] }) : null]
							}) : (0, Q.jsx)(`span`, {
								className: `min-w-0 flex-1`,
								children: e.header
							}), ee ? (0, Q.jsx)(Or, {
								...p.resizeColumn ? { "aria-label": p.resizeColumn(e.header) } : {},
								className: `-me-3 ms-auto h-5 w-1.5 shrink-0 cursor-col-resize rounded-full bg-border outline-none data-focus-visible:bg-focus data-hovered:bg-border-strong data-resizing:bg-accent`
							}) : null]
						})
					}, e.id);
				}),
				Be ? (0, Q.jsx)(Er, {
					width: 56,
					minWidth: 56,
					className: P(Al, Le.head, `w-14 px-2 text-end`),
					children: (0, Q.jsx)(`span`, {
						className: `sr-only`,
						children: p.actionsColumn
					})
				}) : null
			]
		}), (0, Q.jsxs)(jr, {
			renderEmptyState: He,
			dependencies: Ve,
			children: [(0, Q.jsx)(We, {
				items: Ie,
				dependencies: Ve,
				children: (e) => {
					let t = r?.(e);
					return (0, Q.jsxs)(Fr, {
						id: n(e),
						...t ? { textValue: t } : {},
						className: w ? Ml : jl,
						children: [
							_e ? (0, Q.jsx)(Rr, {
								className: P(Nl, Le.cell, `w-12 px-3`, Ge(`checkbox`, `z-1 bg-inherit`)),
								children: (0, Q.jsx)(_t, { label: a })
							}) : null,
							H.map((t) => (0, Q.jsx)(Rr, {
								className: P(Nl, Le.cell, El[Fl(t)], t.id === V && `font-medium`, t.id === V && Ge(`first`, `z-1 bg-inherit`), w && `truncate`),
								children: Ll(t, e)
							}, t.id)),
							Be && b && ze ? (0, Q.jsx)(Rr, {
								className: P(Nl, `w-14 px-2 py-0 text-end`),
								children: (0, Q.jsx)(ll, {
									actions: b(e),
									label: ze(t ?? String(n(e))),
									container: O
								})
							}) : null
						]
					});
				}
			}), u && Fe ? (0, Q.jsx)(Gr, {
				onLoadMore: u,
				isLoading: d,
				className: `[&>td]:border-t [&>td]:border-border`,
				children: (0, Q.jsxs)(`output`, {
					className: `flex items-center justify-center gap-2 py-3 text-caption text-muted`,
					children: [(0, Q.jsx)(F, {
						name: `status.loading`,
						"aria-hidden": `true`,
						className: P(`size-4`, vt)
					}), (0, Q.jsx)(`span`, { children: f })]
				})
			}) : null]
		})]
	}), qe = P(w ? `relative max-w-full overscroll-contain rounded-lg border border-border bg-surface flex flex-col overflow-hidden` : `sk-table-scroll__box`, k), Je = w ? (0, Q.jsx)(Oi, {
		layout: gi,
		layoutOptions: Ue,
		children: Ke
	}) : Ke;
	return (0, Q.jsxs)(`div`, {
		ref: Te,
		"data-density": L.density,
		className: `flex min-w-0 flex-col gap-3`,
		children: [
			(0, Q.jsx)(rl, {
				labels: p,
				state: L,
				facets: ge,
				columns: he,
				onState: re,
				onExport: p.exportCsv ? Me : void 0,
				container: O
			}),
			x && _e && p.selected && p.bulkActions ? (0, Q.jsx)(me, {
				count: Se,
				countLabel: p.selected,
				"aria-label": p.bulkActions,
				...p.clearSelection ? {
					onClear: xe,
					clearLabel: p.clearSelection
				} : {},
				children: x(Ce)
			}) : null,
			p.results && (L.search || Object.keys(L.filters).length > 0) ? (0, Q.jsx)(`span`, {
				className: `sr-only`,
				"aria-live": `polite`,
				children: p.results(z)
			}) : null,
			!w && p.scrollHint && Oe ? (0, Q.jsx)(`p`, {
				...Oe,
				children: p.scrollHint
			}) : null,
			w ? ee ? (0, Q.jsx)(ur, {
				className: qe,
				children: Je
			}) : (0, Q.jsx)(`div`, {
				className: qe,
				children: Je
			}) : (0, Q.jsx)(`div`, {
				className: `sk-table-scroll`,
				...De,
				children: ee ? (0, Q.jsx)(ur, {
					ref: Ee,
					className: qe,
					children: Je
				}) : (0, Q.jsx)(`div`, {
					ref: Ee,
					className: qe,
					children: Je
				})
			}),
			N ? (0, Q.jsx)(al, {
				labels: p,
				page: B,
				pageSize: L.pageSize,
				total: z,
				sizes: y,
				onState: re,
				container: O
			}) : null
		]
	});
}
var Bl = {
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
function Vl(e) {
	return e == null || e === ``;
}
function Hl({ items: e, layout: t = `inline`, emptyValue: n, divided: r = !1, className: i, ...a }) {
	return (0, Q.jsx)(`dl`, {
		...a,
		className: P(`@container min-w-0 text-body`, Bl[t].list, r && t !== `columns` && `divide-y divide-border`, i),
		children: e.map((e, r) => (0, Q.jsxs)(`div`, {
			className: P(`min-w-0`, Bl[t].group),
			children: [(0, Q.jsx)(`dt`, {
				className: `text-caption font-medium text-muted [overflow-wrap:anywhere]`,
				children: e.label
			}), (0, Q.jsxs)(`dd`, {
				className: `min-w-0 text-fg [overflow-wrap:anywhere]`,
				children: [Vl(e.value) ? (0, Q.jsx)(`span`, {
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
var Ul = P(`group/item flex min-w-0 cursor-default items-center gap-3 rounded-md px-3 py-2 transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, mt, gt);
function Wl({ title: e, textValue: t, description: n, icon: r, meta: i, actions: a, truncate: o = !1, selectLabel: s, dragLabel: c, className: l, ...u }) {
	let d = t ?? (typeof e == `string` ? e : void 0);
	return (0, Q.jsx)(ut, {
		...u,
		...d === void 0 ? {} : { textValue: d },
		className: P(Ul, l),
		children: ({ selectionMode: t, selectionBehavior: l, allowsDragging: u }) => (0, Q.jsxs)(Q.Fragment, { children: [
			u ? (0, Q.jsx)(ht, { label: c }) : null,
			t !== `none` && l === `toggle` ? (0, Q.jsx)(_t, { label: s }) : null,
			r ? (0, Q.jsx)(`span`, {
				className: `flex size-6 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
				children: r
			}) : null,
			(0, Q.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col`,
				children: [(0, Q.jsx)(`span`, {
					className: P(`font-medium`, o ? `truncate` : `[overflow-wrap:anywhere]`),
					children: e
				}), n ? (0, Q.jsx)(`span`, {
					className: P(`text-caption text-muted`, o ? `truncate` : `[overflow-wrap:anywhere]`),
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
function Gl({ children: e, emptyState: t, isLoading: n, loadingLabel: r, error: i, className: a, ...o }) {
	let s = K.Children.toArray(e).length === 0, c = pt({
		emptyState: s ? t : void 0,
		isLoading: n,
		loadingLabel: r,
		error: i
	});
	return c ? (0, Q.jsx)(yt, {
		kind: c.kind,
		className: a,
		children: c.content
	}) : (0, Q.jsx)(`ol`, {
		...o,
		className: P(`flex min-w-0 flex-col text-body text-fg`, a),
		children: e
	});
}
var Kl = {
	neutral: `border-border-strong bg-surface text-muted`,
	accent: `border-accent bg-accent-soft text-accent-text`,
	ok: `border-ok bg-ok-soft text-ok`,
	warn: `border-warn bg-warn-soft text-warn`,
	danger: `border-danger bg-danger-soft text-danger`,
	info: `border-info bg-info-soft text-info`
}, ql = {
	neutral: (0, Q.jsx)(F, {
		name: `status.todo`,
		"aria-hidden": `true`,
		className: `size-2 fill-current`
	}),
	accent: (0, Q.jsx)(F, {
		name: `ai.spark`,
		"aria-hidden": `true`,
		className: `size-3.5`
	}),
	ok: (0, Q.jsx)(F, {
		name: `status.ok`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	warn: (0, Q.jsx)(F, {
		name: `status.warning`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	danger: (0, Q.jsx)(F, {
		name: `status.failed`,
		"aria-hidden": `true`,
		className: `size-4`
	}),
	info: (0, Q.jsx)(F, {
		name: `status.info`,
		"aria-hidden": `true`,
		className: `size-4`
	})
};
function Jl({ title: e, dateTime: t, time: n, actor: r, tone: i = `neutral`, toneLabel: a, icon: o, actions: s, children: c, className: l, ...u }) {
	return (0, Q.jsxs)(`li`, {
		...u,
		className: P(`relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 pb-5 last:pb-0`, `before:absolute before:start-[calc(0.875rem-0.5px)] before:top-8 before:bottom-1 before:border-s before:border-border last:before:hidden`, l),
		children: [(0, Q.jsx)(`span`, {
			className: P(`relative grid size-7 place-items-center rounded-full border [&_svg]:shrink-0`, Kl[i]),
			children: o ?? ql[i]
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
						}), a ? (0, Q.jsx)(V, {
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
var Yl = P(`group/row cursor-default rounded-md transition-colors`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-dragging:opacity-60`, mt, gt);
function $({ title: e, textValue: t, icon: n, expandedIcon: r, meta: i, actions: a, children: o, truncate: s = !0, selectLabel: c, dragLabel: l, className: u, ...d }) {
	let f = t ?? (typeof e == `string` ? e : ``);
	return (0, Q.jsxs)(Be, {
		...d,
		textValue: f,
		className: P(Yl, u),
		children: [(0, Q.jsx)(Ve, { children: ({ hasChildItems: t, isExpanded: o, selectionMode: u, selectionBehavior: d, allowsDragging: f }) => (0, Q.jsxs)(`div`, {
			className: `flex min-h-control-sm min-w-0 items-center gap-1 py-0.5 ps-[calc(min(var(--tree-item-level,1)_-_1,8)*1.25rem)] pe-1`,
			children: [
				f ? (0, Q.jsx)(ht, { label: l }) : null,
				t ? (0, Q.jsx)(z, {
					slot: `chevron`,
					className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted outline-hidden data-hovered:bg-hover data-hovered:text-fg`,
					children: (0, Q.jsx)(F, {
						name: `chevron.right`,
						"aria-hidden": `true`,
						className: P(`size-4 transition-transform duration-(--sk-duration-fast) motion-reduce:transition-none rtl:-scale-x-100`, o && `rotate-90`)
					})
				}) : (0, Q.jsx)(`span`, {
					"aria-hidden": `true`,
					className: `size-6 shrink-0`
				}),
				u !== `none` && d === `toggle` ? (0, Q.jsx)(_t, { label: c }) : null,
				n ? (0, Q.jsx)(`span`, {
					className: `flex size-5 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
					children: o && r ? r : n
				}) : null,
				(0, Q.jsx)(`span`, {
					className: P(`min-w-0 flex-1`, s ? `truncate` : `[overflow-wrap:anywhere]`),
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
function Xl({ estimatedRowHeight: e = 44, className: t, ...n }) {
	let r = (0, K.useMemo)(() => ({
		estimatedRowHeight: e,
		gap: 2,
		padding: 4
	}), [e]);
	return (0, Q.jsx)(Oi, {
		layout: fi,
		layoutOptions: r,
		children: (0, Q.jsx)(Dt, {
			...n,
			virtual: !0,
			...t === void 0 ? {} : { className: t }
		})
	});
}
var Zl = e({ default: () => ju }), Ql = [
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
], $l = new Intl.NumberFormat(`en-GB`), eu = {
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
function tu({ status: e }) {
	let { tone: t, label: n } = eu[e];
	return (0, Q.jsx)(V, {
		tone: t,
		children: n
	});
}
var nu = [
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
], ru = [
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
		cell: (e) => (0, Q.jsx)(B, {
			variant: `outline`,
			size: `sm`,
			"aria-label": `Edit ${e.name}`,
			children: `Edit`
		})
	}
];
function iu(e, t, n) {
	return e.toSorted((e, r) => {
		let i = n(e, t.column), a = n(r, t.column), o = typeof i == `number` && typeof a == `number` ? i - a : String(i).localeCompare(String(a));
		return t.direction === `descending` ? -o : o;
	});
}
function au() {
	let [e, t] = (0, K.useState)({
		column: `name`,
		direction: `ascending`
	}), n = (0, K.useMemo)(() => iu(nu, e, (e, t) => e[t]), [e]);
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [
			(0, Q.jsx)(xt, {
				caption: `Team members`,
				scrollHint: `Swipe to see more`,
				columns: ru,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Q.jsx)(xt, {
				caption: `Team members, stacked on narrow screens`,
				layout: `stack`,
				columns: ru,
				rows: n,
				rowKey: (e) => e.id,
				sort: e,
				onSortChange: t
			}),
			(0, Q.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-3`,
				children: [
					(0, Q.jsx)(xt, {
						caption: `Empty`,
						columns: ru.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						emptyState: `Nobody has joined yet.`
					}),
					(0, Q.jsx)(xt, {
						caption: `Loading`,
						columns: ru.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						isLoading: !0,
						loadingLabel: `Loading members`
					}),
					(0, Q.jsx)(xt, {
						caption: `Error`,
						columns: ru.slice(0, 2),
						rows: [],
						rowKey: (e) => e.id,
						error: `Could not load members. Try again.`
					})
				]
			})
		]
	});
}
var ou = [
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
		cell: (e) => (0, Q.jsx)(tu, { status: e.status })
	},
	{
		id: `downloads`,
		header: `Downloads`,
		kind: `numeric`,
		allowsSorting: !0,
		cell: (e) => $l.format(e.downloads)
	},
	{
		id: `actions`,
		header: `Actions`,
		kind: `actions`,
		hideHeader: !0,
		cell: (e) => (0, Q.jsx)(B, {
			variant: `ghost`,
			size: `sm`,
			"aria-label": `Download ${e.version}`,
			children: `Download`
		})
	}
];
function su() {
	let [e, t] = (0, K.useState)({
		column: `number`,
		direction: `ascending`
	}), [n, r] = (0, K.useState)(Ql), [i, a] = (0, K.useState)(new Set([`inv-1044`])), o = (0, K.useMemo)(() => iu(n, {
		column: String(e.column),
		direction: e.direction
	}, (e, t) => e[t]), [n, e]), s = i === `all` ? n.length : i.size, c = i === `all` ? new Set(n.map((e) => e.id)) : i;
	return (0, Q.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, Q.jsxs)(me, {
			"aria-label": `Actions for selected releases`,
			count: s,
			countLabel: (e) => e === 0 ? `No releases selected` : e === 1 ? `1 release selected` : `${e} releases selected`,
			onClear: () => a(new Set()),
			clearLabel: `Clear selection`,
			children: [(0, Q.jsx)(B, {
				variant: `outline`,
				size: `sm`,
				children: `Send reminder`
			}), (0, Q.jsx)(B, {
				variant: `danger`,
				size: `sm`,
				onPress: () => {
					r((e) => e.filter((e) => !c.has(e.id))), a(new Set());
				},
				children: `Delete`
			})]
		}), (0, Q.jsx)(zl, {
			"aria-label": `Releases`,
			className: `max-h-72`,
			tableClassName: `min-w-[640px]`,
			columns: ou,
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
			}), (0, Q.jsx)(B, {
				variant: `outline`,
				size: `sm`,
				className: `mt-2`,
				onPress: () => r(Ql),
				children: `Restore the examples`
			})] })
		})]
	});
}
var cu = {
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
}, lu = [
	`Ada Lovelace`,
	`Grace Hopper`,
	`Alan Turing`,
	`Zofia Kowalczyk`,
	`Łukasz Żółkiewski`,
	`Hedy Lamarr`,
	`Małgorzata Ślęzak`,
	`Katherine Johnson`
], uu = [
	`/media/ui-dialog-poster.webp`,
	`/media/ui-themes-poster.webp`,
	`/media/ui-toasts-poster.webp`,
	`/media/ui-command-palette-poster.webp`,
	`/media/ui-form-validation-poster.webp`
], du = [
	`news`,
	`guides`,
	`product`,
	`community`
], fu = [
	`published`,
	`draft`,
	`scheduled`,
	`archived`
], pu = {
	published: `ok`,
	draft: `neutral`,
	scheduled: `info`,
	archived: `warn`
};
function mu(e, t = 2e3) {
	let n = cu[e], r = 42, i = () => (r = (r * 1103515245 + 12345) % 2147483648, r / 2147483648), a = (e) => e[Math.floor(i() * e.length)], o = Date.UTC(2026, 10, 14);
	return Array.from({ length: t }, (e, t) => {
		let r = a(fu);
		return {
			id: `post-${10001 + t}`,
			title: `${a(n.topics)}: ${a(n.subjects)} #${10001 + t}`,
			image: a(uu),
			author: a(lu),
			section: a(du),
			status: r,
			words: 300 + Math.floor(i() * 2700),
			views: r === `draft` ? 0 : Math.floor(i() * i() * 48e3),
			updated: new Date(o - Math.floor(i() * 400) * 864e5)
		};
	});
}
var hu = {
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
			scrollHint: `Swipe to see more`,
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
			scrollHint: `Przesuń, aby zobaczyć więcej`,
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
}, gu = [
	25,
	50,
	100,
	2e3
];
function _u(e, t, n) {
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
function vu(e) {
	return function() {
		return (0, Q.jsxs)(Q.Fragment, { children: [
			(0, Q.jsx)(B, {
				size: `sm`,
				variant: `outline`,
				children: e.publish
			}),
			(0, Q.jsx)(B, {
				size: `sm`,
				variant: `outline`,
				children: e.archive
			}),
			(0, Q.jsx)(B, {
				size: `sm`,
				variant: `danger`,
				children: e.remove
			})
		] });
	};
}
function yu() {
	let e = (0, K.useContext)(f) === `pl` ? `pl` : `en`, t = hu[e], n = cu[e], r = (0, K.useMemo)(() => mu(e), [e]), [i, a] = (0, K.useState)(`client`), [o, s] = (0, K.useState)(`rows`), [c, l] = (0, K.useState)(new Set()), [u, d] = (0, K.useState)(null), p = bl({
		prefix: `posts.`,
		defaults: { pageSize: 25 }
	}), [m, h] = (0, K.useState)(() => dl({ pageSize: 25 })), g = i === `client` ? p.state : m, _ = i === `client` ? p.onStateChange : h, v = _u(r, m, i === `server`), y = (0, K.useMemo)(() => [
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
				options: du.map((e) => ({
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
				tone: pu[e.status]
			}),
			csv: (e) => n.statuses[e.status],
			facet: {
				label: (e) => n.statuses[e] ?? e,
				options: fu.map((e) => ({
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
	], [t, n]), b = (0, K.useMemo)(() => vu(t), [t]), x = () => _({
		...g,
		search: ``,
		filters: {},
		page: 0
	}), S = o === `rows` ? i === `client` ? r : v.page?.rows ?? [] : [], C = o === `loading` || i === `server` && o === `rows` && v.isLoading, w = g.pageSize >= 2e3;
	return (0, Q.jsxs)(`div`, {
		ref: d,
		className: `flex min-w-0 flex-col gap-3`,
		children: [(0, Q.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-3`,
			children: [(0, Q.jsx)(H, {
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
			}), (0, Q.jsx)(H, {
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
		}), (0, Q.jsx)(zl, {
			"aria-label": t.label,
			columns: y,
			items: S,
			rowKey: (e) => e.id,
			rowTextValue: (e) => e.title,
			labels: t.labels,
			state: g,
			onStateChange: _,
			manual: i === `server`,
			...i === `server` && v.page ? { total: v.page.total } : {},
			pageSizes: gu,
			virtualized: w,
			resizable: !0,
			selectionMode: `multiple`,
			selectedKeys: c,
			onSelectionChange: l,
			selectAllLabel: t.selectAll,
			bulkActions: b,
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
			isLoading: C,
			loadingLabel: t.loadingLabel,
			error: o === `error` ? (0, Q.jsxs)(`span`, {
				className: `flex flex-wrap items-center justify-center gap-3`,
				children: [t.errorText, (0, Q.jsx)(B, {
					size: `sm`,
					variant: `outline`,
					onPress: () => s(`rows`),
					children: t.retry
				})]
			}) : void 0,
			emptyState: (0, Q.jsxs)(`span`, {
				className: `flex flex-col items-center gap-2`,
				children: [t.emptyTitle, (0, Q.jsx)(B, {
					size: `sm`,
					variant: `outline`,
					onPress: x,
					children: t.emptyAction
				})]
			}),
			exportFileName: `posts`,
			container: u,
			className: w ? `h-[36rem]` : `max-h-[36rem]`
		})]
	});
}
function bu() {
	let e = ou.slice(0, 2);
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Q.jsx)(zl, {
				"aria-label": `Releases, empty`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				emptyState: `No releases match these filters.`
			}),
			(0, Q.jsx)(zl, {
				"aria-label": `Releases, loading`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				isLoading: !0,
				loadingLabel: `Loading releases`
			}),
			(0, Q.jsx)(zl, {
				"aria-label": `Releases, failed`,
				columns: e,
				items: [],
				rowKey: (e) => e.id,
				error: `Could not load releases. Check the connection and try again.`
			})
		]
	});
}
var xu = [
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
function Su() {
	let [e, t] = (0, K.useState)(new Set([`atlas`]));
	return (0, Q.jsx)(Ot, {
		"aria-label": `Projects`,
		items: xu,
		selectionMode: `multiple`,
		selectedKeys: e,
		onSelectionChange: t,
		className: `max-w-2xl`,
		children: (e) => (0, Q.jsx)(Wl, {
			id: e.id,
			title: e.name,
			description: e.description,
			icon: (0, Q.jsx)(F, {
				name: `vcs.repository`,
				"aria-hidden": `true`
			}),
			meta: (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(V, {
				tone: e.status.tone,
				children: e.status.label
			}), (0, Q.jsx)(`span`, {
				className: `hidden sm:inline`,
				children: e.updated
			})] }),
			actions: (0, Q.jsx)(pe, {
				label: `Deploy ${e.name}`,
				size: `sm`,
				children: (0, Q.jsx)(F, {
					name: `ops.deploy`,
					"aria-hidden": `true`,
					className: `size-4`
				})
			}),
			selectLabel: `Select`
		})
	});
}
function Cu() {
	let e = d({ initialItems: xu.map(({ id: e, name: t }) => ({
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
	return (0, Q.jsx)(Ot, {
		"aria-label": `Release order`,
		items: e.items,
		dragAndDropHooks: t,
		className: `max-w-md`,
		children: (e) => (0, Q.jsx)(Wl, {
			id: e.id,
			title: e.name,
			truncate: !0
		})
	});
}
function wu() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-3`,
		children: [
			(0, Q.jsx)(Ot, {
				"aria-label": `Projects, empty`,
				items: [],
				emptyState: `No projects yet.`,
				children: (e) => (0, Q.jsx)(Wl, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Q.jsx)(Ot, {
				"aria-label": `Projects, loading`,
				items: xu,
				isLoading: !0,
				loadingLabel: `Loading projects`,
				children: (e) => (0, Q.jsx)(Wl, {
					id: e.id,
					title: e.name
				})
			}),
			(0, Q.jsx)(Ot, {
				"aria-label": `Projects, failed`,
				items: xu,
				error: `Could not load projects.`,
				children: (e) => (0, Q.jsx)(Wl, {
					id: e.id,
					title: e.name
				})
			})
		]
	});
}
var Tu = 1e4, Eu = Array.from({ length: Tu }, (e, t) => ({
	id: t,
	name: `src/modules/module-${String(t).padStart(5, `0`)}.ts`,
	size: `${(t * 37 % 900 + 12) / 10} KB`
}));
function Du() {
	return (0, Q.jsx)(Xl, {
		"aria-label": `Search results, ${Tu.toLocaleString(`en-GB`)} files`,
		items: Eu,
		selectionMode: `single`,
		className: `h-72 max-w-xl`,
		children: (e) => (0, Q.jsx)(Wl, {
			id: e.id,
			title: e.name,
			meta: e.size,
			icon: (0, Q.jsx)(F, {
				name: `file.source`,
				"aria-hidden": `true`
			}),
			truncate: !0
		})
	});
}
function Ou() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-6 md:grid-cols-2`,
		children: [(0, Q.jsxs)(kt, {
			"aria-label": `Repository files`,
			selectionMode: `single`,
			defaultSelectedKeys: [`button`],
			defaultExpandedKeys: [`src`, `actions`],
			className: `max-h-80`,
			children: [
				(0, Q.jsxs)($, {
					id: `src`,
					title: `src`,
					icon: (0, Q.jsx)(F, {
						name: `folder.closed`,
						"aria-hidden": `true`
					}),
					expandedIcon: (0, Q.jsx)(F, {
						name: `folder.open`,
						"aria-hidden": `true`
					}),
					children: [(0, Q.jsxs)($, {
						id: `actions`,
						title: `actions`,
						icon: (0, Q.jsx)(F, {
							name: `folder.closed`,
							"aria-hidden": `true`
						}),
						expandedIcon: (0, Q.jsx)(F, {
							name: `folder.open`,
							"aria-hidden": `true`
						}),
						children: [(0, Q.jsx)($, {
							id: `button`,
							title: `Button.tsx`,
							icon: (0, Q.jsx)(F, {
								name: `file.source`,
								"aria-hidden": `true`
							}),
							meta: (0, Q.jsx)(V, {
								tone: `warn`,
								children: `Modified`
							})
						}), (0, Q.jsx)($, {
							id: `icon-button`,
							title: `IconButton.tsx`,
							icon: (0, Q.jsx)(F, {
								name: `file.source`,
								"aria-hidden": `true`
							})
						})]
					}), (0, Q.jsx)($, {
						id: `data`,
						title: `data`,
						icon: (0, Q.jsx)(F, {
							name: `folder.closed`,
							"aria-hidden": `true`
						}),
						expandedIcon: (0, Q.jsx)(F, {
							name: `folder.open`,
							"aria-hidden": `true`
						}),
						children: (0, Q.jsx)($, {
							id: `table`,
							title: `Table.tsx`,
							icon: (0, Q.jsx)(F, {
								name: `file.source`,
								"aria-hidden": `true`
							}),
							meta: (0, Q.jsx)(V, {
								tone: `ok`,
								children: `Added`
							})
						})
					})]
				}),
				(0, Q.jsx)($, {
					id: `readme`,
					title: `README.md`,
					icon: (0, Q.jsx)(F, {
						name: `file.document`,
						"aria-hidden": `true`
					})
				}),
				(0, Q.jsx)($, {
					id: `long`,
					title: `a-file-with-a-very-long-name-that-is-cut-to-one-line.config.ts`,
					icon: (0, Q.jsx)(F, {
						name: `file.source`,
						"aria-hidden": `true`
					})
				})
			]
		}), (0, Q.jsxs)(kt, {
			"aria-label": `Site sections`,
			selectionMode: `multiple`,
			defaultExpandedKeys: [`guides`],
			children: [(0, Q.jsxs)($, {
				id: `guides`,
				title: `Guides`,
				selectLabel: `Select`,
				actions: (0, Q.jsx)(B, {
					variant: `ghost`,
					size: `sm`,
					"aria-label": `Edit Guides`,
					children: `Edit`
				}),
				children: [(0, Q.jsx)($, {
					id: `start`,
					title: `Getting started`,
					selectLabel: `Select`,
					actions: (0, Q.jsx)(B, {
						variant: `ghost`,
						size: `sm`,
						"aria-label": `Edit Getting started`,
						children: `Edit`
					})
				}), (0, Q.jsx)($, {
					id: `deploy`,
					title: `Deploying`,
					selectLabel: `Select`,
					meta: (0, Q.jsx)(V, {
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
function ku() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-8 md:grid-cols-2`,
		children: [(0, Q.jsxs)(Gl, {
			"aria-label": `Deploy history`,
			className: `max-w-md`,
			children: [
				(0, Q.jsx)(Jl, {
					title: `Deployed to production`,
					tone: `ok`,
					toneLabel: `Succeeded`,
					time: `5 min ago`,
					dateTime: `2026-11-08T14:05:00Z`,
					actor: `Ada Lovelace`
				}),
				(0, Q.jsx)(Jl, {
					title: `Health check slow`,
					tone: `warn`,
					toneLabel: `Warning`,
					time: `12 min ago`,
					dateTime: `2026-11-08T13:58:00Z`,
					actor: `Monitor`,
					children: `Response time reached 1.8 s for two minutes.`
				}),
				(0, Q.jsx)(Jl, {
					title: `Build failed`,
					tone: `danger`,
					toneLabel: `Failed`,
					time: `1 h ago`,
					dateTime: `2026-11-08T13:04:00Z`,
					actor: `Grace Hopper`,
					actions: (0, Q.jsx)(B, {
						variant: `outline`,
						size: `sm`,
						children: `View log`
					}),
					children: `Type error in src/data/Table.tsx, line 42.`
				}),
				(0, Q.jsx)(Jl, {
					title: `Branch created`,
					tone: `info`,
					toneLabel: `Info`,
					time: `Yesterday`,
					dateTime: `2026-11-07`,
					actor: `Alan Turing`
				}),
				(0, Q.jsx)(Jl, {
					title: `Project started`,
					time: `1 November`,
					dateTime: `2026-11-01`
				})
			]
		}), (0, Q.jsx)(Gl, {
			"aria-label": `Empty history`,
			emptyState: `Nothing has happened here yet.`
		})]
	});
}
function Au() {
	return (0, Q.jsxs)(`div`, {
		className: `grid gap-8 lg:grid-cols-2`,
		children: [(0, Q.jsx)(Hl, {
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
					value: (0, Q.jsx)(V, {
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
		}), (0, Q.jsx)(Hl, {
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
var ju = {
	title: `Data`,
	status: `stable`,
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
			render: () => (0, Q.jsx)(au, {})
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
			render: () => (0, Q.jsx)(yu, {})
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
			render: () => (0, Q.jsx)(su, {})
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
			render: () => (0, Q.jsx)(bu, {})
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
					(0, Q.jsx)(bt, { children: `Unsorted` }),
					(0, Q.jsx)(bt, {
						direction: `ascending`,
						children: `Ascending`
					}),
					(0, Q.jsx)(bt, {
						direction: `descending`,
						children: `Descending`
					}),
					(0, Q.jsx)(bt, {
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
			render: () => (0, Q.jsx)(Su, {})
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
			render: () => (0, Q.jsx)(Cu, {})
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
			render: () => (0, Q.jsx)(wu, {})
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
			render: () => (0, Q.jsx)(Du, {})
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
			render: () => (0, Q.jsx)(Ou, {})
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
			render: () => (0, Q.jsx)(ku, {})
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
			render: () => (0, Q.jsx)(Au, {})
		}
	]
};
export { Zl as t };
