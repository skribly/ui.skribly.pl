import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Jt as n, Q as r, Qt as i, Xt as a, bn as o, dn as s, hn as c, on as l, sn as u, st as d, vt as f, xn as p, z as m } from "./doc.DoLlUurT.js";
import { c as h, i as g, s as _ } from "./FocusScope.bOWhljI-.js";
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
	let { isSelected: r } = t, { isPressed: i, buttonProps: a } = m({
		...e,
		onPress: p(t.toggle, e.onPress)
	}, n);
	return {
		isPressed: i,
		isSelected: r,
		isDisabled: e.isDisabled || !1,
		buttonProps: c(a, { "aria-pressed": r })
	};
}
function C(e, t) {
	let { "aria-label": r, "aria-labelledby": s, orientation: c = `horizontal` } = e, [l, u] = (0, b.useState)(!1);
	o(() => {
		u(!!(t.current && t.current.parentElement?.closest(`[role="toolbar"]`)));
	});
	let { direction: p } = f(), m = p === `rtl` && c === `horizontal`, h = g(t), _ = (e) => {
		if (n(e.currentTarget, i(e))) {
			if (c === `horizontal` && e.key === `ArrowRight` || c === `vertical` && e.key === `ArrowDown`) m ? h.focusPrevious() : h.focusNext();
			else if (c === `horizontal` && e.key === `ArrowLeft` || c === `vertical` && e.key === `ArrowUp`) m ? h.focusNext() : h.focusPrevious();
			else if (e.key === `Tab`) {
				v.current = a(), e.shiftKey ? h.focusFirst() : h.focusLast();
				return;
			} else return;
			e.stopPropagation(), e.preventDefault();
		}
	}, v = (0, b.useRef)(null), y = (e) => {
		!n(e.currentTarget, e.relatedTarget) && !v.current && (v.current = i(e));
	}, x = (e) => {
		v.current && !n(e.currentTarget, e.relatedTarget) && n(t.current, i(e)) && (v.current?.focus(), v.current = null);
	};
	return { toolbarProps: {
		...d(e, { labelable: !0 }),
		role: l ? `group` : `toolbar`,
		"aria-orientation": c,
		"aria-label": r,
		"aria-labelledby": r == null ? s : void 0,
		onKeyDownCapture: l ? void 0 : _,
		onFocusCapture: l ? void 0 : x,
		onBlurCapture: l ? void 0 : y
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
	[e, t] = l(e, t, D);
	let n = E(e), { groupProps: r } = w(e, n, t), i = u({
		...e,
		values: {
			orientation: e.orientation || `horizontal`,
			isDisabled: n.isDisabled,
			state: n
		},
		defaultClassName: `react-aria-ToggleButtonGroup`
	}), a = d(e, { global: !0 });
	return b.createElement(s.div, {
		...c(a, i, r),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`,
		"data-disabled": e.isDisabled || void 0
	}, b.createElement(O.Provider, { value: n }, b.createElement(h, null, i.children)));
}), A = (0, b.createContext)({}), j = (0, b.forwardRef)(function(e, n) {
	[e, n] = l(e, n, A);
	let i = (0, b.useContext)(O), a = x(i && e.id != null ? {
		isSelected: i.selectedKeys.has(e.id),
		onChange(t) {
			i.setSelected(e.id, t);
		}
	} : e), { buttonProps: o, isPressed: f, isSelected: p, isDisabled: m } = i && e.id != null ? T({
		...e,
		id: e.id
	}, i, n) : S({
		...e,
		id: e.id == null ? void 0 : String(e.id)
	}, a, n), { focusProps: h, isFocused: g, isFocusVisible: v } = t(e), { hoverProps: y, isHovered: C } = r({
		...e,
		isDisabled: m
	}), w = u({
		...e,
		id: void 0,
		values: {
			isHovered: C,
			isPressed: f,
			isFocused: g,
			isSelected: a.isSelected,
			isFocusVisible: v,
			isDisabled: m,
			state: a
		},
		defaultClassName: `react-aria-ToggleButton`
	}), E = d(e, { global: !0 });
	return delete E.id, delete E.onClick, b.createElement(s.button, {
		...c(E, w, o, h, y),
		ref: n,
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
