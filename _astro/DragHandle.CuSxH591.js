import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { r as t, t as n } from "./createLucideIcon.npgQlVHx.js";
import { t as r } from "./grip-vertical.C2vK4xYQ.js";
import { n as i } from "./react-dom.B9zIfLd2.js";
import { n as a, t as o } from "./jsx-runtime.yrTYNGQT.js";
import { r as s } from "./Button.DRxd_7vr.js";
var c = {
	name: `grip-horizontal`,
	size: 24,
	node: [
		[`circle`, {
			cx: `12`,
			cy: `9`,
			r: `1`,
			key: `124mty`
		}],
		[`circle`, {
			cx: `19`,
			cy: `9`,
			r: `1`,
			key: `1ruzo2`
		}],
		[`circle`, {
			cx: `5`,
			cy: `9`,
			r: `1`,
			key: `1a8b28`
		}],
		[`circle`, {
			cx: `12`,
			cy: `15`,
			r: `1`,
			key: `1e56xg`
		}],
		[`circle`, {
			cx: `19`,
			cy: `15`,
			r: `1`,
			key: `1a92ep`
		}],
		[`circle`, {
			cx: `5`,
			cy: `15`,
			r: `1`,
			key: `5r1jwy`
		}]
	]
};
c.node;
var l = n(c), u = e(i(), 1), d = o(), f = (0, u.forwardRef)(function({ label: e, orientation: n = `vertical`, className: i, ...o }, c) {
	let u = n === `vertical` ? r : l;
	return (0, d.jsx)(t, {
		...o,
		ref: c,
		slot: `drag`,
		"aria-label": e,
		className: a(`inline-flex size-6 min-h-6 min-w-6 shrink-0 cursor-grab touch-none items-center justify-center rounded-md border border-transparent text-muted transition-colors duration-(--sk-duration-fast) data-disabled:cursor-not-allowed data-disabled:opacity-50 data-hovered:bg-hover data-hovered:text-fg data-pressed:cursor-grabbing data-pressed:bg-selected forced-colors:data-disabled:text-[GrayText]`, s, i),
		children: (0, d.jsx)(u, {
			"aria-hidden": !0,
			className: `size-4`
		})
	});
});
export { f as t };
