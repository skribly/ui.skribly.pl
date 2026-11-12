import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
var i = e(t(), 1), a = r();
function o(e) {
	let t = document.getElementById(e);
	if (!t) return !1;
	t.tabIndex < 0 && !t.hasAttribute(`tabindex`) && t.setAttribute(`tabindex`, `-1`), t.focus({ preventScroll: !0 });
	let n = document.documentElement.classList.contains(`a11y-reduce-motion`) || window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
	return t.scrollIntoView?.({
		block: `start`,
		behavior: n ? `auto` : `smooth`
	}), !0;
}
function s({ targetId: e, children: t, className: r, onClick: s, ...c }) {
	let l = (0, i.useCallback)((t) => {
		s?.(t), !t.defaultPrevented && o(e) && t.preventDefault();
	}, [s, e]);
	return (0, a.jsx)(`a`, {
		...c,
		href: `#${e}`,
		onClick: l,
		className: n(`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-(--sk-z-tour) focus:inline-flex focus:min-h-control-lg focus:items-center focus:rounded-md focus:border-2 focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-body focus:font-semibold focus:text-fg focus:no-underline focus:shadow-lg`, r),
		children: t
	});
}
export { s as t };
