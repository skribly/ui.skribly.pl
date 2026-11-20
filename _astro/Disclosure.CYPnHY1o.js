import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $t as t, Bt as n, Gt as r, H as i, Ht as a, Kt as o, P as s, Vt as c, Xt as l, Zt as u, en as d, tn as f, v as p } from "./useOverflow.Dq483xd0.js";
import { t as m } from "./useEvent.BluGm8w8.js";
import { n as h, t as g } from "./react-dom.B9zIfLd2.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var v = e(g(), 1), y = e(h(), 1);
function b(e, n, r) {
	let { isDisabled: i } = e, a = t(), o = t(), s = d(), c = (0, y.useRef)(null), l = (0, y.useCallback)(() => {
		c.current = requestAnimationFrame(() => {
			r.current && r.current.setAttribute(`hidden`, `until-found`);
		}), (0, v.flushSync)(() => {
			n.toggle();
		});
	}, [r, n]);
	m(r, `beforematch`, l);
	let u = (0, y.useRef)(null);
	return f(() => {
		if (c.current && cancelAnimationFrame(c.current), r.current && !s) {
			let e = r.current;
			u.current == null || typeof e.getAnimations != `function` ? n.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`)) : (e.setAttribute(`hidden`, `until-found`), e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`)) : n.isExpanded !== u.current && (n.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => {
				e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`);
			}).catch(() => {})) : (e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), window.getComputedStyle(e).height, e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => e.setAttribute(`hidden`, `until-found`)).catch(() => {}))), u.current = n.isExpanded;
		}
	}, [
		i,
		r,
		n.isExpanded,
		s
	]), (0, y.useEffect)(() => () => {
		c.current && cancelAnimationFrame(c.current);
	}, []), {
		buttonProps: {
			id: a,
			"aria-expanded": n.isExpanded,
			"aria-controls": o,
			onPress: (e) => {
				!i && e.pointerType !== `keyboard` && n.toggle();
			},
			isDisabled: i,
			onPressStart(e) {
				e.pointerType === `keyboard` && !i && n.toggle();
			}
		},
		panelProps: {
			id: o,
			role: `group`,
			"aria-labelledby": a,
			"aria-hidden": !n.isExpanded,
			hidden: s ? !n.isExpanded : void 0
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
var S = (0, y.createContext)(null), C = (0, y.createContext)(null), w = (0, y.createContext)(null), T = (0, y.createContext)(null), E = (0, y.forwardRef)(function(e, u) {
	[e, u] = c(e, u, C);
	let d = (0, y.useContext)(S), { id: f, ...m } = e, h = t();
	f ||= h;
	let g = d ? d.expandedKeys.has(f) : e.isExpanded, _ = x({
		...e,
		isExpanded: g,
		onExpandedChange(t) {
			d && d.toggleKey(f), e.onExpandedChange?.(t);
		}
	}), v = y.useRef(null), E = e.isDisabled || d?.isDisabled || !1, { buttonProps: D, panelProps: O } = b({
		...e,
		isExpanded: g,
		isDisabled: E
	}, _, v), { isFocusVisible: k, focusProps: A } = s({ within: !0 }), j = a({
		...e,
		id: void 0,
		defaultClassName: `react-aria-Disclosure`,
		values: {
			isExpanded: _.isExpanded,
			isDisabled: E,
			isFocusVisibleWithin: k,
			state: _
		}
	}), M = i(m, { global: !0 });
	return y.createElement(n, { values: [
		[p, { slots: {
			[r]: {},
			trigger: D
		} }],
		[T, {
			panelProps: O,
			panelRef: v
		}],
		[w, _]
	] }, y.createElement(o.div, {
		...l(M, j, A),
		ref: u,
		"data-expanded": _.isExpanded || void 0,
		"data-disabled": E || void 0,
		"data-focus-visible-within": k || void 0
	}, j.children));
}), D = (0, y.forwardRef)(function(e, t) {
	let { role: r = `group` } = e, { panelProps: c, panelRef: d } = (0, y.useContext)(T), { isFocusVisible: f, focusProps: m } = s({ within: !0 }), h = a({
		...e,
		defaultClassName: `react-aria-DisclosurePanel`,
		values: { isFocusVisibleWithin: f }
	}), g = i(e, {
		global: !0,
		labelable: !0
	});
	return y.createElement(o.div, {
		...l(g, h, c, m),
		ref: u(t, d),
		role: r,
		"data-focus-visible-within": f || void 0
	}, y.createElement(n, { values: [[p, null]] }, e.children));
});
export { D as n, E as t };
