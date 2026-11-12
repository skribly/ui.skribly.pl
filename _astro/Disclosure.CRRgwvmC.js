import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, Ft as i, Lt as a, Pt as o, Rt as s, Tt as c, kt as l, n as u, v as d, wt as f, zt as p } from "./createLucideIcon.npgQlVHx.js";
import { l as m } from "./useFormValidation.CKcLNQoz.js";
import { n as h, t as g } from "./react-dom.B9zIfLd2.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var v = e(g(), 1), y = e(h(), 1);
function b(e, t, n) {
	let { isDisabled: r } = e, i = a(), o = a(), c = s(), l = (0, y.useRef)(null), u = (0, y.useCallback)(() => {
		l.current = requestAnimationFrame(() => {
			n.current && n.current.setAttribute(`hidden`, `until-found`);
		}), (0, v.flushSync)(() => {
			t.toggle();
		});
	}, [n, t]);
	m(n, `beforematch`, u);
	let d = (0, y.useRef)(null);
	return p(() => {
		if (l.current && cancelAnimationFrame(l.current), n.current && !c) {
			let e = n.current;
			d.current == null || typeof e.getAnimations != `function` ? t.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`)) : (e.setAttribute(`hidden`, `until-found`), e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`)) : t.isExpanded !== d.current && (t.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => {
				e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`);
			}).catch(() => {})) : (e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), window.getComputedStyle(e).height, e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => e.setAttribute(`hidden`, `until-found`)).catch(() => {}))), d.current = t.isExpanded;
		}
	}, [
		r,
		n,
		t.isExpanded,
		c
	]), (0, y.useEffect)(() => () => {
		l.current && cancelAnimationFrame(l.current);
	}, []), {
		buttonProps: {
			id: i,
			"aria-expanded": t.isExpanded,
			"aria-controls": o,
			onPress: (e) => {
				!r && e.pointerType !== `keyboard` && t.toggle();
			},
			isDisabled: r,
			onPressStart(e) {
				e.pointerType === `keyboard` && !r && t.toggle();
			}
		},
		panelProps: {
			id: o,
			role: `group`,
			"aria-labelledby": i,
			"aria-hidden": !t.isExpanded,
			hidden: c ? !t.isExpanded : void 0
		}
	};
}
function x(e) {
	let [t, n] = _(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange);
	return {
		isExpanded: t,
		setExpanded: n,
		expand: (0, y.useCallback)(() => {
			n(!0);
		}, [n]),
		collapse: (0, y.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, y.useCallback)(() => {
			n(!t);
		}, [n, t])
	};
}
var S = (0, y.createContext)(null), C = (0, y.createContext)(null), w = (0, y.createContext)(null), T = (0, y.createContext)(null), E = (0, y.forwardRef)(function(e, i) {
	[e, i] = c(e, i, C);
	let s = (0, y.useContext)(S), { id: p, ...m } = e, h = a();
	p ||= h;
	let g = s ? s.expandedKeys.has(p) : e.isExpanded, _ = x({
		...e,
		isExpanded: g,
		onExpandedChange(t) {
			s && s.toggleKey(p), e.onExpandedChange?.(t);
		}
	}), v = y.useRef(null), E = e.isDisabled || s?.isDisabled || !1, { buttonProps: D, panelProps: O } = b({
		...e,
		isExpanded: g,
		isDisabled: E
	}, _, v), { isFocusVisible: k, focusProps: A } = d({ within: !0 }), j = r({
		...e,
		id: void 0,
		defaultClassName: `react-aria-Disclosure`,
		values: {
			isExpanded: _.isExpanded,
			isDisabled: E,
			isFocusVisibleWithin: k,
			state: _
		}
	}), M = n(m, { global: !0 });
	return y.createElement(f, { values: [
		[u, { slots: {
			[l]: {},
			trigger: D
		} }],
		[T, {
			panelProps: O,
			panelRef: v
		}],
		[w, _]
	] }, y.createElement(t.div, {
		...o(M, j, A),
		ref: i,
		"data-expanded": _.isExpanded || void 0,
		"data-disabled": E || void 0,
		"data-focus-visible-within": k || void 0
	}, j.children));
}), D = (0, y.forwardRef)(function(e, a) {
	let { role: s = `group` } = e, { panelProps: c, panelRef: l } = (0, y.useContext)(T), { isFocusVisible: p, focusProps: m } = d({ within: !0 }), h = r({
		...e,
		defaultClassName: `react-aria-DisclosurePanel`,
		values: { isFocusVisibleWithin: p }
	}), g = n(e, {
		global: !0,
		labelable: !0
	});
	return y.createElement(t.div, {
		...o(g, h, c, m),
		ref: i(a, l),
		role: s,
		"data-focus-visible-within": p || void 0
	}, y.createElement(f, { values: [[u, null]] }, e.children));
});
export { D as n, E as t };
