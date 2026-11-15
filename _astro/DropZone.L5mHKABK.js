import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, B as r, Gt as i, Jt as a, Sn as o, Yt as s, _t as c, bt as l, cn as u, ct as d, et as f, fn as p, gn as m, hn as h, on as g, sn as _, vn as v, xt as y } from "./doc.C_PtMNUB.js";
import { n as b } from "./SearchField.D0jMEgX3.js";
import { n as x } from "./Text.3KJW7jIs.js";
import { D as S, S as C, t as w } from "./useDrop.2oG49goR.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { n as E } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { t as D } from "./VisuallyHidden.BNHsLrt2.js";
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
	let { isDisabled: t } = e, n = (0, O.useRef)(!1), { focusProps: r } = c({ onFocusChange: (e) => {
		n.current = e;
	} }), i = y((t) => {
		n.current && e.getItems && t.preventDefault();
	}), a = y((t) => {
		n.current && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `copy` })), e.onCopy?.()));
	}), s = y((t) => {
		n.current && e.onCut && e.getItems && t.preventDefault();
	}), l = y((t) => {
		n.current && e.onCut && e.getItems && (t.preventDefault(), t.clipboardData && (S(t.clipboardData, e.getItems({ action: `cut` })), e.onCut()));
	}), u = y((t) => {
		n.current && e.onPaste && t.preventDefault();
	}), d = y((t) => {
		if (n.current && e.onPaste && (t.preventDefault(), t.clipboardData)) {
			let n = C(t.clipboardData);
			e.onPaste(n);
		}
	});
	return (0, O.useEffect)(() => {
		if (!t) return o(A(`beforecopy`, i), A(`copy`, a), A(`beforecut`, s), A(`cut`, l), A(`beforepaste`, u), A(`paste`, d));
	}, [t]), { clipboardProps: r };
}
function M(e) {
	return e && e.__esModule ? e.default : e;
}
var N = (0, O.createContext)(null), P = (0, O.forwardRef)(function(e, o) {
	let { isDisabled: c = !1 } = e;
	[e, o] = _(e, o, N);
	let y = h(o), S = (0, O.useRef)(null), { dropProps: C, dropButtonProps: T, isDropTarget: k } = w({
		...e,
		ref: S,
		hasDropButton: !0
	}), { buttonProps: A } = r(T || {}, S), { hoverProps: P, isHovered: F } = t(e), { focusProps: I, isFocused: L, isFocusVisible: R } = f(), z = E(M(b), `react-aria-components`), B = v(), V = e[`aria-label`] || z.format(`dropzoneLabel`), H = [B, e[`aria-labelledby`]].filter(Boolean).join(` `), U = l({
		"aria-label": V,
		"aria-labelledby": H
	}), { clipboardProps: W } = j({
		isDisabled: c,
		onPaste: (t) => e.onDrop?.({
			type: `drop`,
			items: t,
			x: 0,
			y: 0,
			dropOperation: `copy`
		})
	}), G = u({
		...e,
		values: {
			isHovered: F,
			isFocused: L,
			isFocusVisible: R,
			isDropTarget: k,
			isDisabled: c
		},
		defaultClassName: `react-aria-DropZone`
	}), K = d(e, { global: !0 });
	return delete K.id, O.createElement(g, { values: [[x, {
		id: B,
		slot: `label`
	}]] }, O.createElement(p.div, {
		...m(K, G, C, P),
		slot: e.slot || void 0,
		ref: y,
		onClick: (e) => {
			let t = n(e);
			for (; t && s(y.current, t) && !i(t);) {
				if (t === y.current && S.current) {
					a(S.current);
					break;
				}
				t = t.parentElement;
			}
		},
		"data-hovered": F || void 0,
		"data-focused": L || void 0,
		"data-focus-visible": R || void 0,
		"data-drop-target": k || void 0,
		"data-disabled": c || void 0
	}, O.createElement(D, null, O.createElement(`button`, {
		...m(A, I, W, U),
		ref: S
	})), G.children));
});
export { P as t };
