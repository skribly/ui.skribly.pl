import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, B as r, Sn as i, Yt as a, Zt as o, cn as s, ct as c, et as l, fn as u, gn as d, sn as f, xn as p, yt as m } from "./doc.C_PtMNUB.js";
import { c as h, i as g, s as _ } from "./FocusScope.DSjTtRFm.js";
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
	let { isSelected: a } = t, { isPressed: o, buttonProps: s } = r({
		...e,
		onPress: i(t.toggle, e.onPress)
	}, n);
	return {
		isPressed: o,
		isSelected: a,
		isDisabled: e.isDisabled || !1,
		buttonProps: d(s, { "aria-pressed": a })
	};
}
function C(e, t) {
	let { "aria-label": r, "aria-labelledby": i, orientation: s = `horizontal` } = e, [l, u] = (0, b.useState)(!1);
	p(() => {
		u(!!(t.current && t.current.parentElement?.closest(`[role="toolbar"]`)));
	});
	let { direction: d } = m(), f = d === `rtl` && s === `horizontal`, h = g(t), _ = (e) => {
		if (a(e.currentTarget, n(e))) {
			if (s === `horizontal` && e.key === `ArrowRight` || s === `vertical` && e.key === `ArrowDown`) f ? h.focusPrevious() : h.focusNext();
			else if (s === `horizontal` && e.key === `ArrowLeft` || s === `vertical` && e.key === `ArrowUp`) f ? h.focusNext() : h.focusPrevious();
			else if (e.key === `Tab`) {
				v.current = o(), e.shiftKey ? h.focusFirst() : h.focusLast();
				return;
			} else return;
			e.stopPropagation(), e.preventDefault();
		}
	}, v = (0, b.useRef)(null), y = (e) => {
		!a(e.currentTarget, e.relatedTarget) && !v.current && (v.current = n(e));
	}, x = (e) => {
		v.current && !a(e.currentTarget, e.relatedTarget) && a(t.current, n(e)) && (v.current?.focus(), v.current = null);
	};
	return { toolbarProps: {
		...c(e, { labelable: !0 }),
		role: l ? `group` : `toolbar`,
		"aria-orientation": s,
		"aria-label": r,
		"aria-labelledby": r == null ? i : void 0,
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
	[e, t] = f(e, t, D);
	let n = E(e), { groupProps: r } = w(e, n, t), i = s({
		...e,
		values: {
			orientation: e.orientation || `horizontal`,
			isDisabled: n.isDisabled,
			state: n
		},
		defaultClassName: `react-aria-ToggleButtonGroup`
	}), a = c(e, { global: !0 });
	return b.createElement(u.div, {
		...d(a, i, r),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`,
		"data-disabled": e.isDisabled || void 0
	}, b.createElement(O.Provider, { value: n }, b.createElement(h, null, i.children)));
}), A = (0, b.createContext)({}), j = (0, b.forwardRef)(function(e, n) {
	[e, n] = f(e, n, A);
	let r = (0, b.useContext)(O), i = x(r && e.id != null ? {
		isSelected: r.selectedKeys.has(e.id),
		onChange(t) {
			r.setSelected(e.id, t);
		}
	} : e), { buttonProps: a, isPressed: o, isSelected: p, isDisabled: m } = r && e.id != null ? T({
		...e,
		id: e.id
	}, r, n) : S({
		...e,
		id: e.id == null ? void 0 : String(e.id)
	}, i, n), { focusProps: h, isFocused: g, isFocusVisible: v } = l(e), { hoverProps: y, isHovered: C } = t({
		...e,
		isDisabled: m
	}), w = s({
		...e,
		id: void 0,
		values: {
			isHovered: C,
			isPressed: o,
			isFocused: g,
			isSelected: i.isSelected,
			isFocusVisible: v,
			isDisabled: m,
			state: i
		},
		defaultClassName: `react-aria-ToggleButton`
	}), E = c(e, { global: !0 });
	return delete E.id, delete E.onClick, b.createElement(u.button, {
		...d(E, w, a, h, y),
		ref: n,
		slot: e.slot || void 0,
		"data-focused": g || void 0,
		"data-disabled": m || void 0,
		"data-pressed": o || void 0,
		"data-selected": p || void 0,
		"data-hovered": C || void 0,
		"data-focus-visible": v || void 0
	}, b.createElement(_.Provider, { value: { isSelected: p } }, w.children));
});
export { x as i, k as n, C as r, j as t };
