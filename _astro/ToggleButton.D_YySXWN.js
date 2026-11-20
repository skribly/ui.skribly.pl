import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, H as n, Ht as r, Kt as i, N as a, Nt as o, P as s, Vt as c, Xt as l, b as u, jt as d, kt as f, nn as p, tn as m } from "./useOverflow.Dq483xd0.js";
import { c as h, i as g, s as _ } from "./FocusScope.aBBixRPA.js";
import { n as v } from "./react-dom.B9zIfLd2.js";
import { t as y } from "./useControlledState.DijOhE0s.js";
var b = e(v(), 1);
function x(e = {}) {
	let { isReadOnly: t } = e, [n, r] = y(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = (0, b.useState)(n);
	function a(e) {
		t || r(e);
	}
	function o() {
		t || r(!n);
	}
	return {
		isSelected: n,
		defaultSelected: e.defaultSelected ?? i,
		setSelected: a,
		toggle: o
	};
}
function S(e, t, n) {
	let { isSelected: r } = t, { isPressed: i, buttonProps: a } = u({
		...e,
		onPress: p(t.toggle, e.onPress)
	}, n);
	return {
		isPressed: i,
		isSelected: r,
		isDisabled: e.isDisabled || !1,
		buttonProps: l(a, { "aria-pressed": r })
	};
}
function C(e, r) {
	let { "aria-label": i, "aria-labelledby": a, orientation: s = `horizontal` } = e, [c, l] = (0, b.useState)(!1);
	m(() => {
		l(!!(r.current && r.current.parentElement?.closest(`[role="toolbar"]`)));
	});
	let { direction: u } = t(), p = u === `rtl` && s === `horizontal`, h = g(r), _ = (e) => {
		if (f(e.currentTarget, o(e))) {
			if (s === `horizontal` && e.key === `ArrowRight` || s === `vertical` && e.key === `ArrowDown`) p ? h.focusPrevious() : h.focusNext();
			else if (s === `horizontal` && e.key === `ArrowLeft` || s === `vertical` && e.key === `ArrowUp`) p ? h.focusNext() : h.focusPrevious();
			else if (e.key === `Tab`) {
				v.current = d(), e.shiftKey ? h.focusFirst() : h.focusLast();
				return;
			} else return;
			e.stopPropagation(), e.preventDefault();
		}
	}, v = (0, b.useRef)(null), y = (e) => {
		!f(e.currentTarget, e.relatedTarget) && !v.current && (v.current = o(e));
	}, x = (e) => {
		v.current && !f(e.currentTarget, e.relatedTarget) && f(r.current, o(e)) && (v.current?.focus(), v.current = null);
	};
	return { toolbarProps: {
		...n(e, { labelable: !0 }),
		role: c ? `group` : `toolbar`,
		"aria-orientation": s,
		"aria-label": i,
		"aria-labelledby": i == null ? a : void 0,
		onKeyDownCapture: c ? void 0 : _,
		onFocusCapture: c ? void 0 : x,
		onBlurCapture: c ? void 0 : y
	} };
}
function w(e, t, n) {
	let { isDisabled: r } = e, { toolbarProps: i } = C(e, n);
	return { groupProps: {
		...i,
		role: t.selectionMode === `single` ? `radiogroup` : i.role,
		"aria-disabled": r
	} };
}
function T(e, t, n) {
	let r = {
		isSelected: t.selectedKeys.has(e.id),
		defaultSelected: !1,
		setSelected(n) {
			t.setSelected(e.id, n);
		},
		toggle() {
			t.toggleKey(e.id);
		}
	}, { isPressed: i, isSelected: a, isDisabled: o, buttonProps: s } = S({
		...e,
		id: void 0,
		isDisabled: e.isDisabled || t.isDisabled
	}, r, n);
	return t.selectionMode === `single` && (s.role = `radio`, s[`aria-checked`] = r.isSelected, delete s[`aria-pressed`]), {
		isPressed: i,
		isSelected: a,
		isDisabled: o,
		buttonProps: s
	};
}
function E(e) {
	let { selectionMode: t = `single`, disallowEmptySelection: n, isDisabled: r = !1 } = e, [i, a] = y((0, b.useMemo)(() => e.selectedKeys ? new Set(e.selectedKeys) : void 0, [e.selectedKeys]), (0, b.useMemo)(() => e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set(), [e.defaultSelectedKeys]), e.onSelectionChange);
	return {
		selectionMode: t,
		isDisabled: r,
		selectedKeys: i,
		setSelectedKeys: a,
		toggleKey(e) {
			let r;
			t === `multiple` ? (r = new Set(i), r.has(e) && (!n || r.size > 1) ? r.delete(e) : r.add(e)) : r = new Set(i.has(e) && !n ? [] : [e]), a(r);
		},
		setSelected(e, t) {
			t !== i.has(e) && this.toggleKey(e);
		}
	};
}
var D = (0, b.createContext)({}), O = (0, b.createContext)(null), k = (0, b.forwardRef)(function(e, t) {
	[e, t] = c(e, t, D);
	let a = E(e), { groupProps: o } = w(e, a, t), s = r({
		...e,
		values: {
			orientation: e.orientation || `horizontal`,
			isDisabled: a.isDisabled,
			state: a
		},
		defaultClassName: `react-aria-ToggleButtonGroup`
	}), u = n(e, { global: !0 });
	return b.createElement(i.div, {
		...l(u, s, o),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`,
		"data-disabled": e.isDisabled || void 0
	}, b.createElement(O.Provider, { value: a }, b.createElement(h, null, s.children)));
}), A = (0, b.createContext)({}), j = (0, b.forwardRef)(function(e, t) {
	[e, t] = c(e, t, A);
	let o = (0, b.useContext)(O), u = x(o && e.id != null ? {
		isSelected: o.selectedKeys.has(e.id),
		onChange(t) {
			o.setSelected(e.id, t);
		}
	} : e), { buttonProps: d, isPressed: f, isSelected: p, isDisabled: m } = o && e.id != null ? T({
		...e,
		id: e.id
	}, o, t) : S({
		...e,
		id: e.id == null ? void 0 : String(e.id)
	}, u, t), { focusProps: h, isFocused: g, isFocusVisible: v } = s(e), { hoverProps: y, isHovered: C } = a({
		...e,
		isDisabled: m
	}), w = r({
		...e,
		id: void 0,
		values: {
			isHovered: C,
			isPressed: f,
			isFocused: g,
			isSelected: u.isSelected,
			isFocusVisible: v,
			isDisabled: m,
			state: u
		},
		defaultClassName: `react-aria-ToggleButton`
	}), E = n(e, { global: !0 });
	return delete E.id, delete E.onClick, b.createElement(i.button, {
		...l(E, w, d, h, y),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": g || void 0,
		"data-disabled": m || void 0,
		"data-pressed": f || void 0,
		"data-selected": p || void 0,
		"data-hovered": C || void 0,
		"data-focus-visible": v || void 0
	}, b.createElement(_.Provider, { value: { isSelected: p } }, w.children));
});
export { x as i, k as n, C as r, j as t };
