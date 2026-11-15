import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { A as n, F as r, H as i, I as a, R as o, Z as s, dn as c, hn as l, j as u, on as d, pn as f, sn as p, st as m } from "./doc.DoLlUurT.js";
import { n as h } from "./react-dom.B9zIfLd2.js";
import { t as g } from "./Button.D4_9kLv-.js";
import { v as _ } from "./useCollection.CKHU4kii.js";
import { n as v, t as y } from "./Link.BGmkI4cs.js";
import { n as b } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { d as x, i as ee, n as te, t as ne } from "./CollectionBuilder.Dfbyz3n6.js";
import { a as re, c as ie, o as ae, u as oe } from "./Dialog.C8eIUYfG.js";
import { t as S } from "./ChipCount.pwt4akom.js";
import { n as se, r as ce, t as le } from "./TagGroup.f01t8_P4.js";
import { t as C } from "./FilterChips.CEHg6Xot.js";
import { t as ue } from "./Autocomplete.DmAsmXZB.js";
import { n as de } from "./useFormReset.ClC-r4N4.js";
import { r as fe } from "./useFormValidation.CExHgpbK.js";
import { r as w } from "./useTextField.yppvIDGl.js";
import { i as pe, t as me } from "./ListBox.BduCOBMi.js";
import { t as he } from "./SearchField.BwQA3KlU.js";
import { t as ge } from "./TextField.B-FkpKii.js";
import { t as _e } from "./useFilter.BZhP8vnS.js";
import { n as ve, t as ye } from "./ToggleButton.DdDl1WJr.js";
import { a as be, c as xe, i as Se, n as Ce, o as we, r as Te, s as Ee, t as De } from "./LinkTabs.CLRiVdfv.js";
import { t as T } from "./Pagination.DSNCgerY.js";
import { t as E } from "./Segmented.BMZgKRB6.js";
import { i as Oe, n as ke, r as Ae, t as je } from "./Tabs.CDwEhZFC.js";
import { o as Me } from "./FocusScope.bOWhljI-.js";
var D = {};
D = { breadcrumbs: `عناصر الواجهة` };
var O = {};
O = { breadcrumbs: `Трохи хляб` };
var k = {};
k = { breadcrumbs: `Popis cesty` };
var A = {};
A = { breadcrumbs: `Brødkrummer` };
var j = {};
j = { breadcrumbs: `Breadcrumbs` };
var M = {};
M = { breadcrumbs: `Πλοηγήσεις breadcrumb` };
var N = {};
N = { breadcrumbs: `Breadcrumbs` };
var P = {};
P = { breadcrumbs: `Migas de pan` };
var F = {};
F = { breadcrumbs: `Lingiread` };
var I = {};
I = { breadcrumbs: `Navigointilinkit` };
var L = {};
L = { breadcrumbs: `Chemin de navigation` };
var R = {};
R = { breadcrumbs: `שבילי ניווט` };
var z = {};
z = { breadcrumbs: `Navigacijski putovi` };
var B = {};
B = { breadcrumbs: `Morzsamenü` };
var V = {};
V = { breadcrumbs: `Breadcrumb` };
var H = {};
H = { breadcrumbs: `パンくずリスト` };
var U = {};
U = { breadcrumbs: `탐색 표시` };
var W = {};
W = { breadcrumbs: `Naršymo kelias` };
var G = {};
G = { breadcrumbs: `Atpakaļceļi` };
var K = {};
K = { breadcrumbs: `Navigasjonsstier` };
var Ne = {};
Ne = { breadcrumbs: `Broodkruimels` };
var Pe = {};
Pe = { breadcrumbs: `Struktura nawigacyjna` };
var Fe = {};
Fe = { breadcrumbs: `Caminho detalhado` };
var Ie = {};
Ie = { breadcrumbs: `Categorias` };
var Le = {};
Le = { breadcrumbs: `Miez de pâine` };
var Re = {};
Re = { breadcrumbs: `Навигация` };
var ze = {};
ze = { breadcrumbs: `Navigačné prvky Breadcrumbs` };
var Be = {};
Be = { breadcrumbs: `Drobtine` };
var Ve = {};
Ve = { breadcrumbs: `Putanje navigacije` };
var He = {};
He = { breadcrumbs: `Sökvägar` };
var Ue = {};
Ue = { breadcrumbs: `İçerik haritaları` };
var We = {};
We = { breadcrumbs: `Навігаційна стежка` };
var Ge = {};
Ge = { breadcrumbs: `导航栏` };
var Ke = {};
Ke = { breadcrumbs: `導覽列` };
var qe = {};
qe = {
	"ar-AE": D,
	"bg-BG": O,
	"cs-CZ": k,
	"da-DK": A,
	"de-DE": j,
	"el-GR": M,
	"en-US": N,
	"es-ES": P,
	"et-EE": F,
	"fi-FI": I,
	"fr-FR": L,
	"he-IL": R,
	"hr-HR": z,
	"hu-HU": B,
	"it-IT": V,
	"ja-JP": H,
	"ko-KR": U,
	"lt-LT": W,
	"lv-LV": G,
	"nb-NO": K,
	"nl-NL": Ne,
	"pl-PL": Pe,
	"pt-BR": Fe,
	"pt-PT": Ie,
	"ro-RO": Le,
	"ru-RU": Re,
	"sk-SK": ze,
	"sl-SI": Be,
	"sr-SP": Ve,
	"sv-SE": He,
	"tr-TR": Ue,
	"uk-UA": We,
	"zh-CN": Ge,
	"zh-TW": Ke
};
function Je(e) {
	return e && e.__esModule ? e.default : e;
}
function Ye(e) {
	let { "aria-label": t, ...n } = e, r = b(Je(qe), `@react-aria/breadcrumbs`);
	return { navProps: {
		...m(n, { labelable: !0 }),
		"aria-label": t || r.format(`breadcrumbs`)
	} };
}
var q = t(h(), 1), J = (0, q.createContext)(null), Xe = (0, q.forwardRef)(function(e, t) {
	[e, t] = d(e, t, J);
	let { CollectionRoot: n } = (0, q.useContext)(_), { navProps: r } = Ye(e), i = m(e, {
		global: !0,
		labelable: !0
	});
	return q.createElement(te, { content: q.createElement(ee, e) }, (a) => q.createElement(c.ol, {
		render: e.render,
		ref: t,
		...l(i, r),
		slot: e.slot || void 0,
		style: e.style,
		className: e.className ?? `react-aria-Breadcrumbs`
	}, q.createElement(J.Provider, { value: e }, q.createElement(n, { collection: a }))));
}), Ze = class extends x {
	static {
		this.type = `item`;
	}
}, Qe = ne(Ze, function(e, t, n) {
	let r = n.nextKey == null, { isDisabled: i, onAction: a } = f(J), o = {
		"aria-current": r ? `page` : void 0,
		isDisabled: i || r,
		onPress: () => a?.(n.key)
	}, s = p({
		...n.props,
		children: n.rendered,
		values: {
			isDisabled: i || r,
			isCurrent: r
		},
		defaultClassName: `react-aria-Breadcrumb`
	}), l = m(e, {
		global: !0,
		labelable: !0
	});
	return delete l.id, q.createElement(c.li, {
		...l,
		...s,
		ref: t,
		"data-disabled": i || r || void 0,
		"data-current": r || void 0
	}, q.createElement(v.Provider, { value: o }, s.children));
}), Y = r(), $e = `inline-block max-w-[16rem] cursor-pointer truncate rounded-sm px-1 align-middle leading-6 text-muted underline-offset-2 transition-colors data-hovered:text-fg data-hovered:underline data-pressed:text-fg data-current:cursor-default data-current:font-medium data-current:text-fg data-current:no-underline`, et = (0, Y.jsx)(n, {
	name: `chevron.right`,
	"aria-hidden": `true`,
	className: `mx-0.5 size-3.5 shrink-0 text-muted`
});
function tt({ label: e, items: t, maxItems: r = 4, moreLabel: i, onAction: s, container: c, className: l }) {
	let u = (0, q.useMemo)(() => {
		let e = t.map((e) => ({
			kind: `item`,
			item: e
		}));
		return t.length <= Math.max(r, 3) || i === void 0 ? e : [
			...e.slice(0, 1),
			{
				kind: `more`,
				label: i,
				items: t.slice(1, -2)
			},
			...e.slice(-2)
		];
	}, [
		t,
		r,
		i
	]);
	return (0, Y.jsx)(`nav`, {
		"aria-label": e,
		className: a(`min-w-0 text-caption`, l),
		children: (0, Y.jsx)(Xe, {
			...s ? { onAction: s } : {},
			className: `m-0 flex list-none flex-wrap items-center gap-y-1 p-0`,
			children: u.map((e, t) => {
				let r = t === u.length - 1;
				return e.kind === `more` ? (0, Y.jsxs)(Qe, {
					id: `more`,
					className: `flex items-center`,
					children: [(0, Y.jsxs)(re, { children: [(0, Y.jsx)(o, {
						"aria-label": e.label,
						className: `inline-grid size-6 cursor-pointer place-items-center rounded-sm text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
						children: (0, Y.jsx)(n, {
							name: `action.more`,
							"aria-hidden": `true`,
							className: `size-4`
						})
					}), (0, Y.jsx)(oe, {
						...c ? { UNSTABLE_portalContainer: c } : {},
						placement: `bottom start`,
						className: `max-w-[calc(100vw-2rem)] min-w-48 rounded-md border border-border bg-surface p-1 text-fg shadow-md data-entering:animate-fade`,
						children: (0, Y.jsx)(ie, {
							...s ? { onAction: s } : {},
							className: `max-h-[50vh] overflow-auto outline-none`,
							children: e.items.map((e) => (0, Y.jsx)(ae, {
								id: e.id,
								textValue: e.label,
								...e.href === void 0 ? {} : { href: e.href },
								className: `flex min-h-control-sm cursor-pointer items-center rounded-sm px-2 text-body break-words text-fg data-focused:bg-hover forced-colors:data-focused:outline-2 forced-colors:data-focused:outline-[Highlight]`,
								children: e.label
							}, e.id))
						})
					})] }), et]
				}, `more`) : (0, Y.jsxs)(Qe, {
					id: e.item.id,
					className: `flex min-w-0 items-center`,
					children: [(0, Y.jsx)(y, {
						...e.item.href === void 0 ? {} : { href: e.item.href },
						className: $e,
						children: e.item.label
					}), r ? null : et]
				}, e.item.id);
			})
		})
	});
}
var nt = {
	browser: `items-end gap-0.5 px-2 pt-1.5`,
	editor: `items-stretch gap-px`
}, rt = {
	browser: `h-control-md max-w-56 rounded-t-lg border border-b-0 border-transparent pr-1 pl-2.5 data-selected:border-border data-selected:bg-surface data-selected:text-fg data-selected:data-hovered:bg-surface`,
	editor: `h-control-md max-w-60 border-r border-border pr-1 pl-2.5 data-selected:bg-bg data-selected:text-fg data-selected:data-hovered:bg-bg before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-0.5 data-selected:before:bg-accent before:forced-color-adjust-none forced-colors:data-selected:before:bg-[Highlight]`
};
function it({ label: e, items: t, selectedId: r, onSelect: i, onClose: s, closeLabel: c, dirtyLabel: l, variant: u = `editor`, emptyLabel: d, actions: f, className: p }) {
	let m = (0, q.useMemo)(() => r === null ? [] : [r], [r]), h = (0, q.useMemo)(() => t.filter((e) => e.isDisabled).map((e) => e.id), [t]), g = (0, q.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && i(t);
	}, [i]), _ = (0, q.useCallback)((e) => {
		for (let t of e) s(t);
	}, [s]), v = (0, q.useCallback)(() => d ? (0, Y.jsx)(`span`, {
		className: `px-3 text-caption text-muted`,
		children: d
	}) : null, [d]);
	return (0, Y.jsxs)(`div`, {
		className: a(`flex min-w-0 items-stretch border-b border-border bg-side`, p),
		children: [(0, Y.jsx)(se, {
			"aria-label": e,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: m,
			disabledKeys: h,
			onSelectionChange: g,
			onRemove: _,
			className: `min-w-0 flex-1`,
			children: (0, Y.jsx)(ce, {
				renderEmptyState: v,
				className: a(`flex min-h-control-md min-w-0 overflow-x-auto overscroll-x-contain [scrollbar-width:thin]`, nt[u]),
				children: t.map((e) => (0, Y.jsxs)(le, {
					id: e.id,
					textValue: e.isDirty && l ? `${e.label}, ${l}` : e.label,
					className: a(`group relative flex shrink-0 cursor-pointer items-center gap-1.5 text-caption whitespace-nowrap text-muted transition-colors focus-visible:-outline-offset-2`, `data-hovered:bg-hover data-hovered:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50`, rt[u]),
					children: [
						(0, Y.jsx)(`span`, {
							"aria-hidden": `true`,
							className: `inline-flex shrink-0 [&_svg]:size-3.5`,
							children: e.icon
						}),
						(0, Y.jsx)(`span`, {
							className: `min-w-0 truncate`,
							children: e.label
						}),
						(0, Y.jsx)(o, {
							slot: `remove`,
							"aria-label": c,
							className: a(`relative grid size-6 shrink-0 cursor-pointer place-items-center rounded-sm text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`, e.isDirty ? `` : `opacity-0 group-data-hovered:opacity-100 group-data-selected:opacity-100 group-data-focus-visible:opacity-100 data-focus-visible:opacity-100 pointer-coarse:opacity-100`),
							children: e.isDirty ? (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(`span`, {
								"aria-hidden": `true`,
								className: `size-2 rounded-full bg-fg group-data-hovered:hidden group-data-focus-visible:hidden forced-color-adjust-none forced-colors:bg-[CanvasText]`
							}), (0, Y.jsx)(n, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `hidden size-3.5 group-data-hovered:block group-data-focus-visible:block`
							})] }) : (0, Y.jsx)(n, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `size-3.5`
							})
						})
					]
				}, e.id))
			})
		}), f ? (0, Y.jsx)(`div`, {
			className: `flex shrink-0 items-center gap-1 px-1`,
			children: f
		}) : null]
	});
}
var at = u(`nav.languages`), ot = u(`status.offline`), st = u(`status.error`), ct = u(`status.ok`), lt = {
	downloading: {
		box: `border-l-info`,
		icon: `text-info`,
		Icon: at
	},
	offline: {
		box: `border-l-warn`,
		icon: `text-warn`,
		Icon: ot
	},
	error: {
		box: `border-l-danger`,
		icon: `text-danger`,
		Icon: st
	},
	done: {
		box: `border-l-ok`,
		icon: `text-ok`,
		Icon: ct
	}
};
function ut({ percentage: e }) {
	let t = (0, q.useMemo)(() => ({ width: `${e}%` }), [e]);
	return (0, Y.jsx)(`span`, {
		className: `h-1.5 flex-1 overflow-hidden rounded-full bg-sunken forced-colors:border forced-colors:border-[CanvasText]`,
		children: (0, Y.jsx)(`span`, {
			className: `block h-full rounded-full bg-accent transition-[width] duration-(--sk-duration-base) forced-color-adjust-none forced-colors:bg-[Highlight]`,
			style: t
		})
	});
}
function X({ state: e, title: t, children: r, secondary: s, progress: c, progressLabel: l, onDismiss: u, dismissLabel: d, placement: f = `inline`, className: p }) {
	let m = lt[e], h = m.Icon;
	return (0, Y.jsxs)(`output`, {
		className: a(`flex min-w-0 items-start gap-3 rounded-lg border border-l-4 border-border bg-surface p-3 text-body text-fg shadow-md`, m.box, f === `floating` ? `fixed inset-x-4 bottom-4 z-(--sk-z-toast) animate-rise sm:right-auto sm:max-w-md` : `w-full max-w-md`, p),
		children: [
			(0, Y.jsx)(h, {
				"aria-hidden": `true`,
				className: a(`mt-0.5 size-4 shrink-0`, m.icon)
			}),
			(0, Y.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-1`,
				children: [
					(0, Y.jsx)(`span`, {
						className: `font-semibold`,
						children: t
					}),
					r ? (0, Y.jsx)(`span`, {
						className: `break-words`,
						children: r
					}) : null,
					s ? (0, Y.jsx)(`span`, {
						lang: s.lang,
						className: `text-caption break-words text-muted`,
						children: s.text
					}) : null,
					e === `downloading` && c !== void 0 ? (0, Y.jsx)(i, {
						value: c,
						"aria-label": l ?? t,
						className: `mt-1 flex items-center gap-2`,
						children: ({ percentage: e, valueText: t }) => (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(ut, { percentage: e ?? 0 }), (0, Y.jsx)(`span`, {
							className: `text-caption text-muted tabular-nums`,
							children: t
						})] })
					}) : null
				]
			}),
			u && d ? (0, Y.jsx)(o, {
				"aria-label": d,
				onPress: u,
				className: `-m-1 inline-grid size-7 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
				children: (0, Y.jsx)(n, {
					name: `action.close`,
					"aria-hidden": `true`,
					className: `size-4`
				})
			}) : null
		]
	});
}
var dt = /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?$/i, ft = `group flex min-h-control-sm cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-body text-fg outline-none data-hovered:bg-hover data-focused:bg-hover data-selected:bg-selected data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focused:outline-2 forced-colors:data-focused:outline-[Highlight]`;
function pt({ languages: e, value: t, onChange: r, label: i, searchPlaceholder: c, emptyLabel: l, custom: u, children: d, className: f }) {
	let { contains: p } = _e({ sensitivity: `base` }), [m, h] = (0, q.useState)(``), g = (0, q.useMemo)(() => [t], [t]), _ = (0, q.useMemo)(() => e.some((e) => e.code === t) ? e : [{
		code: t,
		name: t
	}, ...e], [e, t]), v = (0, q.useCallback)((e, t) => p(e, t), [p]), y = (0, q.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && r(String(t));
	}, [r]), b = u?.isValid, x = u?.errorLabel, ee = (0, q.useCallback)((e) => (b ?? ((e) => dt.test(e)))(e.trim()) ? null : x ?? null, [b, x]), te = (0, q.useCallback)((e) => {
		e.preventDefault(), r(m.trim());
	}, [m, r]), ne = (0, q.useCallback)(() => (0, Y.jsx)(`p`, {
		className: `m-0 px-2 py-3 text-caption text-muted`,
		children: l
	}), [l]);
	return (0, Y.jsxs)(`div`, {
		className: a(`flex w-full max-w-sm min-w-0 flex-col gap-2`, f),
		children: [
			(0, Y.jsxs)(ue, {
				filter: v,
				children: [(0, Y.jsxs)(he, {
					className: `group flex flex-col gap-1`,
					children: [(0, Y.jsx)(s, {
						className: `text-caption font-medium text-fg`,
						children: i
					}), (0, Y.jsxs)(`div`, {
						className: `flex h-control-md items-center gap-2 rounded-md border border-border-strong bg-input px-2 focus-within:border-accent`,
						children: [(0, Y.jsx)(n, {
							name: `action.search`,
							"aria-hidden": `true`,
							className: `size-4 shrink-0 text-muted`
						}), (0, Y.jsx)(w, {
							...c === void 0 ? {} : { placeholder: c },
							className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
						})]
					})]
				}), (0, Y.jsx)(me, {
					"aria-label": i,
					items: _,
					selectionMode: `single`,
					disallowEmptySelection: !0,
					selectedKeys: g,
					onSelectionChange: y,
					renderEmptyState: ne,
					className: `max-h-56 overflow-y-auto overscroll-contain rounded-md border border-border bg-surface p-1`,
					children: (e) => (0, Y.jsxs)(pe, {
						id: e.code,
						textValue: `${e.name} ${e.code}`,
						className: ft,
						children: [
							(0, Y.jsx)(`span`, {
								lang: e.code,
								className: `min-w-0 flex-1 break-words`,
								children: e.name
							}),
							(0, Y.jsx)(`span`, {
								className: `font-mono text-caption text-muted`,
								children: e.code
							}),
							(0, Y.jsx)(n, {
								name: `action.check`,
								"aria-hidden": `true`,
								className: `invisible size-4 shrink-0 text-accent-text group-data-selected:visible`
							})
						]
					})
				})]
			}),
			u ? (0, Y.jsxs)(fe, {
				onSubmit: te,
				validationBehavior: `native`,
				className: `flex flex-wrap items-start gap-2`,
				children: [(0, Y.jsxs)(ge, {
					value: m,
					onChange: h,
					validate: ee,
					className: `flex min-w-0 flex-1 flex-col gap-1`,
					children: [
						(0, Y.jsx)(s, {
							className: `text-caption font-medium text-fg`,
							children: u.label
						}),
						(0, Y.jsx)(w, {
							...u.placeholder === void 0 ? {} : { placeholder: u.placeholder },
							className: `h-control-md min-w-0 rounded-md border border-border-strong bg-input px-2 text-body text-fg placeholder:text-muted data-invalid:border-danger`
						}),
						(0, Y.jsxs)(de, {
							className: `flex items-start gap-1 text-caption text-danger`,
							children: [(0, Y.jsx)(n, {
								name: `status.error`,
								"aria-hidden": `true`,
								className: `mt-px size-3.5 shrink-0`
							}), (0, Y.jsx)(`span`, { children: u.errorLabel })]
						})
					]
				}), (0, Y.jsx)(o, {
					type: `submit`,
					className: `mt-5 inline-flex h-control-md cursor-pointer items-center rounded-md border border-border-strong bg-surface px-3 text-body font-medium text-fg data-hovered:bg-hover data-pressed:bg-sunken`,
					children: u.buttonLabel
				})]
			}) : null,
			d
		]
	});
}
var Z = `inline-flex h-control-sm min-w-control-sm cursor-pointer items-center justify-center rounded-md px-1.5 text-caption font-semibold text-muted uppercase no-underline transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken data-selected:text-fg data-selected:underline data-selected:decoration-2 data-selected:underline-offset-4 aria-[current=true]:text-fg aria-[current=true]:underline aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-4`;
function mt({ language: e }) {
	return (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(`span`, {
		"aria-hidden": `true`,
		children: e.code
	}), (0, Y.jsx)(`span`, {
		className: `sr-only`,
		children: `${e.code.toUpperCase()} ${e.name}`
	})] });
}
function ht({ language: e, isCurrent: t }) {
	let n = (0, q.useCallback)(({ children: t, ...n }) => (0, Y.jsx)(`a`, {
		...n,
		...e.href === void 0 ? {} : { hrefLang: e.code },
		children: t
	}), [e.code, e.href]);
	return (0, Y.jsx)(y, {
		...e.href === void 0 ? {} : { href: e.href },
		lang: e.code,
		...t ? { "aria-current": `true` } : {},
		render: n,
		className: Z,
		children: (0, Y.jsx)(mt, { language: e })
	});
}
function gt({ label: e, languages: t, value: n, onChange: r, className: i }) {
	let o = (0, q.useMemo)(() => [n], [n]), s = (0, q.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && r?.(String(t));
	}, [r]);
	return r ? (0, Y.jsx)(ve, {
		"aria-label": e,
		selectionMode: `single`,
		disallowEmptySelection: !0,
		selectedKeys: o,
		onSelectionChange: s,
		className: a(`flex items-center gap-1`, i),
		children: t.map((e) => (0, Y.jsx)(ye, {
			id: e.code,
			lang: e.code,
			className: Z,
			children: (0, Y.jsx)(mt, { language: e })
		}, e.code))
	}) : (0, Y.jsx)(`nav`, {
		"aria-label": e,
		className: i,
		children: (0, Y.jsx)(`ul`, {
			className: `m-0 flex list-none items-center gap-1 p-0`,
			children: t.map((e) => (0, Y.jsx)(`li`, { children: (0, Y.jsx)(ht, {
				language: e,
				isCurrent: e.code === n
			}) }, e.code))
		})
	});
}
function Q({ className: e, ...t }) {
	return (0, Y.jsx)(je, {
		...t,
		className: a(`min-w-0 flex-1 rounded-md pt-4 text-body text-fg data-entering:animate-fade`, e)
	});
}
var _t = `transition-[translate,width,height] duration-(--sk-duration-base) ease-out motion-reduce:transition-none`;
function vt({ label: e, tabs: t, children: n, className: r, listClassName: i, orientation: o = `horizontal`, ...s }) {
	let c = o === `vertical`;
	return (0, Y.jsxs)(Ae, {
		...s,
		orientation: o,
		className: a(`flex min-w-0`, c ? `flex-col gap-4 sm:flex-row` : `flex-col`, r),
		children: [(0, Y.jsx)(Oe, {
			"aria-label": e,
			className: a(c ? `flex shrink-0 flex-col gap-0.5 border-l border-border sm:w-56` : a(we, `border-b border-border`), i),
			children: t.map((e) => (0, Y.jsxs)(ke, {
				id: e.id,
				...e.textValue === void 0 ? {} : { textValue: e.textValue },
				...e.isDisabled ? { isDisabled: !0 } : {},
				className: a(Ce, be, c ? Ee : Te),
				children: [
					e.icon,
					(0, Y.jsx)(`span`, {
						className: c ? `min-w-0 flex-1` : void 0,
						children: e.label
					}),
					e.count === void 0 ? null : ` `,
					e.count === void 0 ? null : (0, Y.jsx)(S, {
						value: e.count,
						...e.countLabel === void 0 ? {} : { label: e.countLabel }
					}),
					(0, Y.jsx)(Me, { className: a(c ? xe : Se, _t) })
				]
			}, e.id))
		}), n]
	});
}
var yt = e({ default: () => Mt }), bt = [
	{
		code: `pl`,
		name: `Polski`
	},
	{
		code: `en`,
		name: `English`
	},
	{
		code: `de`,
		name: `Deutsch`
	},
	{
		code: `fr`,
		name: `Français`
	},
	{
		code: `es`,
		name: `Español`
	},
	{
		code: `uk`,
		name: `Українська`
	},
	{
		code: `cs`,
		name: `Čeština`
	},
	{
		code: `ja`,
		name: `日本語`
	}
];
function xt() {
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [(0, Y.jsxs)(vt, {
			label: `Project sections`,
			tabs: [
				{
					id: `board`,
					label: `Board`,
					icon: (0, Y.jsx)(n, {
						name: `nav.board`,
						"aria-hidden": `true`
					})
				},
				{
					id: `list`,
					label: `List`,
					icon: (0, Y.jsx)(n, {
						name: `layout.list`,
						"aria-hidden": `true`
					}),
					count: 128,
					countLabel: `128 issues`
				},
				{
					id: `settings`,
					label: `Settings`,
					icon: (0, Y.jsx)(n, {
						name: `nav.settings`,
						"aria-hidden": `true`
					})
				},
				{
					id: `archive`,
					label: `Archive`,
					isDisabled: !0
				}
			],
			children: [
				(0, Y.jsx)(Q, {
					id: `board`,
					children: `The board groups issues by status.`
				}),
				(0, Y.jsx)(Q, {
					id: `list`,
					children: `The list shows every issue, sorted by update.`
				}),
				(0, Y.jsx)(Q, {
					id: `settings`,
					children: `Members, labels and workflow.`
				}),
				(0, Y.jsx)(Q, {
					id: `archive`,
					children: `Archived issues.`
				})
			]
		}), (0, Y.jsxs)(vt, {
			label: `Account settings`,
			orientation: `vertical`,
			tabs: [
				{
					id: `profile`,
					label: `Profile`
				},
				{
					id: `notifications`,
					label: `Notifications and email digests`
				},
				{
					id: `security`,
					label: `Security`
				}
			],
			children: [
				(0, Y.jsx)(Q, {
					id: `profile`,
					className: `pt-0`,
					children: `Name, photo and language.`
				}),
				(0, Y.jsx)(Q, {
					id: `notifications`,
					className: `pt-0`,
					children: `Choose what reaches your inbox.`
				}),
				(0, Y.jsx)(Q, {
					id: `security`,
					className: `pt-0`,
					children: `Passkeys and sessions.`
				})
			]
		})]
	});
}
function St() {
	let [e, t] = (0, q.useState)(`board`), [r, i] = (0, q.useState)(`28`);
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col items-start gap-3`,
		children: [
			(0, Y.jsx)(E, {
				label: `View`,
				value: e,
				onChange: t,
				options: [
					{
						value: `board`,
						label: `Board`,
						icon: (0, Y.jsx)(n, {
							name: `layout.columns-3`,
							"aria-hidden": `true`
						})
					},
					{
						value: `list`,
						label: `List`,
						icon: (0, Y.jsx)(n, {
							name: `layout.list`,
							"aria-hidden": `true`
						})
					},
					{
						value: `table`,
						label: `Table`,
						icon: (0, Y.jsx)(n, {
							name: `layout.table`,
							"aria-hidden": `true`
						}),
						isDisabled: !0
					}
				]
			}),
			(0, Y.jsx)(E, {
				label: `Period`,
				size: `sm`,
				value: r,
				onChange: i,
				options: [
					{
						value: `7`,
						label: `7 days`
					},
					{
						value: `28`,
						label: `28 days`
					},
					{
						value: `90`,
						label: `90 days`
					}
				]
			}),
			(0, Y.jsx)(`p`, {
				className: `m-0 text-caption text-muted`,
				children: `Showing the ${e} view for ${r} days.`
			})
		]
	});
}
var Ct = [
	{
		id: `app`,
		label: `App.tsx`,
		icon: (0, Y.jsx)(n, {
			name: `file.code`,
			"aria-hidden": `true`
		})
	},
	{
		id: `readme`,
		label: `README.md`,
		icon: (0, Y.jsx)(n, {
			name: `file.document`,
			"aria-hidden": `true`
		}),
		isDirty: !0
	},
	{
		id: `long`,
		label: `a-very-long-file-name-that-does-not-fit.config.ts`,
		icon: (0, Y.jsx)(n, {
			name: `file.code`,
			"aria-hidden": `true`
		})
	}
], wt = [{
	id: `docs`,
	label: `Documentation`,
	icon: (0, Y.jsx)(n, {
		name: `nav.web`,
		"aria-hidden": `true`
	})
}, {
	id: `status`,
	label: `Status page`,
	icon: (0, Y.jsx)(n, {
		name: `nav.web`,
		"aria-hidden": `true`
	})
}];
function $(e, t, n, r) {
	let i = e.findIndex((e) => e.id === t), a = e.filter((e) => e.id !== t);
	return n === t && r(a[Math.min(i, a.length - 1)]?.id ?? null), a;
}
function Tt() {
	let [e, t] = (0, q.useState)(Ct), [n, r] = (0, q.useState)(`app`), [i, a] = (0, q.useState)(wt), [o, s] = (0, q.useState)(`docs`);
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, Y.jsx)(it, {
				label: `Open files`,
				items: e,
				selectedId: n,
				onSelect: r,
				onClose: (i) => t($(e, i, n, r)),
				closeLabel: `Close`,
				dirtyLabel: `unsaved changes`,
				emptyLabel: `No open files`
			}),
			(0, Y.jsx)(it, {
				label: `Browser tabs`,
				variant: `browser`,
				items: i,
				selectedId: o,
				onSelect: s,
				onClose: (e) => a($(i, e, o, s)),
				closeLabel: `Close`,
				emptyLabel: `No open pages`
			}),
			(0, Y.jsx)(g, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => {
					t(Ct), r(`app`), a(wt), s(`docs`);
				},
				children: `Reopen all tabs`
			})
		]
	});
}
function Et() {
	let [e, t] = (0, q.useState)(null);
	return (0, Y.jsxs)(`div`, {
		ref: t,
		className: `flex flex-col gap-3`,
		children: [(0, Y.jsx)(tt, {
			label: `Sample breadcrumb`,
			items: [
				{
					id: `home`,
					label: `Home`,
					href: `#`
				},
				{
					id: `docs`,
					label: `Docs`,
					href: `#`
				},
				{
					id: `install`,
					label: `Install`
				}
			]
		}), (0, Y.jsx)(tt, {
			label: `Folded breadcrumb`,
			moreLabel: `Show hidden levels`,
			...e ? { container: e } : {},
			items: [
				{
					id: `home`,
					label: `Home`,
					href: `#`
				},
				{
					id: `workspace`,
					label: `Workspace`,
					href: `#`
				},
				{
					id: `projects`,
					label: `Projects`,
					href: `#`
				},
				{
					id: `skribly`,
					label: `Skribly website`,
					href: `#`
				},
				{
					id: `issue`,
					label: `The contact form loses its draft after a long pause`
				}
			]
		})]
	});
}
function Dt() {
	let [e, t] = (0, q.useState)(6), n = {
		previousLabel: `Previous`,
		nextLabel: `Next`,
		firstLabel: `First page`,
		lastLabel: `Last page`,
		pageLabel: (e) => `Page ${e}`,
		statusLabel: (e, t) => `Page ${e} of ${t}`
	};
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [(0, Y.jsx)(T, {
			...n,
			label: `Issue pages`,
			page: e,
			pageCount: 24,
			onChange: t,
			summary: `Showing ${(e - 1) * 20 + 1}–${e * 20} of 472`
		}), (0, Y.jsx)(T, {
			...n,
			label: `Short list pages`,
			page: 1,
			pageCount: 3,
			getHref: (e) => `#page-${e}`
		})]
	});
}
function Ot() {
	let [e, t] = (0, q.useState)([`open`]), [n, r] = (0, q.useState)([`all`]);
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, Y.jsx)(C, {
			label: `Status`,
			clearLabel: `Clear filters`,
			selected: e,
			onChange: t,
			chips: [
				{
					id: `open`,
					label: `Open`,
					count: 42,
					countLabel: `42 issues`
				},
				{
					id: `review`,
					label: `In review`,
					count: 7,
					countLabel: `7 issues`
				},
				{
					id: `blocked`,
					label: `Blocked`,
					count: 0,
					countLabel: `no issues`
				},
				{
					id: `closed`,
					label: `Closed`,
					count: 1280,
					countLabel: `1280 issues`,
					isDisabled: !0
				}
			]
		}), (0, Y.jsx)(C, {
			label: `Region`,
			selectionMode: `single`,
			selected: n,
			onChange: r,
			chips: [
				{
					id: `all`,
					label: `All regions`
				},
				{
					id: `eu`,
					label: `Europe`
				},
				{
					id: `na`,
					label: `North America`
				}
			]
		})]
	});
}
function kt() {
	let [e, t] = (0, q.useState)(`pl`);
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col items-start gap-3`,
		children: [(0, Y.jsx)(gt, {
			label: `Language`,
			languages: bt.slice(0, 2),
			value: e,
			onChange: t
		}), (0, Y.jsx)(gt, {
			label: `Page language`,
			value: `en`,
			languages: [
				{
					code: `pl`,
					name: `Polski`,
					href: `#pl`
				},
				{
					code: `en`,
					name: `English`,
					href: `#en`
				},
				{
					code: `de`,
					name: `Deutsch`,
					href: `#de`
				}
			]
		})]
	});
}
function At() {
	let [e, t] = (0, q.useState)(`en`);
	return (0, Y.jsx)(pt, {
		label: `Interface language`,
		searchPlaceholder: `Name or code`,
		languages: bt,
		value: e,
		onChange: t,
		emptyLabel: `No language matches. Enter its code below.`,
		custom: {
			label: `Other language code`,
			buttonLabel: `Use code`,
			placeholder: `ga, sw, pt-BR`,
			errorLabel: `Enter a code such as ga or pt-BR.`
		}
	});
}
function jt() {
	let [e, t] = (0, q.useState)(!1);
	return (0, Y.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, Y.jsx)(X, {
				state: `downloading`,
				title: `Downloading Deutsch`,
				progress: 64,
				progressLabel: `Translation download`,
				children: `Parts of the interface stay in English until it finishes.`
			}),
			e ? (0, Y.jsx)(g, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t(!1),
				children: `Show the offline banner again`
			}) : (0, Y.jsx)(X, {
				state: `offline`,
				title: `Offline`,
				secondary: {
					lang: `de`,
					text: `Keine Internetverbindung. Die Übersetzung wird geladen, sobald Sie online sind.`
				},
				onDismiss: () => t(!0),
				dismissLabel: `Dismiss`,
				children: `The Deutsch translation downloads once you are online. Showing English.`
			}),
			(0, Y.jsx)(X, {
				state: `error`,
				title: `Translation failed`,
				children: `The server did not answer. Try again from Settings.`
			}),
			(0, Y.jsx)(X, {
				state: `done`,
				title: `Deutsch is ready`
			})
		]
	});
}
var Mt = {
	title: `Navigation`,
	description: `Ways to move between views, pages and filters: tabs, link tabs, segmented choices, tab strips that close, breadcrumbs, pagination, filter chips and the language controls. Built to WCAG 2.2 AA as a target, from 320px wide up.`,
	pl: {
		title: `Nawigacja`,
		description: `Sposoby przechodzenia między widokami, stronami i filtrami: karty, karty-linki, wybory segmentowe, paski kart, które można zamknąć, ścieżki nawigacji, paginacja, chipy filtrów i kontrolki języka. Budowane z celem WCAG 2.2 AA, od szerokości 320 px.`
	},
	demos: [
		{
			name: `Tabs`,
			components: [`Tabs`, `TabPanel`],
			description: `Switches between panels of one view without leaving the page. Pick it when the panels belong together; use LinkTabs when each tab is its own address.`,
			usage: `<Tabs label="Project sections" tabs={[{ id: 'board', label: 'Board' }, { id: 'list', label: 'List', count: 12, countLabel: '12 issues' }]}>
  <TabPanel id="board">…</TabPanel>
  <TabPanel id="list">…</TabPanel>
</Tabs>`,
			accessibility: `Tab enters the tab list on the selected tab; Left and Right (Up and Down when vertical), Home and End move and select; Tab again moves into the panel. Screen readers hear tab, position and selected state, and the panel is labelled by its tab. The underline is painted in Highlight under forced colours. The strip scrolls on its own when tabs do not fit, and vertical tabs stack above the panel on narrow screens.`,
			pl: {
				description: `Przełącza między panelami jednego widoku bez opuszczania strony. Wybierz je, gdy panele należą do siebie; gdy każda karta ma własny adres, użyj LinkTabs.`,
				accessibility: `Tab wchodzi do listy kart na zaznaczonej karcie; strzałka w lewo i w prawo (w górę i w dół w układzie pionowym), Home i End przesuwają i zaznaczają; kolejny Tab przechodzi do panelu. Czytniki ekranu odczytują kartę, pozycję i stan zaznaczenia, a panel ma etykietę z jego karty. Podkreślenie jest malowane kolorem Highlight w trybie wymuszonych kolorów. Pasek przewija się sam, gdy karty się nie mieszczą, a pionowe karty układają się nad panelem na wąskich ekranach.`
			},
			render: () => (0, Y.jsx)(xt, {})
		},
		{
			name: `LinkTabs`,
			components: [`LinkTabs`],
			description: `Looks like Tabs but each tab is a link to another page. Pick it for section navigation that changes the address.`,
			usage: `<LinkTabs label="Project navigation" currentId="list" items={[
  { id: 'board', label: 'Board', href: '/p/board' },
  { id: 'list', label: 'List', href: '/p/list' }
]} />`,
			accessibility: `A nav landmark with plain links, so Tab moves through them and the browser keeps history. The current page has aria-current="page" and an underline, never colour alone. Client routing works through RouterProvider.`,
			pl: {
				description: `Wyglądają jak Tabs, ale każda karta jest linkiem do innej strony. Wybierz je dla nawigacji po sekcjach, która zmienia adres.`,
				accessibility: `Landmark nav ze zwykłymi linkami, więc Tab przechodzi po nich, a przeglądarka zachowuje historię. Bieżąca strona ma aria-current="page" i podkreślenie, nigdy sam kolor. Routing w przeglądarce działa przez RouterProvider.`
			},
			render: () => (0, Y.jsx)(De, {
				label: `Project navigation`,
				currentId: `list`,
				items: [
					{
						id: `board`,
						label: `Board`,
						href: `#board`,
						icon: (0, Y.jsx)(n, {
							name: `nav.board`,
							"aria-hidden": `true`
						})
					},
					{
						id: `list`,
						label: `List`,
						href: `#list`,
						icon: (0, Y.jsx)(n, {
							name: `layout.list`,
							"aria-hidden": `true`
						}),
						count: 12,
						countLabel: `12 issues`
					},
					{
						id: `settings`,
						label: `Settings`,
						href: `#settings`,
						icon: (0, Y.jsx)(n, {
							name: `nav.settings`,
							"aria-hidden": `true`
						})
					},
					{
						id: `archive`,
						label: `Archive`,
						href: `#archive`,
						isDisabled: !0
					}
				]
			})
		},
		{
			name: `Segmented`,
			components: [`Segmented`],
			description: `One choice out of two to five, all visible at once, such as a view mode or a period. For more options use a select.`,
			usage: `<Segmented label="View" value={view} onChange={setView} options={[
  { value: 'board', label: 'Board' },
  { value: 'list', label: 'List' }
]} />`,
			accessibility: `A radio group: Tab reaches the checked option, arrow keys move between options and Space or Enter picks one. Icon-only options take ariaLabel. The checked option has a raised surface, and a Highlight border under forced colours. Options wrap rather than scroll on narrow screens.`,
			pl: {
				description: `Jeden wybór z dwóch do pięciu, wszystkie widoczne naraz, na przykład tryb widoku albo okres. Dla większej liczby opcji użyj listy wyboru.`,
				accessibility: `Grupa przycisków opcji: Tab dociera do zaznaczonej opcji, klawisze strzałek przechodzą między opcjami, a Spacja lub Enter wybiera jedną. Opcje tylko z ikoną przyjmują ariaLabel. Zaznaczona opcja ma uniesioną powierzchnię, a w trybie wymuszonych kolorów ramkę Highlight. Opcje się zawijają zamiast przewijać na wąskich ekranach.`
			},
			render: () => (0, Y.jsx)(St, {})
		},
		{
			name: `ClosableTabs`,
			components: [`ClosableTabs`],
			description: `A strip of open documents or pages that the reader can close, as in an editor or a browser. A dot marks unsaved changes and turns into the close button on hover or focus.`,
			usage: `<ClosableTabs label="Open files" items={files} selectedId={active} onSelect={setActive}
  onClose={close} closeLabel="Close" dirtyLabel="unsaved changes" emptyLabel="No open files" />`,
			accessibility: `Arrow keys move between tabs, Enter or Space opens one, Delete or Backspace closes the focused tab and focus moves to its neighbour. Each close button is a real 24px button named with the tab, such as "Close App.tsx", so pointer and touch screen readers reach it. Unsaved state is read as part of the tab name, not shown by the dot alone.`,
			pl: {
				description: `Pasek otwartych dokumentów albo stron, które czytelnik może zamknąć, jak w edytorze lub przeglądarce. Kropka oznacza niezapisane zmiany i zamienia się w przycisk zamknięcia po najechaniu lub przy fokusie.`,
				accessibility: `Klawisze strzałek przechodzą między kartami, Enter lub Spacja otwiera jedną, Delete lub Backspace zamyka kartę z fokusem, a fokus przechodzi na sąsiednią. Każdy przycisk zamknięcia jest prawdziwym przyciskiem 24 px nazwanym razem z kartą, na przykład „Close App.tsx”, więc dosięgają go czytniki ekranu obsługiwane wskaźnikiem i dotykiem. Stan niezapisany jest odczytywany jako część nazwy karty, a nie tylko pokazany kropką.`
			},
			render: () => (0, Y.jsx)(Tt, {})
		},
		{
			name: `Breadcrumbs`,
			components: [`Breadcrumbs`],
			description: `Shows where a page sits and links to each level above it. With moreLabel set, long trails fold their middle levels into a menu.`,
			usage: `<Breadcrumbs label="Breadcrumb" moreLabel="Show hidden levels" items={[
  { id: 'home', label: 'Home', href: '/' },
  { id: 'docs', label: 'Docs', href: '/docs' },
  { id: 'install', label: 'Install' }
]} />`,
			accessibility: `A nav landmark with an ordered list; the last item is the current page with aria-current="page". The fold button opens a menu of the hidden levels, navigable with arrow keys and closed with Escape. Separators are hidden from screen readers. Items wrap on narrow screens and long labels truncate while keeping their full name.`,
			pl: {
				description: `Pokazuje, gdzie leży strona, i linkuje do każdego poziomu nad nią. Przy ustawionym moreLabel długie ścieżki składają środkowe poziomy w menu.`,
				accessibility: `Landmark nav z listą uporządkowaną; ostatnia pozycja jest bieżącą stroną z aria-current="page". Przycisk składania otwiera menu ukrytych poziomów, obsługiwane klawiszami strzałek i zamykane klawiszem Escape. Separatory są ukryte przed czytnikami ekranu. Pozycje zawijają się na wąskich ekranach, a długie etykiety są ucinane z zachowaniem pełnej nazwy.`
			},
			render: () => (0, Y.jsx)(Et, {})
		},
		{
			name: `Pagination`,
			components: [`Pagination`],
			description: `Moves through a long list split into pages. Pass getHref for real links that work without JavaScript, or onChange for buttons inside an app. A site splits a long list into static pages with the site kit: Pagination.astro has the same look.`,
			usage: "<Pagination label=\"Pages\" page={page} pageCount={24} onChange={setPage}\n  previousLabel=\"Previous\" nextLabel=\"Next\" firstLabel=\"First page\" lastLabel=\"Last page\"\n  pageLabel={(n) => `Page ${n}`} statusLabel={(n, total) => `Page ${n} of ${total}`} />",
			accessibility: `A named nav landmark. Every page control has a name such as "Page 3", the current one has aria-current="page" and a filled style, and Previous and Next are disabled at the ends. When its box is narrow the page numbers give way to a "Page 6 of 24" status with First and Last beside it, and Previous and Next keep only their arrows, still named for screen readers. Every target grows to 44 pixels on a touch screen.`,
			pl: {
				description: `Przechodzi przez długą listę podzieloną na strony. Przekaż getHref dla prawdziwych linków, które działają bez JavaScriptu, albo onChange dla przycisków wewnątrz aplikacji. Strona w Astro dzieli długą listę na statyczne strony komponentem Pagination.astro, który wygląda tak samo.`,
				accessibility: `Nazwany landmark nav. Każda kontrolka strony ma nazwę, na przykład „Page 3”, bieżąca ma aria-current="page" i wypełniony styl, a Poprzednia i Następna są wyłączone na końcach. Gdy jej pole jest wąskie, numery stron ustępują statusowi „Page 6 of 24” z Pierwszą i Ostatnią obok, a Poprzednia i Następna zachowują tylko strzałki, nadal nazwane dla czytników ekranu. Na ekranie dotykowym każdy cel ma 44 px.`
			},
			render: () => (0, Y.jsx)(Dt, {})
		},
		{
			name: `FilterChips`,
			components: [`FilterChips`, `ChipCount`],
			description: `Quick filters above a list, with an optional count on each. Multiple mode toggles each chip on its own; single mode picks one. ChipCount is the count badge, also used inside tabs.`,
			usage: `<FilterChips label="Status" selected={status} onChange={setStatus} clearLabel="Clear filters"
  chips={[{ id: 'open', label: 'Open', count: 42, countLabel: '42 issues' }]} />
<ChipCount value={1280} max={999} label="1280 issues" />`,
			accessibility: `Multiple mode is a set of toggle buttons with aria-pressed; single mode is a radio group. An active chip gains a check mark and an accent border, so the state never rests on colour. Counts read as their label, such as "42 issues". The clear button returns focus to the chips once it goes away. Chips wrap on narrow screens.`,
			pl: {
				description: `Szybkie filtry nad listą, z opcjonalnym licznikiem przy każdym. Tryb multiple przełącza każdy chip osobno; tryb single wybiera jeden. ChipCount to plakietka z licznikiem, używana też wewnątrz kart.`,
				accessibility: `Tryb multiple to zestaw przycisków przełączanych z aria-pressed; tryb single to grupa przycisków opcji. Aktywny chip dostaje znacznik i ramkę w kolorze akcentu, więc stan nie opiera się na kolorze. Liczniki są odczytywane jako ich etykieta, na przykład „42 issues”. Przycisk czyszczenia zwraca fokus na chipy, gdy zniknie. Chipy zawijają się na wąskich ekranach.`
			},
			render: () => (0, Y.jsx)(Ot, {})
		},
		{
			name: `ChipCount`,
			components: [`ChipCount`],
			description: `A small count next to a label: unread items, open issues or results. It caps long numbers, such as 99+.`,
			usage: `<ChipCount value={250} label="250 unread" />`,
			accessibility: `The number is read as the label when one is given, so a screen reader hears "250 unread" rather than "99 plus". It keeps a border under forced colours.`,
			pl: {
				description: `Mały licznik obok etykiety: nieprzeczytane, otwarte zgłoszenia albo wyniki. Skraca długie liczby, na przykład do 99+.`,
				accessibility: `Liczba jest odczytywana jako etykieta, gdy ją podano, więc czytnik ekranu mówi „250 unread”, a nie „99 plus”. Zachowuje ramkę w trybie wymuszonych kolorów.`
			},
			render: () => (0, Y.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-3 text-body`,
				children: [
					(0, Y.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Inbox `, (0, Y.jsx)(S, {
							value: 4,
							label: `4 unread`
						})]
					}),
					(0, Y.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Issues `, (0, Y.jsx)(S, {
							value: 250,
							label: `250 open issues`
						})]
					}),
					(0, Y.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Alerts `, (0, Y.jsx)(S, {
							value: 2,
							tone: `accent`,
							label: `2 new alerts`
						})]
					})
				]
			})
		},
		{
			name: `LanguageSwitch`,
			components: [`LanguageSwitch`],
			description: `A short row of language codes for a top bar. With onChange it switches in place; with href on each language it links to the same page in that language.`,
			usage: `<LanguageSwitch label="Language" value={lang} onChange={setLang}
  languages={[{ code: 'pl', name: 'Polski' }, { code: 'en', name: 'English' }]} />`,
			accessibility: `Buttons mode is a radio group; links mode is a nav with aria-current on the active language and hreflang on each link. Every option is read as its code and its own name, such as "PL Polski", tagged with its lang so the voice switches. The active code is underlined, not only coloured.`,
			pl: {
				description: `Krótki rząd kodów języków do górnego paska. Z onChange przełącza na miejscu; z href przy każdym języku linkuje do tej samej strony w tym języku.`,
				accessibility: `Tryb przycisków to grupa przycisków opcji; tryb linków to nav z aria-current na aktywnym języku i hreflang na każdym linku. Każda opcja jest odczytywana jako kod i własna nazwa, na przykład „PL Polski”, z oznaczeniem lang, więc głos się przełącza. Aktywny kod jest podkreślony, a nie tylko kolorowy.`
			},
			render: () => (0, Y.jsx)(kt, {})
		},
		{
			name: `LanguagePicker`,
			components: [`LanguagePicker`],
			description: `Finds a language in a long list by its own name, English name or code, with an optional field for any other code. Pick it for settings; use LanguageSwitch for two or three languages.`,
			usage: `<LanguagePicker label="Interface language" languages={languages} value={lang} onChange={setLang}
  emptyLabel="No language matches."
  custom={{ label: 'Other code', buttonLabel: 'Use code', errorLabel: 'Enter a code such as ga or pt-BR.' }} />`,
			accessibility: `The search field filters the list as you type; Up and Down move through matches and Enter picks one while focus stays in the field. Names carry their own lang. A wrong custom code marks the field invalid, links the message with aria-describedby and moves focus back to it. The list scrolls inside its own box.`,
			pl: {
				description: `Znajduje język na długiej liście po jego własnej nazwie, nazwie angielskiej albo kodzie, z opcjonalnym polem na dowolny inny kod. Wybierz go do ustawień; dla dwóch lub trzech języków użyj LanguageSwitch.`,
				accessibility: `Pole wyszukiwania filtruje listę podczas pisania; strzałka w górę i w dół przechodzi po dopasowaniach, a Enter wybiera jedno, podczas gdy fokus zostaje w polu. Nazwy mają własne lang. Błędny własny kod oznacza pole jako niepoprawne, łączy komunikat przez aria-describedby i przenosi fokus z powrotem do pola. Lista przewija się we własnym polu.`
			},
			render: () => (0, Y.jsx)(At, {})
		},
		{
			name: `LanguageBanner`,
			components: [`LanguageBanner`],
			description: `Tells the reader what happens to a translation: downloading, offline, failed or ready. It can repeat the message in a second language while the first is still missing.`,
			usage: `<LanguageBanner state="offline" title="Offline" onDismiss={hide} dismissLabel="Dismiss"
  secondary={{ lang: 'pl', text: 'Brak internetu.' }}>
  The translation downloads once you are online.
</LanguageBanner>`,
			accessibility: `A polite status region, so it never interrupts; keep it mounted and change its state so screen readers hear the update. Each state has its own icon and a title word as well as a colour. It never hides itself: it stays until the state changes or the reader dismisses it. The floating placement spans the width on narrow screens.`,
			pl: {
				description: `Mówi czytelnikowi, co dzieje się z tłumaczeniem: pobieranie, offline, niepowodzenie albo gotowe. Może powtórzyć komunikat w drugim języku, gdy pierwszego jeszcze brakuje.`,
				accessibility: `Region statusu typu polite, więc nigdy nie przerywa; zostaw go zamontowanego i zmieniaj jego stan, aby czytniki ekranu usłyszały aktualizację. Każdy stan ma własną ikonę i słowo w tytule, a nie tylko kolor. Nigdy sam się nie ukrywa: zostaje, dopóki stan się nie zmieni albo czytelnik go nie zamknie. Umieszczenie pływające rozciąga się na szerokość na wąskich ekranach.`
			},
			render: () => (0, Y.jsx)(jt, {})
		}
	]
};
export { yt as t };
