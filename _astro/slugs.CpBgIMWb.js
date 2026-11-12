import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Bt as r, E as i, Et as a, L as o, Pt as s, Tt as c, _ as l, _t as u, ht as d, i as f, pt as p, t as m, v as h, zt as g } from "./createLucideIcon.npgQlVHx.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
import { c as v, i as y, o as b, s as x } from "./FocusScope.Ba7RJw7M.js";
import { n as S, t as C } from "./jsx-runtime.yrTYNGQT.js";
var w = e(t(), 1);
function T(e = {}) {
	let { isReadOnly: t } = e, [n, r] = _(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = (0, w.useState)(n);
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
function E(e, t, n) {
	let { isSelected: i } = t, { isPressed: a, buttonProps: o } = f({
		...e,
		onPress: r(t.toggle, e.onPress)
	}, n);
	return {
		isPressed: a,
		isSelected: i,
		isDisabled: e.isDisabled || !1,
		buttonProps: s(o, { "aria-pressed": i })
	};
}
function D(e, t) {
	let { "aria-label": n, "aria-labelledby": r, orientation: a = `horizontal` } = e, [s, c] = (0, w.useState)(!1);
	g(() => {
		c(!!(t.current && t.current.parentElement?.closest(`[role="toolbar"]`)));
	});
	let { direction: l } = o(), f = l === `rtl` && a === `horizontal`, m = y(t), h = (e) => {
		if (p(e.currentTarget, u(e))) {
			if (a === `horizontal` && e.key === `ArrowRight` || a === `vertical` && e.key === `ArrowDown`) f ? m.focusPrevious() : m.focusNext();
			else if (a === `horizontal` && e.key === `ArrowLeft` || a === `vertical` && e.key === `ArrowUp`) f ? m.focusNext() : m.focusPrevious();
			else if (e.key === `Tab`) {
				_.current = d(), e.shiftKey ? m.focusFirst() : m.focusLast();
				return;
			} else return;
			e.stopPropagation(), e.preventDefault();
		}
	}, _ = (0, w.useRef)(null), v = (e) => {
		!p(e.currentTarget, e.relatedTarget) && !_.current && (_.current = u(e));
	}, b = (e) => {
		_.current && !p(e.currentTarget, e.relatedTarget) && p(t.current, u(e)) && (_.current?.focus(), _.current = null);
	};
	return { toolbarProps: {
		...i(e, { labelable: !0 }),
		role: s ? `group` : `toolbar`,
		"aria-orientation": a,
		"aria-label": n,
		"aria-labelledby": n == null ? r : void 0,
		onKeyDownCapture: s ? void 0 : h,
		onFocusCapture: s ? void 0 : b,
		onBlurCapture: s ? void 0 : v
	} };
}
function O(e, t, n) {
	let { isDisabled: r } = e, { toolbarProps: i } = D(e, n);
	return { groupProps: {
		...i,
		role: t.selectionMode === `single` ? `radiogroup` : i.role,
		"aria-disabled": r
	} };
}
function k(e, t, n) {
	let r = {
		isSelected: t.selectedKeys.has(e.id),
		defaultSelected: !1,
		setSelected(n) {
			t.setSelected(e.id, n);
		},
		toggle() {
			t.toggleKey(e.id);
		}
	}, { isPressed: i, isSelected: a, isDisabled: o, buttonProps: s } = E({
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
function A(e) {
	let { selectionMode: t = `single`, disallowEmptySelection: n, isDisabled: r = !1 } = e, [i, a] = _((0, w.useMemo)(() => e.selectedKeys ? new Set(e.selectedKeys) : void 0, [e.selectedKeys]), (0, w.useMemo)(() => e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set(), [e.defaultSelectedKeys]), e.onSelectionChange);
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
var j = (0, w.createContext)({}), M = (0, w.createContext)(null), N = (0, w.forwardRef)(function(e, t) {
	[e, t] = c(e, t, j);
	let r = A(e), { groupProps: o } = O(e, r, t), l = a({
		...e,
		values: {
			orientation: e.orientation || `horizontal`,
			isDisabled: r.isDisabled,
			state: r
		},
		defaultClassName: `react-aria-ToggleButtonGroup`
	}), u = i(e, { global: !0 });
	return w.createElement(n.div, {
		...s(u, l, o),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `horizontal`,
		"data-disabled": e.isDisabled || void 0
	}, w.createElement(M.Provider, { value: r }, w.createElement(v, null, l.children)));
}), P = (0, w.createContext)({}), F = (0, w.forwardRef)(function(e, t) {
	[e, t] = c(e, t, P);
	let r = (0, w.useContext)(M), o = T(r && e.id != null ? {
		isSelected: r.selectedKeys.has(e.id),
		onChange(t) {
			r.setSelected(e.id, t);
		}
	} : e), { buttonProps: u, isPressed: d, isSelected: f, isDisabled: p } = r && e.id != null ? k({
		...e,
		id: e.id
	}, r, t) : E({
		...e,
		id: e.id == null ? void 0 : String(e.id)
	}, o, t), { focusProps: m, isFocused: g, isFocusVisible: _ } = h(e), { hoverProps: v, isHovered: y } = l({
		...e,
		isDisabled: p
	}), b = a({
		...e,
		id: void 0,
		values: {
			isHovered: y,
			isPressed: d,
			isFocused: g,
			isSelected: o.isSelected,
			isFocusVisible: _,
			isDisabled: p,
			state: o
		},
		defaultClassName: `react-aria-ToggleButton`
	}), S = i(e, { global: !0 });
	return delete S.id, delete S.onClick, w.createElement(n.button, {
		...s(S, b, u, m, v),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": g || void 0,
		"data-disabled": p || void 0,
		"data-pressed": d || void 0,
		"data-selected": f || void 0,
		"data-hovered": y || void 0,
		"data-focus-visible": _ || void 0
	}, w.createElement(x.Provider, { value: { isSelected: f } }, b.children));
}), I = {
	name: `columns-3`,
	size: 24,
	node: [
		[`rect`, {
			width: `18`,
			height: `18`,
			x: `3`,
			y: `3`,
			rx: `2`,
			key: `afitv7`
		}],
		[`path`, {
			d: `M9 3v18`,
			key: `fh3hqa`
		}],
		[`path`, {
			d: `M15 3v18`,
			key: `14nvp0`
		}]
	],
	aliases: [`panels-left-right`]
};
I.node;
var L = m(I), R = {
	name: `contrast`,
	size: 24,
	node: [[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		key: `1mglay`
	}], [`path`, {
		d: `M12 18a6 6 0 0 0 0-12v12z`,
		key: `j4l70d`
	}]]
};
R.node;
var z = m(R), B = {
	name: `moon`,
	size: 24,
	node: [[`path`, {
		d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
		key: `kfwtm`
	}]]
};
B.node;
var V = m(B), H = {
	name: `sun`,
	size: 24,
	node: [
		[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`,
			key: `4exip2`
		}],
		[`path`, {
			d: `M12 2v2`,
			key: `tus03m`
		}],
		[`path`, {
			d: `M12 20v2`,
			key: `1lh1kg`
		}],
		[`path`, {
			d: `m4.93 4.93 1.41 1.41`,
			key: `149t6j`
		}],
		[`path`, {
			d: `m17.66 17.66 1.41 1.41`,
			key: `ptbguv`
		}],
		[`path`, {
			d: `M2 12h2`,
			key: `1t8f8n`
		}],
		[`path`, {
			d: `M20 12h2`,
			key: `1q8mjw`
		}],
		[`path`, {
			d: `m6.34 17.66-1.41 1.41`,
			key: `1m8zz5`
		}],
		[`path`, {
			d: `m19.07 4.93-1.41 1.41`,
			key: `1shlcs`
		}]
	]
};
H.node;
var U = m(H), W = C(), G = {
	sm: `h-control-sm px-2 text-caption`,
	md: `h-control-md px-3 text-body`
};
function K({ label: e, options: t, value: n, onChange: r, size: i = `md`, isDisabled: a = !1, className: o }) {
	let s = (0, w.useMemo)(() => [n], [n]), c = (0, w.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && r(String(t));
	}, [r]);
	return (0, W.jsx)(N, {
		"aria-label": e,
		selectionMode: `single`,
		disallowEmptySelection: !0,
		selectedKeys: s,
		onSelectionChange: c,
		isDisabled: a,
		className: S(`inline-flex max-w-full flex-wrap gap-0.5 rounded-lg border border-border bg-sunken p-0.5 data-disabled:opacity-50`, o),
		children: t.map((e) => (0, W.jsxs)(F, {
			id: e.value,
			...e.ariaLabel === void 0 ? {} : { "aria-label": e.ariaLabel },
			...e.isDisabled ? { isDisabled: !0 } : {},
			className: S(`relative inline-flex min-w-6 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent font-medium text-muted transition-colors [&_svg]:size-4 [&_svg]:shrink-0`, `data-hovered:text-fg data-pressed:text-fg data-selected:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50`, `forced-colors:data-selected:border-[Highlight]`, G[i]),
			children: [(0, W.jsx)(b, { className: `absolute inset-0 rounded-md bg-surface shadow-sm transition-[translate,width] duration-(--sk-duration-base) ease-out motion-reduce:transition-none forced-colors:border-2 forced-colors:border-[Highlight]` }), (0, W.jsxs)(`span`, {
				className: `relative inline-flex items-center gap-1.5`,
				children: [e.icon, e.label]
			})]
		}, e.value))
	});
}
var q = (e) => e.toLowerCase().normalize(`NFKD`).replaceAll(/[^a-z0-9]+/g, `-`).replaceAll(/^-+|-+$/g, ``);
function J(e) {
	let t = new Set();
	return e.demos.map((e, n) => {
		let r = q(e.name) || `demo-${n + 1}`;
		return t.has(r) && (r = `${r}-${n + 1}`), t.add(r), r;
	});
}
export { z as a, N as c, V as i, D as l, K as n, L as o, U as r, F as s, J as t, T as u };
