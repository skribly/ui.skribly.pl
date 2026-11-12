import { n as e, t } from "./jsx-runtime.yrTYNGQT.js";
import { n } from "./marks.C2cuaS5v.js";
var r = t(), i = {
	default: {
		ink: `text-fg`,
		accent: null,
		cut: `var(--sk-bg)`
	},
	nav: {
		ink: `text-nav-fg`,
		accent: `var(--sk-nav-accent)`,
		cut: `var(--sk-nav)`
	}
};
function a({ kind: t = `mark`, size: a = 32, label: o, tone: s = `default`, className: c }) {
	let l = n[t === `mark` ? `skribly` : t], u = l.glyph, d = i[s], f = d.accent ?? `var(--sk-${l.colour})`, p = `${a / 16}rem`;
	return (0, r.jsxs)(`svg`, {
		viewBox: `0 0 64 64`,
		width: p,
		height: p,
		focusable: `false`,
		className: e(`shrink-0`, d.ink, c),
		...o ? {
			role: `img`,
			"aria-label": o
		} : { "aria-hidden": !0 },
		children: [
			(0, r.jsx)(`rect`, {
				x: `13`,
				y: `13`,
				width: `20`,
				height: `20`,
				rx: `2.5`,
				fill: f
			}),
			(0, r.jsx)(`rect`, {
				x: `37`,
				y: `13`,
				width: `14`,
				height: `20`,
				rx: `2`,
				fill: `currentColor`
			}),
			u && (0, r.jsx)(`path`, {
				d: u,
				fill: `none`,
				stroke: d.cut,
				strokeWidth: `2.4`,
				strokeLinecap: `round`,
				strokeLinejoin: `round`
			}),
			(0, r.jsx)(`rect`, {
				x: `13`,
				y: `37`,
				width: `38`,
				height: `7.5`,
				rx: `2`,
				fill: `currentColor`
			}),
			(0, r.jsx)(`rect`, {
				x: `13`,
				y: `48`,
				width: `19`,
				height: `6`,
				rx: `2`,
				fill: `currentColor`
			}),
			(0, r.jsx)(`circle`, {
				cx: `38.5`,
				cy: `51`,
				r: `3`,
				fill: f
			}),
			(0, r.jsx)(`circle`, {
				cx: `47.5`,
				cy: `51`,
				r: `3`,
				fill: f,
				opacity: `0.55`
			})
		]
	});
}
export { a as t };
