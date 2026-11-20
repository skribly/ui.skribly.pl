import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { _ as t, d as n, g as r, y as i } from "./useOverflow.Dq483xd0.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { n as o, t as s } from "./ToggleButton.D_YySXWN.js";
import { t as c } from "./ChipCount.Bd_9T2X6.js";
var l = e(a(), 1), u = r(), d = t(`group inline-flex h-control-sm min-w-6 cursor-pointer items-center gap-1.5 rounded-md border border-border-strong bg-surface px-2.5 text-caption font-medium whitespace-nowrap text-fg transition-colors [&_svg]:size-3.5 [&_svg]:shrink-0`, `data-hovered:bg-hover data-pressed:bg-sunken data-disabled:cursor-not-allowed data-disabled:opacity-50`, `data-selected:border-accent data-selected:bg-accent-soft data-selected:text-accent-text data-selected:data-hovered:bg-accent-soft`, `forced-colors:data-selected:border-2 forced-colors:data-selected:border-[Highlight]`);
function f({ label: e, chips: r, selected: a, onChange: f, selectionMode: p = `multiple`, clearLabel: m, isDisabled: h = !1, className: g }) {
	let _ = (0, l.useCallback)((e) => f(e === `all` ? r.map((e) => e.id) : [...e]), [r, f]), v = (0, l.useRef)(null), y = (0, l.useRef)(!1), b = (0, l.useCallback)(() => {
		y.current = !0, f([]);
	}, [f]);
	(0, l.useEffect)(() => {
		!y.current || a.length > 0 || (y.current = !1, v.current?.querySelector(`button:not([disabled])`)?.focus());
	}, [a]);
	let x = (0, l.useMemo)(() => new Set(a), [a]);
	return (0, u.jsxs)(`div`, {
		className: t(`flex min-w-0 flex-wrap items-center gap-2`, g),
		children: [(0, u.jsx)(o, {
			ref: v,
			"aria-label": e,
			selectionMode: p,
			...p === `single` ? { disallowEmptySelection: !0 } : {},
			selectedKeys: x,
			onSelectionChange: _,
			isDisabled: h,
			className: `flex min-w-0 flex-wrap gap-1.5`,
			children: r.map((e) => (0, u.jsxs)(s, {
				id: e.id,
				...e.ariaLabel === void 0 ? {} : { "aria-label": e.ariaLabel },
				...e.isDisabled ? { isDisabled: !0 } : {},
				className: d,
				children: [
					(0, u.jsx)(n, {
						name: `action.check`,
						"aria-hidden": `true`,
						className: `hidden group-data-selected:block`
					}),
					(0, u.jsx)(`span`, {
						"aria-hidden": `true`,
						className: `contents group-data-selected:hidden`,
						children: e.icon
					}),
					(0, u.jsx)(`span`, {
						className: `max-w-[14rem] truncate`,
						children: e.label
					}),
					e.count === void 0 ? null : ` `,
					e.count === void 0 ? null : (0, u.jsx)(c, {
						value: e.count,
						...e.countLabel === void 0 ? {} : { label: e.countLabel }
					})
				]
			}, e.id))
		}), m && p === `multiple` && a.length > 0 ? (0, u.jsxs)(i, {
			onPress: b,
			isDisabled: h,
			className: `inline-flex h-control-sm cursor-pointer items-center gap-1 rounded-md px-2 text-caption font-medium text-accent-text underline-offset-2 data-hovered:underline data-pressed:bg-sunken`,
			children: [(0, u.jsx)(n, {
				name: `action.close`,
				"aria-hidden": `true`,
				className: `size-3.5`
			}), m]
		}) : null]
	});
}
export { f as t };
