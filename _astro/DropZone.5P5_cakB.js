import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, H as n, Ht as r, Kt as i, N as a, Nt as o, Ot as s, P as c, Qt as l, Tt as u, Vt as d, Xt as f, Yt as p, Z as m, b as h, et as g, kt as _, nn as v, tt as y } from "./useOverflow.Dq483xd0.js";
import { n as b } from "./SearchField.B5AzRyeE.js";
import { n as x } from "./Text.DXbJB4jb.js";
import { D as S, S as C, t as w } from "./useDrop.BYe2KYLb.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { n as E } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { t as D } from "./VisuallyHidden.CPLGlJAY.js";
var O = e(T(), 1), k = new Map();
function A(e, t) {
	let n = k.get(e);
	if (!n) {
		let t = new Set(), r = (e) => {
			for (let n of t) n(e);
		};
		n = {
			listener: r,
			handlers: t
		}, k.set(e, n), document.addEventListener(e, r);
	}
	return n.handlers.add(t), () => {
		n.handlers.delete(t), n.handlers.size === 0 && (document.removeEventListener(e, n.listener), k.delete(e));
	};
}
function j(e) {
	let { isDisabled: t } = e, n = (0, O.useRef)(!1), { focusProps: r } = m({ onFocusChange: (e) => {
		n.current = e;
	} }), i = y((t) => {
		n.current && e.getItems && t.preventDefault();
	}), a = y((t) => {
		n.current && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `copy` })), e.onCopy?.()));
	}), o = y((t) => {
		n.current && e.onCut && e.getItems && t.preventDefault();
	}), s = y((t) => {
		n.current && e.onCut && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `cut` })), e.onCut()));
	}), c = y((t) => {
		n.current && e.onPaste && t.preventDefault();
	}), l = y((t) => {
		if (n.current && e.onPaste && (t.preventDefault(), t.clipboardData)) {
			let n = C(t.clipboardData);
			e.onPaste(n);
		}
	});
	return (0, O.useEffect)(() => {
		if (!t) return v(A(`beforecopy`, i), A(`copy`, a), A(`beforecut`, o), A(`cut`, s), A(`beforepaste`, c), A(`paste`, l));
	}, [t]), { clipboardProps: r };
}
function M(e) {
	return e && e.__esModule ? e.default : e;
}
var N = (0, O.createContext)(null), P = (0, O.forwardRef)(function(e, m) {
	let { isDisabled: v = !1 } = e;
	[e, m] = d(e, m, N);
	let y = p(m), S = (0, O.useRef)(null), { dropProps: C, dropButtonProps: T, isDropTarget: k } = w({
		...e,
		ref: S,
		hasDropButton: !0
	}), { buttonProps: A } = h(T || {}, S), { hoverProps: P, isHovered: F } = a(e), { focusProps: I, isFocused: L, isFocusVisible: R } = c(), z = E(M(b), `react-aria-components`), B = l(), V = e[`aria-label`] || z.format(`dropzoneLabel`), H = [B, e[`aria-labelledby`]].filter(Boolean).join(` `), U = g({
		"aria-label": V,
		"aria-labelledby": H
	}), { clipboardProps: W } = j({
		isDisabled: v,
		onPaste: (t) => e.onDrop?.({
			type: `drop`,
			items: t,
			x: 0,
			y: 0,
			dropOperation: `copy`
		})
	}), G = r({
		...e,
		values: {
			isHovered: F,
			isFocused: L,
			isFocusVisible: R,
			isDropTarget: k,
			isDisabled: v
		},
		defaultClassName: `react-aria-DropZone`
	}), K = n(e, { global: !0 });
	return delete K.id, O.createElement(t, { values: [[x, {
		id: B,
		slot: `label`
	}]] }, O.createElement(i.div, {
		...f(K, G, C, P),
		slot: e.slot || void 0,
		ref: y,
		onClick: (e) => {
			let t = o(e);
			for (; t && _(y.current, t) && !u(t);) {
				if (t === y.current && S.current) {
					s(S.current);
					break;
				}
				t = t.parentElement;
			}
		},
		"data-hovered": F || void 0,
		"data-focused": L || void 0,
		"data-focus-visible": R || void 0,
		"data-drop-target": k || void 0,
		"data-disabled": v || void 0
	}, O.createElement(D, null, O.createElement(`button`, {
		...f(A, I, W, U),
		ref: S
	})), G.children));
});
export { P as t };
