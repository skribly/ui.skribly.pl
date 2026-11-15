import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { R as t, _n as n, bn as r, cn as i, ct as a, dn as o, et as s, fn as c, gn as l, on as u, sn as d, xn as f, yn as p } from "./doc.C_PtMNUB.js";
import { t as m } from "./useEvent.DZ6Jaavz.js";
import { n as h, t as g } from "./react-dom.B9zIfLd2.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var v = e(g(), 1), y = e(h(), 1);
function b(e, t, n) {
	let { isDisabled: i } = e, a = p(), o = p(), s = r(), c = (0, y.useRef)(null), l = (0, y.useCallback)(() => {
		c.current = requestAnimationFrame(() => {
			n.current && n.current.setAttribute(`hidden`, `until-found`);
		}), (0, v.flushSync)(() => {
			t.toggle();
		});
	}, [n, t]);
	m(n, `beforematch`, l);
	let u = (0, y.useRef)(null);
	return f(() => {
		if (c.current && cancelAnimationFrame(c.current), n.current && !s) {
			let e = n.current;
			u.current == null || typeof e.getAnimations != `function` ? t.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`)) : (e.setAttribute(`hidden`, `until-found`), e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`)) : t.isExpanded !== u.current && (t.isExpanded ? (e.removeAttribute(`hidden`), e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => {
				e.style.setProperty(`--disclosure-panel-width`, `auto`), e.style.setProperty(`--disclosure-panel-height`, `auto`);
			}).catch(() => {})) : (e.style.setProperty(`--disclosure-panel-width`, e.scrollWidth + `px`), e.style.setProperty(`--disclosure-panel-height`, e.scrollHeight + `px`), window.getComputedStyle(e).height, e.style.setProperty(`--disclosure-panel-width`, `0px`), e.style.setProperty(`--disclosure-panel-height`, `0px`), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => e.setAttribute(`hidden`, `until-found`)).catch(() => {}))), u.current = t.isExpanded;
		}
	}, [
		i,
		n,
		t.isExpanded,
		s
	]), (0, y.useEffect)(() => () => {
		c.current && cancelAnimationFrame(c.current);
	}, []), {
		buttonProps: {
			id: a,
			"aria-expanded": t.isExpanded,
			"aria-controls": o,
			onPress: (e) => {
				!i && e.pointerType !== `keyboard` && t.toggle();
			},
			isDisabled: i,
			onPressStart(e) {
				e.pointerType === `keyboard` && !i && t.toggle();
			}
		},
		panelProps: {
			id: o,
			role: `group`,
			"aria-labelledby": a,
			"aria-hidden": !t.isExpanded,
			hidden: s ? !t.isExpanded : void 0
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
var S = (0, y.createContext)(null), C = (0, y.createContext)(null), w = (0, y.createContext)(null), T = (0, y.createContext)(null), E = (0, y.forwardRef)(function(e, n) {
	[e, n] = d(e, n, C);
	let r = (0, y.useContext)(S), { id: f, ...m } = e, h = p();
	f ||= h;
	let g = r ? r.expandedKeys.has(f) : e.isExpanded, _ = x({
		...e,
		isExpanded: g,
		onExpandedChange(t) {
			r && r.toggleKey(f), e.onExpandedChange?.(t);
		}
	}), v = y.useRef(null), E = e.isDisabled || r?.isDisabled || !1, { buttonProps: D, panelProps: O } = b({
		...e,
		isExpanded: g,
		isDisabled: E
	}, _, v), { isFocusVisible: k, focusProps: A } = s({ within: !0 }), j = i({
		...e,
		id: void 0,
		defaultClassName: `react-aria-Disclosure`,
		values: {
			isExpanded: _.isExpanded,
			isDisabled: E,
			isFocusVisibleWithin: k,
			state: _
		}
	}), M = a(m, { global: !0 });
	return y.createElement(u, { values: [
		[t, { slots: {
			[o]: {},
			trigger: D
		} }],
		[T, {
			panelProps: O,
			panelRef: v
		}],
		[w, _]
	] }, y.createElement(c.div, {
		...l(M, j, A),
		ref: n,
		"data-expanded": _.isExpanded || void 0,
		"data-disabled": E || void 0,
		"data-focus-visible-within": k || void 0
	}, j.children));
}), D = (0, y.forwardRef)(function(e, r) {
	let { role: o = `group` } = e, { panelProps: d, panelRef: f } = (0, y.useContext)(T), { isFocusVisible: p, focusProps: m } = s({ within: !0 }), h = i({
		...e,
		defaultClassName: `react-aria-DisclosurePanel`,
		values: { isFocusVisibleWithin: p }
	}), g = a(e, {
		global: !0,
		labelable: !0
	});
	return y.createElement(c.div, {
		...l(g, h, d, m),
		ref: n(r, f),
		role: o,
		"data-focus-visible-within": p || void 0
	}, y.createElement(u, { values: [[t, null]] }, e.children));
});
export { D as n, E as t };
