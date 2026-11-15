import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { o as n } from "./FocusScope.bOWhljI-.js";
import { n as r, t as i } from "./ToggleButton.DdDl1WJr.js";
import { F as a, I as o } from "./doc.DoLlUurT.js";
var s = e(t(), 1), c = a(), l = {
	sm: `h-control-sm px-2 text-caption`,
	md: `h-control-md px-3 text-body`
};
function u({ label: e, options: t, value: a, onChange: u, size: d = `md`, isDisabled: f = !1, className: p }) {
	let m = (0, s.useMemo)(() => [a], [a]), h = (0, s.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && u(String(t));
	}, [u]);
	return (0, c.jsx)(r, {
		"aria-label": e,
		selectionMode: `single`,
		disallowEmptySelection: !0,
		selectedKeys: m,
		onSelectionChange: h,
		isDisabled: f,
		className: o(`inline-flex max-w-full flex-wrap gap-0.5 rounded-lg border border-border bg-sunken p-0.5 data-disabled:opacity-50`, p),
		children: t.map((e) => (0, c.jsxs)(i, {
			id: e.value,
			...e.ariaLabel === void 0 ? {} : { "aria-label": e.ariaLabel },
			...e.isDisabled ? { isDisabled: !0 } : {},
			className: o(`relative inline-flex min-w-6 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent font-medium text-muted transition-colors [&_svg]:size-4 [&_svg]:shrink-0`, `data-hovered:text-fg data-pressed:text-fg data-selected:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50`, `forced-colors:data-selected:border-[Highlight]`, l[d]),
			children: [(0, c.jsx)(n, { className: `absolute inset-0 rounded-md bg-surface shadow-sm transition-[translate,width] duration-(--sk-duration-base) ease-out motion-reduce:transition-none forced-colors:border-2 forced-colors:border-[Highlight]` }), (0, c.jsxs)(`span`, {
				className: `relative inline-flex items-center gap-1.5`,
				children: [e.icon, e.label]
			})]
		}, e.value))
	});
}
export { u as t };
