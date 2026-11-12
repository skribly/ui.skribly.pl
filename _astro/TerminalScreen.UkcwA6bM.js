import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
import { t as i } from "./scrollRegion.BDgfG0gw.js";
var a = e(t(), 1), o = r(), s = String.fromCodePoint(27), c = String.fromCodePoint(7), l = RegExp(`${s}\\[[0-?]*[ -/]*[@-~]|${s}\\][^${c}${s}]*(?:${c}|${s}\\\\)|${s}[@-Z\\\\-_]`, `g`);
function u({ text: e, label: t, title: r, rows: s = 16, showCursor: c = !1, className: u, ...d }) {
	let f = (0, a.useMemo)(() => {
		let t = (Array.isArray(e) ? e.join(`
`) : e).replaceAll(l, ``).replaceAll(`\r`, ``).split(`
`);
		for (; t.length > 1 && t.at(-1) === ``;) t.pop();
		return t.slice(-s);
	}, [e, s]), p = (0, a.useMemo)(() => ({ height: `calc(${s * 1.4}em + 1.5rem)` }), [s]);
	return (0, o.jsxs)(`div`, {
		...d,
		className: n(`min-w-0 overflow-hidden rounded-lg border border-border bg-nav text-nav-fg`, u),
		children: [r === void 0 ? null : (0, o.jsxs)(`div`, {
			className: `flex min-h-control-sm items-center gap-2 border-b border-nav-hover px-3 py-1 text-caption text-nav-muted`,
			children: [(0, o.jsxs)(`span`, {
				"aria-hidden": !0,
				className: `flex shrink-0 gap-1`,
				children: [
					(0, o.jsx)(`span`, { className: `size-2 rounded-full border border-nav-muted` }),
					(0, o.jsx)(`span`, { className: `size-2 rounded-full border border-nav-muted` }),
					(0, o.jsx)(`span`, { className: `size-2 rounded-full border border-nav-muted` })
				]
			}), (0, o.jsx)(`span`, {
				className: `min-w-0 flex-1 truncate font-medium`,
				children: r
			})]
		}), (0, o.jsxs)(`pre`, {
			...i(t),
			translate: `no`,
			style: p,
			className: `m-0 overflow-auto p-3 font-mono text-caption leading-[1.4] whitespace-pre text-nav-fg`,
			children: [f.join(`
`), c ? (0, o.jsx)(`span`, {
				"aria-hidden": !0,
				className: `ms-px inline-block h-[1.1em] w-[0.6em] translate-y-[0.15em] bg-nav-fg motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none`
			}) : null]
		})]
	});
}
export { u as t };
