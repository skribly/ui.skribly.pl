import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { t as n } from "./IconButton.Bqgi69Iz.js";
import { I as r, L as i, j as a } from "./doc.C_PtMNUB.js";
var o = e(t(), 1), s = r(), c = {
	2: `md:grid-cols-2`,
	3: `md:grid-cols-3`,
	4: `md:grid-cols-4`
}, l = `(min-width: 48rem)`;
function u(e) {
	if (typeof window > `u` || !window.matchMedia) return () => void 0;
	let t = window.matchMedia(l);
	return t.addEventListener(`change`, e), () => t.removeEventListener(`change`, e);
}
function d() {
	return typeof window < `u` && !!window.matchMedia && window.matchMedia(l).matches;
}
function f() {
	return !1;
}
function p() {
	return !document.documentElement.classList.contains(`a11y-reduce-motion`) && !window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
}
function m(e) {
	return getComputedStyle(e).direction === `rtl`;
}
function h(e) {
	let t = Array.from(e.children), n = m(e), r = e.getBoundingClientRect(), i = n ? r.right : r.left, a = 0, o = 1 / 0;
	t.forEach((e, t) => {
		let r = e.getBoundingClientRect(), s = Math.abs((n ? r.right : r.left) - i);
		s < o && (o = s, a = t);
	});
	let s = Math.abs(e.scrollLeft), c = s <= 1, l = s + e.clientWidth >= e.scrollWidth - 1;
	return l && !c && (a = t.length - 1), {
		index: a,
		atStart: c,
		atEnd: l
	};
}
function g({ children: e, label: t, previousLabel: r, nextLabel: l, hint: g, positionLabel: _, columns: v = 3, className: y }) {
	let b = (0, o.useId)(), x = (0, o.useRef)(null), S = (0, o.useSyncExternalStore)(u, d, f), [C, w] = (0, o.useState)({
		index: 0,
		atStart: !0,
		atEnd: !1
	}), [T, E] = (0, o.useState)(!1), D = o.Children.toArray(e), O = D.length, k = (0, o.useCallback)(() => {
		let e = x.current;
		if (!e) return;
		let t = h(e);
		w((e) => e.index === t.index && e.atStart === t.atStart && e.atEnd === t.atEnd ? e : t);
	}, []);
	(0, o.useEffect)(() => {
		let e = x.current;
		if (!e || typeof ResizeObserver > `u`) return;
		let t = new ResizeObserver(k);
		return t.observe(e), () => t.disconnect();
	}, [k]);
	let A = (0, o.useCallback)((e) => {
		let t = x.current;
		t && t.children[Math.max(0, Math.min(e, t.children.length - 1))]?.scrollIntoView({
			behavior: p() ? `smooth` : `auto`,
			block: `nearest`,
			inline: `start`
		});
	}, []);
	(0, o.useEffect)(() => {
		let e = x.current;
		if (!e || S) return;
		let t = (t) => {
			if (t.target !== e || t.altKey || t.ctrlKey || t.metaKey) return;
			let n = m(e) ? `ArrowLeft` : `ArrowRight`, r = n === `ArrowRight` ? `ArrowLeft` : `ArrowRight`;
			if (t.key === n) A(C.index + 1);
			else if (t.key === r) A(C.index - 1);
			else if (t.key === `Home`) A(0);
			else if (t.key === `End`) A(O - 1);
			else return;
			t.preventDefault();
		};
		return e.addEventListener(`keydown`, t), () => e.removeEventListener(`keydown`, t);
	}, [
		S,
		A,
		C.index,
		O
	]);
	let j = (0, o.useCallback)(() => {
		E(!0), k();
	}, [k]), M = (0, o.useCallback)(() => A(C.index - 1), [A, C.index]), N = (0, o.useCallback)(() => A(C.index + 1), [A, C.index]);
	return (0, s.jsxs)(`div`, {
		className: y,
		children: [(0, s.jsx)(`div`, {
			ref: x,
			id: b,
			role: S ? void 0 : `region`,
			"aria-label": S ? void 0 : t,
			tabIndex: S ? void 0 : 0,
			onScroll: j,
			className: i(`flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`, `md:grid md:snap-none md:overflow-visible`, c[v]),
			children: D.map((e) => (0, s.jsx)(`div`, {
				className: `flex min-w-0 shrink-0 basis-[85%] snap-start flex-col *:flex-1 max-md:max-w-[22rem] md:basis-auto md:shrink`,
				children: e
			}, (0, o.isValidElement)(e) ? e.key : String(e)))
		}), (0, s.jsxs)(`div`, {
			className: `mt-3 flex items-center gap-3 md:hidden`,
			children: [
				(0, s.jsx)(`p`, {
					"aria-hidden": !0,
					className: `text-caption text-muted tabular-nums`,
					children: _(Math.min(C.index + 1, O), O)
				}),
				g && !T ? (0, s.jsx)(`p`, {
					className: `min-w-0 flex-1 text-caption text-muted`,
					children: g
				}) : (0, s.jsx)(`span`, { className: `flex-1` }),
				(0, s.jsxs)(`div`, {
					className: `flex gap-2`,
					children: [(0, s.jsx)(n, {
						label: r,
						tooltip: !1,
						variant: `outline`,
						size: `lg`,
						"aria-controls": b,
						isDisabled: C.atStart,
						onPress: M,
						children: (0, s.jsx)(a, {
							name: `chevron.left`,
							"aria-hidden": !0,
							className: `rtl:rotate-180`
						})
					}), (0, s.jsx)(n, {
						label: l,
						tooltip: !1,
						variant: `outline`,
						size: `lg`,
						"aria-controls": b,
						isDisabled: C.atEnd,
						onPress: N,
						children: (0, s.jsx)(a, {
							name: `chevron.right`,
							"aria-hidden": !0,
							className: `rtl:rotate-180`
						})
					})]
				})
			]
		})]
	});
}
export { g as t };
