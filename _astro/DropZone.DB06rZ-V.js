import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Jt as n, Q as r, Qt as i, Wt as a, _n as o, an as s, bt as c, dn as l, gt as u, hn as d, mn as f, on as p, qt as m, sn as h, st as g, xn as _, yt as v, z as y } from "./doc.DoLlUurT.js";
import { n as b } from "./SearchField.WrO_lwho.js";
import { n as x } from "./Text.CWB1nGTv.js";
import { D as S, S as C, t as w } from "./useDrop.CMXl-9vr.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { n as E } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { t as D } from "./VisuallyHidden.DNi0NmtP.js";
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
	let { isDisabled: t } = e, n = (0, O.useRef)(!1), { focusProps: r } = u({ onFocusChange: (e) => {
		n.current = e;
	} }), i = c((t) => {
		n.current && e.getItems && t.preventDefault();
	}), a = c((t) => {
		n.current && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `copy` })), e.onCopy?.()));
	}), o = c((t) => {
		n.current && e.onCut && e.getItems && t.preventDefault();
	}), s = c((t) => {
		n.current && e.onCut && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `cut` })), e.onCut()));
	}), l = c((t) => {
		n.current && e.onPaste && t.preventDefault();
	}), d = c((t) => {
		if (n.current && e.onPaste && (t.preventDefault(), t.clipboardData)) {
			let n = C(t.clipboardData);
			e.onPaste(n);
		}
	});
	return (0, O.useEffect)(() => {
		if (!t) return _(A(`beforecopy`, i), A(`copy`, a), A(`beforecut`, o), A(`cut`, s), A(`beforepaste`, l), A(`paste`, d));
	}, [t]), { clipboardProps: r };
}
function M(e) {
	return e && e.__esModule ? e.default : e;
}
var N = (0, O.createContext)(null), P = (0, O.forwardRef)(function(e, c) {
	let { isDisabled: u = !1 } = e;
	[e, c] = p(e, c, N);
	let _ = f(c), S = (0, O.useRef)(null), { dropProps: C, dropButtonProps: T, isDropTarget: k } = w({
		...e,
		ref: S,
		hasDropButton: !0
	}), { buttonProps: A } = y(T || {}, S), { hoverProps: P, isHovered: F } = r(e), { focusProps: I, isFocused: L, isFocusVisible: R } = t(), z = E(M(b), `react-aria-components`), B = o(), V = e[`aria-label`] || z.format(`dropzoneLabel`), H = [B, e[`aria-labelledby`]].filter(Boolean).join(` `), U = v({
		"aria-label": V,
		"aria-labelledby": H
	}), { clipboardProps: W } = j({
		isDisabled: u,
		onPaste: (t) => e.onDrop?.({
			type: `drop`,
			items: t,
			x: 0,
			y: 0,
			dropOperation: `copy`
		})
	}), G = h({
		...e,
		values: {
			isHovered: F,
			isFocused: L,
			isFocusVisible: R,
			isDropTarget: k,
			isDisabled: u
		},
		defaultClassName: `react-aria-DropZone`
	}), K = g(e, { global: !0 });
	return delete K.id, O.createElement(s, { values: [[x, {
		id: B,
		slot: `label`
	}]] }, O.createElement(l.div, {
		...d(K, G, C, P),
		slot: e.slot || void 0,
		ref: _,
		onClick: (e) => {
			let t = i(e);
			for (; t && n(_.current, t) && !a(t);) {
				if (t === _.current && S.current) {
					m(S.current);
					break;
				}
				t = t.parentElement;
			}
		},
		"data-hovered": F || void 0,
		"data-focused": L || void 0,
		"data-focus-visible": R || void 0,
		"data-drop-target": k || void 0,
		"data-disabled": u || void 0
	}, O.createElement(D, null, O.createElement(`button`, {
		...d(A, I, W, U),
		ref: S
	})), G.children));
});
export { P as t };
