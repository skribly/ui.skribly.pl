import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as n, _ as r, d as i, f as a, g as o, ut as s, y as c } from "./useOverflow.Dq483xd0.js";
import { n as l } from "./react-dom.B9zIfLd2.js";
import { a as u } from "./doc.CpwJe6Re.js";
import { t as d } from "./Button.reJVLFTj.js";
import { t as f } from "./Kbd.Dn4JP3AP.js";
import { t as p } from "./Avatar.wh0ZYI0r.js";
import { t as m } from "./Logo.TNW2dPFd.js";
import { t as h } from "./LinkTabs.F2ZXJHN-.js";
import { a as g, t as _ } from "./MenuItem.BpnCl8UA.js";
import { t as v } from "./Link.B8StT9b2.js";
import { a as y, i as b, n as x, t as S } from "./Tip.Cx4ZiTbP.js";
import { t as C } from "./Keyboard.CpsLyzdv.js";
import { t as w } from "./Popover.CfKp3Zes.js";
import { a as T, t as E } from "./CommandPalette.lysgKHbC.js";
import { a as D, c as O, i as k, l as A, n as j, o as M, r as N, s as ee, t as te } from "./SidebarRail.DigouHmZ.js";
import { n as ne, t as re } from "./Disclosure.CYPnHY1o.js";
import { n as ie, v as ae } from "./Dialog.RIvfrakQ.js";
import { n as oe, t as P } from "./Modal.ByKmuyeO.js";
import { t as se } from "./ToggleButton.D_YySXWN.js";
import { t as F } from "./useScrollFocus.BUUl9mGA.js";
import { n as ce, r as le, t as I } from "./StatusBarItem.C7SjrGzy.js";
var L = t(l(), 1), R = o();
function ue({ label: e, children: t, footer: n, className: i, ...a }) {
	return (0, R.jsxs)(`nav`, {
		...a,
		"aria-label": e,
		className: r(`flex w-14 shrink-0 flex-col items-center gap-1 overflow-y-auto border-e border-border bg-bar py-2 [scrollbar-width:thin]`, i),
		children: [(0, R.jsx)(`ul`, {
			className: `flex flex-col items-center gap-1`,
			children: t
		}), n ? (0, R.jsx)(`ul`, {
			className: `mt-auto flex flex-col items-center gap-1 pt-2`,
			children: n
		}) : null]
	});
}
var de = {
	accent: `bg-accent text-accent-fg`,
	warn: `bg-warn text-warn-fg`
}, fe = `group/act relative flex size-10 items-center justify-center rounded-lg border border-transparent text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-text data-disabled:cursor-not-allowed data-disabled:opacity-50 [&>svg]:size-5`;
function z({ label: e, children: t, tip: n, shortcut: i, keyShortcuts: a, badge: o, badgeTone: s = `accent`, badgeLabel: l, isCurrent: u = !1, href: d, onPress: f, isDisabled: p, container: m, className: h }) {
	let g = o != null && o !== !1, _ = (0, R.jsxs)(R.Fragment, { children: [
		t,
		(0, R.jsx)(`span`, {
			className: `sr-only`,
			children: e
		}),
		g && l ? (0, R.jsx)(`span`, {
			className: `sr-only`,
			children: `, ${l}`
		}) : null,
		g ? (0, R.jsx)(`span`, {
			"aria-hidden": l ? !0 : void 0,
			className: r(`absolute end-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-transparent px-1 text-label leading-none font-bold`, de[s]),
			children: o
		}) : null
	] }), y = (0, L.useCallback)((e) => (0, R.jsx)(`button`, {
		...e,
		"aria-keyshortcuts": a
	}), [a]), b = (0, L.useCallback)((e) => `href` in e ? (0, R.jsx)(`a`, {
		...e,
		"aria-keyshortcuts": a,
		children: e.children
	}) : (0, R.jsx)(`span`, {
		...e,
		"aria-keyshortcuts": a
	}), [a]), x = {
		...u ? { "aria-current": `page` } : {},
		...p === void 0 ? {} : { isDisabled: p },
		...f ? { onPress: f } : {},
		className: r(fe, h)
	}, C = d ? (0, R.jsx)(v, {
		...x,
		...a ? { render: b } : {},
		href: d,
		children: _
	}) : (0, R.jsx)(c, {
		...x,
		...a ? { render: y } : {},
		children: _
	}), w = (0, L.useMemo)(() => (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-0.5`,
		children: [
			(0, R.jsxs)(`span`, {
				className: `flex items-center gap-2 font-semibold`,
				children: [e, i ? (0, R.jsx)(`kbd`, {
					className: `rounded-sm border border-border bg-sunken px-1 text-label font-normal text-muted`,
					children: i
				}) : null]
			}),
			n ? (0, R.jsx)(`span`, {
				className: `text-muted`,
				children: n
			}) : null,
			g && l ? (0, R.jsx)(`span`, { children: l }) : null
		]
	}), [
		e,
		i,
		n,
		g,
		l
	]);
	return (0, R.jsxs)(`li`, {
		className: `relative`,
		children: [u ? (0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: `absolute inset-y-2 -start-2 w-[3px] rounded-e-sm bg-accent forced-color-adjust-none forced-colors:bg-[Highlight]`
		}) : null, (0, R.jsx)(S, {
			content: w,
			placement: `end`,
			container: m,
			children: C
		})]
	});
}
function pe(e, t) {
	let n = !1;
	return L.Children.forEach(e, (e) => {
		!n && (0, L.isValidElement)(e) && (n = D(e.props, t));
	}), n;
}
var me = `text-label font-semibold tracking-[0.09em] uppercase`;
function B({ label: e, children: t, isCollapsible: n = !0, isExpanded: a, defaultExpanded: o, onExpandedChange: s, currentLabel: l, className: u }) {
	let { current: d, surface: f = `nav` } = ee(), p = f === `plain`, m = pe(t, d), [h, g] = (0, L.useState)(o ?? m), _ = a ?? h, v = (0, L.useId)(), y = p ? m ? `text-accent-text` : `text-muted` : m ? `text-nav-accent` : `text-nav-muted`, b = (0, L.useCallback)((e) => {
		a === void 0 && g(e), s?.(e);
	}, [a, s]), x = (0, L.useRef)(m);
	(0, L.useEffect)(() => {
		m && !x.current && !_ && b(!0), x.current = m;
	}, [
		m,
		_,
		b
	]);
	let S = m ? (0, R.jsx)(`span`, {
		"aria-hidden": !0,
		className: r(`size-1.5 shrink-0 rounded-full forced-color-adjust-none forced-colors:bg-[Highlight]`, p ? `bg-accent` : `bg-nav-accent`)
	}) : null, C = m && l ? (0, R.jsxs)(R.Fragment, { children: [` `, (0, R.jsx)(`span`, {
		className: `sr-only`,
		children: l
	})] }) : null;
	return n ? (0, R.jsx)(`li`, {
		className: r(`mb-1`, u),
		children: (0, R.jsxs)(re, {
			isExpanded: _,
			onExpandedChange: b,
			className: `group/disclosure`,
			children: [(0, R.jsxs)(c, {
				slot: `trigger`,
				className: r(`flex min-h-8 w-full items-center justify-between gap-2 rounded-md px-3 py-1.5 text-start transition-colors`, p ? `data-hovered:bg-hover data-hovered:text-fg` : `data-hovered:bg-nav-hover data-hovered:text-nav-fg`, me, y),
				children: [(0, R.jsxs)(`span`, {
					className: `flex min-w-0 items-center gap-2`,
					children: [
						S,
						(0, R.jsx)(`span`, {
							className: `min-w-0 [overflow-wrap:anywhere]`,
							children: e
						}),
						C
					]
				}), (0, R.jsx)(i, {
					name: `chevron.down`,
					"aria-hidden": !0,
					className: `size-3.5 shrink-0 transition-transform duration-(--sk-duration-fast) group-data-expanded/disclosure:rotate-180 motion-reduce:transition-none`
				})]
			}), (0, R.jsx)(ne, { children: (0, R.jsx)(`ul`, {
				className: `mt-0.5 mb-2 flex flex-col gap-px`,
				children: t
			}) })]
		})
	}) : (0, R.jsxs)(`li`, {
		className: r(`mt-4 first:mt-0`, u),
		children: [(0, R.jsxs)(`span`, {
			id: v,
			className: r(`mb-1 flex items-center gap-2 px-3`, me, y),
			children: [
				S,
				(0, R.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: e
				}),
				C
			]
		}), (0, R.jsx)(`ul`, {
			"aria-labelledby": v,
			className: `flex flex-col gap-0.5`,
			children: t
		})]
	});
}
var he = `flex min-h-0 flex-col bg-nav text-nav-fg [--sk-focus:var(--sk-nav-accent)] [--sk-icon-accent:var(--sk-nav-accent)] [--sk-icon-soft:color-mix(in_srgb,var(--sk-nav-accent)_16%,transparent)] forced-colors:border-[CanvasText]`;
function ge({ header: e, footer: t, children: n, padEnd: i = !1 }) {
	return (0, R.jsxs)(R.Fragment, { children: [
		e ? (0, R.jsx)(`div`, {
			className: r(`shrink-0 py-4 ps-5`, i ? `pe-14` : `pe-5`),
			children: e
		}) : null,
		n,
		t ? (0, R.jsx)(`div`, {
			className: `shrink-0 border-t border-nav-active`,
			children: t
		}) : null
	] });
}
function _e({ label: e, children: t, header: n, footer: a, closeLabel: o, container: s, className: l }) {
	let u = y(), d = (0, L.useCallback)(() => u?.setNavOpen(!1), [u]), f = u && !u.landmarks ? `div` : `aside`;
	return (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(f, {
		"aria-label": e,
		role: f === `div` ? `group` : void 0,
		className: r(he, `h-full w-64 shrink-0 border-e border-transparent`, u ? `hidden @3xl/shell:flex` : `flex`, l),
		children: (0, R.jsx)(ge, {
			header: n,
			footer: a,
			children: t
		})
	}), u ? (0, R.jsx)(oe, {
		...b(s, u),
		isOpen: u.isNavOpen,
		onOpenChange: u.setNavOpen,
		isDismissable: !0,
		className: `fixed inset-0 z-(--sk-z-modal) bg-scrim transition-opacity duration-(--sk-duration-base) starting:opacity-0 data-exiting:opacity-0 motion-reduce:transition-none`,
		children: (0, R.jsx)(P, {
			className: r(he, `fixed inset-y-0 start-0 w-80 max-w-[calc(100%-3rem)] border-e border-transparent shadow-lg outline-none`, `transition-transform duration-(--sk-duration-base) ease-out starting:-translate-x-full data-exiting:-translate-x-full rtl:starting:translate-x-full rtl:data-exiting:translate-x-full motion-reduce:transition-none`, l),
			children: (0, R.jsxs)(ie, {
				"aria-label": e,
				className: `flex h-full min-h-0 flex-col outline-none`,
				children: [o ? (0, R.jsx)(c, {
					"aria-label": o,
					onPress: d,
					className: `absolute end-2 top-3 z-1 inline-flex size-control-md items-center justify-center rounded-md text-nav-muted transition-colors data-hovered:bg-nav-hover data-hovered:text-nav-fg data-pressed:bg-nav-active`,
					children: (0, R.jsx)(i, {
						name: `action.close`,
						"aria-hidden": !0,
						className: `size-5`
					})
				}) : null, (0, R.jsx)(x.Provider, {
					value: !0,
					children: (0, R.jsx)(ge, {
						header: n,
						footer: a,
						padEnd: !!o,
						children: t
					})
				})]
			})
		})
	}) : null] });
}
function ve({ label: e, current: t, children: n, className: i }) {
	let a = y(), o = (0, L.useContext)(x), s = (0, L.useMemo)(() => ({ current: t }), [t]), c = a && !o ? a.navId : void 0;
	return (0, R.jsx)(M.Provider, {
		value: s,
		children: (0, R.jsx)(`nav`, {
			id: c,
			tabIndex: c ? -1 : void 0,
			"aria-label": e,
			className: r(`min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 focus:outline-none focus-visible:outline-solid focus-visible:[outline-offset:calc(var(--sk-focus-width)*-1)]`, i),
			children: (0, R.jsx)(`ul`, {
				className: `flex flex-col gap-0.5`,
				children: n
			})
		})
	});
}
var ye = `relative inline-flex h-control-md min-w-control-md shrink-0 items-center justify-center gap-1 rounded-md border border-transparent px-2 text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-selected:bg-selected data-selected:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:size-[1.125rem] forced-colors:data-selected:border-[Highlight]`;
function be({ children: e }) {
	return (0, R.jsx)(`span`, {
		"aria-hidden": !0,
		className: `absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full border border-transparent bg-accent px-1 text-label leading-none font-bold text-accent-fg`,
		children: e
	});
}
function V({ label: e, children: t, onPress: n, isSelected: i, defaultSelected: a, onChange: o, badge: s, isDisabled: l, showTip: u = !0, id: d, container: f, className: p }) {
	let m = {
		"aria-label": e,
		...d === void 0 ? {} : { id: d },
		...l === void 0 ? {} : { isDisabled: l },
		...n ? { onPress: n } : {}
	}, h = (0, R.jsxs)(R.Fragment, { children: [t, s == null ? null : (0, R.jsx)(be, { children: s })] }), g = i !== void 0 || a !== void 0 || o ? (0, R.jsx)(se, {
		...m,
		...i === void 0 ? {} : { isSelected: i },
		...a === void 0 ? {} : { defaultSelected: a },
		...o ? { onChange: o } : {},
		className: r(ye, p),
		children: h
	}) : (0, R.jsx)(c, {
		...m,
		className: r(ye, p),
		children: h
	});
	return u ? (0, R.jsx)(S, {
		content: e,
		container: f,
		children: g
	}) : g;
}
function xe(e) {
	return (0, L.useMemo)(() => e ? (t) => (0, R.jsx)(e, { ...t }) : void 0, [e]);
}
var H = `pointer-coarse:min-h-11 pointer-coarse:min-w-11`, Se = r(`inline-flex size-control-md shrink-0 items-center justify-center rounded-md text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected pointer-coarse:size-11 [&_svg]:size-5`, H), Ce = r(`flex min-h-control-md items-center gap-3 rounded-md px-2.5 py-1.5 text-body text-fg no-underline outline-none transition-colors data-hovered:bg-hover data-pressed:bg-selected data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus`, H), we = {
	apps: `w-[min(18rem,calc(100cqw-3.25rem))]`,
	account: `w-[min(16rem,calc(100cqw-3.25rem))]`,
	notifications: `w-[min(22rem,calc(100cqw-3.25rem))]`
}, Te = (e) => (e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && (e.key === `[` || e.code === `BracketLeft`);
function Ee({ apps: e, currentAppId: t, labels: n, renderLink: a }) {
	let o = y(), s = e.find((e) => e.id === t), l = (0, L.useMemo)(() => (0, R.jsxs)(c, {
		className: r(`inline-flex h-control-md max-w-full min-w-0 shrink items-center gap-2 rounded-md px-2 text-body font-semibold text-fg transition-colors data-hovered:bg-hover data-pressed:bg-selected pointer-coarse:h-11`, H),
		children: [
			s?.icon ? (0, R.jsx)(`span`, {
				"aria-hidden": !0,
				className: `flex size-6 shrink-0 items-center justify-center [&>svg]:size-full`,
				children: s.icon
			}) : null,
			(0, R.jsx)(`span`, {
				className: `min-w-0 truncate`,
				children: s?.name
			}),
			(0, R.jsx)(`span`, {
				className: `sr-only`,
				children: ` ${n.appSwitcher}`
			}),
			(0, R.jsx)(i, {
				name: `chevron.up-down`,
				"aria-hidden": !0,
				className: `size-4 shrink-0 text-muted`
			})
		]
	}), [s, n.appSwitcher]);
	return (0, R.jsx)(w, {
		label: n.apps,
		placement: `bottom start`,
		container: o?.root ?? null,
		trigger: l,
		children: (n) => (0, R.jsx)(`ul`, {
			className: r(we.apps, `m-0 flex list-none flex-col gap-0.5 p-0`),
			children: e.map((e) => {
				let o = e.id === t;
				return (0, R.jsx)(`li`, { children: (0, R.jsxs)(v, {
					href: e.href,
					onPress: n,
					...a ? { render: a } : {},
					...o ? { "aria-current": `true` } : {},
					className: r(Ce, o && `bg-selected font-semibold`),
					children: [
						e.icon ? (0, R.jsx)(`span`, {
							"aria-hidden": !0,
							className: `flex size-6 shrink-0 items-center justify-center [&>svg]:size-full`,
							children: e.icon
						}) : null,
						(0, R.jsxs)(`span`, {
							className: `min-w-0 flex-1`,
							children: [(0, R.jsx)(`span`, {
								className: `block [overflow-wrap:anywhere]`,
								children: e.name
							}), e.description ? (0, R.jsx)(`span`, {
								className: `block text-caption font-normal text-muted [overflow-wrap:anywhere]`,
								children: e.description
							}) : null]
						}),
						o ? (0, R.jsx)(i, {
							name: `action.check`,
							"aria-hidden": !0,
							className: `size-4 shrink-0 text-accent-text`
						}) : null
					]
				}) }, e.id);
			})
		})
	});
}
function De({ account: e, label: t, renderLink: n }) {
	let i = y(), { name: a, initials: o, avatarSrc: s } = e, l = (0, L.useMemo)(() => (0, R.jsx)(S, {
		content: t,
		children: (0, R.jsxs)(c, {
			className: r(Se, `rounded-full`),
			children: [(0, R.jsx)(p, {
				name: a,
				size: `sm`,
				decorative: !0,
				...o === void 0 ? {} : { initials: o },
				...s === void 0 ? {} : { src: s }
			}), (0, R.jsx)(`span`, {
				className: `sr-only`,
				children: t
			})]
		})
	}), [
		t,
		a,
		o,
		s
	]);
	return (0, R.jsx)(w, {
		label: t,
		placement: `bottom end`,
		container: i?.root ?? null,
		trigger: l,
		children: (t) => (0, R.jsxs)(`div`, {
			className: we.account,
			children: [
				(0, R.jsx)(`h2`, {
					className: `m-0 mb-1 text-body font-semibold [overflow-wrap:anywhere]`,
					children: a
				}),
				e.description ? (0, R.jsx)(`p`, {
					className: `m-0 mb-2 text-caption text-muted [overflow-wrap:anywhere]`,
					children: e.description
				}) : null,
				(0, R.jsxs)(`ul`, {
					className: `m-0 flex list-none flex-col gap-0.5 border-t border-border p-0 pt-2`,
					children: [(e.links ?? []).map((e) => (0, R.jsx)(`li`, { children: (0, R.jsxs)(v, {
						href: e.href,
						onPress: t,
						...n ? { render: n } : {},
						className: Ce,
						children: [e.icon ? (0, R.jsx)(`span`, {
							"aria-hidden": !0,
							className: `flex size-4 shrink-0 text-muted [&>svg]:size-full`,
							children: e.icon
						}) : null, (0, R.jsx)(`span`, {
							className: `min-w-0 flex-1 [overflow-wrap:anywhere]`,
							children: e.label
						})]
					}) }, e.href)), (e.actions ?? []).map((e) => (0, R.jsx)(`li`, { children: (0, R.jsx)(Oe, {
						action: e,
						close: t
					}) }, e.id))]
				})
			]
		})
	});
}
function Oe({ action: e, close: t }) {
	let n = (0, L.useCallback)(() => {
		t(), e.onPress();
	}, [e, t]);
	return (0, R.jsxs)(c, {
		onPress: n,
		className: r(Ce, `w-full text-start`),
		children: [e.icon ? (0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 text-muted [&>svg]:size-full`,
			children: e.icon
		}) : null, (0, R.jsx)(`span`, {
			className: `min-w-0 flex-1 [overflow-wrap:anywhere]`,
			children: e.label
		})]
	});
}
function ke({ label: e }) {
	let t = (0, L.useContext)(x), n = y(), a = (0, L.useCallback)(() => n?.setNavOpen(!1), [n]);
	return t ? (0, R.jsx)(`div`, {
		className: `flex justify-end`,
		children: (0, R.jsx)(c, {
			"aria-label": e,
			onPress: a,
			className: r(`inline-flex size-control-md items-center justify-center rounded-md text-nav-muted transition-colors data-hovered:bg-nav-hover data-hovered:text-nav-fg data-pressed:bg-nav-active pointer-coarse:size-11 [&_svg]:size-5`, H),
			children: (0, R.jsx)(i, {
				name: `action.close`,
				"aria-hidden": !0
			})
		})
	}) : null;
}
function Ae({ labels: e, apps: t, currentAppId: n, commands: a, searchShortcut: o, create: s, notifications: l, settings: u, account: f, isCollapsed: p, setCollapsed: m, renderLink: h }) {
	let g = y(), [_, b] = (0, L.useState)(!1), [x, D] = (0, L.useState)(``), O = g?.isCompact ?? !1, k = O ? g?.isNavOpen ?? !1 : !p, A = (0, L.useCallback)(() => {
		O ? g?.setNavOpen(!g.isNavOpen) : (m(!p), D(p ? e.sidebarExpanded : e.sidebarCollapsed));
	}, [
		O,
		g,
		p,
		m,
		e.sidebarExpanded,
		e.sidebarCollapsed
	]);
	T(Te, A, { enabled: !0 });
	let j = (0, L.useCallback)(() => b(!0), []), M = (0, L.useMemo)(() => l ? (0, R.jsx)(V, {
		label: l.label,
		...l.badge === void 0 ? {} : { badge: l.badge },
		className: `pointer-coarse:h-11 pointer-coarse:min-w-11`,
		children: (0, R.jsx)(i, {
			name: `nav.notifications`,
			"aria-hidden": !0
		})
	}) : null, [l]);
	return (0, R.jsxs)(N, {
		className: `gap-1 px-2 @2xl/shell:px-3`,
		children: [
			(0, R.jsx)(S, {
				content: e.toggleSidebar,
				children: (0, R.jsx)(c, {
					"aria-label": e.toggleSidebar,
					"aria-expanded": k,
					...g ? { "aria-controls": g.navId } : {},
					onPress: A,
					className: Se,
					children: (0, R.jsx)(i, {
						name: `layout.sidebar`,
						"aria-hidden": !0
					})
				})
			}),
			(0, R.jsx)(`output`, {
				className: `sr-only`,
				children: x
			}),
			(0, R.jsx)(`div`, {
				className: `flex min-w-0 flex-[1_1_8rem]`,
				children: (0, R.jsx)(Ee, {
					apps: t,
					currentAppId: n,
					labels: e,
					renderLink: h
				})
			}),
			(0, R.jsx)(`div`, {
				className: `order-last flex w-full min-w-0 @xl/shell:order-none @xl/shell:w-auto @xl/shell:flex-[2_1_14rem] @xl/shell:justify-center`,
				children: (0, R.jsxs)(c, {
					onPress: j,
					className: r(`inline-flex h-control-md w-full min-w-0 items-center gap-2 rounded-md border border-border bg-surface px-3 text-body text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected pointer-coarse:h-11 @xl/shell:max-w-md`, H),
					children: [
						(0, R.jsx)(i, {
							name: `action.search`,
							"aria-hidden": !0,
							className: `size-4 shrink-0`
						}),
						(0, R.jsx)(`span`, {
							className: `min-w-0 flex-1 truncate text-start`,
							children: e.search
						}),
						o ? (0, R.jsx)(C, {
							className: `hidden shrink-0 rounded-sm border border-border px-1 font-mono text-caption @md/shell:inline`,
							children: o
						}) : null
					]
				})
			}),
			(0, R.jsxs)(`div`, {
				className: `ms-auto flex shrink-0 items-center gap-1`,
				children: [
					s ? (0, R.jsxs)(d, {
						onPress: s.onPress,
						className: r(`px-2.5 pointer-coarse:h-11`, H),
						children: [(0, R.jsx)(i, {
							name: `action.add`,
							"aria-hidden": !0,
							className: `size-4 shrink-0`
						}), (0, R.jsx)(`span`, {
							className: `max-@md/shell:sr-only`,
							children: s.label
						})]
					}) : null,
					l ? (0, R.jsx)(w, {
						label: l.title,
						placement: `bottom end`,
						container: g?.root ?? null,
						trigger: M,
						children: (0, R.jsx)(`div`, {
							className: we.notifications,
							children: l.content
						})
					}) : null,
					u ? (0, R.jsx)(S, {
						content: u.label,
						children: (0, R.jsx)(v, {
							href: u.href,
							"aria-label": u.label,
							...h ? { render: h } : {},
							className: Se,
							children: (0, R.jsx)(i, {
								name: `nav.settings`,
								"aria-hidden": !0
							})
						})
					}) : null,
					(0, R.jsx)(De, {
						account: f,
						label: e.account,
						renderLink: h
					})
				]
			}),
			(0, R.jsx)(E, {
				isOpen: _,
				onOpenChange: b,
				commands: a,
				shortcut: !0,
				...g?.root ? { container: g.root } : {},
				...e.palette
			})
		]
	});
}
var je = [];
function Me(e, t, n) {
	let [r, i] = (0, L.useState)(t), a = (0, L.useRef)(n);
	(0, L.useEffect)(() => {
		a.current = n;
	});
	let o = (0, L.useCallback)((t) => {
		e === void 0 && i(t), a.current?.(t);
	}, [e]);
	return [e ?? r, o];
}
function Ne({ labels: e, apps: t, currentAppId: n, forYou: r, recent: i = je, current: a, navigation: o, linkComponent: s, isSidebarCollapsed: c, defaultSidebarCollapsed: l = !1, onSidebarCollapsedChange: u, children: d, embedded: f = !1, mainId: p, className: m, commands: h, searchShortcut: g, create: _, notifications: v, settings: y, account: b }) {
	let x = xe(s), [S, C] = Me(c, l, u), { containsCurrentPage: w } = e, T = (0, L.useMemo)(() => w === void 0 ? {} : { currentLabel: w }, [w]), E = (0, L.useCallback)((e) => (0, R.jsx)(k, {
		href: e.href,
		...x ? { render: x } : {},
		...e.icon === void 0 ? {} : { icon: e.icon },
		...e.end === void 0 ? {} : { end: e.end },
		className: `pointer-coarse:min-h-11`,
		children: e.label
	}, e.href), [x]), D = (0, L.useMemo)(() => (0, R.jsx)(Ae, {
		labels: e,
		commands: h,
		...g === void 0 ? {} : { searchShortcut: g },
		..._ === void 0 ? {} : { create: _ },
		...v === void 0 ? {} : { notifications: v },
		...y === void 0 ? {} : { settings: y },
		account: b,
		apps: t,
		currentAppId: n,
		isCollapsed: S,
		setCollapsed: C,
		renderLink: x
	}), [
		e,
		h,
		g,
		_,
		v,
		y,
		b,
		t,
		n,
		S,
		C,
		x
	]), A = (0, L.useMemo)(() => (0, R.jsx)(ke, { label: e.closeSidebar }), [e.closeSidebar]), j = (0, L.useMemo)(() => (0, R.jsx)(`div`, {
		className: S ? `hidden` : `contents`,
		children: (0, R.jsx)(_e, {
			label: e.sidebar,
			header: A,
			className: `[&>div:empty]:hidden`,
			children: (0, R.jsxs)(ve, {
				label: e.navigation,
				...a === void 0 ? {} : { current: a },
				children: [
					(0, R.jsx)(B, {
						label: e.forYou,
						isCollapsible: !1,
						...T,
						children: r.map(E)
					}),
					i.length > 0 ? (0, R.jsx)(B, {
						label: e.recent,
						isCollapsible: !1,
						...T,
						children: i.map(E)
					}) : null,
					o
				]
			})
		})
	}), [
		S,
		e,
		A,
		a,
		T,
		r,
		i,
		o,
		E
	]);
	return (0, R.jsx)(O, {
		embedded: f,
		skipLinkLabel: e.skipToContent,
		skipToNavLabel: e.skipToNavigation,
		...p === void 0 ? {} : { mainId: p },
		...m === void 0 ? {} : { className: m },
		titlebar: D,
		sidebar: j,
		children: d
	});
}
var Pe = (e, t, n) => Math.min(n, Math.max(t, e));
function Fe({ value: e, minValue: t, maxValue: r, onChange: i, orientation: a, reverse: o = !1, step: s = 1, defaultValue: c, unitsPerPixel: l, announce: u }) {
	let { direction: d } = n(), [f, p] = (0, L.useState)(!1), m = (0, L.useRef)(null), h = (0, L.useRef)(null), g = (0, L.useCallback)((e) => i(Pe(e, t, r)), [
		i,
		t,
		r
	]), _ = (a === `vertical` && d === `rtl` ? -1 : 1) * (o ? -1 : 1), v = (0, L.useCallback)((n) => {
		let i = s * 10, o = a === `vertical`, l = null;
		switch (n.key) {
			case `ArrowLeft`:
				o && (l = e - s * _);
				break;
			case `ArrowRight`:
				o && (l = e + s * _);
				break;
			case `ArrowUp`:
				o || (l = e - s * _);
				break;
			case `ArrowDown`:
				o || (l = e + s * _);
				break;
			case `PageUp`:
				l = e + i;
				break;
			case `PageDown`:
				l = e - i;
				break;
			case `Home`:
				l = t;
				break;
			case `End`:
				l = r;
				break;
			case `Enter`:
				e > t ? (h.current = e, l = t) : l = h.current ?? c ?? r;
				break;
			default: return;
		}
		l !== null && (n.preventDefault(), g(l));
	}, [
		s,
		a,
		e,
		_,
		t,
		r,
		c,
		g
	]), y = (0, L.useCallback)((t) => {
		if (t.button !== 0) return;
		t.preventDefault(), t.currentTarget.focus(), t.currentTarget.setPointerCapture?.(t.pointerId);
		let n = l?.() ?? 1;
		m.current = {
			start: a === `vertical` ? t.clientX : t.clientY,
			from: e,
			scale: Number.isFinite(n) ? n : 0
		}, p(!0);
	}, [
		a,
		e,
		l
	]), b = (0, L.useCallback)((e) => {
		let t = m.current;
		if (!t) return;
		let n = a === `vertical` ? e.clientX : e.clientY;
		g(t.from + (n - t.start) * t.scale * _);
	}, [
		a,
		_,
		g
	]), x = (0, L.useCallback)((e) => {
		m.current && (m.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId), p(!1));
	}, []), S = (0, L.useCallback)(() => {
		c !== void 0 && g(c);
	}, [c, g]), C = u ? u(e) : {
		now: Math.round(e),
		min: Math.round(t),
		max: Math.round(r)
	};
	return {
		separatorProps: (0, L.useMemo)(() => ({
			role: `separator`,
			tabIndex: 0,
			"aria-orientation": a,
			"aria-valuenow": C.now,
			"aria-valuemin": C.min,
			"aria-valuemax": C.max,
			onKeyDown: v,
			onPointerDown: y,
			onPointerMove: b,
			onPointerUp: x,
			onPointerCancel: x,
			onLostPointerCapture: x,
			onDoubleClick: S
		}), [
			a,
			C.now,
			C.min,
			C.max,
			v,
			y,
			b,
			x,
			S
		]),
		isDragging: f
	};
}
var Ie = {
	start: `inset-y-0 -start-1.5 w-3 cursor-col-resize`,
	end: `inset-y-0 -end-1.5 w-3 cursor-col-resize`,
	top: `inset-x-0 -top-1.5 h-3 cursor-row-resize`,
	bottom: `inset-x-0 -bottom-1.5 h-3 cursor-row-resize`
};
function Le({ label: e, value: t, onChange: n, minValue: i, maxValue: a, edge: o, defaultValue: s, step: c = 16, controls: l, className: u }) {
	let d = o === `start` || o === `end`, f = (0, L.useCallback)((e) => ({
		now: Math.round((e - i) / Math.max(1, a - i) * 100),
		min: 0,
		max: 100
	}), [i, a]), { separatorProps: p, isDragging: m } = Fe({
		value: t,
		minValue: i,
		maxValue: a,
		onChange: n,
		orientation: d ? `vertical` : `horizontal`,
		reverse: o === `start` || o === `top`,
		step: c,
		defaultValue: s,
		announce: f
	});
	return (0, R.jsx)(`div`, {
		...p,
		"aria-label": e,
		"aria-controls": l,
		"data-dragging": m || void 0,
		className: r(`group/grip absolute z-2 flex touch-none items-center justify-center select-none`, Ie[o], u),
		children: (0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: r(`rounded-full bg-transparent transition-colors group-hover/grip:bg-accent group-focus-visible/grip:bg-accent group-data-dragging/grip:bg-accent forced-color-adjust-none forced-colors:group-hover/grip:bg-[Highlight] forced-colors:group-focus-visible/grip:bg-[Highlight] forced-colors:group-data-dragging/grip:bg-[Highlight]`, d ? `h-full w-0.5` : `h-0.5 w-full`)
		})
	});
}
var Re = a(`layout.panel-close`), ze = a(`layout.sidebar-close`);
function Be({ label: e, children: t, title: n, actions: i, closeLabel: a, onClose: o, isOpen: s = !0, width: l, defaultWidth: u = 400, onWidthChange: d, minWidth: f = 320, maxWidth: p = 760, resizeLabel: m, side: h = `end`, container: g, className: _ }) {
	let v = y(), x = (0, L.useId)(), [S, C] = (0, L.useState)(u), [w, T] = (0, L.useState)(null), E = F(w), D = Math.min(p, Math.max(f, l ?? S)), O = (0, L.useCallback)((e) => {
		l === void 0 && C(e), d?.(e);
	}, [l, d]), k = (0, L.useCallback)((e) => {
		e || o?.();
	}, [o]), A = (0, L.useMemo)(() => ({ width: D }), [D]);
	if (!s) return null;
	let j = (0, R.jsxs)(`div`, {
		className: `flex min-h-10 shrink-0 flex-wrap items-center gap-1 border-b border-border bg-side px-2 py-1`,
		children: [
			(0, R.jsx)(ae, {
				slot: `title`,
				level: 2,
				className: `min-w-0 flex-1 px-1 text-body font-semibold [overflow-wrap:anywhere]`,
				children: n ?? e
			}),
			i,
			a && o ? (0, R.jsx)(c, {
				"aria-label": a,
				onPress: o,
				className: `inline-flex size-control-sm items-center justify-center rounded-md text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected [&>svg]:size-4`,
				children: (0, R.jsx)(h === `end` ? Re : ze, { "aria-hidden": !0 })
			}) : null
		]
	}), M = (0, R.jsx)(`div`, {
		ref: T,
		...E ? {
			tabIndex: 0,
			role: `group`,
			"aria-label": e
		} : {},
		className: `flex min-h-0 flex-1 flex-col overflow-auto focus:outline-none focus-visible:outline-solid focus-visible:[outline-offset:calc(var(--sk-focus-width)*-1)]`,
		children: t
	});
	if (v?.isCompact) return (0, R.jsx)(oe, {
		...b(g, v),
		isOpen: !0,
		onOpenChange: k,
		isDismissable: !0,
		className: `fixed inset-0 z-(--sk-z-modal) bg-scrim transition-opacity duration-(--sk-duration-base) starting:opacity-0 data-exiting:opacity-0 motion-reduce:transition-none`,
		children: (0, R.jsx)(P, {
			className: r(`fixed inset-y-0 flex w-full max-w-md flex-col border-transparent bg-surface text-fg shadow-lg outline-none`, h === `end` ? `end-0 border-s` : `start-0 border-e`, `transition-transform duration-(--sk-duration-base) ease-out motion-reduce:transition-none`, h === `end` ? `starting:translate-x-full data-exiting:translate-x-full rtl:starting:-translate-x-full rtl:data-exiting:-translate-x-full` : `starting:-translate-x-full data-exiting:-translate-x-full rtl:starting:translate-x-full rtl:data-exiting:translate-x-full`, _),
			children: (0, R.jsxs)(ie, {
				"aria-label": e,
				className: `flex h-full min-h-0 flex-col outline-none`,
				children: [j, M]
			})
		})
	});
	let N = v && !v.landmarks ? `div` : `aside`;
	return (0, R.jsxs)(N, {
		id: x,
		"aria-label": e,
		role: N === `div` ? `group` : void 0,
		style: A,
		className: r(`relative min-h-0 max-w-[70%] min-w-0 shrink-0 flex-col border-border bg-surface text-fg`, h === `end` ? `border-s` : `order-first border-e`, v ? `hidden @3xl/shell:flex` : `flex`, _),
		children: [
			m ? (0, R.jsx)(Le, {
				label: m,
				value: D,
				onChange: O,
				minValue: f,
				maxValue: p,
				defaultValue: u,
				edge: h === `end` ? `start` : `end`,
				controls: x
			}) : null,
			j,
			M
		]
	});
}
function U({ className: e, ...t }) {
	return (0, R.jsx)(`span`, {
		...t,
		className: r(`ms-auto shrink-0 rounded-sm border border-transparent bg-nav-hover px-1.5 font-mono text-label text-nav-muted`, e)
	});
}
var Ve = {
	1: `h1`,
	2: `h2`,
	3: `h3`
};
function W({ title: e, eyebrow: t, description: n, actions: i, level: a = 1, className: o, children: s, ...c }) {
	let l = Ve[a];
	return (0, R.jsxs)(`div`, {
		...c,
		className: r(`mb-6 border-b border-border pb-4`, o),
		children: [(0, R.jsxs)(`div`, {
			className: `flex flex-wrap items-end justify-between gap-x-6 gap-y-3`,
			children: [(0, R.jsxs)(`div`, {
				className: `min-w-0 flex-[1_1_16rem]`,
				children: [(0, R.jsxs)(`hgroup`, { children: [t ? (0, R.jsx)(`p`, {
					className: `mb-1 text-label font-semibold tracking-[0.08em] text-muted uppercase [overflow-wrap:anywhere]`,
					children: t
				}) : null, (0, R.jsx)(l, {
					className: `text-heading font-semibold [overflow-wrap:anywhere] text-fg @2xl/shell:text-page`,
					children: e
				})] }), n ? (0, R.jsx)(`p`, {
					className: `mt-1 max-w-prose text-body text-muted [overflow-wrap:anywhere]`,
					children: n
				}) : null]
			}), i ? (0, R.jsx)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: i
			}) : null]
		}), s ? (0, R.jsx)(`div`, {
			className: `mt-4`,
			children: s
		}) : null]
	});
}
var He = (0, L.createContext)(null);
function Ue() {
	return (0, L.useContext)(He);
}
var We = {
	default: `bg-surface`,
	side: `bg-side`,
	sunken: `bg-sunken`
};
function G({ variant: e = `default`, label: t, className: n, children: i, ...a }) {
	let [o, s] = (0, L.useState)(void 0), [c, l] = (0, L.useState)(null), u = F(c), d = (0, L.useMemo)(() => ({
		headingId: o,
		setHeadingId: s
	}), [o]), f = o ? void 0 : t ?? a[`aria-label`], p = o ?? a[`aria-labelledby`], m = u ? {
		tabIndex: 0,
		role: `group`,
		"aria-label": f,
		"aria-labelledby": p
	} : {};
	return (0, R.jsx)(He.Provider, {
		value: d,
		children: (0, R.jsx)(`section`, {
			...a,
			"aria-label": f,
			"aria-labelledby": p,
			className: r(`flex h-full min-h-0 min-w-0 flex-col text-fg`, n),
			children: (0, R.jsx)(`div`, {
				ref: l,
				...m,
				className: r(`flex min-h-0 flex-1 flex-col overflow-auto overscroll-contain focus:outline-none focus-visible:outline-solid focus-visible:[outline-offset:calc(var(--sk-focus-width)*-1)]`, We[e]),
				children: i
			})
		})
	});
}
var Ge = {
	2: `h2`,
	3: `h3`,
	4: `h4`,
	5: `h5`,
	6: `h6`
};
function K({ title: e, icon: t, actions: n, level: i = 2, className: a, ...o }) {
	let s = Ue(), c = (0, L.useId)(), l = s?.setHeadingId;
	(0, L.useEffect)(() => {
		if (l) return l(c), () => l(void 0);
	}, [l, c]);
	let u = Ge[i];
	return (0, R.jsxs)(`div`, {
		...o,
		className: r(`sticky top-0 z-1 flex min-h-10 shrink-0 flex-wrap items-center gap-x-2 gap-y-1 border-b border-border bg-inherit px-3 py-1.5`, a),
		children: [
			t ? (0, R.jsx)(`span`, {
				"aria-hidden": !0,
				className: `inline-flex text-muted [&>svg]:size-4`,
				children: t
			}) : null,
			(0, R.jsx)(u, {
				id: c,
				className: `min-w-0 flex-1 text-label font-semibold tracking-[0.04em] text-muted uppercase [overflow-wrap:anywhere]`,
				children: e
			}),
			n ? (0, R.jsx)(`div`, {
				className: `flex shrink-0 items-center gap-0.5`,
				children: n
			}) : null
		]
	});
}
function Ke({ name: e, initials: t, avatarSrc: n, description: a, profileHref: o, profileLabel: s, signOut: l, container: u, className: d }) {
	return (0, R.jsxs)(`div`, {
		className: r(`flex items-center gap-3 px-4 py-3 text-body text-nav-fg`, d),
		children: [
			(0, R.jsx)(p, {
				name: e,
				size: `md`,
				decorative: !0,
				...t === void 0 ? {} : { initials: t },
				...n === void 0 ? {} : { src: n }
			}),
			(0, R.jsxs)(`div`, {
				className: `min-w-0 flex-1`,
				children: [
					(0, R.jsx)(`p`, {
						className: `font-medium [overflow-wrap:anywhere]`,
						children: e
					}),
					a ? (0, R.jsx)(`p`, {
						className: `text-caption text-nav-muted [overflow-wrap:anywhere]`,
						children: a
					}) : null,
					o && s ? (0, R.jsx)(v, {
						href: o,
						className: `inline-flex min-h-6 items-center text-caption text-nav-muted underline-offset-2 data-hovered:text-nav-fg data-hovered:underline`,
						children: s
					}) : null
				]
			}),
			l ? (0, R.jsx)(S, {
				content: l.label,
				placement: `top`,
				container: u,
				children: (0, R.jsx)(c, {
					"aria-label": l.label,
					onPress: l.onPress,
					className: `inline-flex size-control-md shrink-0 items-center justify-center rounded-md text-nav-muted transition-colors data-hovered:bg-nav-hover data-hovered:text-nav-fg data-pressed:bg-nav-active`,
					children: (0, R.jsx)(i, {
						name: `user.sign-out`,
						"aria-hidden": !0,
						className: `size-[1.125rem]`
					})
				})
			}) : null
		]
	});
}
var q = (e, t, n) => Math.min(n, Math.max(t, e));
function qe(e, t, n) {
	if (!e || typeof window > `u`) return null;
	try {
		let r = window.localStorage.getItem(e), i = r === null ? NaN : Number(r);
		return Number.isFinite(i) ? q(i, t, n) : null;
	} catch {
		return null;
	}
}
function Je(e, t) {
	if (e && typeof window < `u`) try {
		window.localStorage.setItem(e, String(Math.round(t * 10) / 10));
	} catch {
		return;
	}
}
function Ye(e) {
	return typeof window > `u` ? () => void 0 : (window.addEventListener(`storage`, e), () => window.removeEventListener(`storage`, e));
}
function Xe() {
	return null;
}
function Ze({ start: e, end: t, label: n, startLabel: i, endLabel: a, orientation: o = `horizontal`, defaultSize: s = 50, size: c, onSizeChange: l, minSize: u = 10, maxSize: d = 90, snapPoints: f, snapDistance: p = 3, step: m = 1, storageKey: h, valueText: g, className: _ }) {
	let v = (0, L.useId)(), y = (0, L.useRef)(null), b = (0, L.useRef)(!1), x = q(s, u, d), [S, C] = (0, L.useState)(null), w = (0, L.useCallback)(() => qe(h, u, d), [
		h,
		u,
		d
	]), T = (0, L.useSyncExternalStore)(Ye, w, Xe), E = q(c ?? S ?? T ?? x, u, d), D = o === `horizontal`, O = (0, L.useMemo)(() => (f ?? []).filter((e) => e >= u && e <= d).toSorted((e, t) => e - t), [
		f,
		u,
		d
	]), k = (0, L.useCallback)((e) => {
		let t = q(e, u, d);
		C(t), Je(h, t), l?.(t);
	}, [
		u,
		d,
		h,
		l
	]), A = (0, L.useCallback)((e) => {
		if (b.current) {
			let t = O.find((t) => Math.abs(t - e) <= p);
			k(t ?? e);
		} else k(e);
	}, [
		O,
		p,
		k
	]), j = (0, L.useCallback)(() => {
		let e = y.current?.getBoundingClientRect(), t = e ? D ? e.width : e.height : 0;
		return t > 0 ? 100 / t : 0;
	}, [D]), { separatorProps: M, isDragging: N } = Fe({
		value: E,
		minValue: u,
		maxValue: d,
		onChange: A,
		orientation: D ? `vertical` : `horizontal`,
		step: m,
		defaultValue: x,
		unitsPerPixel: j,
		announce: (e) => ({
			now: Math.round(e),
			min: Math.round(u),
			max: Math.round(d)
		})
	}), { onKeyDown: ee, onPointerDown: te, onPointerUp: ne, onPointerCancel: re, onLostPointerCapture: ie } = M, ae = (0, L.useCallback)((e) => {
		if (O.length > 0 && (e.key === `PageUp` || e.key === `PageDown`)) {
			e.preventDefault();
			let t = e.key === `PageUp` ? O.find((e) => e > E + .5) ?? d : O.toReversed().find((e) => e < E - .5) ?? u;
			k(t);
		} else ee?.(e);
	}, [
		O,
		E,
		u,
		d,
		k,
		ee
	]), oe = (0, L.useCallback)((e) => {
		e.button === 0 && (b.current = !0), te?.(e);
	}, [te]), P = (0, L.useCallback)((e) => (t) => {
		b.current = !1, e?.(t);
	}, []), se = {
		...M,
		onKeyDown: ae,
		onPointerDown: oe,
		onPointerUp: P(ne),
		onPointerCancel: P(re),
		onLostPointerCapture: P(ie)
	}, F = (0, L.useMemo)(() => ({ "--sk-split-start": `${E}%` }), [E]);
	return (0, R.jsxs)(`div`, {
		ref: y,
		style: F,
		"data-orientation": o,
		className: r(`flex h-full min-h-0 w-full min-w-0`, D ? `flex-row` : `flex-col`, _),
		children: [
			(0, R.jsx)(`div`, {
				id: v,
				...i ? {
					role: `region`,
					"aria-label": i
				} : {},
				className: `flex min-h-0 min-w-0 shrink-0 basis-(--sk-split-start) flex-col overflow-auto`,
				children: e
			}),
			(0, R.jsx)(`div`, {
				...se,
				"aria-label": n,
				"aria-controls": v,
				...g ? { "aria-valuetext": g(E) } : {},
				"data-dragging": N || void 0,
				className: r(`group/split relative z-1 flex shrink-0 touch-none items-center justify-center bg-border select-none forced-color-adjust-none forced-colors:bg-[CanvasText]`, D ? `w-px cursor-col-resize` : `h-px cursor-row-resize`),
				children: (0, R.jsx)(`span`, {
					"aria-hidden": !0,
					className: r(`absolute flex items-center justify-center`, D ? `inset-y-0 -inset-x-2 pointer-coarse:-inset-x-[1.375rem]` : `inset-x-0 -inset-y-2 pointer-coarse:-inset-y-[1.375rem]`),
					children: (0, R.jsx)(`span`, { className: r(`rounded-full bg-transparent transition-colors group-hover/split:bg-accent group-focus-visible/split:bg-accent group-data-dragging/split:bg-accent forced-colors:group-hover/split:bg-[Highlight] forced-colors:group-focus-visible/split:bg-[Highlight] forced-colors:group-data-dragging/split:bg-[Highlight]`, D ? `h-full w-0.5` : `h-0.5 w-full`) })
				})
			}),
			(0, R.jsx)(`div`, {
				...a ? {
					role: `region`,
					"aria-label": a
				} : {},
				className: `flex min-h-0 min-w-0 flex-1 flex-col overflow-auto`,
				children: t
			})
		]
	});
}
var Qe = (0, L.createContext)(null), $e = (0, L.createContext)(0);
function et() {
	return {
		state: (0, L.useContext)(Qe),
		index: (0, L.useContext)($e)
	};
}
function tt({ label: e, className: t }) {
	let { state: n, index: i } = et(), a = n?.sizes[i] ?? 0, o = a + (n?.sizes[i + 1] ?? 0), s = n?.minSize ?? 0, c = n?.resize, l = n?.orientation !== `vertical`, u = (0, L.useCallback)((e) => c?.(i, e / 100), [c, i]), d = (0, L.useCallback)(() => n ? n.unitsPerPixel() * 100 : 0, [n]), { separatorProps: f, isDragging: p } = Fe({
		value: a * 100,
		minValue: s * 100,
		maxValue: (o - s) * 100,
		onChange: u,
		orientation: l ? `vertical` : `horizontal`,
		defaultValue: n ? (n.defaults[i] ?? a) * 100 : void 0,
		unitsPerPixel: d
	});
	return n ? (0, R.jsx)(`div`, {
		...f,
		"aria-label": e,
		"aria-controls": n.paneId(i),
		"data-dragging": p || void 0,
		className: r(`group/splitter relative z-1 flex shrink-0 touch-none items-center justify-center bg-border select-none forced-color-adjust-none forced-colors:bg-[CanvasText]`, l ? `w-px cursor-col-resize` : `h-px cursor-row-resize`, n.stacks && `@max-2xl/split:hidden`, t),
		children: (0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: r(`absolute`, l ? `inset-y-0 -inset-x-2` : `inset-x-0 -inset-y-2`, `flex items-center justify-center`),
			children: (0, R.jsx)(`span`, { className: r(`rounded-full bg-transparent transition-colors group-hover/splitter:bg-accent group-focus-visible/splitter:bg-accent group-data-dragging/splitter:bg-accent forced-colors:group-hover/splitter:bg-[Highlight] forced-colors:group-focus-visible/splitter:bg-[Highlight] forced-colors:group-data-dragging/splitter:bg-[Highlight]`, l ? `h-full w-0.5` : `h-0.5 w-full`) })
		})
	}) : null;
}
function nt({ id: e, size: t, stacks: n, children: i }) {
	let a = (0, L.useMemo)(() => ({ "--sk-split": String(t) }), [t]);
	return (0, R.jsx)(`div`, {
		id: e,
		style: a,
		className: r(`flex min-h-0 min-w-0 [flex:var(--sk-split)_1_0%] *:flex-1`, n && `@max-2xl/split:[flex:none]`),
		children: i
	});
}
function J(e) {
	return (0, L.isValidElement)(e) && e.type === tt;
}
function rt(e) {
	return Array.from({ length: e }, () => 1 / Math.max(1, e));
}
function it(e, t) {
	return e && e.length === t ? e : rt(t);
}
function at({ children: e, orientation: t = `horizontal`, defaultSizes: n, sizes: i, onSizesChange: a, minSize: o = .1, stack: s = !0, label: c, className: l }) {
	let u = L.Children.toArray(e), d = u.length - u.filter(J).length, f = (0, L.useMemo)(() => it(n, d), [n, d]), [p, m] = (0, L.useState)(void 0), h = (0, L.useMemo)(() => it(i ?? p ?? n, d), [
		i,
		p,
		n,
		d
	]), g = (0, L.useId)(), _ = (0, L.useRef)(null), [v, y] = (0, L.useState)(null), b = s && t === `horizontal`, x = F(b ? v : null, b), S = (0, L.useCallback)((e) => {
		_.current = e, y(e);
	}, []), C = b && x ? {
		tabIndex: 0,
		...c ? {
			role: `region`,
			"aria-label": c
		} : {}
	} : {}, w = (0, L.useCallback)((e, t) => {
		let n = (h[e] ?? 0) + (h[e + 1] ?? 0), r = Math.min(n - o, Math.max(o, t)), s = h.map((t, i) => i === e ? r : i === e + 1 ? n - r : t);
		i === void 0 && m(s), a?.(s);
	}, [
		h,
		o,
		i,
		a
	]), T = (0, L.useCallback)(() => {
		let e = _.current?.getBoundingClientRect(), n = t === `horizontal` ? e?.width : e?.height;
		return n ? 1 / n : 0;
	}, [t]), E = (0, L.useCallback)((e) => `${g}-pane-${e}`, [g]), D = (0, L.useMemo)(() => ({
		sizes: h,
		defaults: f,
		minSize: o,
		orientation: t,
		stacks: b,
		paneId: E,
		resize: w,
		unitsPerPixel: T
	}), [
		h,
		f,
		o,
		t,
		b,
		E,
		w,
		T
	]), O = u.map((e, t) => {
		let n = u.slice(0, t);
		if (J(e)) {
			let t = n.filter(J).length;
			return (0, R.jsx)($e.Provider, {
				value: t,
				children: e
			}, `s${t}`);
		}
		let r = n.length - n.filter(J).length;
		return (0, R.jsx)(nt, {
			id: E(r),
			size: h[r] ?? 0,
			stacks: b,
			children: e
		}, `p${r}`);
	});
	return (0, R.jsx)(Qe.Provider, {
		value: D,
		children: (0, R.jsx)(`div`, {
			className: r(`@container/split flex h-full min-h-0 w-full min-w-0`, l),
			children: (0, R.jsx)(`div`, {
				ref: S,
				...C,
				className: r(`flex min-h-0 min-w-0 flex-1 focus:outline-none focus-visible:outline-solid focus-visible:[outline-offset:calc(var(--sk-focus-width)*-1)]`, t === `horizontal` ? `flex-row` : `flex-col`, b && `@max-2xl/split:flex-col @max-2xl/split:overflow-y-auto`),
				children: O
			})
		})
	});
}
function ot({ label: e, children: t, end: n, className: i, ...a }) {
	let o = y(), s = o !== null && !o.landmarks;
	return (0, R.jsxs)(s ? `div` : `footer`, {
		...a,
		role: s ? `group` : void 0,
		"aria-label": e,
		className: r(`flex min-h-7 shrink-0 flex-wrap items-center gap-x-3.5 gap-y-0.5 border-t border-border bg-bar px-3 py-0.5 text-caption text-muted`, i),
		children: [t, n ? (0, R.jsx)(`div`, {
			className: `ms-auto flex flex-wrap items-center gap-x-3.5 gap-y-0.5`,
			children: n
		}) : null]
	});
}
var st = `inline-flex min-h-6 max-w-full items-center gap-1.5 rounded-full border border-border bg-hover px-2.5 text-label font-semibold text-fg [&_svg]:size-3 [&_svg]:shrink-0`;
function Y({ children: e, icon: t, tone: n = `neutral`, onPress: i, tip: a, isDisabled: o, container: s, className: l }) {
	let u = t ?? ce(n), d = (0, R.jsxs)(R.Fragment, { children: [u ? (0, R.jsx)(`span`, {
		"aria-hidden": !0,
		className: `inline-flex`,
		children: u
	}) : null, (0, R.jsx)(`span`, {
		className: `min-w-0 truncate`,
		children: e
	})] });
	if (!i) return (0, R.jsx)(`span`, {
		className: r(st, le[n], l),
		children: d
	});
	let f = (0, R.jsx)(c, {
		...o === void 0 ? {} : { isDisabled: o },
		onPress: i,
		className: r(st, le[n], `transition-colors data-hovered:border-accent data-hovered:text-accent-text data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`, l),
		children: d
	});
	return a ? (0, R.jsx)(S, {
		content: a,
		placement: `top`,
		container: s,
		children: f
	}) : f;
}
var ct = {
	none: `px-3`,
	start: `ps-21 pe-3`,
	end: `ps-3 pe-38`
};
function lt({ brand: e, actions: t, windowControls: n = `none`, isDraggable: i = !1, className: a, children: o, ...s }) {
	let c = y(), l = c && !c.landmarks ? `div` : `header`;
	return (0, R.jsxs)(l, {
		...s,
		className: r(`flex min-h-10 shrink-0 flex-wrap items-center gap-x-2.5 gap-y-1 border-b border-border bg-bar py-1 text-body`, ct[n], i && `[-webkit-app-region:drag] [&_a,&_button,&_input,&_[role]]:[-webkit-app-region:no-drag]`, a),
		children: [
			e ? (0, R.jsx)(`div`, {
				className: `flex min-w-0 shrink-0 items-center gap-2.5`,
				children: e
			}) : null,
			(0, R.jsx)(`div`, {
				className: `flex min-w-0 flex-[1_1_12rem] justify-center`,
				children: o
			}),
			t ? (0, R.jsx)(`div`, {
				className: `ms-auto flex shrink-0 items-center gap-0.5`,
				children: t
			}) : null
		]
	});
}
var ut = e({ default: () => It }), X = {
	href: `/patterns/sidebar/`,
	label: `Sidebar pattern: anatomy, keys and checklist`
}, Z = {
	href: `/patterns/sidebar/`,
	label: `Wzorzec panelu bocznego: budowa, klawisze i lista wdrożenia`
}, dt = `text-label font-semibold text-muted uppercase`;
function Q({ className: e, children: t }) {
	let [n, r] = (0, L.useState)(null);
	return (0, R.jsx)(`div`, {
		ref: r,
		className: e,
		children: t(n)
	});
}
function ft({ app: e = `Tracker` }) {
	return (0, R.jsxs)(`span`, {
		className: `flex items-center gap-2.5`,
		children: [(0, R.jsx)(m, {
			size: 32,
			tone: `nav`,
			kind: `tracker`
		}), (0, R.jsxs)(`span`, {
			className: `text-title font-semibold text-nav-fg`,
			children: [`Skribly `, (0, R.jsx)(`span`, {
				className: `text-nav-accent`,
				children: e
			})]
		})]
	});
}
function pt(e) {
	let [t, n] = (0, L.useState)(e);
	return {
		route: t,
		navigate: (e) => n(e)
	};
}
function mt({ current: e }) {
	return (0, R.jsxs)(ve, {
		label: `Workspace`,
		current: e,
		children: [
			(0, R.jsx)(k, {
				href: `#dashboard`,
				icon: (0, R.jsx)(i, {
					name: `nav.home`,
					tone: `brand`
				}),
				children: `Dashboard`
			}),
			(0, R.jsx)(k, {
				href: `#issues`,
				icon: (0, R.jsx)(i, { name: `nav.tasks` }),
				children: `My issues`
			}),
			(0, R.jsx)(k, {
				href: `#projects`,
				icon: (0, R.jsx)(i, { name: `folder.closed` }),
				children: `Projects`
			}),
			(0, R.jsxs)(B, {
				label: `Boards`,
				currentLabel: `contains the open page`,
				isCollapsible: !1,
				children: [(0, R.jsx)(k, {
					href: `#board-web`,
					icon: (0, R.jsx)(i, {
						name: `nav.dashboard`,
						tone: `duo`
					}),
					end: (0, R.jsx)(U, { children: `WEB` }),
					children: `Website relaunch`
				}), (0, R.jsx)(k, {
					href: `#board-app`,
					icon: (0, R.jsx)(i, {
						name: `nav.dashboard`,
						tone: `duo`
					}),
					end: (0, R.jsx)(U, { children: `APP` }),
					children: `Mobile app with a long project name that wraps`
				})]
			}),
			(0, R.jsxs)(B, {
				label: `Admin`,
				currentLabel: `contains the open page`,
				isCollapsible: !1,
				children: [(0, R.jsx)(k, {
					href: `#people`,
					icon: (0, R.jsx)(i, { name: `user.team` }),
					children: `People`
				}), (0, R.jsx)(k, {
					href: `#settings`,
					icon: (0, R.jsx)(i, { name: `nav.settings` }),
					children: `Settings`
				})]
			})
		]
	});
}
function ht() {
	let e = A();
	return e ? (0, R.jsxs)(`p`, {
		className: `rounded-md border border-border bg-sunken p-3 text-caption text-muted`,
		children: [`${e.isCompact ? `useAppLayout: compact layout. The sidebar opens as a sheet from the menu button.` : `useAppLayout: wide layout. The sidebar stands beside the content.`} `, (0, R.jsx)(d, {
			size: `sm`,
			variant: `outline`,
			onPress: () => e.setNavOpen(!0),
			isDisabled: !e.isCompact,
			children: `Open navigation`
		})]
	}) : null;
}
function gt() {
	let { route: e, navigate: t } = pt(`#board-web`), [n, r] = (0, L.useState)(!1);
	return (0, R.jsx)(s, {
		navigate: t,
		children: (0, R.jsx)(`div`, {
			className: `h-[32rem] overflow-hidden rounded-lg border border-border`,
			children: (0, R.jsx)(O, {
				embedded: !0,
				skipLinkLabel: `Skip to content`,
				skipToNavLabel: `Skip to navigation`,
				sidebar: (0, R.jsx)(_e, {
					label: `Sidebar`,
					closeLabel: `Close navigation`,
					header: (0, R.jsx)(ft, {}),
					footer: (0, R.jsx)(Ke, {
						name: `Ada Lovelace`,
						description: `Admin`,
						profileHref: `#profile`,
						profileLabel: `Profile`,
						signOut: {
							label: `Sign out`,
							onPress: () => {}
						}
					}),
					children: (0, R.jsx)(mt, { current: e })
				}),
				topbar: (0, R.jsxs)(N, {
					menuLabel: `Open navigation`,
					children: [(0, R.jsxs)(d, {
						variant: `outline`,
						className: `mx-auto min-w-0 flex-[1_1_10rem] justify-start text-muted`,
						children: [(0, R.jsx)(i, {
							name: `action.search`,
							"aria-hidden": !0,
							className: `size-4`
						}), (0, R.jsx)(`span`, {
							className: `truncate`,
							children: `Search issues`
						})]
					}), (0, R.jsxs)(`div`, {
						className: `flex items-center gap-1`,
						children: [(0, R.jsx)(V, {
							label: `Notifications, 3 new`,
							badge: `3`,
							children: (0, R.jsx)(i, {
								name: `nav.notifications`,
								"aria-hidden": !0
							})
						}), (0, R.jsx)(V, {
							label: `Dark mode`,
							isSelected: n,
							onChange: r,
							children: n ? (0, R.jsx)(i, {
								name: `theme.light`,
								"aria-hidden": !0
							}) : (0, R.jsx)(i, {
								name: `theme.dark`,
								"aria-hidden": !0
							})
						})]
					})]
				}),
				children: (0, R.jsxs)(j, {
					label: `Content`,
					children: [(0, R.jsx)(W, {
						eyebrow: `Board`,
						title: `Website relaunch`,
						description: `Issues grouped by status.`,
						actions: (0, R.jsx)(d, { children: `New issue` })
					}), (0, R.jsx)(ht, {})]
				})
			})
		})
	});
}
var _t = (0, L.createContext)(() => {});
function vt({ onClick: e, ref: t, href: n, children: r, ...i }) {
	let a = (0, L.useContext)(_t), o = (t) => {
		e?.(t), t.defaultPrevented || (t.preventDefault(), a(n));
	};
	return (0, R.jsx)(`a`, {
		...i,
		ref: t,
		href: n,
		onClick: o,
		children: r
	});
}
var yt = {
	skipToContent: `Skip to content`,
	skipToNavigation: `Skip to navigation`,
	sidebar: `Sidebar`,
	navigation: `Main`,
	toggleSidebar: `Sidebar (Ctrl+[)`,
	sidebarCollapsed: `Sidebar hidden`,
	sidebarExpanded: `Sidebar shown`,
	closeSidebar: `Close navigation`,
	appSwitcher: `Switch app`,
	apps: `Skribly apps`,
	forYou: `For you`,
	recent: `Recent`,
	containsCurrentPage: `contains the open page`,
	search: `Search or run a command`,
	account: `Account`,
	palette: {
		label: `Command palette`,
		searchLabel: `Search commands`,
		listLabel: `Commands`,
		closeLabel: `Close`,
		placeholder: `Search or run a command`,
		emptyLabel: (e) => `Nothing matches “${e}”.`,
		resultsLabel: (e) => `${e} commands`
	}
}, bt = {
	"#inbox": `Inbox`,
	"#issues": `My issues`,
	"#waiting": `Waiting for you`,
	"#board-web": `Website relaunch`,
	"#issue-142": `WEB-142 Header on narrow screens`,
	"#settings": `Settings`,
	"#profile": `Profile`
};
function xt() {
	let [e, t] = (0, L.useState)(`#issues`), [n, r] = (0, L.useState)(``);
	return (0, R.jsx)(_t.Provider, {
		value: t,
		children: (0, R.jsx)(`div`, {
			className: `h-[34rem] overflow-hidden rounded-lg border border-border`,
			children: (0, R.jsx)(Ne, {
				embedded: !0,
				labels: yt,
				linkComponent: vt,
				apps: [
					{
						id: `hub`,
						name: `Skribly Hub`,
						href: `#hub`,
						description: `Organisation and tokens`,
						icon: (0, R.jsx)(m, {
							kind: `hub`,
							size: 24
						})
					},
					{
						id: `tracker`,
						name: `Skribly Tracker`,
						href: `#tracker`,
						description: `Issues and boards`,
						icon: (0, R.jsx)(m, {
							kind: `tracker`,
							size: 24
						})
					},
					{
						id: `agent`,
						name: `Skribly Agent`,
						href: `#agent`,
						description: `Agent sessions`,
						icon: (0, R.jsx)(m, {
							kind: `agent`,
							size: 24
						})
					}
				],
				currentAppId: `tracker`,
				forYou: [
					{
						href: `#inbox`,
						label: `Inbox`,
						icon: (0, R.jsx)(i, {
							name: `nav.inbox`,
							tone: `brand`
						})
					},
					{
						href: `#issues`,
						label: `My issues`,
						icon: (0, R.jsx)(i, { name: `nav.tasks` })
					},
					{
						href: `#waiting`,
						label: `Waiting for you`,
						icon: (0, R.jsx)(i, {
							name: `app.agent`,
							tone: `duo`
						})
					}
				],
				recent: [{
					href: `#board-web`,
					label: `Website relaunch`,
					icon: (0, R.jsx)(i, { name: `nav.dashboard` }),
					end: (0, R.jsx)(U, { children: `WEB` })
				}, {
					href: `#issue-142`,
					label: `WEB-142 Header on narrow screens`,
					icon: (0, R.jsx)(i, { name: `time.clock` })
				}],
				current: e,
				commands: [
					{
						id: `new`,
						label: `New issue`,
						group: `Actions`,
						onAction: () => r(`New issue`)
					},
					{
						id: `issues`,
						label: `Go to my issues`,
						group: `Views`,
						onAction: () => t(`#issues`)
					},
					{
						id: `inbox`,
						label: `Go to inbox`,
						group: `Views`,
						onAction: () => t(`#inbox`)
					}
				],
				searchShortcut: `Ctrl K`,
				create: {
					label: `Create`,
					onPress: () => r(`Create`)
				},
				notifications: {
					label: `Notifications, 2 new`,
					title: `Notifications`,
					badge: 2,
					content: (0, R.jsxs)(`ul`, {
						className: `m-0 flex list-none flex-col gap-2 p-0 text-body`,
						children: [(0, R.jsx)(`li`, { children: `An agent is waiting for your answer on WEB-142.` }), (0, R.jsx)(`li`, { children: `Ada assigned WEB-150 to you.` })]
					})
				},
				settings: {
					label: `Settings`,
					href: `#settings`
				},
				account: {
					name: `Maria Konstancja Wiśniewska-Grzegorzewska`,
					description: `Admin of Skribly`,
					links: [{
						href: `#profile`,
						label: `Profile`,
						icon: (0, R.jsx)(i, { name: `user.account` })
					}],
					actions: [{
						id: `sign-out`,
						label: `Sign out`,
						icon: (0, R.jsx)(i, { name: `user.sign-out` }),
						onPress: () => r(`Sign out`)
					}]
				},
				children: (0, R.jsxs)(j, {
					label: `Content`,
					children: [(0, R.jsx)(W, {
						title: bt[e] ?? e,
						description: `Press Ctrl+[ or Cmd+[ to hide the sidebar, Ctrl+K or Cmd+K to search.`,
						level: 2
					}), n ? (0, R.jsx)(`p`, {
						className: `text-body text-muted`,
						children: `Last action: ${n}`
					}) : null]
				})
			})
		})
	});
}
function St({ close: e }) {
	let t = A()?.isCompact ?? !1, n = (0, L.useRef)(!1);
	return (0, L.useEffect)(() => {
		t && !n.current && (n.current = !0, e());
	}, [t, e]), null;
}
function Ct() {
	let [e, t] = (0, L.useState)(`agents`), [n, r] = (0, L.useState)(!0), a = (0, L.useCallback)(() => r(!1), []), [o, s] = (0, L.useState)(`auto`), c = {
		day: `night`,
		night: `auto`,
		auto: `day`
	};
	return (0, R.jsx)(`div`, {
		className: `h-[32rem] overflow-hidden rounded-lg border border-border`,
		children: (0, R.jsxs)(O, {
			embedded: !0,
			skipLinkLabel: `Skip to content`,
			titlebar: (0, R.jsx)(lt, {
				brand: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(m, {
					size: 22,
					kind: `agent`
				}), (0, R.jsxs)(`span`, {
					className: `font-bold`,
					children: [`Skribly `, (0, R.jsx)(`span`, {
						className: `font-medium text-muted`,
						children: `Agent`
					})]
				})] }),
				actions: (0, R.jsx)(V, {
					label: `Agent panel`,
					isSelected: n,
					onChange: r,
					children: (0, R.jsx)(i, {
						name: `layout.panel`,
						"aria-hidden": !0
					})
				}),
				children: (0, R.jsxs)(d, {
					variant: `outline`,
					size: `sm`,
					className: `w-full max-w-sm justify-start text-muted`,
					children: [
						(0, R.jsx)(i, {
							name: `action.search`,
							"aria-hidden": !0,
							className: `size-3.5`
						}),
						(0, R.jsx)(`span`, {
							className: `truncate`,
							children: `Search or run`
						}),
						(0, R.jsx)(f, {
							className: `ms-auto`,
							children: `⌘K`
						})
					]
				})
			}),
			activityBar: (0, R.jsxs)(ue, {
				label: `Views`,
				footer: (0, R.jsx)(z, {
					label: `Settings`,
					isCurrent: e === `settings`,
					onPress: () => t(`settings`),
					children: (0, R.jsx)(i, {
						name: `nav.settings`,
						"aria-hidden": !0
					})
				}),
				children: [
					(0, R.jsx)(z, {
						label: `Home`,
						shortcut: `⌘1`,
						isCurrent: e === `home`,
						onPress: () => t(`home`),
						children: (0, R.jsx)(i, {
							name: `nav.dashboard`,
							"aria-hidden": !0
						})
					}),
					(0, R.jsx)(z, {
						label: `Agents`,
						tip: `Terminals and chats with agents`,
						shortcut: `⌘2`,
						badge: 2,
						badgeTone: `warn`,
						badgeLabel: `2 waiting for you`,
						isCurrent: e === `agents`,
						onPress: () => t(`agents`),
						children: (0, R.jsx)(i, {
							name: `agent.bot`,
							"aria-hidden": !0
						})
					}),
					(0, R.jsx)(z, {
						label: `Code`,
						shortcut: `⌘3`,
						isCurrent: e === `code`,
						onPress: () => t(`code`),
						children: (0, R.jsx)(i, {
							name: `code.source`,
							"aria-hidden": !0
						})
					})
				]
			}),
			statusBar: (0, R.jsxs)(ot, {
				label: `Status`,
				end: (0, R.jsx)(Y, {
					icon: o === `night` ? (0, R.jsx)(i, { name: `theme.dark` }) : (0, R.jsx)(i, { name: `theme.light` }),
					tip: `Switch: day, night, system`,
					onPress: () => s(c[o]),
					children: o === `auto` ? `Auto` : o === `day` ? `Day` : `Night`
				}),
				children: [(0, R.jsx)(I, {
					icon: (0, R.jsx)(i, { name: `vcs.branch` }),
					children: `main`
				}), (0, R.jsx)(I, {
					icon: (0, R.jsx)(i, { name: `status.current` }),
					children: `1 working · 2 waiting`
				})]
			}),
			children: [
				(0, R.jsx)(St, { close: a }),
				(0, R.jsx)(j, {
					label: `Content`,
					width: `full`,
					children: (0, R.jsx)(W, {
						title: `Agents`,
						description: `Sessions in this project.`,
						level: 2
					})
				}),
				(0, R.jsx)(Be, {
					label: `Agent panel`,
					closeLabel: `Close the agent panel`,
					onClose: a,
					isOpen: n,
					resizeLabel: `Resize the agent panel`,
					defaultWidth: 320,
					children: (0, R.jsx)(`p`, {
						className: `p-3 text-body text-muted`,
						children: `Ask the agent about this project.`
					})
				})
			]
		})
	});
}
function wt() {
	let { route: e, navigate: t } = pt(`#settings`);
	return (0, R.jsx)(s, {
		navigate: t,
		children: (0, R.jsx)(`div`, {
			className: `max-w-72 rounded-lg bg-nav`,
			children: (0, R.jsx)(mt, { current: e })
		})
	});
}
function Tt() {
	return (0, R.jsx)(`div`, {
		className: `max-w-72 rounded-lg bg-nav p-3 [--sk-icon-accent:var(--sk-nav-accent)] [--sk-icon-soft:color-mix(in_srgb,var(--sk-nav-accent)_16%,transparent)]`,
		children: (0, R.jsx)(`nav`, {
			"aria-label": `Examples`,
			children: (0, R.jsxs)(`ul`, {
				className: `flex flex-col gap-0.5`,
				children: [
					(0, R.jsx)(k, {
						href: `#a`,
						icon: (0, R.jsx)(i, {
							name: `nav.home`,
							tone: `brand`
						}),
						isCurrent: !0,
						children: `Current page`
					}),
					(0, R.jsx)(k, {
						href: `#b`,
						icon: (0, R.jsx)(i, {
							name: `file.document`,
							tone: `duo`
						}),
						children: `Another page`
					}),
					(0, R.jsx)(k, {
						href: `#c`,
						icon: (0, R.jsx)(i, { name: `folder.closed` }),
						end: (0, R.jsx)(U, { children: `KEY` }),
						children: `With a key at the end and a label long enough to wrap`
					}),
					(0, R.jsx)(k, {
						href: `#d`,
						icon: (0, R.jsx)(i, { name: `nav.settings` }),
						isDisabled: !0,
						children: `Disabled`
					})
				]
			})
		})
	});
}
function Et() {
	return (0, R.jsx)(`div`, {
		className: `max-w-72 rounded-lg bg-nav`,
		children: (0, R.jsxs)(ve, {
			label: `Groups`,
			current: `#reports`,
			children: [
				(0, R.jsxs)(B, {
					label: `Holds the open page`,
					currentLabel: `contains the open page`,
					isCollapsible: !1,
					children: [(0, R.jsx)(k, {
						href: `#overview`,
						children: `Overview`
					}), (0, R.jsx)(k, {
						href: `#reports`,
						children: `Reports`
					})]
				}),
				(0, R.jsx)(B, {
					label: `Another group`,
					isCollapsible: !1,
					children: (0, R.jsx)(k, {
						href: `#members`,
						children: `Members`
					})
				}),
				(0, R.jsx)(B, {
					label: `Help`,
					isCollapsible: !1,
					children: (0, R.jsx)(k, {
						href: `#help`,
						children: `Help`
					})
				})
			]
		})
	});
}
var Dt = {
	en: {
		rail: `Sections`,
		pin: `Keep the panel open`,
		collapse: `Collapse to the rail`,
		expand: `Expand the panel`,
		filter: (e) => `Filter ${e}`,
		filterPlaceholder: `Filter`,
		noMatches: `No page matches.`,
		currentSection: `holds the open page`,
		back: `All sections`,
		backTo: (e) => `Back to ${e}`,
		close: `Close navigation`,
		menu: `Open navigation`,
		skip: `Skip to content`,
		skipNav: `Skip to navigation`,
		site: `Site: Skribly`,
		sites: [
			`Skribly`,
			`Docs`,
			`Newsletter`
		],
		theme: `Theme`,
		themes: {
			light: `Light`,
			dark: `Dark`,
			contrast: `High contrast`
		},
		account: `Account: Ada Lovelace`,
		profile: `Profile`,
		signOut: `Sign out`,
		content: `Content`,
		tabs: `Page sections`,
		tabNames: [
			`Overview`,
			`Activity`,
			`Settings`
		],
		lead: `The rail is compact. Point at Commerce: its panel opens to the side; point at Products and its pages open one level further to the side, lined up with the row. The pin docks the panel beside the content. Narrow the window for the phone drawer, where each level is a screen.`,
		phone: ` on a phone`,
		sections: {
			home: `Home`,
			content: `Content`,
			commerce: `Commerce`,
			marketing: `Marketing`,
			insights: `Insights`,
			support: `Support`,
			settings: `Settings`
		},
		groups: {
			publish: `Publish`,
			community: `Community`,
			sales: `Sales`,
			catalog: `Catalog`,
			grow: `Grow`,
			read: `Reports`,
			team: `Team`,
			site: `Site`
		},
		links: {
			pages: `Pages`,
			articles: `Articles`,
			categories: `Categories`,
			tags: `Tags`,
			media: `Media`,
			comments: `Comments`,
			orders: `Orders`,
			returns: `Returns`,
			invoices: `Invoices`,
			products: `Products`,
			variants: `Variants`,
			attributes: `Attributes`,
			brands: `Brands`,
			customers: `Customers`,
			newsletter: `Newsletter`,
			campaigns: `Campaigns`,
			search: `Search engines`,
			overview: `Overview`,
			traffic: `Traffic`,
			reports: `Saved reports`,
			tickets: `Tickets`,
			assistant: `Assistant`,
			site: `Site`,
			domains: `Domains`,
			languages: `Languages`,
			users: `Users`,
			roles: `Roles`,
			integrations: `Integrations`
		},
		counts: {
			comments: `4 new`,
			orders: `12 to ship`,
			commerce: `12 orders to ship`,
			tickets: `3 open`,
			support: `3 open tickets`
		}
	},
	pl: {
		rail: `Sekcje`,
		pin: `Zostaw panel otwarty`,
		collapse: `Zwiń do paska`,
		expand: `Rozwiń panel`,
		filter: (e) => `Filtruj: ${e}`,
		filterPlaceholder: `Filtruj`,
		noMatches: `Żadna strona nie pasuje.`,
		currentSection: `zawiera otwartą stronę`,
		back: `Wszystkie sekcje`,
		backTo: (e) => `Wróć do: ${e}`,
		close: `Zamknij nawigację`,
		menu: `Otwórz nawigację`,
		skip: `Przejdź do treści`,
		skipNav: `Przejdź do nawigacji`,
		site: `Witryna: Skribly`,
		sites: [
			`Skribly`,
			`Dokumentacja`,
			`Newsletter`
		],
		theme: `Motyw`,
		themes: {
			light: `Dzień`,
			dark: `Noc`,
			contrast: `Wysoki kontrast`
		},
		account: `Konto: Ada Lovelace`,
		profile: `Profil`,
		signOut: `Wyloguj się`,
		content: `Treść`,
		tabs: `Części strony`,
		tabNames: [
			`Przegląd`,
			`Aktywność`,
			`Ustawienia`
		],
		lead: `Pasek jest wąski. Najedź na Sprzedaż: jej panel otwiera się z boku; najedź na Produkty, a ich strony otworzą się o poziom dalej w bok, na wysokości wiersza. Pinezka przypina panel obok treści. Zwęż okno, aby zobaczyć szufladę na telefonie, w której każdy poziom jest ekranem.`,
		phone: ` na telefonie`,
		sections: {
			home: `Start`,
			content: `Treści`,
			commerce: `Sprzedaż`,
			marketing: `Marketing`,
			insights: `Statystyki`,
			support: `Pomoc`,
			settings: `Ustawienia`
		},
		groups: {
			publish: `Publikacja`,
			community: `Społeczność`,
			sales: `Zamówienia`,
			catalog: `Katalog`,
			grow: `Zasięg`,
			read: `Raporty`,
			team: `Zespół`,
			site: `Witryna`
		},
		links: {
			pages: `Strony`,
			articles: `Artykuły`,
			categories: `Kategorie`,
			tags: `Tagi`,
			media: `Media`,
			comments: `Komentarze`,
			orders: `Zamówienia`,
			returns: `Zwroty`,
			invoices: `Faktury`,
			products: `Produkty`,
			variants: `Warianty`,
			attributes: `Atrybuty`,
			brands: `Marki`,
			customers: `Klienci`,
			newsletter: `Newsletter`,
			campaigns: `Kampanie`,
			search: `Wyszukiwarki`,
			overview: `Przegląd`,
			traffic: `Ruch`,
			reports: `Zapisane raporty`,
			tickets: `Zgłoszenia`,
			assistant: `Asystent`,
			site: `Witryna`,
			domains: `Domeny`,
			languages: `Języki`,
			users: `Użytkownicy`,
			roles: `Role`,
			integrations: `Integracje`
		},
		counts: {
			comments: `4 nowe`,
			orders: `12 do wysłania`,
			commerce: `12 zamówień do wysłania`,
			tickets: `3 otwarte`,
			support: `3 otwarte zgłoszenia`
		}
	}
};
function Ot(e) {
	let t = e.links;
	return [
		{
			id: `home`,
			label: e.sections.home,
			icon: (0, R.jsx)(i, { name: `nav.home` }),
			href: `#/home`
		},
		{
			id: `content`,
			label: e.sections.content,
			icon: (0, R.jsx)(i, { name: `file.document` }),
			groups: [{
				label: e.groups.publish,
				links: [
					{
						href: `#/content/pages`,
						label: t.pages,
						icon: (0, R.jsx)(i, { name: `file.document` })
					},
					{
						href: `#/content/articles`,
						label: t.articles,
						icon: (0, R.jsx)(i, { name: `content.post` }),
						children: [{
							href: `#/content/articles/categories`,
							label: t.categories,
							icon: (0, R.jsx)(i, { name: `content.category` })
						}, {
							href: `#/content/articles/tags`,
							label: t.tags,
							icon: (0, R.jsx)(i, { name: `vcs.tag` })
						}]
					},
					{
						href: `#/content/media`,
						label: t.media,
						icon: (0, R.jsx)(i, { name: `file.image` })
					}
				]
			}, {
				label: e.groups.community,
				links: [{
					href: `#/content/comments`,
					label: t.comments,
					icon: (0, R.jsx)(i, { name: `nav.inbox` }),
					count: 4,
					countLabel: e.counts.comments
				}]
			}]
		},
		{
			id: `commerce`,
			label: e.sections.commerce,
			icon: (0, R.jsx)(i, { name: `ops.container` }),
			count: 12,
			countLabel: e.counts.commerce,
			groups: [{
				label: e.groups.sales,
				links: [{
					href: `#/commerce/orders`,
					label: t.orders,
					icon: (0, R.jsx)(i, { name: `nav.inbox` }),
					count: 12,
					countLabel: e.counts.orders,
					children: [{
						href: `#/commerce/orders/returns`,
						label: t.returns,
						icon: (0, R.jsx)(i, { name: `action.refresh` })
					}, {
						href: `#/commerce/orders/invoices`,
						label: t.invoices,
						icon: (0, R.jsx)(i, { name: `file.document` })
					}]
				}]
			}, {
				label: e.groups.catalog,
				links: [{
					href: `#/commerce/products`,
					label: t.products,
					icon: (0, R.jsx)(i, { name: `content.product` }),
					children: [
						{
							href: `#/commerce/products/variants`,
							label: t.variants,
							icon: (0, R.jsx)(i, { name: `layout.list` })
						},
						{
							href: `#/commerce/products/attributes`,
							label: t.attributes,
							icon: (0, R.jsx)(i, { name: `content.hash` })
						},
						{
							href: `#/commerce/products/brands`,
							label: t.brands,
							icon: (0, R.jsx)(i, { name: `content.category` })
						}
					]
				}, {
					href: `#/commerce/customers`,
					label: t.customers,
					icon: (0, R.jsx)(i, { name: `user.team` })
				}]
			}]
		},
		{
			id: `marketing`,
			label: e.sections.marketing,
			icon: (0, R.jsx)(i, { name: `ai.sparkles` }),
			groups: [{
				label: e.groups.grow,
				links: [
					{
						href: `#/marketing/newsletter`,
						label: t.newsletter,
						icon: (0, R.jsx)(i, { name: `nav.notifications` })
					},
					{
						href: `#/marketing/campaigns`,
						label: t.campaigns,
						icon: (0, R.jsx)(i, { name: `ai.sparkles` })
					},
					{
						href: `#/marketing/search`,
						label: t.search,
						icon: (0, R.jsx)(i, { name: `action.search` }),
						keywords: [`seo`]
					}
				]
			}]
		},
		{
			id: `insights`,
			label: e.sections.insights,
			icon: (0, R.jsx)(i, { name: `nav.dashboard` }),
			groups: [{
				label: e.groups.read,
				links: [
					{
						href: `#/insights/overview`,
						label: t.overview,
						icon: (0, R.jsx)(i, { name: `nav.dashboard` })
					},
					{
						href: `#/insights/traffic`,
						label: t.traffic,
						icon: (0, R.jsx)(i, { name: `vcs.branch` })
					},
					{
						href: `#/insights/reports`,
						label: t.reports,
						icon: (0, R.jsx)(i, { name: `time.clock` })
					}
				]
			}]
		},
		{
			id: `support`,
			label: e.sections.support,
			icon: (0, R.jsx)(i, { name: `status.help` }),
			count: 3,
			countLabel: e.counts.support,
			groups: [{ links: [{
				href: `#/support/tickets`,
				label: t.tickets,
				icon: (0, R.jsx)(i, { name: `nav.inbox` }),
				count: 3,
				countLabel: e.counts.tickets
			}, {
				href: `#/support/assistant`,
				label: t.assistant,
				icon: (0, R.jsx)(i, { name: `agent.bot` })
			}] }]
		},
		{
			id: `settings`,
			label: e.sections.settings,
			icon: (0, R.jsx)(i, { name: `nav.settings` }),
			groups: [{
				label: e.groups.site,
				links: [{
					href: `#/settings/site`,
					label: t.site,
					icon: (0, R.jsx)(i, { name: `nav.web` }),
					children: [{
						href: `#/settings/site/domains`,
						label: t.domains,
						icon: (0, R.jsx)(i, { name: `nav.web` })
					}, {
						href: `#/settings/site/languages`,
						label: t.languages,
						icon: (0, R.jsx)(i, { name: `nav.languages` })
					}]
				}, {
					href: `#/settings/integrations`,
					label: t.integrations,
					icon: (0, R.jsx)(i, { name: `ops.integration` })
				}]
			}, {
				label: e.groups.team,
				links: [{
					href: `#/settings/users`,
					label: t.users,
					icon: (0, R.jsx)(i, { name: `user.team` }),
					children: [{
						href: `#/settings/users/roles`,
						label: t.roles,
						icon: (0, R.jsx)(i, { name: `user.roles` })
					}]
				}]
			}]
		}
	];
}
function kt(e) {
	return e.flatMap((e) => [e, ...kt(e.children ?? [])]);
}
var At = `inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-muted outline-none data-hovered:bg-hover data-hovered:text-fg data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid`;
function $({ desktop: e, phone: t }) {
	let n = Dt[(0, L.useContext)(u) === `pl` ? `pl` : `en`], { route: a, navigate: o } = pt(`#/commerce/products/variants`), [l, d] = (0, L.useState)(void 0), [f, v] = (0, L.useState)(`overview`), y = (e) => e.startsWith(`#tab-`) ? v(e.slice(5)) : o(e), b = Ot(n), x = {
		rail: n.rail,
		pin: n.pin,
		filterLabel: n.filter,
		filterPlaceholder: n.filterPlaceholder,
		noMatches: n.noMatches,
		currentSection: n.currentSection,
		back: n.back,
		backTo: n.backTo,
		collapse: n.collapse,
		expand: n.expand,
		close: n.close
	}, S = t ? n.phone : ``, C = b.flatMap((e) => [...e.href ? [{
		href: e.href,
		label: e.label
	}] : [], ...kt((e.groups ?? []).flatMap((e) => e.links))]).find((e) => e.href === a)?.label ?? n.sections.home;
	return (0, R.jsx)(s, {
		navigate: y,
		children: (0, R.jsx)(Q, {
			className: r(`relative h-[min(46rem,calc(100dvh-7rem))] overflow-hidden rounded-lg border border-border`, t && `w-[24rem] max-w-full`),
			children: (r) => (0, R.jsxs)(`div`, {
				"data-theme": l,
				className: `h-full`,
				children: [e === `mac` ? (0, R.jsxs)(`div`, {
					"aria-hidden": !0,
					className: `pointer-events-none absolute start-[0.875rem] top-5 z-50 flex gap-2`,
					children: [
						(0, R.jsx)(`span`, { className: `size-3 rounded-full bg-border-strong` }),
						(0, R.jsx)(`span`, { className: `size-3 rounded-full bg-border-strong` }),
						(0, R.jsx)(`span`, { className: `size-3 rounded-full bg-border-strong` })
					]
				}) : null, (0, R.jsx)(O, {
					embedded: !0,
					skipLinkLabel: n.skip,
					skipToNavLabel: n.skipNav,
					sidebar: (0, R.jsx)(te, {
						sections: b,
						current: a,
						labels: t ? {
							...x,
							rail: `${x.rail}${S}`
						} : x,
						storageKey: null,
						container: r,
						desktop: e,
						top: (0, R.jsx)(g, {
							container: r,
							placement: `end top`,
							trigger: (0, R.jsx)(c, {
								"aria-label": n.site,
								className: At,
								children: (0, R.jsx)(m, {
									size: 28,
									kind: `tracker`
								})
							}),
							children: n.sites.map((e) => (0, R.jsx)(_, {
								id: e,
								children: e
							}, e))
						}),
						bottom: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsxs)(g, {
							container: r,
							placement: `end bottom`,
							onAction: (e) => d(e),
							trigger: (0, R.jsx)(c, {
								"aria-label": n.theme,
								className: At,
								children: l === `light` ? (0, R.jsx)(i, {
									name: `theme.light`,
									"aria-hidden": !0,
									className: `size-5`
								}) : (0, R.jsx)(i, {
									name: `theme.dark`,
									"aria-hidden": !0,
									className: `size-5`
								})
							}),
							children: [
								(0, R.jsx)(_, {
									id: `light`,
									icon: (0, R.jsx)(i, {
										name: `theme.light`,
										size: 16
									}),
									children: n.themes.light
								}),
								(0, R.jsx)(_, {
									id: `dark`,
									icon: (0, R.jsx)(i, {
										name: `theme.dark`,
										size: 16
									}),
									children: n.themes.dark
								}),
								(0, R.jsx)(_, {
									id: `contrast`,
									icon: (0, R.jsx)(i, {
										name: `status.current`,
										size: 16
									}),
									children: n.themes.contrast
								})
							]
						}), (0, R.jsxs)(g, {
							container: r,
							placement: `end bottom`,
							trigger: (0, R.jsxs)(c, {
								className: At,
								children: [(0, R.jsx)(p, {
									name: `Ada Lovelace`,
									size: `sm`,
									decorative: !0
								}), (0, R.jsx)(`span`, {
									className: `sr-only`,
									children: n.account
								})]
							}),
							children: [(0, R.jsx)(_, {
								id: `profile`,
								icon: (0, R.jsx)(i, {
									name: `user.account`,
									size: 16
								}),
								children: n.profile
							}), (0, R.jsx)(_, {
								id: `out`,
								icon: (0, R.jsx)(i, {
									name: `user.sign-out`,
									size: 16
								}),
								children: n.signOut
							})]
						})] })
					}),
					topbar: (0, R.jsx)(N, { menuLabel: n.menu }),
					children: (0, R.jsxs)(j, {
						label: `${n.content}${S}`,
						children: [
							(0, R.jsx)(W, {
								title: C,
								description: n.lead
							}),
							(0, R.jsx)(h, {
								label: `${n.tabs}${S}`,
								currentId: f,
								className: `mt-4`,
								items: [
									`overview`,
									`activity`,
									`settings`
								].map((e, t) => ({
									id: e,
									href: `#tab-${e}`,
									label: n.tabNames[t] ?? e
								}))
							}),
							(0, R.jsx)(`p`, {
								className: `mt-4 text-body text-muted`,
								children: (0, R.jsx)(`code`, { children: a })
							})
						]
					})
				})]
			})
		})
	});
}
function jt() {
	let { route: e, navigate: t } = pt(`#issues`);
	return (0, R.jsx)(s, {
		navigate: t,
		children: (0, R.jsx)(`div`, {
			className: `h-[28rem] overflow-hidden rounded-lg border border-border`,
			children: (0, R.jsx)(O, {
				embedded: !0,
				skipLinkLabel: `Skip to content`,
				sidebar: (0, R.jsx)(_e, {
					label: `Sidebar`,
					closeLabel: `Close navigation`,
					header: (0, R.jsx)(ft, {}),
					footer: (0, R.jsx)(Ke, {
						name: `Ada Lovelace`,
						description: `Admin`
					}),
					children: (0, R.jsx)(mt, { current: e })
				}),
				topbar: (0, R.jsx)(N, { menuLabel: `Open navigation` }),
				children: (0, R.jsx)(j, {
					label: `Content`,
					children: (0, R.jsx)(`p`, {
						className: `text-body text-muted`,
						children: `Narrow the window: the sidebar becomes a sheet behind the menu button.`
					})
				})
			})
		})
	});
}
var Mt = {
	en: {
		label: `Resize the form`,
		form: `Form`,
		preview: `Preview`,
		title: `Title`,
		titleValue: `Opening hours`,
		body: `Open from Monday to Friday, 9:00 to 17:00.`,
		value: (e) => `Form ${e}% of the width`,
		note: `Drag the line or focus it: arrows move it by 1%, Page Up and Page Down jump to a third, a half and two thirds, Enter folds the form away, a double click resets. The width is kept for this page.`
	},
	pl: {
		label: `Zmień szerokość formularza`,
		form: `Formularz`,
		preview: `Podgląd`,
		title: `Tytuł`,
		titleValue: `Godziny otwarcia`,
		body: `Czynne od poniedziałku do piątku, od 9:00 do 17:00.`,
		value: (e) => `Formularz ${e}% szerokości`,
		note: `Przeciągnij linię albo ustaw na niej fokus: strzałki przesuwają o 1%, Page Up i Page Down skaczą do jednej trzeciej, połowy i dwóch trzecich, Enter zwija formularz, podwójne kliknięcie przywraca. Szerokość zostaje zapamiętana dla tej strony.`
	}
};
function Nt() {
	let e = Mt[(0, L.useContext)(u) === `pl` ? `pl` : `en`], [t, n] = (0, L.useState)(e.titleValue), r = (0, L.useId)();
	return (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, R.jsx)(`p`, {
			className: `text-caption text-muted`,
			children: e.note
		}), (0, R.jsx)(`div`, {
			className: `h-64 overflow-hidden rounded-lg border border-border`,
			children: (0, R.jsx)(Ze, {
				label: e.label,
				startLabel: e.form,
				endLabel: e.preview,
				defaultSize: 40,
				minSize: 20,
				maxSize: 80,
				snapPoints: [
					33,
					50,
					66
				],
				storageKey: `sk-gallery:split-pane`,
				valueText: e.value,
				start: (0, R.jsxs)(`div`, {
					className: `flex flex-col gap-1 p-3`,
					children: [(0, R.jsx)(`label`, {
						htmlFor: r,
						className: `text-caption font-medium text-fg`,
						children: e.title
					}), (0, R.jsx)(`input`, {
						id: r,
						value: t,
						onChange: (e) => n(e.target.value),
						className: `h-control-md rounded-md border border-border-strong bg-input px-2 text-body text-fg`
					})]
				}),
				end: (0, R.jsxs)(`div`, {
					className: `flex flex-col gap-1 bg-sunken p-3`,
					children: [(0, R.jsx)(`p`, {
						className: `text-title font-semibold text-fg`,
						children: t
					}), (0, R.jsx)(`p`, {
						className: `text-body text-muted`,
						children: e.body
					})]
				})
			})
		})]
	});
}
function Pt() {
	let [e, t] = (0, L.useState)([.3, .7]);
	return (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-2`,
		children: [(0, R.jsx)(`div`, {
			className: `h-64 overflow-hidden rounded-lg border border-border`,
			children: (0, R.jsxs)(at, {
				sizes: e,
				onSizesChange: t,
				label: `Files and preview`,
				children: [
					(0, R.jsxs)(G, {
						variant: `side`,
						children: [(0, R.jsx)(K, {
							title: `Files`,
							icon: (0, R.jsx)(i, { name: `folder.closed` })
						}), (0, R.jsx)(`ul`, {
							className: `p-2 text-body`,
							children: [
								`README.md`,
								`package.json`,
								`src`,
								`tokens`,
								`test`
							].map((e) => (0, R.jsx)(`li`, {
								className: `rounded-sm px-2 py-1`,
								children: e
							}, e))
						})]
					}),
					(0, R.jsx)(tt, { label: `Resize the file list` }),
					(0, R.jsxs)(G, { children: [(0, R.jsx)(K, { title: `Preview` }), (0, R.jsx)(`p`, {
						className: `p-3 text-body text-muted`,
						children: `Drag the line, or focus it and use the arrow keys.`
					})] })
				]
			})
		}), (0, R.jsx)(`p`, {
			className: `text-caption text-muted`,
			children: `File list: ${Math.round((e[0] ?? 0) * 100)}%`
		})]
	});
}
function Ft() {
	let [e, t] = (0, L.useState)(140), n = (0, L.useId)();
	return (0, R.jsxs)(`div`, {
		className: `flex h-72 flex-col overflow-hidden rounded-lg border border-border`,
		children: [(0, R.jsx)(`div`, {
			className: `min-h-0 flex-1 p-3 text-body text-muted`,
			children: `Editor`
		}), (0, R.jsxs)(`section`, {
			id: n,
			"aria-label": `Terminal`,
			className: `relative flex flex-col border-t border-border bg-sunken`,
			style: { height: e },
			children: [
				(0, R.jsx)(Le, {
					label: `Resize the terminal`,
					value: e,
					onChange: t,
					minValue: 80,
					maxValue: 220,
					defaultValue: 140,
					edge: `top`,
					controls: n
				}),
				(0, R.jsx)(K, {
					title: `Terminal`,
					icon: (0, R.jsx)(i, { name: `code.terminal-window` })
				}),
				(0, R.jsx)(`p`, {
					className: `p-3 font-mono text-caption`,
					children: `$ npm test`
				})
			]
		})]
	});
}
var It = {
	title: `Shell`,
	status: `stable`,
	description: `The frame around every Skribly screen: the web layout with a dark sidebar and a top bar, the desktop layout with a title bar, an activity bar, a status bar and a dock, and split panes. It measures its own width, so it reflows the same in a narrow window, at 400% zoom and in a preview, and its sheets hold focus on small screens.`,
	pl: {
		title: `Powłoka`,
		description: `Rama wokół każdego ekranu Skribly: układ webowy z ciemnym panelem bocznym i górnym paskiem, układ desktopowy z paskiem tytułu, paskiem aktywności, paskiem stanu i dokiem oraz podzielone panele. Mierzy własną szerokość, więc układa się tak samo w wąskim oknie, przy powiększeniu 400% i w podglądzie, a jej arkusze trzymają fokus na małych ekranach.`
	},
	demos: [
		{
			name: `AppShell`,
			components: [`AppShell`],
			description: `The one shell of the Skribly apps, built from the parts below: the app switcher top left, a sidebar with For you and Recent, search that opens the CommandPalette, Create, a notifications slot for the Inbox, settings and the account. Pick it for every signed-in screen of Hub and the Tracker; every word is a prop, and linkComponent renders the links, so an app passes the link of its router, such as the one of Next.js, and the library imports no router.`,
			usage: `<AppShell
  labels={labels}
  apps={registryApps}
  currentAppId="tracker"
  forYou={[{ href: '/inbox', label: 'Inbox' }]}
  recent={recent}
  current={pathname}
  commands={commands}
  create={{ label: 'Create', onPress: openCreate }}
  notifications={{ label: 'Notifications, 2 new', title: 'Notifications', badge: 2, content: <Icon name="nav.inbox" compact … /> }}
  settings={{ label: 'Settings', href: '/settings' }}
  account={{ name, links: [{ href: '/profile', label: 'Profile' }], actions: [{ id: 'out', label: 'Sign out', onPress: signOut }] }}
  linkComponent={Link}
>
  <MainContent>…</MainContent>
</AppShell>`,
			accessibility: `Tab goes through the skip links, the sidebar button, the app switcher, search, Create, notifications, settings and the account, then the sidebar links and the page. Ctrl+[ and Cmd+[ hide and show the sidebar; the button reports aria-expanded and a polite status says the new state. Below 48rem the same button and keys open the sidebar as a modal sheet. Search, Ctrl+K and Cmd+K open the command palette; Escape closes it and focus returns to where it was. The current app carries aria-current and a check mark, not colour alone. Every control is at least 44px on touch, and the shell holds at 320px with no sideways scroll: long names wrap or are cut with the full name in the panel.`,
			pl: {
				description: `Jedna powłoka aplikacji Skribly, złożona z części opisanych niżej: przełącznik aplikacji w lewym górnym rogu, panel boczny z sekcjami For you i Recent, wyszukiwanie, które otwiera CommandPalette, Create, miejsce na powiadomienia dla Inbox, ustawienia i konto. Wybierz ją dla każdego ekranu Hub i Trackera po zalogowaniu. Każde słowo jest propem, a linki renderuje linkComponent, więc aplikacja przekazuje link swojego routera, na przykład ten z Next.js, a biblioteka nie importuje żadnego routera.`,
				accessibility: `Klawisz Tab przechodzi przez linki pomijające, przycisk panelu bocznego, przełącznik aplikacji, wyszukiwanie, Create, powiadomienia, ustawienia i konto, a potem przez linki panelu bocznego i stronę. Ctrl+[ i Cmd+[ chowają i pokazują panel boczny. Przycisk zgłasza aria-expanded, a region statusu typu polite ogłasza nowy stan. Poniżej 48 rem ten sam przycisk i te same klawisze otwierają panel boczny jako arkusz modalny. Wyszukiwanie oraz Ctrl+K i Cmd+K otwierają paletę poleceń. Escape ją zamyka, a fokus wraca tam, gdzie był. Bieżąca aplikacja ma aria-current i znak zaznaczenia, nie tylko kolor. Każda kontrolka ma co najmniej 44 px na ekranie dotykowym, a powłoka mieści się w 320 px bez przewijania w bok: długie nazwy się zawijają albo są skracane, a pełna nazwa jest w panelu.`
			},
			render: () => (0, R.jsx)(xt, {})
		},
		{
			name: `Web app layout`,
			components: [`AppLayout`],
			description: `The page frame of the web apps: skip links, a sidebar, a top bar and the main column. Pick it for any signed-in screen; useAppLayout gives a custom control the same state as the menu button.`,
			usage: `<AppLayout
  skipLinkLabel="Skip to content"
  skipToNavLabel="Skip to navigation"
  sidebar={<Sidebar label="Sidebar" closeLabel="Close navigation">…</Sidebar>}
  topbar={<Topbar menuLabel="Open navigation">…</Topbar>}
>
  <MainContent>…</MainContent>
</AppLayout>`,
			accessibility: `The first Tab shows a skip link to the main landmark, and a second one to the navigation, which opens the sheet on a narrow layout. Below 48rem the sidebar becomes a modal sheet: focus moves in, stays in, and returns to the menu button on Escape. Set embedded for previews so the page keeps one set of landmarks.`,
			pl: {
				description: `Rama strony aplikacji webowych: linki pomijające, panel boczny, górny pasek i główna kolumna. Wybierz ją dla każdego ekranu po zalogowaniu; useAppLayout daje własnej kontrolce ten sam stan co przycisk menu.`,
				accessibility: `Pierwszy Tab pokazuje link pomijający do landmarku main, a drugi do nawigacji, która w wąskim układzie otwiera arkusz. Poniżej 48 rem panel boczny staje się arkuszem modalnym: fokus wchodzi do niego, zostaje w środku i wraca na przycisk menu po klawiszu Escape. Ustaw embedded dla podglądów, aby strona zachowała jeden zestaw landmarków.`
			},
			render: () => (0, R.jsx)(gt, {})
		},
		{
			name: `Desktop app layout`,
			components: [`Titlebar`, `Dock`],
			description: `The frame of the desktop app: a title bar, an activity bar, a status bar and a dock for a side panel such as the agent chat. Pick Dock for a panel that sits beside any view and can be resized or closed.`,
			usage: `<AppLayout skipLinkLabel="Skip to content" titlebar={<Titlebar brand={…} actions={…} />}
  activityBar={<ActivityBar label="Views">…</ActivityBar>} statusBar={<StatusBar label="Status">…</StatusBar>}>
  <MainContent>…</MainContent>
  <Dock label="Agent panel" closeLabel="Close" onClose={close} resizeLabel="Resize the agent panel">…</Dock>
</AppLayout>`,
			accessibility: `The title bar is the banner and the dock a named complementary landmark with a level 2 heading. Its grip is a focusable separator: arrow keys resize by 16px, Home and End go to the limits, Enter collapses and restores. Below 48rem the dock opens as a modal sheet that closes on Escape; on a phone this demo starts with it closed, so the page is not hidden behind a sheet nobody opened.`,
			pl: {
				description: `Rama aplikacji desktopowej: pasek tytułu, pasek aktywności, pasek stanu i dok na panel boczny, taki jak czat agenta. Wybierz Dock dla panelu, który stoi obok dowolnego widoku i można zmieniać jego rozmiar albo go zamykać.`,
				accessibility: `Pasek tytułu jest banerem, a dok nazwanym landmarkiem complementary z nagłówkiem poziomu 2. Jego uchwyt jest separatorem z fokusem: klawisze strzałek zmieniają rozmiar o 16 px, Home i End idą do granic, Enter zwija i przywraca. Poniżej 48 rem dok otwiera się jako arkusz modalny, który zamyka się klawiszem Escape; na telefonie ten przykład startuje z zamkniętym dokiem, żeby strony nie zasłaniał arkusz, którego nikt nie otworzył.`
			},
			render: () => (0, R.jsx)(Ct, {})
		},
		{
			name: `SidebarRail`,
			components: [`SidebarRail`],
			description: `The sidebar of the admin panels: a compact 72 px rail with one button per section. A section opens its panel to the side, a page with children opens another level further to the side, lined up with its row, and a third level the same way; nothing ever expands downward. Pick it for a panel with many sections, such as content, commerce, marketing and settings.`,
			usage: `<SidebarRail
  sections={[
    { id: 'home', label: 'Home', icon: <Icon name="nav.home" />, href: '/' },
    { id: 'commerce', label: 'Commerce', icon: <Icon name="content.product" />, count: 12, countLabel: '12 orders to ship',
      groups: [{ label: 'Catalog', links: [
        { href: '/products', label: 'Products', icon: <Icon name="content.product" />,
          children: [{ href: '/products/variants', label: 'Variants' }, { href: '/products/brands', label: 'Brands' }] }
      ] }] }
  ]}
  current={pathname}
  labels={{ rail: 'Sections', pin: 'Keep the panel open', filterLabel: (s) => \`Filter \${s}\`, noMatches: 'No page matches.',
    currentSection: 'holds the open page', back: 'All sections', backTo: (label) => \`Back to \${label}\`, close: 'Close navigation' }}
  top={<SiteSwitcher />}
  bottom={<><ThemeMenu /><UserMenu /></>}
/>`,
			accessibility: `The rail is a named navigation of buttons: the up and down arrows, Home and End move between them, and each section button reports aria-expanded and controls the panel. Enter, Space or the right arrow opens the panel and moves focus into it; on a row with a chevron they open the next level to the side and move focus to its first link. The left arrow or Escape closes one level and returns focus to the row or button that opened it. Arrows, Home and End move inside one level. Each rail button is a Tab stop. The open page has aria-current="page", a filled pill and a heavier label, never colour alone; every row on the way to it and its rail button take the accent tone, and the current section is said in words. A mouse opens a level after a 150 ms hover, and a safe triangle keeps the level open while the pointer crosses the rows on its way to it. A floating panel closes on a click outside, Escape or a choice. Targets are at least 44 px. Below 48rem the menu button opens one modal drawer whose levels are screens that slide in, each with a back row such as "Back to Commerce". Motion lasts 180 ms and stops under reduced motion.`,
			pl: {
				description: `Panel boczny paneli administracyjnych: zwarty pasek 72 px z jednym przyciskiem na sekcję. Sekcja otwiera swój panel z boku, strona z podstronami otwiera kolejny poziom jeszcze dalej w bok, na wysokości swojego wiersza, a trzeci poziom tak samo; nic nigdy nie rozwija się w dół. Wybierz go dla panelu z wieloma sekcjami, takimi jak treści, sprzedaż, marketing i ustawienia.`,
				accessibility: `Pasek jest nazwaną nawigacją z przyciskami: strzałki w górę i w dół, Home i End przechodzą między nimi, a każdy przycisk sekcji zgłasza aria-expanded i steruje panelem. Enter, Spacja albo strzałka w prawo otwiera panel i przenosi do niego fokus; na wierszu ze strzałką-szewronem otwierają kolejny poziom z boku i przenoszą fokus na jego pierwszy link. Strzałka w lewo albo Escape zamyka jeden poziom i oddaje fokus wierszowi albo przyciskowi, który go otworzył. Strzałki, Home i End poruszają się wewnątrz jednego poziomu. Każdy przycisk paska jest przystankiem klawisza Tab. Otwarta strona ma aria-current="page", wypełnioną pigułkę i grubszą etykietę, nigdy sam kolor; każdy wiersz na drodze do niej i jej przycisk na pasku przyjmują ton akcentu, a bieżąca sekcja jest wypowiedziana słowami. Mysz otwiera poziom po 150 ms najechania, a bezpieczny trójkąt utrzymuje poziom otwarty, gdy wskaźnik mija wiersze w drodze do niego. Unoszący się panel zamyka się po kliknięciu obok, klawiszu Escape albo wyborze. Cele mają co najmniej 44 px. Poniżej 48 rem przycisk menu otwiera jedną modalną szufladę, której poziomy są ekranami wsuwającymi się z boku, każdy z wierszem powrotu, na przykład „Wróć do: Sprzedaż”. Ruch trwa 180 ms i zatrzymuje się przy ograniczonym ruchu.`
			},
			render: () => (0, R.jsx)($, {})
		},
		{
			name: `SidebarRail in a desktop app`,
			components: [`SidebarRail`],
			description: `The same sidebar inside an Electron window with a hidden title bar: desktop="mac" leaves a 52 px draggable strip over the rail and the panel, where the traffic lights sit (the grey dots here); "windows" and "linux" leave 32 px under the title bar overlay. titleBarHeight sets another height.`,
			usage: `<SidebarRail desktop="mac" sections={sections} current={pathname} labels={labels} />
// main process: new BrowserWindow({ titleBarStyle: 'hiddenInset' })`,
			accessibility: `The strip is aria-hidden and holds no control, so nothing is lost to the drag region; the keys, names and targets are those of the web rail.`,
			pl: {
				description: `Ten sam panel boczny w oknie Electrona z ukrytym paskiem tytułu: desktop="mac" zostawia nad paskiem i panelem przeciągany pas 52 px, w którym siedzą przyciski okna (tu szare kropki); "windows" i "linux" zostawiają 32 px pod nakładką paska tytułu. titleBarHeight ustawia inną wysokość.`,
				accessibility: `Pas jest aria-hidden i nie ma w nim żadnej kontrolki, więc obszar przeciągania niczego nie zasłania; klawisze, nazwy i cele są takie jak w wersji na stronę.`
			},
			render: () => (0, R.jsx)($, { desktop: `mac` })
		},
		{
			name: `SidebarRail on a phone`,
			components: [`SidebarRail`],
			description: `The same sidebar in a 24 rem frame, so the layout switches to the menu button and the drawer. Open the menu: the sections are the first screen, a section is the second, and a page with children opens the next screen, each with a back row that names where it returns to. Nothing expands in place.`,
			usage: "<SidebarRail sections={sections} current={pathname}\n  labels={{ …, back: 'All sections', backTo: (label) => `Back to ${label}` }} />",
			accessibility: `The menu button opens a modal drawer: focus moves in, stays in, and returns to the menu button on Escape. Only the top screen can be reached; the ones under it are inert. A new screen slides in over 180 ms, or appears at once under reduced motion. A row with a chevron opens the next screen. The back row is named by backTo, such as "Back to Commerce". The drawer opens on the screen of the open page.`,
			pl: {
				description: `Ten sam panel boczny w ramce 24 rem, więc układ przełącza się na przycisk menu i szufladę. Otwórz menu: sekcje są pierwszym ekranem, sekcja drugim, a strona z podstronami otwiera kolejny ekran, każdy z wierszem powrotu, który nazywa miejsce, do którego wraca. Nic nie rozwija się w miejscu.`,
				accessibility: `Przycisk menu otwiera modalną szufladę: fokus wchodzi do niej, zostaje w środku i wraca na przycisk menu po klawiszu Escape. Dostępny jest tylko górny ekran; te pod nim są nieaktywne. Nowy ekran wsuwa się przez 180 ms albo pojawia się od razu przy ograniczonym ruchu. Wiersz ze strzałką-szewronem otwiera następny ekran. Wiersz powrotu jest nazwany przez backTo, na przykład „Wróć do: Sprzedaż”. Szuflada otwiera się na ekranie otwartej strony.`
			},
			render: () => (0, R.jsx)($, { phone: !0 })
		},
		{
			name: `Sidebar`,
			components: [`SidebarRail`],
			description: `The sidebar of every Skribly app: the compact rail, the panel of a section opening to the side, the flyout of a page with children (Commerce, Products, Variants) and, below it, the same sidebar as the phone drawer with its screens. For nested navigation use SidebarRail. The dark column in the next entry is a flat compact list only.`,
			related: X,
			usage: `<SidebarRail sections={sections} current={pathname} labels={labels}
  top={<SiteSwitcher />} bottom={<UserMenu />} />`,
			accessibility: `Point at Commerce, then Products: each level opens to the side and never below. Enter, Space or the right arrow opens a level and moves focus in; the left arrow or Escape closes it and returns focus. Each rail button is a Tab stop. The open page and every row on the way to it take the accent tone, and only the page has aria-current="page". Below 48rem every level is a screen of the drawer with a back row.`,
			pl: {
				description: `Panel boczny każdej aplikacji Skribly: zwarty pasek, panel sekcji otwierany z boku, rozwinięcie strony z podstronami (Sprzedaż, Produkty, Warianty) i, pod nim, ten sam panel jako szuflada na telefonie z jej ekranami. Dla zagnieżdżonej nawigacji użyj SidebarRail. Ciemna kolumna w następnym wpisie to tylko płaska, zwarta lista.`,
				related: Z,
				accessibility: `Najedź na Sprzedaż, potem na Produkty: każdy poziom otwiera się z boku i nigdy poniżej. Enter, Spacja albo strzałka w prawo otwiera poziom i przenosi do niego fokus; strzałka w lewo albo Escape zamyka go i oddaje fokus. Każdy przycisk paska jest przystankiem klawisza Tab. Otwarta strona i każdy wiersz na drodze do niej przyjmują ton akcentu, a tylko strona ma aria-current="page". Poniżej 48 rem każdy poziom jest ekranem szuflady z wierszem powrotu.`
			},
			render: () => (0, R.jsxs)(`div`, {
				className: `flex flex-col gap-8`,
				children: [(0, R.jsx)($, {}), (0, R.jsx)($, { phone: !0 })]
			})
		},
		{
			name: `Sidebar compact list`,
			components: [`Sidebar`, `SidebarUser`],
			description: `The dark navigation column of the web apps: a flat list of links under plain headings, with the brand on top and the person signed in at the foot. It stays dark in every theme, like the Tracker. It has no nested levels and no collapsible groups; for nested navigation use SidebarRail.`,
			related: X,
			usage: `<Sidebar label="Sidebar" closeLabel="Close navigation" header={<Brand />}
  footer={<SidebarUser name="Ada Lovelace" description="Admin" signOut={{ label: 'Sign out', onPress: signOut }} />}>
  <SidebarNav label="Main" current={pathname}>…</SidebarNav>
</Sidebar>`,
			accessibility: `A named complementary landmark. The focus ring turns to the nav accent on the dark surface. The sign out button is named by its label and shows it as a tip; long names wrap. In forced colours the sidebar keeps a border.`,
			pl: {
				description: `Ciemna kolumna nawigacji aplikacji webowych: płaska lista linków pod zwykłymi nagłówkami, z marką na górze i zalogowaną osobą u dołu. Zostaje ciemna w każdym motywie, tak jak Tracker. Nie ma poziomów zagnieżdżonych ani zwijanych grup; dla zagnieżdżonej nawigacji użyj SidebarRail.`,
				related: Z,
				accessibility: `Nazwany landmark complementary. Obwódka fokusa przechodzi na akcent nawigacji na ciemnej powierzchni. Przycisk wylogowania jest nazwany swoją etykietą i pokazuje ją jako dymek podpowiedzi; długie nazwy się zawijają. W trybie wymuszonych kolorów panel boczny zachowuje ramkę.`
			},
			render: () => (0, R.jsx)(jt, {})
		},
		{
			name: `SidebarNav`,
			components: [`SidebarNav`],
			description: `The flat list of links in a compact Sidebar. Give it the current route and it marks the matching link. Groups in it are plain headings; for nested navigation use SidebarRail.`,
			related: X,
			usage: `<SidebarNav label="Main" current={pathname}>
  <NavItem href="/" icon={<Icon name="nav.home" />}>Dashboard</NavItem>
  <NavGroup label="Admin" isCollapsible={false}><NavItem href="/settings">Settings</NavItem></NavGroup>
</SidebarNav>`,
			accessibility: `A navigation landmark holding a list, so screen readers say how many links there are. Links are Tab stops; the current one has aria-current="page".`,
			pl: {
				description: `Płaska lista linków w zwartym Sidebar. Podaj jej bieżącą trasę, a oznaczy pasujący link. Grupy w niej są zwykłymi nagłówkami; dla zagnieżdżonej nawigacji użyj SidebarRail.`,
				related: Z,
				accessibility: `Landmark nawigacji z listą, więc czytniki ekranu mówią, ile jest linków. Linki są przystankami Tab; bieżący ma aria-current="page".`
			},
			render: () => (0, R.jsx)(wt, {})
		},
		{
			name: `NavItem`,
			components: [`NavItem`, `NavKey`],
			description: `One link of the sidebar with an icon and an optional NavKey or count at the end. NavKey shows a short code, such as a project key.`,
			usage: `<NavItem href="/boards/web" icon={<Icon name="nav.dashboard" tone="duo" />} end={<NavKey>WEB</NavKey>}>Website relaunch</NavItem>`,
			accessibility: `The open page is marked four ways: a rule on the start edge, a lighter slab, a heavier label and an accent glyph, and aria-current="page" for screen readers; in forced colours the rule uses the Highlight colour and the label is underlined. The target is at least 36px tall. Choosing a link closes the sidebar sheet.`,
			pl: {
				description: `Jeden link panelu bocznego z ikoną i opcjonalnym NavKey albo licznikiem na końcu. NavKey pokazuje krótki kod, taki jak klucz projektu.`,
				accessibility: `Otwarta strona jest oznaczona na cztery sposoby: linia na krawędzi początku, jaśniejsza płyta, grubsza etykieta i znak w kolorze akcentu, a dla czytników ekranu aria-current="page"; w trybie wymuszonych kolorów linia używa koloru Highlight, a etykieta jest podkreślona. Cel ma co najmniej 36 px wysokości. Wybranie linku zamyka arkusz panelu bocznego.`
			},
			render: () => (0, R.jsx)(Tt, {})
		},
		{
			name: `NavGroup`,
			components: [`NavGroup`],
			description: `A titled set of NavItems in a compact Sidebar, shown as a plain heading. The option to collapse exists only for a short compact list; never use it for nested navigation, which is the job of SidebarRail, where deeper pages open to the side.`,
			related: X,
			usage: `<NavGroup label="Boards" currentLabel="contains the open page" isCollapsible={false}>
  <NavItem href="/boards/web">Website relaunch</NavItem>
</NavGroup>`,
			accessibility: `The heading is plain text and never a toggle, and currentLabel is read after its name when the open page is inside. If you do turn on collapsing for a short compact list, the heading becomes a button with aria-expanded, toggled by Enter or Space, and it opens by itself when the open page moves into it. Nested navigation never collapses: use SidebarRail.`,
			pl: {
				description: `Zestaw NavItem z tytułem w zwartym Sidebar, pokazany jako zwykły nagłówek. Opcja zwijania istnieje tylko dla krótkiej, zwartej listy; nigdy nie używaj jej do zagnieżdżonej nawigacji, którą zajmuje się SidebarRail, gdzie głębsze strony otwierają się z boku.`,
				related: Z,
				accessibility: `Nagłówek jest zwykłym tekstem i nigdy przełącznikiem, a currentLabel jest odczytywane po jego nazwie, gdy otwarta strona jest w środku. Jeśli włączysz zwijanie dla krótkiej, zwartej listy, nagłówek staje się przyciskiem z aria-expanded, przełączanym klawiszem Enter lub Spacją, i otwiera się sam, gdy otwarta strona przechodzi do grupy. Zagnieżdżona nawigacja nigdy się nie zwija: użyj SidebarRail.`
			},
			render: () => (0, R.jsx)(Et, {})
		},
		{
			name: `Topbar`,
			components: [`Topbar`, `TopbarIcon`],
			description: `The bar above the main column with search and icon actions. TopbarIcon is an icon button with a tip; give it isSelected for a toggle such as dark mode, or wrap it in a MenuTrigger.`,
			usage: `<Topbar menuLabel="Open navigation">
  <SearchField … />
  <TopbarIcon label="Notifications, 3 new" badge="3"><Icon name="nav.notifications" /></TopbarIcon>
  <TopbarIcon label="Dark mode" isSelected={dark} onChange={setDark}><Icon name="theme.dark" /></TopbarIcon>
</Topbar>`,
			accessibility: `The top bar is the banner landmark and wraps rather than clipping at 320px. TopbarIcon is named by its label, shows it as a tip on hover and keyboard focus, and a toggle reports aria-pressed. The badge is hidden from screen readers, so the label carries the count.`,
			pl: {
				description: `Pasek nad główną kolumną z wyszukiwaniem i akcjami z ikonami. TopbarIcon to przycisk z ikoną i dymkiem podpowiedzi; nadaj mu isSelected dla przełącznika, takiego jak tryb ciemny, albo owiń go w MenuTrigger.`,
				accessibility: `Górny pasek jest landmarkiem banner i zawija się zamiast ucinać treść przy 320 px. TopbarIcon jest nazwany swoją etykietą, pokazuje ją jako dymek podpowiedzi po najechaniu i przy fokusie z klawiatury, a przełącznik zgłasza aria-pressed. Plakietka jest ukryta przed czytnikami ekranu, więc liczbę niesie etykieta.`
			},
			render: () => (0, R.jsx)(Q, {
				className: `flex flex-col gap-3`,
				children: (e) => (0, R.jsx)(R.Fragment, { children: (0, R.jsxs)(N, {
					className: `rounded-lg border`,
					children: [
						(0, R.jsx)(`span`, {
							className: `me-auto text-title font-semibold`,
							children: `Projects`
						}),
						(0, R.jsx)(V, {
							label: `Notifications, 12 new`,
							badge: `12`,
							container: e,
							children: (0, R.jsx)(i, {
								name: `nav.notifications`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(V, {
							label: `Dark mode`,
							defaultSelected: !0,
							container: e,
							children: (0, R.jsx)(i, {
								name: `theme.dark`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(V, {
							label: `Help`,
							container: e,
							children: (0, R.jsx)(i, {
								name: `status.help`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(V, {
							label: `Sync is paused`,
							isDisabled: !0,
							container: e,
							children: (0, R.jsx)(i, {
								name: `action.refresh`,
								"aria-hidden": !0
							})
						})
					]
				}) })
			})
		},
		{
			name: `PageHeader`,
			components: [`PageHeader`],
			description: `The heading row of a screen: an eyebrow, the title, a description and actions. Use one per screen, at the top of MainContent.`,
			usage: `<PageHeader eyebrow="Projects" title="Website relaunch" description="Issues grouped by status." actions={<Button>New issue</Button>} />`,
			accessibility: `The eyebrow and the title form an hgroup, and the title is a level 1 heading unless level says otherwise. Long titles wrap, and the actions move under the title when space runs out.`,
			pl: {
				description: `Wiersz nagłówka ekranu: nadtytuł, tytuł, opis i akcje. Użyj jednego na ekran, na górze MainContent.`,
				accessibility: `Nadtytuł i tytuł tworzą hgroup, a tytuł jest nagłówkiem poziomu 1, chyba że level mówi inaczej. Długie tytuły się zawijają, a akcje przechodzą pod tytuł, gdy brakuje miejsca.`
			},
			render: () => (0, R.jsxs)(`div`, {
				className: `flex flex-col gap-4`,
				children: [(0, R.jsx)(W, {
					eyebrow: `Projects`,
					title: `Website relaunch`,
					description: `Issues grouped by status, newest first.`,
					level: 2,
					actions: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(d, {
						variant: `outline`,
						children: `Export`
					}), (0, R.jsxs)(d, { children: [(0, R.jsx)(i, {
						name: `action.add`,
						"aria-hidden": !0,
						className: `size-4`
					}), `New issue`] })] })
				}), (0, R.jsx)(W, {
					title: `A very long title that needs more than one line on a narrow screen and still reads well`,
					level: 2
				})]
			})
		},
		{
			name: `MainContent`,
			components: [`MainContent`],
			description: `The scrolling main column, the target of the skip link. Pick width wide for boards and tables, full for editors.`,
			usage: `<MainContent width="wide">
  <PageHeader title="Board" />
  …
</MainContent>`,
			accessibility: `The main landmark, with tabindex -1 so the skip link can move focus into it, and a tab stop while its content overflows, so the keyboard can scroll text with nothing focusable in it; its ring shows only for keyboard focus. Padding grows with the layout, and the scrollbar gutter is kept stable so content does not jump.`,
			pl: {
				description: `Przewijana główna kolumna, cel linku pomijającego. Wybierz szerokość wide dla tablic i tabel, full dla edytorów.`,
				accessibility: `Landmark main z tabindex -1, aby link pomijający mógł przenieść do niego fokus, i przystanek Tab, gdy jego zawartość się przepełnia, aby klawiatura mogła przewijać tekst, w którym nic nie ma fokusa; jego obwódka pokazuje się tylko przy fokusie z klawiatury. Wypełnienie rośnie wraz z układem, a rynna paska przewijania jest stała, więc treść nie skacze.`
			},
			render: () => (0, R.jsx)(`div`, {
				className: `h-56 overflow-hidden rounded-lg border border-border`,
				children: (0, R.jsx)(O, {
					embedded: !0,
					skipLinkLabel: `Skip to content`,
					children: (0, R.jsxs)(j, {
						label: `Content`,
						children: [(0, R.jsx)(W, {
							title: `Reports`,
							level: 2
						}), Array.from({ length: 6 }, (e, t) => (0, R.jsx)(`p`, {
							className: `mb-3 text-body text-muted`,
							children: `Paragraph ${t + 1}. The column scrolls on its own while the bars stay put.`
						}, t))]
					})
				})
			})
		},
		{
			name: `ActivityBar`,
			components: [`ActivityBar`, `ActivityItem`],
			description: `The column of view icons on the start edge of the desktop app. ActivityItem shows a view with a tip, a shortcut and a badge; pin settings and help to the bottom with footer.`,
			usage: `<ActivityBar label="Views" footer={<ActivityItem label="Settings" onPress={…}><Icon name="nav.settings" /></ActivityItem>}>
  <ActivityItem label="Agents" tip="Terminals and chats" shortcut="⌘2" badge={2} badgeLabel="2 waiting" isCurrent><Icon name="agent.bot" /></ActivityItem>
</ActivityBar>`,
			accessibility: `A navigation landmark with a list of 40px buttons named by their labels. The current view has aria-current="page", the accent and a rule on the edge. badgeLabel is read with the name and shown in the tip, so the count never relies on its colour. Tips open on hover and keyboard focus, close on Escape and stay while hovered.`,
			pl: {
				description: `Kolumna ikon widoków na krawędzi początku aplikacji desktopowej. ActivityItem pokazuje widok z dymkiem podpowiedzi, skrótem i plakietką; ustawienia i pomoc przypnij na dole przez footer.`,
				accessibility: `Landmark nawigacji z listą przycisków 40 px nazwanych swoimi etykietami. Bieżący widok ma aria-current="page", akcent i linię na krawędzi. badgeLabel jest odczytywane razem z nazwą i pokazane w dymku podpowiedzi, więc liczba nigdy nie opiera się na swoim kolorze. Dymki otwierają się po najechaniu i przy fokusie z klawiatury, zamykają klawiszem Escape i zostają, gdy są najechane.`
			},
			render: () => (0, R.jsx)(Q, {
				className: `flex h-80 overflow-hidden rounded-lg border border-border`,
				children: (e) => (0, R.jsxs)(ue, {
					label: `Views`,
					footer: (0, R.jsx)(z, {
						label: `Settings`,
						container: e,
						children: (0, R.jsx)(i, {
							name: `nav.settings`,
							"aria-hidden": !0
						})
					}),
					children: [
						(0, R.jsx)(z, {
							label: `Home`,
							shortcut: `⌘1`,
							container: e,
							children: (0, R.jsx)(i, {
								name: `nav.dashboard`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(z, {
							label: `Agents`,
							tip: `Terminals and chats with agents`,
							shortcut: `⌘2`,
							badge: 3,
							badgeLabel: `3 running`,
							isCurrent: !0,
							container: e,
							children: (0, R.jsx)(i, {
								name: `agent.bot`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(z, {
							label: `Tasks`,
							badge: 1,
							badgeTone: `warn`,
							badgeLabel: `1 needs a decision`,
							container: e,
							children: (0, R.jsx)(i, {
								name: `nav.tasks`,
								"aria-hidden": !0
							})
						}),
						(0, R.jsx)(z, {
							label: `Skills`,
							isDisabled: !0,
							container: e,
							children: (0, R.jsx)(i, {
								name: `ai.sparkles`,
								"aria-hidden": !0
							})
						})
					]
				})
			})
		},
		{
			name: `StatusBar`,
			components: [
				`StatusBar`,
				`StatusBarItem`,
				`StatusPill`
			],
			description: `The thin bar at the bottom of the desktop app. StatusBarItem shows one fact, as text, a button or a link; StatusPill is a rounded setting such as the theme.`,
			usage: `<StatusBar label="Status" end={<StatusPill icon={<Icon name="theme.dark" />} onPress={cycle} tip="Switch theme">Night</StatusPill>}>
  <StatusBarItem icon={<Icon name="vcs.branch" />}>main</StatusBarItem>
  <StatusBarItem tone="danger" onPress={openDocker} tip="Containers that crashed">2 with problems</StatusBarItem>
</StatusBar>`,
			accessibility: `A named contentinfo landmark that wraps to a second line on a narrow window. Each tone pairs a colour with its own glyph and words: a tick for ok, an i for info, a triangle for warnings and a cross for errors. Interactive items are at least 24px tall. isLive announces an item politely; it is off by default, so counters do not chatter.`,
			pl: {
				description: `Cienki pasek na dole aplikacji desktopowej. StatusBarItem pokazuje jeden fakt, jako tekst, przycisk albo link; StatusPill to zaokrąglone ustawienie, takie jak motyw.`,
				accessibility: `Nazwany landmark contentinfo, który zawija się do drugiej linii w wąskim oknie. Każdy ton łączy kolor z własnym znakiem i słowami: ptaszek dla ok, i dla info, trójkąt dla ostrzeżeń i krzyżyk dla błędów. Elementy interaktywne mają co najmniej 24 px wysokości. isLive ogłasza element w trybie polite; jest domyślnie wyłączone, aby liczniki nie paplały.`
			},
			render: () => (0, R.jsx)(Q, {
				className: `flex flex-col gap-3`,
				children: (e) => (0, R.jsxs)(R.Fragment, { children: [(0, R.jsxs)(ot, {
					label: `Status`,
					className: `rounded-lg border`,
					end: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(Y, {
						icon: (0, R.jsx)(i, { name: `theme.light` }),
						tip: `Switch: day, night, system`,
						onPress: () => {},
						container: e,
						children: `Auto · day`
					}), (0, R.jsx)(I, { children: `Skribly 1.4.0` })] }),
					children: [
						(0, R.jsx)(I, {
							icon: (0, R.jsx)(i, { name: `vcs.branch` }),
							children: `feature/a-branch-with-a-long-name`
						}),
						(0, R.jsx)(I, {
							tone: `ok`,
							children: `Docker OK`
						}),
						(0, R.jsx)(I, {
							tone: `danger`,
							icon: (0, R.jsx)(i, { name: `ops.container` }),
							onPress: () => {},
							tip: `Containers that crashed or restart in a loop`,
							container: e,
							children: `2 with problems`
						}),
						(0, R.jsx)(I, {
							tone: `info`,
							isLive: !0,
							children: `Downloading 1.5.0, 40%`
						}),
						(0, R.jsx)(I, {
							tone: `warn`,
							href: `#release`,
							children: `Restart to update`
						})
					]
				}), (0, R.jsxs)(`div`, {
					className: `flex flex-wrap items-center gap-2`,
					children: [
						(0, R.jsx)(`p`, {
							className: dt,
							children: `Pills`
						}),
						(0, R.jsx)(Y, {
							tone: `ok`,
							children: `Saved`
						}),
						(0, R.jsx)(Y, {
							tone: `warn`,
							children: `Offline`
						}),
						(0, R.jsx)(Y, {
							tone: `danger`,
							children: `Failed`
						}),
						(0, R.jsx)(Y, {
							tone: `info`,
							children: `Syncing`
						}),
						(0, R.jsx)(Y, {
							onPress: () => {},
							isDisabled: !0,
							children: `Disabled`
						})
					]
				})] })
			})
		},
		{
			name: `Pane`,
			components: [`Pane`, `PaneHeader`],
			description: `A scrolling panel of a split layout with a sticky header. Use the side variant for a list beside the work and sunken for a panel under it.`,
			usage: `<Pane variant="side">
  <PaneHeader title="Files" icon={<Icon name="folder.closed" />} actions={<IconButton label="Refresh">…</IconButton>} />
  …
</Pane>`,
			accessibility: `The PaneHeader heading names the pane, so it becomes a region. While its content overflows the pane is a Tab stop, so the keyboard can scroll it; its ring is drawn inside so the edge never clips it.`,
			pl: {
				description: `Przewijany panel układu podzielonego z przyklejonym nagłówkiem. Użyj wariantu side dla listy obok pracy, a sunken dla panelu pod nią.`,
				accessibility: `Nagłówek PaneHeader nazywa panel, więc staje się regionem. Gdy jego zawartość się przepełnia, panel jest przystankiem Tab, aby klawiatura mogła go przewijać; jego obwódka jest rysowana wewnątrz, aby krawędź nigdy jej nie ucinała.`
			},
			render: () => (0, R.jsxs)(`div`, {
				className: `grid h-56 grid-cols-1 gap-3 sm:grid-cols-2`,
				children: [(0, R.jsx)(`div`, {
					className: `overflow-hidden rounded-lg border border-border`,
					children: (0, R.jsxs)(G, {
						variant: `side`,
						children: [(0, R.jsx)(K, {
							title: `Sessions`,
							icon: (0, R.jsx)(i, { name: `agent.bot` })
						}), (0, R.jsx)(`ul`, {
							className: `p-2 text-body`,
							children: Array.from({ length: 12 }, (e, t) => (0, R.jsx)(`li`, {
								className: `px-2 py-1`,
								children: `Session ${t + 1}`
							}, t))
						})]
					})
				}), (0, R.jsx)(`div`, {
					className: `overflow-hidden rounded-lg border border-border`,
					children: (0, R.jsxs)(G, {
						variant: `sunken`,
						children: [(0, R.jsx)(K, {
							title: `Output`,
							icon: (0, R.jsx)(i, { name: `code.terminal-window` }),
							level: 3
						}), (0, R.jsx)(`p`, {
							className: `p-3 text-body text-muted`,
							children: `Nothing yet.`
						})]
					})
				})]
			})
		},
		{
			name: `SplitPane`,
			components: [`SplitPane`],
			description: `Two panes with one divider, such as a form beside its live preview. The divider snaps to the given points while it is dragged, and storageKey keeps the width per screen. Use SplitView for three or more panes.`,
			usage: `<SplitPane
  label="Resize the form"
  startLabel="Form"
  endLabel="Preview"
  defaultSize={40}
  snapPoints={[33, 50, 66]}
  storageKey="editor:split:pages"
  start={<PageForm />}
  end={<PreviewFrame … />}
/>`,
			accessibility: `The divider is a focusable separator named by label, with aria-valuenow, aria-valuemin and aria-valuemax in percent of the first pane (valueText adds words), and aria-controls pointing at that pane. Arrow keys move it by step and follow the reading direction, Page Up and Page Down jump between snap points, Home and End go to the limits, Enter collapses and restores, a double click resets. On a touch screen its target is 44 pixels wide. startLabel and endLabel make the panes named regions.`,
			pl: {
				description: `Dwa panele z jednym dzielnikiem, na przykład formularz obok podglądu na żywo. Przeciągany dzielnik przyciąga się do podanych punktów, a storageKey zapamiętuje szerokość dla każdego ekranu. Do trzech i więcej paneli służy SplitView.`,
				accessibility: `Dzielnik jest separatorem z fokusem, nazwanym przez label, z aria-valuenow, aria-valuemin i aria-valuemax w procentach pierwszego panelu (valueText dodaje słowa) oraz aria-controls wskazującym ten panel. Strzałki przesuwają o step i podążają za kierunkiem czytania, Page Up i Page Down skaczą między punktami przyciągania, Home i End do granic, Enter zwija i przywraca, podwójne kliknięcie przywraca początkowy podział. Na ekranie dotykowym jego cel ma 44 piksele szerokości. startLabel i endLabel robią z paneli nazwane regiony.`
			},
			render: () => (0, R.jsx)(Nt, {})
		},
		{
			name: `SplitView`,
			components: [`SplitView`, `Splitter`],
			description: `Panes divided by splitters that the pointer and the keyboard can move. Side by side panes stack below 40rem, so neither gets too narrow to read.`,
			usage: `<SplitView defaultSizes={[0.3, 0.7]} label="Files and preview">
  <Pane>…</Pane>
  <Splitter label="Resize the file list" />
  <Pane>…</Pane>
</SplitView>`,
			accessibility: `Each Splitter is a focusable separator that reports the share of the pane before it in percent and points at it with aria-controls. Arrow keys move it by 1%, Page Up and Page Down by 10%, Home and End to the limits, Enter collapses and restores; double click restores the starting split. Arrow keys follow the reading direction. When the panes stack on a narrow screen and scroll together, that column becomes a tab stop, named by label, so the keyboard can scroll it.`,
			pl: {
				description: `Panele rozdzielone dzielnikami, które można przesuwać wskaźnikiem i klawiaturą. Panele obok siebie układają się w stos poniżej 40 rem, aby żaden nie był zbyt wąski do czytania.`,
				accessibility: `Każdy Splitter jest separatorem z fokusem, który zgłasza udział panelu przed nim w procentach i wskazuje go przez aria-controls. Klawisze strzałek przesuwają o 1%, Page Up i Page Down o 10%, Home i End do granic, Enter zwija i przywraca; podwójne kliknięcie przywraca początkowy podział. Klawisze strzałek podążają za kierunkiem czytania. Gdy panele układają się w stos na wąskim ekranie i przewijają razem, ta kolumna staje się przystankiem Tab, nazwanym przez label, aby klawiatura mogła ją przewijać.`
			},
			render: () => (0, R.jsx)(Pt, {})
		},
		{
			name: `DockGrip`,
			components: [`DockGrip`],
			description: `The resize handle on the edge of a panel, such as a terminal under the editor. Dock adds one itself; use DockGrip directly for a panel of your own.`,
			usage: `<section id="terminal" style={{ height }} className="relative">
  <DockGrip label="Resize the terminal" value={height} onChange={setHeight} minValue={80} maxValue={400} edge="top" controls="terminal" />
</section>`,
			accessibility: `A focusable separator named by its label, with its size reported as a percent of the range. Arrow keys move it by 16px, Page Up and Page Down by 160px, Home and End to the limits, Enter collapses and restores. The hit area is 12px wide along the whole edge.`,
			pl: {
				description: `Uchwyt zmiany rozmiaru na krawędzi panelu, takiego jak terminal pod edytorem. Dock dodaje własny; użyj DockGrip bezpośrednio dla własnego panelu.`,
				accessibility: `Separator z fokusem nazwany swoją etykietą, z rozmiarem zgłaszanym jako procent zakresu. Klawisze strzałek przesuwają o 16 px, Page Up i Page Down o 160 px, Home i End do granic, Enter zwija i przywraca. Pole trafienia ma 12 px szerokości wzdłuż całej krawędzi.`
			},
			render: () => (0, R.jsx)(Ft, {})
		}
	]
};
export { ut as t };
