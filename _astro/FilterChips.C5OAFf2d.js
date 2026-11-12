import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { r as n, t as r } from "./createLucideIcon.npgQlVHx.js";
import { c as i, s as a } from "./slugs.CpBgIMWb.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { t as c } from "./check.CUpC8LgP.js";
import { t as l } from "./x.CmkLFRDJ.js";
var u = {
	name: `list`,
	size: 24,
	node: [
		[`path`, {
			d: `M3 5h.01`,
			key: `18ugdj`
		}],
		[`path`, {
			d: `M3 12h.01`,
			key: `nlz23k`
		}],
		[`path`, {
			d: `M3 19h.01`,
			key: `noohij`
		}],
		[`path`, {
			d: `M8 5h13`,
			key: `1pao27`
		}],
		[`path`, {
			d: `M8 12h13`,
			key: `1za7za`
		}],
		[`path`, {
			d: `M8 19h13`,
			key: `m83p4d`
		}]
	]
};
u.node;
var d = r(u), f = e(t(), 1), p = s(), m = {
	neutral: `bg-sunken text-fg group-data-selected:bg-accent group-data-selected:text-accent-fg group-aria-[current=page]:bg-accent group-aria-[current=page]:text-accent-fg`,
	accent: `bg-accent text-accent-fg`
};
function h({ value: e, max: t = 99, label: n, tone: r = `neutral`, className: i, ...a }) {
	let s = e > t ? `${t}+` : String(e);
	return (0, p.jsx)(`span`, {
		...a,
		className: o(`inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-sm px-1 text-label font-semibold tabular-nums forced-colors:border forced-colors:border-current`, m[r], i),
		children: n === void 0 ? s : (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(`span`, {
			"aria-hidden": `true`,
			children: s
		}), (0, p.jsx)(`span`, {
			className: `sr-only`,
			children: n
		})] })
	});
}
var g = o(`group inline-flex h-control-sm min-w-6 cursor-pointer items-center gap-1.5 rounded-md border border-border-strong bg-surface px-2.5 text-caption font-medium whitespace-nowrap text-fg transition-colors [&_svg]:size-3.5 [&_svg]:shrink-0`, `data-hovered:bg-hover data-pressed:bg-sunken data-disabled:cursor-not-allowed data-disabled:opacity-50`, `data-selected:border-accent data-selected:bg-accent-soft data-selected:text-accent-text data-selected:data-hovered:bg-accent-soft`, `forced-colors:data-selected:border-2 forced-colors:data-selected:border-[Highlight]`);
function _({ label: e, chips: t, selected: r, onChange: s, selectionMode: u = `multiple`, clearLabel: d, isDisabled: m = !1, className: _ }) {
	let v = (0, f.useCallback)((e) => s(e === `all` ? t.map((e) => e.id) : [...e]), [t, s]), y = (0, f.useRef)(null), b = (0, f.useRef)(!1), x = (0, f.useCallback)(() => {
		b.current = !0, s([]);
	}, [s]);
	(0, f.useEffect)(() => {
		!b.current || r.length > 0 || (b.current = !1, y.current?.querySelector(`button:not([disabled])`)?.focus());
	}, [r]);
	let S = (0, f.useMemo)(() => new Set(r), [r]);
	return (0, p.jsxs)(`div`, {
		className: o(`flex min-w-0 flex-wrap items-center gap-2`, _),
		children: [(0, p.jsx)(i, {
			ref: y,
			"aria-label": e,
			selectionMode: u,
			...u === `single` ? { disallowEmptySelection: !0 } : {},
			selectedKeys: S,
			onSelectionChange: v,
			isDisabled: m,
			className: `flex min-w-0 flex-wrap gap-1.5`,
			children: t.map((e) => (0, p.jsxs)(a, {
				id: e.id,
				...e.ariaLabel === void 0 ? {} : { "aria-label": e.ariaLabel },
				...e.isDisabled ? { isDisabled: !0 } : {},
				className: g,
				children: [
					(0, p.jsx)(c, {
						"aria-hidden": `true`,
						className: `hidden group-data-selected:block`
					}),
					(0, p.jsx)(`span`, {
						"aria-hidden": `true`,
						className: `contents group-data-selected:hidden`,
						children: e.icon
					}),
					(0, p.jsx)(`span`, {
						className: `max-w-[14rem] truncate`,
						children: e.label
					}),
					e.count === void 0 ? null : ` `,
					e.count === void 0 ? null : (0, p.jsx)(h, {
						value: e.count,
						...e.countLabel === void 0 ? {} : { label: e.countLabel }
					})
				]
			}, e.id))
		}), d && u === `multiple` && r.length > 0 ? (0, p.jsxs)(n, {
			onPress: x,
			isDisabled: m,
			className: `inline-flex h-control-sm cursor-pointer items-center gap-1 rounded-md px-2 text-caption font-medium text-accent-text underline-offset-2 data-hovered:underline data-pressed:bg-sunken`,
			children: [(0, p.jsx)(l, {
				"aria-hidden": `true`,
				className: `size-3.5`
			}), d]
		}) : null]
	});
}
export { h as n, d as r, _ as t };
