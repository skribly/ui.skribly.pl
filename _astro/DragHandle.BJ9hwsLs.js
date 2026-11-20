import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { _ as t, f as n, g as r, y as i } from "./useOverflow.Dq483xd0.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { r as o } from "./Button.reJVLFTj.js";
var s = e(a(), 1), c = r(), l = n(`action.drag`), u = n(`action.drag-horizontal`), d = (0, s.forwardRef)(function({ label: e, orientation: n = `vertical`, className: r, ...a }, s) {
	let d = n === `vertical` ? l : u;
	return (0, c.jsx)(i, {
		...a,
		ref: s,
		slot: `drag`,
		"aria-label": e,
		className: t(`inline-flex size-6 min-h-6 min-w-6 shrink-0 cursor-grab touch-none items-center justify-center rounded-md border border-transparent text-muted transition-colors duration-(--sk-duration-fast) data-disabled:cursor-not-allowed data-disabled:opacity-50 data-hovered:bg-hover data-hovered:text-fg data-pressed:cursor-grabbing data-pressed:bg-selected forced-colors:data-disabled:text-[GrayText]`, o, r),
		children: (0, c.jsx)(d, {
			"aria-hidden": !0,
			className: `size-4`
		})
	});
});
export { d as t };
