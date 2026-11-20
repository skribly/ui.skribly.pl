import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { C as n, H as r, Ht as i, Jt as a, Kt as o, M as s, Vt as c, Xt as l, _ as u, d, f, g as p, y as m } from "./useOverflow.Dq483xd0.js";
import { n as h } from "./react-dom.B9zIfLd2.js";
import { a as g } from "./doc.CpwJe6Re.js";
import { t as _ } from "./Button.reJVLFTj.js";
import { v } from "./useCollection.DQc_Iacd.js";
import { n as y, t as b } from "./Link.B8StT9b2.js";
import { n as x } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { d as S, i as C, n as w, t as T } from "./CollectionBuilder.OeX_9-Zv.js";
import { a as ee, c as te, o as ne, u as re } from "./Dialog.RIvfrakQ.js";
import { t as E } from "./ChipCount.Bd_9T2X6.js";
import { n as ie, r as ae, t as oe } from "./TagGroup.yxSMf02S.js";
import { t as se } from "./FilterChips.DYsNpo7Q.js";
import { t as ce } from "./Autocomplete.CGc8yklO.js";
import { n as le } from "./useFormReset.BBxMt31i.js";
import { r as ue } from "./useFormValidation.L_5g13Dg.js";
import { r as D } from "./useTextField.BpC71hWm.js";
import { i as O, t as k } from "./ListBox.8u6ak81Y.js";
import { t as A } from "./SearchField.ZTdvSP7W.js";
import { t as de } from "./TextField.zLlx597q.js";
import { t as j } from "./useFilter.BYYDqA-a.js";
import { n as fe, t as pe } from "./ToggleButton.D_YySXWN.js";
import { a as me, c as he, i as ge, n as _e, o as ve, r as ye, s as be, t as xe } from "./LinkTabs.F2ZXJHN-.js";
import { t as M } from "./Pagination.C3N7H4XP.js";
import { t as N } from "./Segmented.Dipfd2Xh.js";
import { i as Se, n as Ce, r as we, t as Te } from "./Tabs.B6iuPaHH.js";
import { o as Ee } from "./FocusScope.aBBixRPA.js";
var P = {};
P = { breadcrumbs: `عناصر الواجهة` };
var F = {};
F = { breadcrumbs: `Трохи хляб` };
var I = {};
I = { breadcrumbs: `Popis cesty` };
var L = {};
L = { breadcrumbs: `Brødkrummer` };
var R = {};
R = { breadcrumbs: `Breadcrumbs` };
var z = {};
z = { breadcrumbs: `Πλοηγήσεις breadcrumb` };
var B = {};
B = { breadcrumbs: `Breadcrumbs` };
var V = {};
V = { breadcrumbs: `Migas de pan` };
var H = {};
H = { breadcrumbs: `Lingiread` };
var U = {};
U = { breadcrumbs: `Navigointilinkit` };
var W = {};
W = { breadcrumbs: `Chemin de navigation` };
var De = {};
De = { breadcrumbs: `שבילי ניווט` };
var Oe = {};
Oe = { breadcrumbs: `Navigacijski putovi` };
var ke = {};
ke = { breadcrumbs: `Morzsamenü` };
var Ae = {};
Ae = { breadcrumbs: `Breadcrumb` };
var je = {};
je = { breadcrumbs: `パンくずリスト` };
var Me = {};
Me = { breadcrumbs: `탐색 표시` };
var Ne = {};
Ne = { breadcrumbs: `Naršymo kelias` };
var Pe = {};
Pe = { breadcrumbs: `Atpakaļceļi` };
var Fe = {};
Fe = { breadcrumbs: `Navigasjonsstier` };
var Ie = {};
Ie = { breadcrumbs: `Broodkruimels` };
var Le = {};
Le = { breadcrumbs: `Struktura nawigacyjna` };
var Re = {};
Re = { breadcrumbs: `Caminho detalhado` };
var ze = {};
ze = { breadcrumbs: `Categorias` };
var Be = {};
Be = { breadcrumbs: `Miez de pâine` };
var Ve = {};
Ve = { breadcrumbs: `Навигация` };
var He = {};
He = { breadcrumbs: `Navigačné prvky Breadcrumbs` };
var G = {};
G = { breadcrumbs: `Drobtine` };
var Ue = {};
Ue = { breadcrumbs: `Putanje navigacije` };
var We = {};
We = { breadcrumbs: `Sökvägar` };
var Ge = {};
Ge = { breadcrumbs: `İçerik haritaları` };
var Ke = {};
Ke = { breadcrumbs: `Навігаційна стежка` };
var qe = {};
qe = { breadcrumbs: `导航栏` };
var Je = {};
Je = { breadcrumbs: `導覽列` };
var Ye = {};
Ye = {
	"ar-AE": P,
	"bg-BG": F,
	"cs-CZ": I,
	"da-DK": L,
	"de-DE": R,
	"el-GR": z,
	"en-US": B,
	"es-ES": V,
	"et-EE": H,
	"fi-FI": U,
	"fr-FR": W,
	"he-IL": De,
	"hr-HR": Oe,
	"hu-HU": ke,
	"it-IT": Ae,
	"ja-JP": je,
	"ko-KR": Me,
	"lt-LT": Ne,
	"lv-LV": Pe,
	"nb-NO": Fe,
	"nl-NL": Ie,
	"pl-PL": Le,
	"pt-BR": Re,
	"pt-PT": ze,
	"ro-RO": Be,
	"ru-RU": Ve,
	"sk-SK": He,
	"sl-SI": G,
	"sr-SP": Ue,
	"sv-SE": We,
	"tr-TR": Ge,
	"uk-UA": Ke,
	"zh-CN": qe,
	"zh-TW": Je
};
function Xe(e) {
	return e && e.__esModule ? e.default : e;
}
function Ze(e) {
	let { "aria-label": t, ...n } = e, i = x(Xe(Ye), `@react-aria/breadcrumbs`);
	return { navProps: {
		...r(n, { labelable: !0 }),
		"aria-label": t || i.format(`breadcrumbs`)
	} };
}
var K = t(h(), 1), q = (0, K.createContext)(null), Qe = (0, K.forwardRef)(function(e, t) {
	[e, t] = c(e, t, q);
	let { CollectionRoot: n } = (0, K.useContext)(v), { navProps: i } = Ze(e), a = r(e, {
		global: !0,
		labelable: !0
	});
	return K.createElement(w, { content: K.createElement(C, e) }, (r) => K.createElement(o.ol, {
		render: e.render,
		ref: t,
		...l(a, i),
		slot: e.slot || void 0,
		style: e.style,
		className: e.className ?? `react-aria-Breadcrumbs`
	}, K.createElement(q.Provider, { value: e }, K.createElement(n, { collection: r }))));
}), $e = class extends S {
	static {
		this.type = `item`;
	}
}, et = T($e, function(e, t, n) {
	let s = n.nextKey == null, { isDisabled: c, onAction: l } = a(q), u = {
		"aria-current": s ? `page` : void 0,
		isDisabled: c || s,
		onPress: () => l?.(n.key)
	}, d = i({
		...n.props,
		children: n.rendered,
		values: {
			isDisabled: c || s,
			isCurrent: s
		},
		defaultClassName: `react-aria-Breadcrumb`
	}), f = r(e, {
		global: !0,
		labelable: !0
	});
	return delete f.id, K.createElement(o.li, {
		...f,
		...d,
		ref: t,
		"data-disabled": c || s || void 0,
		"data-current": s || void 0
	}, K.createElement(y.Provider, { value: u }, d.children));
}), J = p(), tt = `inline-block max-w-[16rem] cursor-pointer truncate rounded-sm px-1 align-middle leading-6 text-muted underline-offset-2 transition-colors data-hovered:text-fg data-hovered:underline data-pressed:text-fg data-current:cursor-default data-current:font-medium data-current:text-fg data-current:no-underline`, nt = (0, J.jsx)(d, {
	name: `chevron.right`,
	"aria-hidden": `true`,
	className: `mx-0.5 size-3.5 shrink-0 text-muted`
});
function rt({ label: e, items: t, maxItems: n = 4, moreLabel: r, onAction: i, container: a, className: o }) {
	let s = (0, K.useMemo)(() => {
		let e = t.map((e) => ({
			kind: `item`,
			item: e
		}));
		return t.length <= Math.max(n, 3) || r === void 0 ? e : [
			...e.slice(0, 1),
			{
				kind: `more`,
				label: r,
				items: t.slice(1, -2)
			},
			...e.slice(-2)
		];
	}, [
		t,
		n,
		r
	]);
	return (0, J.jsx)(`nav`, {
		"aria-label": e,
		className: u(`min-w-0 text-caption`, o),
		children: (0, J.jsx)(Qe, {
			...i ? { onAction: i } : {},
			className: `m-0 flex list-none flex-wrap items-center gap-y-1 p-0`,
			children: s.map((e, t) => {
				let n = t === s.length - 1;
				return e.kind === `more` ? (0, J.jsxs)(et, {
					id: `more`,
					className: `flex items-center`,
					children: [(0, J.jsxs)(ee, { children: [(0, J.jsx)(m, {
						"aria-label": e.label,
						className: `inline-grid size-6 cursor-pointer place-items-center rounded-sm text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
						children: (0, J.jsx)(d, {
							name: `action.more`,
							"aria-hidden": `true`,
							className: `size-4`
						})
					}), (0, J.jsx)(re, {
						...a ? { UNSTABLE_portalContainer: a } : {},
						placement: `bottom start`,
						className: `max-w-[calc(100vw-2rem)] min-w-48 rounded-md border border-border bg-surface p-1 text-fg shadow-md data-entering:animate-fade`,
						children: (0, J.jsx)(te, {
							...i ? { onAction: i } : {},
							className: `max-h-[50vh] overflow-auto outline-none`,
							children: e.items.map((e) => (0, J.jsx)(ne, {
								id: e.id,
								textValue: e.label,
								...e.href === void 0 ? {} : { href: e.href },
								className: `flex min-h-control-sm cursor-pointer items-center rounded-sm px-2 text-body break-words text-fg data-focused:bg-hover forced-colors:data-focused:outline-2 forced-colors:data-focused:outline-[Highlight]`,
								children: e.label
							}, e.id))
						})
					})] }), nt]
				}, `more`) : (0, J.jsxs)(et, {
					id: e.item.id,
					className: `flex min-w-0 items-center`,
					children: [(0, J.jsx)(b, {
						...e.item.href === void 0 ? {} : { href: e.item.href },
						className: tt,
						children: e.item.label
					}), n ? null : nt]
				}, e.item.id);
			})
		})
	});
}
var it = {
	browser: `items-end gap-0.5 px-2 pt-1.5`,
	editor: `items-stretch gap-px`
}, at = {
	browser: `h-control-md max-w-56 rounded-t-lg border border-b-0 border-transparent pr-1 pl-2.5 data-selected:border-border data-selected:bg-surface data-selected:text-fg data-selected:data-hovered:bg-surface`,
	editor: `h-control-md max-w-60 border-r border-border pr-1 pl-2.5 data-selected:bg-bg data-selected:text-fg data-selected:data-hovered:bg-bg before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-0.5 data-selected:before:bg-accent before:forced-color-adjust-none forced-colors:data-selected:before:bg-[Highlight]`
};
function ot({ label: e, items: t, selectedId: n, onSelect: r, onClose: i, closeLabel: a, dirtyLabel: o, variant: s = `editor`, emptyLabel: c, actions: l, className: f }) {
	let p = (0, K.useMemo)(() => n === null ? [] : [n], [n]), h = (0, K.useMemo)(() => t.filter((e) => e.isDisabled).map((e) => e.id), [t]), g = (0, K.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && r(t);
	}, [r]), _ = (0, K.useCallback)((e) => {
		for (let t of e) i(t);
	}, [i]), v = (0, K.useCallback)(() => c ? (0, J.jsx)(`span`, {
		className: `px-3 text-caption text-muted`,
		children: c
	}) : null, [c]);
	return (0, J.jsxs)(`div`, {
		className: u(`flex min-w-0 items-stretch border-b border-border bg-side`, f),
		children: [(0, J.jsx)(ie, {
			"aria-label": e,
			selectionMode: `single`,
			disallowEmptySelection: !0,
			selectedKeys: p,
			disabledKeys: h,
			onSelectionChange: g,
			onRemove: _,
			className: `min-w-0 flex-1`,
			children: (0, J.jsx)(ae, {
				renderEmptyState: v,
				className: u(`flex min-h-control-md min-w-0 overflow-x-auto overscroll-x-contain [scrollbar-width:thin]`, it[s]),
				children: t.map((e) => (0, J.jsxs)(oe, {
					id: e.id,
					textValue: e.isDirty && o ? `${e.label}, ${o}` : e.label,
					className: u(`group relative flex shrink-0 cursor-pointer items-center gap-1.5 text-caption whitespace-nowrap text-muted transition-colors focus-visible:-outline-offset-2`, `data-hovered:bg-hover data-hovered:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50`, at[s]),
					children: [
						(0, J.jsx)(`span`, {
							"aria-hidden": `true`,
							className: `inline-flex shrink-0 [&_svg]:size-3.5`,
							children: e.icon
						}),
						(0, J.jsx)(`span`, {
							className: `min-w-0 truncate`,
							children: e.label
						}),
						(0, J.jsx)(m, {
							slot: `remove`,
							"aria-label": a,
							className: u(`relative grid size-6 shrink-0 cursor-pointer place-items-center rounded-sm text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`, e.isDirty ? `` : `opacity-0 group-data-hovered:opacity-100 group-data-selected:opacity-100 group-data-focus-visible:opacity-100 data-focus-visible:opacity-100 pointer-coarse:opacity-100`),
							children: e.isDirty ? (0, J.jsxs)(J.Fragment, { children: [(0, J.jsx)(`span`, {
								"aria-hidden": `true`,
								className: `size-2 rounded-full bg-fg group-data-hovered:hidden group-data-focus-visible:hidden forced-color-adjust-none forced-colors:bg-[CanvasText]`
							}), (0, J.jsx)(d, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `hidden size-3.5 group-data-hovered:block group-data-focus-visible:block`
							})] }) : (0, J.jsx)(d, {
								name: `action.close`,
								"aria-hidden": `true`,
								className: `size-3.5`
							})
						})
					]
				}, e.id))
			})
		}), l ? (0, J.jsx)(`div`, {
			className: `flex shrink-0 items-center gap-1 px-1`,
			children: l
		}) : null]
	});
}
var st = f(`nav.languages`), ct = f(`status.offline`), lt = f(`status.error`), ut = f(`status.ok`), dt = {
	downloading: {
		box: `border-l-info`,
		icon: `text-info`,
		Icon: st
	},
	offline: {
		box: `border-l-warn`,
		icon: `text-warn`,
		Icon: ct
	},
	error: {
		box: `border-l-danger`,
		icon: `text-danger`,
		Icon: lt
	},
	done: {
		box: `border-l-ok`,
		icon: `text-ok`,
		Icon: ut
	}
};
function ft({ percentage: e }) {
	let t = (0, K.useMemo)(() => ({ width: `${e}%` }), [e]);
	return (0, J.jsx)(`span`, {
		className: `h-1.5 flex-1 overflow-hidden rounded-full bg-sunken forced-colors:border forced-colors:border-[CanvasText]`,
		children: (0, J.jsx)(`span`, {
			className: `block h-full rounded-full bg-accent transition-[width] duration-(--sk-duration-base) forced-color-adjust-none forced-colors:bg-[Highlight]`,
			style: t
		})
	});
}
function Y({ state: e, title: t, children: r, secondary: i, progress: a, progressLabel: o, onDismiss: s, dismissLabel: c, placement: l = `inline`, className: f }) {
	let p = dt[e], h = p.Icon;
	return (0, J.jsxs)(`output`, {
		className: u(`flex min-w-0 items-start gap-3 rounded-lg border border-l-4 border-border bg-surface p-3 text-body text-fg shadow-md`, p.box, l === `floating` ? `fixed inset-x-4 bottom-4 z-(--sk-z-toast) animate-rise sm:right-auto sm:max-w-md` : `w-full max-w-md`, f),
		children: [
			(0, J.jsx)(h, {
				"aria-hidden": `true`,
				className: u(`mt-0.5 size-4 shrink-0`, p.icon)
			}),
			(0, J.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-1`,
				children: [
					(0, J.jsx)(`span`, {
						className: `font-semibold`,
						children: t
					}),
					r ? (0, J.jsx)(`span`, {
						className: `break-words`,
						children: r
					}) : null,
					i ? (0, J.jsx)(`span`, {
						lang: i.lang,
						className: `text-caption break-words text-muted`,
						children: i.text
					}) : null,
					e === `downloading` && a !== void 0 ? (0, J.jsx)(n, {
						value: a,
						"aria-label": o ?? t,
						className: `mt-1 flex items-center gap-2`,
						children: ({ percentage: e, valueText: t }) => (0, J.jsxs)(J.Fragment, { children: [(0, J.jsx)(ft, { percentage: e ?? 0 }), (0, J.jsx)(`span`, {
							className: `text-caption text-muted tabular-nums`,
							children: t
						})] })
					}) : null
				]
			}),
			s && c ? (0, J.jsx)(m, {
				"aria-label": c,
				onPress: s,
				className: `-m-1 inline-grid size-7 shrink-0 cursor-pointer place-items-center rounded-md text-muted data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken`,
				children: (0, J.jsx)(d, {
					name: `action.close`,
					"aria-hidden": `true`,
					className: `size-4`
				})
			}) : null
		]
	});
}
var pt = /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?$/i, mt = `group flex min-h-control-sm cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-body text-fg outline-none data-hovered:bg-hover data-focused:bg-hover data-selected:bg-selected data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focused:outline-2 forced-colors:data-focused:outline-[Highlight]`;
function ht({ languages: e, value: t, onChange: n, label: r, searchPlaceholder: i, emptyLabel: a, custom: o, children: c, className: l }) {
	let { contains: f } = j({ sensitivity: `base` }), [p, h] = (0, K.useState)(``), g = (0, K.useMemo)(() => [t], [t]), _ = (0, K.useMemo)(() => e.some((e) => e.code === t) ? e : [{
		code: t,
		name: t
	}, ...e], [e, t]), v = (0, K.useCallback)((e, t) => f(e, t), [f]), y = (0, K.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && n(String(t));
	}, [n]), b = o?.isValid, x = o?.errorLabel, S = (0, K.useCallback)((e) => (b ?? ((e) => pt.test(e)))(e.trim()) ? null : x ?? null, [b, x]), C = (0, K.useCallback)((e) => {
		e.preventDefault(), n(p.trim());
	}, [p, n]), w = (0, K.useCallback)(() => (0, J.jsx)(`p`, {
		className: `m-0 px-2 py-3 text-caption text-muted`,
		children: a
	}), [a]);
	return (0, J.jsxs)(`div`, {
		className: u(`flex w-full max-w-sm min-w-0 flex-col gap-2`, l),
		children: [
			(0, J.jsxs)(ce, {
				filter: v,
				children: [(0, J.jsxs)(A, {
					className: `group flex flex-col gap-1`,
					children: [(0, J.jsx)(s, {
						className: `text-caption font-medium text-fg`,
						children: r
					}), (0, J.jsxs)(`div`, {
						className: `flex h-control-md items-center gap-2 rounded-md border border-border-strong bg-input px-2 focus-within:border-accent`,
						children: [(0, J.jsx)(d, {
							name: `action.search`,
							"aria-hidden": `true`,
							className: `size-4 shrink-0 text-muted`
						}), (0, J.jsx)(D, {
							...i === void 0 ? {} : { placeholder: i },
							className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
						})]
					})]
				}), (0, J.jsx)(k, {
					"aria-label": r,
					items: _,
					selectionMode: `single`,
					disallowEmptySelection: !0,
					selectedKeys: g,
					onSelectionChange: y,
					renderEmptyState: w,
					className: `max-h-56 overflow-y-auto overscroll-contain rounded-md border border-border bg-surface p-1`,
					children: (e) => (0, J.jsxs)(O, {
						id: e.code,
						textValue: `${e.name} ${e.code}`,
						className: mt,
						children: [
							(0, J.jsx)(`span`, {
								lang: e.code,
								className: `min-w-0 flex-1 break-words`,
								children: e.name
							}),
							(0, J.jsx)(`span`, {
								className: `font-mono text-caption text-muted`,
								children: e.code
							}),
							(0, J.jsx)(d, {
								name: `action.check`,
								"aria-hidden": `true`,
								className: `invisible size-4 shrink-0 text-accent-text group-data-selected:visible`
							})
						]
					})
				})]
			}),
			o ? (0, J.jsxs)(ue, {
				onSubmit: C,
				validationBehavior: `native`,
				className: `flex flex-wrap items-start gap-2`,
				children: [(0, J.jsxs)(de, {
					value: p,
					onChange: h,
					validate: S,
					className: `flex min-w-0 flex-1 flex-col gap-1`,
					children: [
						(0, J.jsx)(s, {
							className: `text-caption font-medium text-fg`,
							children: o.label
						}),
						(0, J.jsx)(D, {
							...o.placeholder === void 0 ? {} : { placeholder: o.placeholder },
							className: `h-control-md min-w-0 rounded-md border border-border-strong bg-input px-2 text-body text-fg placeholder:text-muted data-invalid:border-danger`
						}),
						(0, J.jsxs)(le, {
							className: `flex items-start gap-1 text-caption text-danger`,
							children: [(0, J.jsx)(d, {
								name: `status.error`,
								"aria-hidden": `true`,
								className: `mt-px size-3.5 shrink-0`
							}), (0, J.jsx)(`span`, { children: o.errorLabel })]
						})
					]
				}), (0, J.jsx)(m, {
					type: `submit`,
					className: `mt-5 inline-flex h-control-md cursor-pointer items-center rounded-md border border-border-strong bg-surface px-3 text-body font-medium text-fg data-hovered:bg-hover data-pressed:bg-sunken`,
					children: o.buttonLabel
				})]
			}) : null,
			c
		]
	});
}
var gt = `inline-flex h-control-sm min-w-control-sm cursor-pointer items-center justify-center rounded-md px-1.5 text-caption font-semibold text-muted uppercase no-underline transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken data-selected:text-fg data-selected:underline data-selected:decoration-2 data-selected:underline-offset-4 aria-[current=true]:text-fg aria-[current=true]:underline aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-4`;
function _t({ language: e }) {
	return (0, J.jsxs)(J.Fragment, { children: [(0, J.jsx)(`span`, {
		"aria-hidden": `true`,
		children: e.code
	}), (0, J.jsx)(`span`, {
		className: `sr-only`,
		children: `${e.code.toUpperCase()} ${e.name}`
	})] });
}
function vt({ language: e, isCurrent: t }) {
	let n = (0, K.useCallback)(({ children: t, ...n }) => (0, J.jsx)(`a`, {
		...n,
		...e.href === void 0 ? {} : { hrefLang: e.code },
		children: t
	}), [e.code, e.href]);
	return (0, J.jsx)(b, {
		...e.href === void 0 ? {} : { href: e.href },
		lang: e.code,
		...t ? { "aria-current": `true` } : {},
		render: n,
		className: gt,
		children: (0, J.jsx)(_t, { language: e })
	});
}
function yt({ label: e, languages: t, value: n, onChange: r, className: i }) {
	let a = (0, K.useMemo)(() => [n], [n]), o = (0, K.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e];
		t !== void 0 && r?.(String(t));
	}, [r]);
	return r ? (0, J.jsx)(fe, {
		"aria-label": e,
		selectionMode: `single`,
		disallowEmptySelection: !0,
		selectedKeys: a,
		onSelectionChange: o,
		className: u(`flex items-center gap-1`, i),
		children: t.map((e) => (0, J.jsx)(pe, {
			id: e.code,
			lang: e.code,
			className: gt,
			children: (0, J.jsx)(_t, { language: e })
		}, e.code))
	}) : (0, J.jsx)(`nav`, {
		"aria-label": e,
		className: i,
		children: (0, J.jsx)(`ul`, {
			className: `m-0 flex list-none items-center gap-1 p-0`,
			children: t.map((e) => (0, J.jsx)(`li`, { children: (0, J.jsx)(vt, {
				language: e,
				isCurrent: e.code === n
			}) }, e.code))
		})
	});
}
var bt = `abcdefghijklmnopqrstuvwxyz`, xt = /^[a-z]{2,3}(?:-[a-z\d]{2,8})*$/i, St = [], X = null, Ct = null;
function Z() {
	return Ct ??= new Intl.DisplayNames([`en`], {
		type: `language`,
		fallback: `none`
	}), Ct;
}
function wt() {
	if (X) return X;
	let e = Z(), t = [];
	for (let n of bt) for (let r of bt) {
		let i = n + r;
		e.of(i) && Intl.getCanonicalLocales(i)[0] === i && t.push(i);
	}
	return X = t, t;
}
function Q(e) {
	let t = e.trim().replaceAll(`_`, `-`);
	if (!xt.test(t)) return null;
	try {
		let [e] = Intl.getCanonicalLocales(t);
		if (!e) return null;
		let n = Z(), r = new Intl.Locale(e).language;
		return n.of(r) && n.of(e) ? e : null;
	} catch {
		return null;
	}
}
function Tt(e) {
	let t = new Intl.Locale(e);
	return (t.getTextInfo?.() ?? t.textInfo)?.direction === `rtl` ? `rtl` : `ltr`;
}
function Et(e, t = wt()) {
	let n = new Intl.DisplayNames([e], {
		type: `language`,
		fallback: `code`
	}), r = new Intl.Collator(e), i = new Set(), a = [];
	for (let e of t) {
		let t = Q(e);
		if (!t || i.has(t)) continue;
		i.add(t);
		let r = new Intl.DisplayNames([t], {
			type: `language`,
			fallback: `none`
		}).of(t) ?? null, o = n.of(t) ?? t, s = r !== null && r === Z().of(t) && new Intl.Locale(t).language !== `en`;
		a.push({
			tag: t,
			name: o,
			nativeName: r && !s && r !== o ? r : null,
			direction: Tt(t)
		});
	}
	return a.toSorted((e, t) => r.compare(e.name, t.name));
}
var Dt = `group flex min-h-control-sm cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-body text-fg outline-none data-hovered:bg-hover data-focused:bg-hover data-selected:bg-selected data-disabled:cursor-not-allowed data-disabled:text-muted data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focused:outline-2 forced-colors:data-focused:outline-[Highlight]`;
function Ot({ label: e, displayLocale: t, onChange: n, value: r = null, locales: i, disabledLocales: a = St, disabledLabel: o, rtlLabel: c, searchPlaceholder: l, emptyLabel: f, moreLabel: p, limit: m = 50, className: h }) {
	let { contains: g, startsWith: _ } = j({ sensitivity: `base` }), [v, y] = (0, K.useState)(``), b = (0, K.useMemo)(() => Et(t, [
		...wt(),
		...i ?? [],
		...r ? [r] : []
	]), [
		t,
		i,
		r
	]), x = (0, K.useMemo)(() => new Set(a.map((e) => Q(e) ?? e)), [a]), S = (0, K.useMemo)(() => {
		let e = v.trim();
		if (!e) return b;
		let n = Q(e), r = n && !b.some((e) => e.tag === n) ? Et(t, [n]) : [], i = (t) => t.tag.toLowerCase() === e.toLowerCase().replaceAll(`_`, `-`) ? 0 : _(t.name, e) || t.nativeName && _(t.nativeName, e) ? 1 : _(t.tag, e) ? 2 : 3, a = b.filter((t) => g(t.name, e) || t.nativeName !== null && g(t.nativeName, e) || _(t.tag, e));
		return [...r, ...a.toSorted((e, t) => i(e) - i(t))];
	}, [
		b,
		v,
		t,
		g,
		_
	]), C = S.slice(0, m), w = S.length - C.length, T = (0, K.useMemo)(() => new Map(S.map((e) => [e.tag, e])), [S]), ee = (0, K.useMemo)(() => r ? [Q(r) ?? r] : [], [r]), te = (0, K.useMemo)(() => [...x], [x]), ne = (0, K.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e], r = t === void 0 ? void 0 : T.get(String(t));
		r && n(r.tag, r);
	}, [T, n]), re = (0, K.useCallback)(() => (0, J.jsx)(`p`, {
		className: `m-0 px-2 py-3 text-caption text-muted`,
		children: f
	}), [f]);
	return (0, J.jsxs)(`div`, {
		className: u(`flex w-full max-w-md min-w-0 flex-col gap-2`, h),
		children: [(0, J.jsxs)(ce, {
			inputValue: v,
			onInputChange: y,
			children: [(0, J.jsxs)(A, {
				className: `group flex flex-col gap-1`,
				children: [(0, J.jsx)(s, {
					className: `text-caption font-medium text-fg`,
					children: e
				}), (0, J.jsxs)(`div`, {
					className: `flex h-control-md items-center gap-2 rounded-md border border-border-strong bg-input px-2 focus-within:border-accent`,
					children: [(0, J.jsx)(d, {
						name: `action.search`,
						"aria-hidden": `true`,
						className: `size-4 shrink-0 text-muted`
					}), (0, J.jsx)(D, {
						...l === void 0 ? {} : { placeholder: l },
						className: `h-full min-w-0 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden`
					})]
				})]
			}), (0, J.jsx)(k, {
				"aria-label": e,
				items: C,
				selectionMode: `single`,
				selectedKeys: ee,
				disabledKeys: te,
				onSelectionChange: ne,
				renderEmptyState: re,
				className: `max-h-72 overflow-y-auto overscroll-contain rounded-md border border-border bg-surface p-1`,
				children: (e) => (0, J.jsxs)(O, {
					id: e.tag,
					textValue: [
						e.name,
						e.nativeName,
						e.tag
					].filter(Boolean).join(` `),
					className: Dt,
					children: [
						(0, J.jsxs)(`span`, {
							className: `flex min-w-0 flex-1 flex-col`,
							children: [(0, J.jsx)(`span`, {
								className: `break-words`,
								children: e.name
							}), e.nativeName ? (0, J.jsx)(`span`, {
								lang: e.tag,
								dir: e.direction,
								className: `text-caption break-words text-muted`,
								children: e.nativeName
							}) : null]
						}),
						c && e.direction === `rtl` ? (0, J.jsx)(`span`, {
							className: `rounded-sm border border-border px-1 text-caption text-muted`,
							children: c
						}) : null,
						o && x.has(e.tag) ? (0, J.jsx)(`span`, {
							className: `text-caption text-muted`,
							children: o
						}) : null,
						(0, J.jsx)(`span`, {
							className: `font-mono text-caption text-muted`,
							children: e.tag
						}),
						(0, J.jsx)(d, {
							name: `action.check`,
							"aria-hidden": `true`,
							className: `invisible size-4 shrink-0 text-accent-text group-data-selected:visible`
						})
					]
				})
			})]
		}), w > 0 && p ? (0, J.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: p(w)
		}) : null]
	});
}
function $({ className: e, ...t }) {
	return (0, J.jsx)(Te, {
		...t,
		className: u(`min-w-0 flex-1 rounded-md pt-4 text-body text-fg data-entering:animate-fade`, e)
	});
}
var kt = `transition-[translate,width,height] duration-(--sk-duration-base) ease-out motion-reduce:transition-none`;
function At({ label: e, tabs: t, children: n, className: r, listClassName: i, orientation: a = `horizontal`, ...o }) {
	let s = a === `vertical`;
	return (0, J.jsxs)(we, {
		...o,
		orientation: a,
		className: u(`flex min-w-0`, s ? `flex-col gap-4 sm:flex-row` : `flex-col`, r),
		children: [(0, J.jsx)(Se, {
			"aria-label": e,
			className: u(s ? `flex shrink-0 flex-col gap-0.5 border-l border-border sm:w-56` : u(ve, `border-b border-border`), i),
			children: t.map((e) => (0, J.jsxs)(Ce, {
				id: e.id,
				...e.textValue === void 0 ? {} : { textValue: e.textValue },
				...e.isDisabled ? { isDisabled: !0 } : {},
				className: u(_e, me, s ? be : ye),
				children: [
					e.icon,
					(0, J.jsx)(`span`, {
						className: s ? `min-w-0 flex-1` : void 0,
						children: e.label
					}),
					e.count === void 0 ? null : ` `,
					e.count === void 0 ? null : (0, J.jsx)(E, {
						value: e.count,
						...e.countLabel === void 0 ? {} : { label: e.countLabel }
					}),
					(0, J.jsx)(Ee, { className: u(s ? he : ge, kt) })
				]
			}, e.id))
		}), n]
	});
}
var jt = {
	missing: {
		icon: `status.unchecked`,
		tone: `border-border-strong bg-surface text-muted`
	},
	draft: {
		icon: `action.edit`,
		tone: `border-transparent bg-info-soft text-info`
	},
	outdated: {
		icon: `status.warning`,
		tone: `border-transparent bg-warn-soft text-warn`
	},
	done: {
		icon: `status.ok`,
		tone: `border-transparent bg-ok-soft text-ok`
	}
}, Mt = `inline-flex min-h-6 max-w-full min-w-0 items-center gap-1 rounded-full border px-2 py-0.5 text-caption font-medium forced-colors:border-[CanvasText]`, Nt = `cursor-pointer outline-none data-hovered:brightness-95 data-pressed:brightness-90 data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid`;
function Pt(e, t) {
	if (!e) return t;
	try {
		return e.of(t) ?? t;
	} catch {
		return t;
	}
}
function Ft({ locale: e, name: t, tone: n, onSelect: r, children: i }) {
	let a = (0, K.useCallback)(() => r(e), [r, e]);
	return (0, J.jsx)(m, {
		"aria-label": t,
		onPress: a,
		className: u(Mt, n, Nt),
		children: i
	});
}
function It({ label: e, entries: t, stateLabels: n, displayLocale: r, onSelect: i, summary: a, compact: o = !1, className: s }) {
	let c = (0, K.useMemo)(() => r ? new Intl.DisplayNames([r], {
		type: `language`,
		fallback: `code`
	}) : null, [r]), l = (0, K.useMemo)(() => {
		let e = {
			missing: 0,
			draft: 0,
			outdated: 0,
			done: 0
		};
		for (let n of t) e[n.state] += 1;
		return e;
	}, [t]);
	return (0, J.jsxs)(`div`, {
		className: u(`flex min-w-0 flex-col gap-1.5`, s),
		children: [(0, J.jsx)(`ul`, {
			"aria-label": e,
			className: `m-0 flex list-none flex-wrap gap-1.5 p-0`,
			children: t.map((e) => {
				let t = jt[e.state], r = Pt(c, e.locale), a = n[e.state], s = (0, J.jsxs)(J.Fragment, { children: [
					(0, J.jsx)(d, {
						name: t.icon,
						"aria-hidden": !0,
						className: `size-3.5 shrink-0`
					}),
					(0, J.jsx)(`span`, {
						className: `min-w-0 truncate`,
						children: r
					}),
					o ? (0, J.jsx)(`span`, {
						className: `sr-only`,
						children: `: ${a}`
					}) : (0, J.jsxs)(J.Fragment, { children: [(0, J.jsx)(`span`, {
						"aria-hidden": !0,
						children: `·`
					}), (0, J.jsx)(`span`, {
						className: `shrink-0`,
						children: a
					})] })
				] });
				return (0, J.jsx)(`li`, {
					"data-state": e.state,
					className: `flex min-w-0`,
					children: i ? (0, J.jsx)(Ft, {
						locale: e.locale,
						name: `${r}: ${a}`,
						tone: t.tone,
						onSelect: i,
						children: s
					}) : (0, J.jsx)(`span`, {
						className: u(Mt, t.tone),
						children: s
					})
				}, e.locale);
			})
		}), a ? (0, J.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: a(l, t.length)
		}) : null]
	});
}
var Lt = e({ default: () => nn }), Rt = [
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
function zt() {
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [(0, J.jsxs)(At, {
			label: `Project sections`,
			tabs: [
				{
					id: `board`,
					label: `Board`,
					icon: (0, J.jsx)(d, {
						name: `nav.board`,
						"aria-hidden": `true`
					})
				},
				{
					id: `list`,
					label: `List`,
					icon: (0, J.jsx)(d, {
						name: `layout.list`,
						"aria-hidden": `true`
					}),
					count: 128,
					countLabel: `128 issues`
				},
				{
					id: `settings`,
					label: `Settings`,
					icon: (0, J.jsx)(d, {
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
				(0, J.jsx)($, {
					id: `board`,
					children: `The board groups issues by status.`
				}),
				(0, J.jsx)($, {
					id: `list`,
					children: `The list shows every issue, sorted by update.`
				}),
				(0, J.jsx)($, {
					id: `settings`,
					children: `Members, labels and workflow.`
				}),
				(0, J.jsx)($, {
					id: `archive`,
					children: `Archived issues.`
				})
			]
		}), (0, J.jsxs)(At, {
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
				(0, J.jsx)($, {
					id: `profile`,
					className: `pt-0`,
					children: `Name, photo and language.`
				}),
				(0, J.jsx)($, {
					id: `notifications`,
					className: `pt-0`,
					children: `Choose what reaches your inbox.`
				}),
				(0, J.jsx)($, {
					id: `security`,
					className: `pt-0`,
					children: `Passkeys and sessions.`
				})
			]
		})]
	});
}
function Bt() {
	let [e, t] = (0, K.useState)(`board`), [n, r] = (0, K.useState)(`28`);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col items-start gap-3`,
		children: [
			(0, J.jsx)(N, {
				label: `View`,
				value: e,
				onChange: t,
				options: [
					{
						value: `board`,
						label: `Board`,
						icon: (0, J.jsx)(d, {
							name: `layout.columns-3`,
							"aria-hidden": `true`
						})
					},
					{
						value: `list`,
						label: `List`,
						icon: (0, J.jsx)(d, {
							name: `layout.list`,
							"aria-hidden": `true`
						})
					},
					{
						value: `table`,
						label: `Table`,
						icon: (0, J.jsx)(d, {
							name: `layout.table`,
							"aria-hidden": `true`
						}),
						isDisabled: !0
					}
				]
			}),
			(0, J.jsx)(N, {
				label: `Period`,
				size: `sm`,
				value: n,
				onChange: r,
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
			(0, J.jsx)(`p`, {
				className: `m-0 text-caption text-muted`,
				children: `Showing the ${e} view for ${n} days.`
			})
		]
	});
}
var Vt = [
	{
		id: `app`,
		label: `App.tsx`,
		icon: (0, J.jsx)(d, {
			name: `file.code`,
			"aria-hidden": `true`
		})
	},
	{
		id: `readme`,
		label: `README.md`,
		icon: (0, J.jsx)(d, {
			name: `file.document`,
			"aria-hidden": `true`
		}),
		isDirty: !0
	},
	{
		id: `long`,
		label: `a-very-long-file-name-that-does-not-fit.config.ts`,
		icon: (0, J.jsx)(d, {
			name: `file.code`,
			"aria-hidden": `true`
		})
	}
], Ht = [{
	id: `docs`,
	label: `Documentation`,
	icon: (0, J.jsx)(d, {
		name: `nav.web`,
		"aria-hidden": `true`
	})
}, {
	id: `status`,
	label: `Status page`,
	icon: (0, J.jsx)(d, {
		name: `nav.web`,
		"aria-hidden": `true`
	})
}];
function Ut(e, t, n, r) {
	let i = e.findIndex((e) => e.id === t), a = e.filter((e) => e.id !== t);
	return n === t && r(a[Math.min(i, a.length - 1)]?.id ?? null), a;
}
function Wt() {
	let [e, t] = (0, K.useState)(Vt), [n, r] = (0, K.useState)(`app`), [i, a] = (0, K.useState)(Ht), [o, s] = (0, K.useState)(`docs`);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, J.jsx)(ot, {
				label: `Open files`,
				items: e,
				selectedId: n,
				onSelect: r,
				onClose: (i) => t(Ut(e, i, n, r)),
				closeLabel: `Close`,
				dirtyLabel: `unsaved changes`,
				emptyLabel: `No open files`
			}),
			(0, J.jsx)(ot, {
				label: `Browser tabs`,
				variant: `browser`,
				items: i,
				selectedId: o,
				onSelect: s,
				onClose: (e) => a(Ut(i, e, o, s)),
				closeLabel: `Close`,
				emptyLabel: `No open pages`
			}),
			(0, J.jsx)(_, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => {
					t(Vt), r(`app`), a(Ht), s(`docs`);
				},
				children: `Reopen all tabs`
			})
		]
	});
}
function Gt() {
	let [e, t] = (0, K.useState)(null);
	return (0, J.jsxs)(`div`, {
		ref: t,
		className: `flex flex-col gap-3`,
		children: [(0, J.jsx)(rt, {
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
		}), (0, J.jsx)(rt, {
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
function Kt() {
	let [e, t] = (0, K.useState)(6), n = {
		previousLabel: `Previous`,
		nextLabel: `Next`,
		firstLabel: `First page`,
		lastLabel: `Last page`,
		pageLabel: (e) => `Page ${e}`,
		statusLabel: (e, t) => `Page ${e} of ${t}`
	};
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [(0, J.jsx)(M, {
			...n,
			label: `Issue pages`,
			page: e,
			pageCount: 24,
			onChange: t,
			summary: `Showing ${(e - 1) * 20 + 1}–${e * 20} of 472`
		}), (0, J.jsx)(M, {
			...n,
			label: `Short list pages`,
			page: 1,
			pageCount: 3,
			getHref: (e) => `#page-${e}`
		})]
	});
}
function qt() {
	let [e, t] = (0, K.useState)([`open`]), [n, r] = (0, K.useState)([`all`]);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, J.jsx)(se, {
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
		}), (0, J.jsx)(se, {
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
function Jt() {
	let [e, t] = (0, K.useState)(`pl`);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col items-start gap-3`,
		children: [(0, J.jsx)(yt, {
			label: `Language`,
			languages: Rt.slice(0, 2),
			value: e,
			onChange: t
		}), (0, J.jsx)(yt, {
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
var Yt = {
	en: {
		label: `Add a language`,
		placeholder: `Name, own name or tag such as pt-BR`,
		empty: `No language matches. Type its tag, such as yue or sr-Latn.`,
		added: `Added`,
		rtl: `Right to left`,
		more: (e) => `${e} more, keep typing to narrow the list`,
		site: `Languages of the site`
	},
	pl: {
		label: `Dodaj język`,
		placeholder: `Nazwa, nazwa własna albo tag, na przykład pt-BR`,
		empty: `Żaden język nie pasuje. Wpisz jego tag, na przykład yue albo sr-Latn.`,
		added: `Dodany`,
		rtl: `Od prawej do lewej`,
		more: (e) => `Jeszcze ${e}, pisz dalej, aby zawęzić listę`,
		site: `Języki witryny`
	}
};
function Xt() {
	let e = (0, K.useContext)(g) === `pl` ? `pl` : `en`, t = Yt[e], [n, r] = (0, K.useState)([`pl`, `en`]);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, J.jsx)(Ot, {
			label: t.label,
			displayLocale: e,
			searchPlaceholder: t.placeholder,
			disabledLocales: n,
			disabledLabel: t.added,
			rtlLabel: t.rtl,
			emptyLabel: t.empty,
			moreLabel: t.more,
			limit: 30,
			onChange: (e) => r((t) => t.includes(e) ? t : [...t, e])
		}), (0, J.jsx)(`p`, {
			className: `m-0 text-caption text-muted`,
			children: `${t.site}: ${n.join(`, `)}`
		})]
	});
}
var Zt = {
	en: {
		label: `Translations of this page`,
		states: {
			missing: `Missing`,
			draft: `Draft`,
			outdated: `Outdated`,
			done: `Done`
		},
		summary: (e, t) => `${e.done} of ${t} languages done`,
		opened: `Opened`,
		compact: `Translations, compact`
	},
	pl: {
		label: `Tłumaczenia tej strony`,
		states: {
			missing: `Brak`,
			draft: `Szkic`,
			outdated: `Nieaktualne`,
			done: `Gotowe`
		},
		summary: (e, t) => `Gotowe: ${e.done} z ${t} języków`,
		opened: `Otwarto`,
		compact: `Tłumaczenia, wersja zwarta`
	}
}, Qt = [
	{
		locale: `pl`,
		state: `done`
	},
	{
		locale: `en`,
		state: `done`
	},
	{
		locale: `de`,
		state: `outdated`
	},
	{
		locale: `pt-BR`,
		state: `draft`
	},
	{
		locale: `uk`,
		state: `missing`
	}
];
function $t() {
	let e = (0, K.useContext)(g) === `pl` ? `pl` : `en`, t = Zt[e], [n, r] = (0, K.useState)(null);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, J.jsx)(It, {
				label: t.label,
				entries: Qt,
				stateLabels: t.states,
				displayLocale: e,
				summary: t.summary,
				onSelect: r
			}),
			(0, J.jsx)(`p`, {
				className: `m-0 text-caption text-muted`,
				"aria-live": `polite`,
				children: n ? `${t.opened}: ${n}` : ``
			}),
			(0, J.jsx)(It, {
				label: t.compact,
				entries: Qt,
				stateLabels: t.states,
				compact: !0
			})
		]
	});
}
function en() {
	let [e, t] = (0, K.useState)(`en`);
	return (0, J.jsx)(ht, {
		label: `Interface language`,
		searchPlaceholder: `Name or code`,
		languages: Rt,
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
function tn() {
	let [e, t] = (0, K.useState)(!1);
	return (0, J.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, J.jsx)(Y, {
				state: `downloading`,
				title: `Downloading Deutsch`,
				progress: 64,
				progressLabel: `Translation download`,
				children: `Parts of the interface stay in English until it finishes.`
			}),
			e ? (0, J.jsx)(_, {
				variant: `outline`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t(!1),
				children: `Show the offline banner again`
			}) : (0, J.jsx)(Y, {
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
			(0, J.jsx)(Y, {
				state: `error`,
				title: `Translation failed`,
				children: `The server did not answer. Try again from Settings.`
			}),
			(0, J.jsx)(Y, {
				state: `done`,
				title: `Deutsch is ready`
			})
		]
	});
}
var nn = {
	title: `Navigation`,
	status: `stable`,
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
			render: () => (0, J.jsx)(zt, {})
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
			render: () => (0, J.jsx)(xe, {
				label: `Project navigation`,
				currentId: `list`,
				items: [
					{
						id: `board`,
						label: `Board`,
						href: `#board`,
						icon: (0, J.jsx)(d, {
							name: `nav.board`,
							"aria-hidden": `true`
						})
					},
					{
						id: `list`,
						label: `List`,
						href: `#list`,
						icon: (0, J.jsx)(d, {
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
						icon: (0, J.jsx)(d, {
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
			render: () => (0, J.jsx)(Bt, {})
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
			render: () => (0, J.jsx)(Wt, {})
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
			render: () => (0, J.jsx)(Gt, {})
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
			render: () => (0, J.jsx)(Kt, {})
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
			render: () => (0, J.jsx)(qt, {})
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
			render: () => (0, J.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-3 text-body`,
				children: [
					(0, J.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Inbox `, (0, J.jsx)(E, {
							value: 4,
							label: `4 unread`
						})]
					}),
					(0, J.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Issues `, (0, J.jsx)(E, {
							value: 250,
							label: `250 open issues`
						})]
					}),
					(0, J.jsxs)(`span`, {
						className: `inline-flex items-center gap-1.5`,
						children: [`Alerts `, (0, J.jsx)(E, {
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
			render: () => (0, J.jsx)(Jt, {})
		},
		{
			name: `LocalePicker`,
			components: [`LocalePicker`],
			description: `Adds a language to a site by search, not by typing a code. The list is every language Intl names, in the panel language and in the language itself, and a typed BCP 47 tag such as pt-BR, sr-Latn or yue is offered in its canonical spelling. Pick it for the languages of content; use LanguagePicker for the language of the interface.`,
			usage: `<LocalePicker label={t('languages.add')} displayLocale={panelLocale} emptyLabel={t('languages.none')}
  disabledLocales={site.locales} disabledLabel={t('languages.added')} rtlLabel={t('languages.rtl')}
  moreLabel={(hidden) => t('languages.more', { hidden })} onChange={(tag, option) => addLocale(tag, option.direction)} />`,
			accessibility: `The search field filters the list as you type; Up and Down move through the matches and Enter picks one while focus stays in the field. The name in the language itself carries its lang and dir. A right-to-left language and a language already added say so in words, never colour alone, and an added one is disabled. The list scrolls inside its own box and shows at most limit matches, with a line that says how many more there are.`,
			pl: {
				description: `Dodaje język do witryny przez wyszukiwanie, a nie wpisywanie kodu. Lista to każdy język, który nazywa Intl, w języku panelu i w nim samym, a wpisany tag BCP 47, na przykład pt-BR, sr-Latn albo yue, jest proponowany w pisowni kanonicznej. Wybierz go do języków treści; do języka interfejsu służy LanguagePicker.`,
				accessibility: `Pole wyszukiwania filtruje listę podczas pisania; strzałka w górę i w dół przechodzi po dopasowaniach, a Enter wybiera jedno, podczas gdy fokus zostaje w polu. Nazwa w danym języku ma własne lang i dir. Język pisany od prawej do lewej i język już dodany mówią o tym słowami, nigdy samym kolorem, a dodany jest wyłączony. Lista przewija się we własnym polu i pokazuje najwyżej limit dopasowań, z wierszem, który mówi, ile jest jeszcze.`
			},
			render: () => (0, J.jsx)(Xt, {})
		},
		{
			name: `TranslationStatus`,
			components: [`TranslationStatus`],
			description: `The translation state of one entry per language: missing, draft, outdated when the source changed after the translation, and done. Pick it for an editor header or a list cell; with onSelect a chip opens that translation, and compact keeps only the language and the glyph in sight.`,
			usage: `<TranslationStatus label={t('translations.label')} displayLocale={panelLocale}
  entries={[{ locale: 'de', state: 'outdated' }, { locale: 'uk', state: 'missing' }]}
  stateLabels={{ missing: t('missing'), draft: t('draft'), outdated: t('outdated'), done: t('done') }}
  onSelect={openTranslation} summary={(counts, total) => t('translations.done', { done: counts.done, total })} />`,
			accessibility: `The chips are a named list. Each says its state with a glyph and a word, never colour alone; compact keeps the word for screen readers, and chips keep their edges in Windows high contrast. With onSelect each chip is a button named by the language and its state, such as "German: Outdated".`,
			pl: {
				description: `Stan tłumaczenia jednego wpisu w każdym języku: brak, szkic, nieaktualne, gdy źródło zmieniło się po tłumaczeniu, i gotowe. Wybierz go do nagłówka edytora albo komórki listy; z onSelect żeton otwiera to tłumaczenie, a compact zostawia na widoku tylko język i znak.`,
				accessibility: `Żetony są nazwaną listą. Każdy mówi o stanie znakiem i słowem, nigdy samym kolorem; compact zostawia słowo dla czytników ekranu, a żetony zachowują krawędzie w trybie wysokiego kontrastu systemu Windows. Z onSelect każdy żeton jest przyciskiem nazwanym językiem i stanem, na przykład „niemiecki: Nieaktualne”.`
			},
			render: () => (0, J.jsx)($t, {})
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
			render: () => (0, J.jsx)(en, {})
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
			render: () => (0, J.jsx)(tn, {})
		}
	]
};
export { Lt as t };
