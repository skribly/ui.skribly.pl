import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, M as i, j as a, z as o } from "./doc.C_PtMNUB.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { t as c } from "./IconButton.Bqgi69Iz.js";
import { t as l } from "./ToggleButton.D1OqrXr5.js";
import { t as u } from "./TrackerBadge.BmOh-jnh.js";
import { t as d } from "./Badge.BotZF5ka.js";
import { t as f } from "./Spinner.CPYol_Wu.js";
import { c as p } from "./ListBox.Bq8IE31A.js";
import { n as m, r as h } from "./GridList.Be-Qku2e.js";
import { y as g } from "./useDrop.2oG49goR.js";
import { t as _ } from "./useDragAndDrop.Ds4OKgBP.js";
import { t as v } from "./DragHandle.DYAIsE1N.js";
import { t as y } from "./Avatar.CTizTg24.js";
import { a as b, t as x } from "./MenuItem.BZK3TalX.js";
import { t as S } from "./MenuLabel.FbKKIyqj.js";
import { t as C } from "./Link.DGRKZkR4.js";
import { t as w } from "./Table.oLHFIXVU.js";
var T = t(s(), 1), E = (0, T.createContext)(null);
function D() {
	let e = (0, T.useContext)(E);
	if (!e) throw Error(`BoardColumn and BoardCard render inside a Board.`);
	return e;
}
var O = (0, T.createContext)(null);
function ee(e, t) {
	let n = new Set(t.keys), r = [];
	for (let t of e) for (let e of t.items) n.has(e.key) && r.push(e);
	let i = t.keys.flatMap((e) => r.filter((t) => t.key === e));
	return e.map((e) => {
		let r = e.items.filter((e) => !n.has(e.key));
		if (e.id !== t.to) return r.length === e.items.length ? e : {
			...e,
			items: r
		};
		let a = 0;
		if (t.target) {
			let e = r.findIndex((e) => e.key === t.target?.key);
			a = e === -1 ? r.length : t.target.position === `after` ? e + 1 : e;
		}
		return {
			...e,
			items: [
				...r.slice(0, a),
				...i,
				...r.slice(a)
			]
		};
	});
}
var k = `outline-offset-(--sk-focus-offset) data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`, A = `has-[[data-stretched][data-focus-visible]]:outline-solid has-[[data-stretched][data-focus-visible]]:outline-(length:--sk-focus-width) has-[[data-stretched][data-focus-visible]]:outline-offset-(--sk-focus-offset) has-[[data-stretched][data-focus-visible]]:outline-focus`, j = `inline-flex max-w-full min-w-0 items-center gap-1 align-middle text-caption font-medium whitespace-nowrap`, M = n(), N = `font-mono text-caption font-medium tracking-tight whitespace-nowrap text-muted`;
function P({ children: e, href: t, linkProps: n, isClosed: i = !1, className: a, ...o }) {
	let s = i && `line-through decoration-1`;
	return t === void 0 ? (0, M.jsx)(`span`, {
		...o,
		translate: `no`,
		className: r(N, s, a),
		children: e
	}) : (0, M.jsx)(C, {
		...n,
		...o,
		href: t,
		translate: `no`,
		className: r(N, `inline-flex min-h-6 items-center rounded-sm underline-offset-2 transition-colors duration-(--sk-duration-fast) data-hovered:text-fg data-hovered:underline data-pressed:text-fg`, k, s, a),
		children: e
	});
}
var te = {
	bug: i(`issue.bug`),
	feature: i(`ai.sparkles`),
	task: i(`status.checked`),
	improvement: i(`trend.rising`),
	epic: i(`issue.epic`)
}, ne = {
	bug: `text-danger`,
	feature: `text-ok`,
	task: `text-info`,
	improvement: `text-accent-text`,
	epic: `text-tool-skills`
};
function F({ kind: e, label: t, compact: n = !1, icon: i, title: a, className: o, ...s }) {
	let c = te[e];
	return (0, M.jsxs)(`span`, {
		...s,
		"data-kind": e,
		title: a ?? (n ? t : void 0),
		className: r(j, `text-fg`, o),
		children: [(0, M.jsx)(`span`, {
			"aria-hidden": !0,
			className: r(`inline-flex shrink-0 [&>svg]:size-4`, ne[e]),
			children: i ?? (0, M.jsx)(c, { focusable: `false` })
		}), (0, M.jsx)(`span`, {
			className: n ? `sr-only` : `min-w-0 truncate`,
			children: t
		})]
	});
}
function I({ children: e, color: t, onRemove: n, removeLabel: i, isDisabled: s = !1, title: c, className: l, ...u }) {
	let d = (0, T.useMemo)(() => t ? { backgroundColor: t } : void 0, [t]), f = n !== void 0 && i !== void 0;
	return (0, M.jsxs)(`span`, {
		...u,
		title: c ?? e,
		className: r(`inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-sm border border-border bg-sunken align-middle text-caption font-medium whitespace-nowrap text-fg`, f ? `min-h-6 ps-1.5 pe-0.5` : `min-h-5 px-1.5 py-0.5`, s && `opacity-60`, l),
		children: [
			(0, M.jsx)(`span`, {
				"aria-hidden": !0,
				style: d,
				className: r(`size-2 shrink-0 rounded-full border border-transparent`, !t && `bg-muted`)
			}),
			(0, M.jsx)(`span`, {
				className: `min-w-0 truncate`,
				children: e
			}),
			f ? (0, M.jsx)(o, {
				"aria-label": i,
				onPress: n,
				isDisabled: s,
				className: r(`inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-transparent text-muted transition-colors duration-(--sk-duration-fast) data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed forced-colors:data-disabled:text-[GrayText]`, k),
				children: (0, M.jsx)(a, {
					name: `action.close`,
					"aria-hidden": !0,
					focusable: `false`,
					className: `size-3.5`
				})
			}) : null
		]
	});
}
var re = r(`inline-flex min-h-6 min-w-6 cursor-pointer items-center justify-center rounded-sm border border-dashed border-border-strong px-1.5 text-caption font-medium text-muted transition-colors duration-(--sk-duration-fast) data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`, k);
function L({ labels: e, label: t, emptyLabel: n, onRemove: i, removeLabel: a, max: s, moreLabel: c, lessLabel: l, className: u }) {
	let [d, f] = (0, T.useState)(!1), p = (0, T.useId)(), m = (0, T.useCallback)(() => f((e) => !e), []);
	if (e.length === 0) return n ? (0, M.jsx)(`p`, {
		className: r(`text-caption text-muted`, u),
		children: n
	}) : null;
	let h = s !== void 0 && e.length > s, g = h && !d ? e.slice(0, Math.max(0, s)) : e, _ = e.length - g.length;
	return (0, M.jsxs)(`div`, {
		className: r(`flex min-w-0 flex-wrap items-center gap-1`, u),
		children: [(0, M.jsx)(`ul`, {
			id: p,
			"aria-label": t,
			className: `flex min-w-0 max-w-full flex-wrap items-center gap-1`,
			children: g.map((e) => (0, M.jsx)(`li`, {
				className: `flex min-w-0 max-w-full`,
				children: (0, M.jsx)(I, {
					...e.color === void 0 ? {} : { color: e.color },
					...i && a ? {
						onRemove: () => i(e),
						removeLabel: a(e)
					} : {},
					children: e.name
				})
			}, e.id))
		}), h && c !== void 0 && l !== void 0 ? (0, M.jsx)(o, {
			"aria-controls": p,
			"aria-expanded": d,
			...d ? {} : { "aria-label": c(_) },
			onPress: m,
			className: re,
			children: d ? l : `+${_}`
		}) : null]
	});
}
var ie = i(`time.overdue`), ae = i(`time.due`);
function oe({ person: e, unassignedLabel: t, className: n }) {
	return (0, M.jsxs)(`span`, {
		className: r(`inline-flex min-w-0 items-center gap-2 text-body`, n),
		children: [e ? (0, M.jsx)(y, {
			name: e.name,
			size: `xs`,
			decorative: !0,
			...e.avatarSrc === void 0 ? {} : { src: e.avatarSrc }
		}) : (0, M.jsx)(y, {
			size: `xs`,
			decorative: !0
		}), (0, M.jsx)(`span`, {
			className: r(`min-w-0 truncate`, e ? `text-fg` : `text-muted`),
			children: e ? e.name : t
		})]
	});
}
function R({ due: e, dueLabel: t, overdueLabel: n, className: i }) {
	let a = !!e.overdue, o = a ? ie : ae;
	return (0, M.jsxs)(`span`, {
		"data-overdue": a || void 0,
		...a && n ? { title: n } : {},
		className: r(`inline-flex items-center gap-1 text-caption whitespace-nowrap`, a ? `font-semibold text-danger` : `text-muted`, i),
		children: [
			(0, M.jsx)(o, {
				"aria-hidden": !0,
				focusable: `false`,
				className: `size-3.5 shrink-0`
			}),
			t ? (0, M.jsx)(`span`, {
				className: `sr-only`,
				children: `${t} `
			}) : null,
			(0, M.jsx)(`time`, {
				dateTime: e.dateTime,
				children: e.text
			}),
			a && n ? (0, M.jsx)(`span`, {
				className: `sr-only`,
				children: ` ${n}`
			}) : null
		]
	});
}
var se = {
	urgent: i(`chevron.double-up`),
	high: i(`chevron.up`),
	medium: i(`priority.medium`),
	low: i(`chevron.down`),
	lowest: i(`chevron.double-down`)
}, ce = {
	urgent: `text-danger`,
	high: `text-warn`,
	medium: `text-muted`,
	low: `text-muted`,
	lowest: `text-muted`
};
function z({ level: e, label: t, fieldLabel: n, compact: i = !1, title: a, className: o, ...s }) {
	let c = se[e];
	return (0, M.jsxs)(`span`, {
		...s,
		"data-level": e,
		title: a ?? (i ? t : void 0),
		className: r(j, ce[e], o),
		children: [
			(0, M.jsx)(c, {
				"aria-hidden": !0,
				focusable: `false`,
				className: `size-4 shrink-0`,
				strokeWidth: 2.25
			}),
			n ? (0, M.jsx)(`span`, {
				className: `sr-only`,
				children: `${n} `
			}) : null,
			(0, M.jsx)(`span`, {
				className: i ? `sr-only` : `min-w-0 truncate`,
				children: t
			})
		]
	});
}
var le = {
	todo: i(`status.todo`),
	in_progress: i(`status.in-progress`),
	done: i(`status.ok`),
	canceled: i(`status.canceled`)
}, ue = {
	todo: `neutral`,
	in_progress: `accent`,
	done: `ok`,
	canceled: `neutral`
}, de = {
	todo: `text-muted`,
	in_progress: `text-accent-text`,
	done: `text-ok`,
	canceled: `text-muted`
};
function B({ category: e, className: t }) {
	let n = le[e];
	return (0, M.jsx)(n, {
		"aria-hidden": !0,
		focusable: `false`,
		className: r(`size-3.5 shrink-0`, de[e], t)
	});
}
var fe = r(`group/card relative flex min-w-0 flex-col gap-2 rounded-md border border-border bg-surface p-3 text-body text-fg shadow-sm outline-hidden`, `transition-[border-color,box-shadow,opacity] duration-(--sk-duration-fast) motion-reduce:transition-none`, `data-hovered:border-border-strong data-hovered:shadow-md data-[href]:cursor-pointer`, `data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-2 data-focus-visible:outline-focus`, `data-dragging:opacity-50 data-dragging:border-dashed data-dragging:border-accent`), V = `up`, H = `down`, pe = (0, M.jsx)(a, { name: `arrow.up` }), me = (0, M.jsx)(a, { name: `arrow.down` });
function he({ issue: e, board: t, column: n }) {
	let { labels: r, columns: i, container: o, move: s } = t, l = n.column.items.findIndex((t) => t.key === e.key), u = n.column.items, d = u[l - 1], f = u[l + 1], p = (0, T.useMemo)(() => [...d ? [] : [V], ...f ? [] : [H]], [d, f]), m = r.move(e), h = (0, T.useMemo)(() => (0, M.jsx)(c, {
		label: m,
		size: `sm`,
		variant: `ghost`,
		container: o ?? null,
		children: (0, M.jsx)(a, {
			name: `action.more`,
			"aria-hidden": !0,
			focusable: `false`
		})
	}), [m, o]), g = (0, T.useCallback)((t) => {
		let r = n.column.id;
		if (t === V && d) s({
			keys: [e.key],
			from: r,
			to: r,
			target: {
				key: d.key,
				position: `before`
			}
		});
		else if (t === H && f) s({
			keys: [e.key],
			from: r,
			to: r,
			target: {
				key: f.key,
				position: `after`
			}
		});
		else {
			let n = i[Number(String(t).slice(4))];
			if (!n || n.id === r) return;
			let a = n.items[0];
			s({
				keys: [e.key],
				from: r,
				to: n.id,
				...a ? { target: {
					key: a.key,
					position: `before`
				} } : {}
			});
		}
	}, [
		n.column.id,
		i,
		e.key,
		s,
		f,
		d
	]);
	return (0, M.jsxs)(b, {
		trigger: h,
		container: o ?? null,
		disabledKeys: p,
		onAction: g,
		children: [u.length > 1 ? (0, M.jsxs)(M.Fragment, { children: [(0, M.jsx)(x, {
			id: V,
			icon: pe,
			children: r.moveUp
		}), (0, M.jsx)(x, {
			id: H,
			icon: me,
			children: r.moveDown
		})] }) : null, (0, M.jsx)(S, {
			label: r.moveTo,
			children: i.flatMap((e, t) => t === n.index ? [] : [(0, M.jsx)(x, {
				id: `col-${t}`,
				...e.category ? { icon: (0, M.jsx)(B, { category: e.category }) } : {},
				children: e.title
			}, String(e.id))])
		})]
	});
}
function U({ issue: e, onAction: t, footer: n, className: i }) {
	let a = D(), o = (0, T.useContext)(O), s = (0, T.useRef)(null), { labels: c, isReadOnly: l, focusKey: u, clearFocus: d } = a, f = `${e.key} ${e.title}`, p = e.due;
	return (0, T.useEffect)(() => {
		if (u !== e.key) return;
		let t = requestAnimationFrame(() => {
			let e = s.current;
			if (d(), !e) return;
			let t = document.activeElement;
			t && t !== document.body && e.contains(t) || e.focus();
		});
		return () => cancelAnimationFrame(t);
	}, [
		u,
		e.key,
		d
	]), (0, M.jsxs)(h, {
		ref: s,
		id: e.key,
		textValue: f,
		...e.href === void 0 ? {} : { href: e.href },
		...t === void 0 ? {} : { onAction: t },
		className: r(fe, i),
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex min-w-0 items-center gap-2`,
				children: [
					l ? null : (0, M.jsx)(v, {
						label: c.drag(e),
						className: `-ms-1`
					}),
					(0, M.jsx)(P, {
						isClosed: e.status?.category === `done`,
						className: `min-w-0 truncate`,
						children: e.key
					}),
					(0, M.jsxs)(`span`, {
						className: `ms-auto flex shrink-0 items-center gap-1`,
						children: [e.priority ? (0, M.jsx)(z, {
							level: e.priority.level,
							label: e.priority.label,
							compact: !0,
							...c.priority === void 0 ? {} : { fieldLabel: c.priority }
						}) : null, l || !o ? null : (0, M.jsx)(he, {
							issue: e,
							board: a,
							column: o
						})]
					})
				]
			}),
			(0, M.jsx)(`span`, {
				className: `block leading-snug font-medium [overflow-wrap:anywhere]`,
				children: e.title
			}),
			e.labels && e.labels.length > 0 ? c.moreLabels && c.fewerLabels ? (0, M.jsx)(L, {
				labels: e.labels,
				label: c.labels,
				max: 3,
				moreLabel: c.moreLabels,
				lessLabel: c.fewerLabels
			}) : (0, M.jsx)(L, {
				labels: e.labels,
				label: c.labels
			}) : null,
			(0, M.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1`,
				children: [e.type ? (0, M.jsx)(F, {
					kind: e.type.kind,
					label: e.type.label
				}) : (0, M.jsx)(`span`, {}), (0, M.jsxs)(`span`, {
					className: `ms-auto flex min-w-0 items-center gap-2`,
					children: [p ? (0, M.jsx)(R, {
						due: p,
						dueLabel: c.due,
						overdueLabel: c.overdue
					}) : null, e.assignee ? (0, M.jsx)(y, {
						name: e.assignee.name,
						size: `sm`,
						...e.assignee.avatarSrc === void 0 ? {} : { src: e.assignee.avatarSrc }
					}) : (0, M.jsx)(y, {
						unassignedLabel: c.unassigned,
						size: `sm`
					})]
				})]
			}),
			n ? (0, M.jsx)(`div`, {
				className: `min-w-0 border-t border-border pt-2 text-caption text-muted`,
				children: n
			}) : null
		]
	});
}
async function ge(e, t) {
	return (await Promise.all(e.filter(g).map((e) => e.getText(t)))).flatMap((e) => {
		try {
			let t = JSON.parse(e);
			return t.key === void 0 || t.from === void 0 ? [] : [{
				key: t.key,
				from: t.from
			}];
		} catch {
			return [];
		}
	});
}
var _e = [], ve = `mx-1 h-0.5 shrink-0 rounded-full outline-hidden data-drop-target:bg-accent forced-colors:data-drop-target:bg-[Highlight]`;
function W({ column: e, children: t, onAdd: n, addLabel: i, isLoading: s = !1, loadingLabel: c, className: l }) {
	let u = D(), d = (0, T.useId)(), f = (0, T.useId)(), { dragType: h, labels: g, isReadOnly: v, move: y, headingLevel: b } = u, x = u.columns.findIndex((t) => t.id === e.id), S = e.items.length, C = e.limit !== void 0 && S > e.limit, w = e.items.at(-1)?.key, E = (0, T.useCallback)(async (t, n) => {
		let r = await ge(t, h), i = r[0];
		i && y({
			keys: r.map((e) => e.key),
			from: i.from,
			to: e.id,
			...n ? { target: n } : {}
		});
	}, [
		e.id,
		h,
		y
	]), { dragAndDropHooks: ee } = _({
		isDisabled: v,
		getItems: (t) => [...t].map((t) => ({
			[h]: JSON.stringify({
				key: t,
				from: e.id
			}),
			"text/plain": String(t)
		})),
		getAllowedDropOperations: () => [`move`],
		acceptedDragTypes: [h],
		onReorder: (t) => {
			t.target.dropPosition !== `on` && y({
				keys: [...t.keys],
				from: e.id,
				to: e.id,
				target: {
					key: t.target.key,
					position: t.target.dropPosition
				}
			});
		},
		onInsert: async (e) => {
			e.target.dropPosition !== `on` && await E(e.items, {
				key: e.target.key,
				position: e.target.dropPosition
			});
		},
		onRootDrop: async (e) => {
			await E(e.items, w === void 0 ? void 0 : {
				key: w,
				position: `after`
			});
		},
		renderDropIndicator: (e) => (0, M.jsx)(p, {
			target: e,
			className: ve
		})
	}), A = (0, T.useCallback)(({ isDropTarget: e }) => s ? (0, M.jsxs)(`output`, {
		className: `flex items-center justify-center gap-2 px-3 py-6 text-caption text-muted`,
		children: [(0, M.jsx)(a, {
			name: `status.loading`,
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-4 shrink-0 animate-spin motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`
		}), (0, M.jsx)(`span`, { children: c })]
	}) : (0, M.jsx)(`div`, {
		className: r(`flex min-h-20 items-center justify-center rounded-md border border-dashed px-3 py-4 text-center text-caption text-muted transition-colors duration-(--sk-duration-fast) motion-reduce:transition-none`, e ? `border-accent bg-accent-soft text-accent-text` : `border-border-strong`),
		children: g.empty
	}), [
		s,
		g.empty,
		c
	]), j = (0, T.useMemo)(() => ({
		column: e,
		index: x
	}), [e, x]), N = s ? _e : e.items;
	return (0, M.jsxs)(`section`, {
		"aria-labelledby": d,
		"aria-busy": s || void 0,
		"data-category": e.category,
		className: r(`flex w-full min-w-0 flex-col rounded-lg border border-border bg-sunken`, `@3xl/board:w-72 @3xl/board:shrink-0`, l),
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex min-h-control-md items-center gap-2 px-3 pt-2.5 pb-2`,
				children: [(0, T.createElement)(`h${b}`, {
					id: d,
					className: `flex min-w-0 flex-1 items-center gap-1.5 text-body font-semibold text-fg`
				}, e.category ? (0, M.jsx)(B, { category: e.category }, `icon`) : null, (0, M.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: e.title
				}, `title`)), (0, M.jsxs)(`span`, {
					"data-over-limit": C || void 0,
					className: r(`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-caption font-medium tabular-nums`, C ? `border-warn bg-warn-soft text-warn` : `border-transparent bg-surface text-muted`),
					children: [
						C ? (0, M.jsx)(a, {
							name: `status.warning`,
							"aria-hidden": !0,
							focusable: `false`,
							className: `size-3.5 shrink-0`
						}) : null,
						(0, M.jsx)(`span`, {
							"aria-hidden": !0,
							children: e.limit === void 0 ? S : `${S}/${e.limit}`
						}),
						(0, M.jsx)(`span`, {
							className: `sr-only`,
							children: g.count(S)
						}),
						C && g.overLimit && e.limit !== void 0 ? (0, M.jsx)(`span`, {
							className: `sr-only`,
							children: ` ${g.overLimit(e.limit)}`
						}) : null
					]
				})]
			}),
			(0, M.jsx)(O.Provider, {
				value: j,
				children: (0, M.jsx)(m, {
					"aria-labelledby": d,
					items: N,
					layout: `stack`,
					...v ? {} : { dragAndDropHooks: ee },
					renderEmptyState: A,
					className: r(`flex min-h-20 flex-1 flex-col gap-2 px-2 pb-2 outline-hidden`, `data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus`, `data-drop-target:bg-accent-soft data-drop-target:outline-dashed data-drop-target:outline-2 data-drop-target:-outline-offset-2 data-drop-target:outline-accent`),
					children: (e) => t ? t(e) : (0, M.jsx)(U, { issue: e })
				})
			}),
			n && i ? (0, M.jsxs)(o, {
				onPress: n,
				isDisabled: v,
				"aria-labelledby": `${f} ${d}`,
				className: r(`mx-2 mb-2 inline-flex min-h-control-sm cursor-pointer items-center gap-1.5 rounded-md border border-transparent px-2 text-caption font-medium text-muted transition-colors duration-(--sk-duration-fast) data-hovered:bg-surface data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50 forced-colors:data-disabled:text-[GrayText]`, k),
				children: [(0, M.jsx)(a, {
					name: `action.add`,
					"aria-hidden": !0,
					focusable: `false`,
					className: `size-4 shrink-0`
				}), (0, M.jsx)(`span`, {
					id: f,
					children: i
				})]
			}) : null
		]
	});
}
function ye(e) {
	let [t, n] = (0, T.useState)(!1);
	return (0, T.useEffect)(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > `u`) return;
		let r = () => n(t.scrollWidth > t.clientWidth + 1), i = new ResizeObserver(r);
		i.observe(t);
		for (let e of t.children) i.observe(e);
		return r(), () => i.disconnect();
	}, [e]), t;
}
function G({ "aria-label": e, columns: t, onMove: n, labels: i, isReadOnly: o = !1, headingLevel: s = 2, children: c, isLoading: l = !1, loadingLabel: u, error: d, emptyState: p, container: m, className: h }) {
	let g = (0, T.useId)(), _ = (0, T.useRef)(null), v = ye(_), [y, b] = (0, T.useState)(null), x = `application/x-skribly-board-${g.replace(/[^a-zA-Z0-9]/g, ``)}`, S = o || n === void 0, C = (0, T.useCallback)((e) => {
		S || e.keys.length === 0 || (b(e.keys[0] ?? null), n?.(e));
	}, [n, S]), w = (0, T.useCallback)(() => b(null), []), D = (0, T.useMemo)(() => ({
		dragType: x,
		columns: t,
		labels: i,
		isReadOnly: S,
		headingLevel: s,
		container: m,
		move: C,
		focusKey: y,
		clearFocus: w
	}), [
		x,
		t,
		i,
		S,
		s,
		m,
		C,
		y,
		w
	]), O;
	return O = d != null && d !== !1 ? (0, M.jsxs)(`div`, {
		role: `alert`,
		className: `flex items-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-body font-medium text-danger`,
		children: [(0, M.jsx)(a, {
			name: `status.danger`,
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-4 shrink-0`
		}), (0, M.jsx)(`div`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: d
		})]
	}) : l ? (0, M.jsx)(`div`, {
		"aria-busy": `true`,
		className: `flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border px-4 py-8`,
		children: (0, M.jsx)(f, {
			label: u ?? ``,
			showLabel: u !== void 0,
			decorative: u === void 0,
			size: `md`
		})
	}) : t.length === 0 ? p ? (0, M.jsx)(`div`, {
		className: `rounded-lg border border-dashed border-border-strong px-6 py-10 text-center text-body text-muted`,
		children: p
	}) : null : (0, M.jsx)(`div`, {
		ref: _,
		...v ? {
			tabIndex: 0,
			role: `group`,
			"aria-label": e
		} : {},
		className: r(`flex min-w-0 flex-col gap-3 rounded-lg outline-offset-(--sk-focus-offset) focus-visible:outline-solid focus-visible:outline-(length:--sk-focus-width) focus-visible:outline-focus`, `@3xl/board:flex-row @3xl/board:items-start @3xl/board:overflow-x-auto @3xl/board:overscroll-x-contain @3xl/board:pb-3`),
		children: t.map((e) => (0, M.jsx)(T.Fragment, { children: c ? c(e) : (0, M.jsx)(W, { column: e }) }, e.id))
	}), (0, M.jsx)(E.Provider, {
		value: D,
		children: (0, M.jsx)(`section`, {
			"aria-label": e,
			"aria-busy": l || void 0,
			className: r(`@container/board min-w-0`, h),
			children: O
		})
	});
}
var be = i(`status.danger`), xe = i(`status.ok`);
function Se({ message: e, visible: t = !1, className: n }) {
	let i = e?.tone === `danger`, a = i ? be : xe, o = (n) => e && (e.tone ?? `ok`) === n ? (0, M.jsxs)(`span`, {
		className: r(t ? `flex items-start gap-2` : `block`),
		children: [t ? (0, M.jsx)(a, {
			"aria-hidden": !0,
			focusable: `false`,
			className: r(`mt-0.5 size-4 shrink-0`, i ? `text-danger` : `text-ok`)
		}) : null, (0, M.jsxs)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: [t && e.toneLabel ? (0, M.jsx)(`strong`, {
				className: r(`font-semibold`, i ? `text-danger` : `text-ok`),
				children: `${e.toneLabel} `
			}) : null, e.text]
		})]
	}, e.id) : null, s = t && e ? `rounded-md border px-3 py-2 text-body text-fg` : void 0;
	return (0, M.jsxs)(`div`, {
		className: n,
		children: [(0, M.jsx)(`output`, {
			"aria-live": `polite`,
			"aria-atomic": `true`,
			className: t && e && !i ? r(s, `border-ok bg-ok-soft`) : `sr-only`,
			children: o(`ok`)
		}), (0, M.jsx)(`div`, {
			role: `alert`,
			"aria-live": `assertive`,
			"aria-atomic": `true`,
			className: t && i ? r(s, `border-danger bg-danger-soft`) : `sr-only`,
			children: o(`danger`)
		})]
	});
}
function K({ category: e, children: t, size: n = `md`, title: r, ...i }) {
	let a = (0, T.useMemo)(() => (0, M.jsx)(B, {
		category: e,
		className: `text-current`
	}), [e]);
	return (0, M.jsx)(d, {
		...i,
		size: n,
		title: r ?? t,
		tone: ue[e],
		icon: a,
		"data-category": e,
		children: t
	});
}
function Ce({ issue: e, labelsLabel: t, unassignedLabel: n, priorityLabel: i, dueLabel: a, overdueLabel: o, elementType: s = `div`, actions: c, isCurrent: l = !1, className: u, ...d }) {
	let f = e.status?.category === `done` || e.status?.category === `canceled`;
	return (0, M.jsx)(s, {
		...d,
		...l ? { "aria-current": `true` } : {},
		className: r(`@container/row relative block min-w-0 rounded-md border border-transparent transition-colors duration-(--sk-duration-fast) motion-reduce:transition-none`, e.href && `hover:bg-hover`, l && `bg-selected shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:border-[Highlight]`, A, u),
		children: (0, M.jsxs)(`div`, {
			className: `grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-3 gap-y-1.5 px-3 py-2.5 @2xl/row:grid-cols-[6.5rem_minmax(0,1fr)_auto] @2xl/row:items-center`,
			children: [
				(0, M.jsx)(P, {
					isClosed: f,
					children: e.key
				}),
				(0, M.jsxs)(`div`, {
					className: `flex min-w-0 flex-col gap-1`,
					children: [e.href ? (0, M.jsx)(C, {
						href: e.href,
						"data-stretched": ``,
						className: `font-medium text-fg underline-offset-2 outline-hidden [overflow-wrap:anywhere] after:absolute after:inset-0 after:rounded-md after:content-[''] data-hovered:underline`,
						children: e.title
					}) : (0, M.jsx)(`span`, {
						className: `font-medium text-fg [overflow-wrap:anywhere]`,
						children: e.title
					}), e.labels && e.labels.length > 0 ? (0, M.jsx)(L, {
						labels: e.labels,
						label: t
					}) : null]
				}),
				(0, M.jsxs)(`div`, {
					className: `col-span-2 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1.5 @2xl/row:col-span-1 @2xl/row:flex-nowrap @2xl/row:justify-end`,
					children: [
						e.type ? (0, M.jsx)(F, {
							kind: e.type.kind,
							label: e.type.label
						}) : null,
						e.status ? (0, M.jsx)(K, {
							category: e.status.category,
							children: e.status.label
						}) : null,
						e.priority ? (0, M.jsx)(z, {
							level: e.priority.level,
							label: e.priority.label,
							...i === void 0 ? {} : { fieldLabel: i }
						}) : null,
						e.due ? (0, M.jsx)(R, {
							due: e.due,
							dueLabel: a,
							overdueLabel: o
						}) : null,
						(0, M.jsx)(oe, {
							person: e.assignee,
							unassignedLabel: n,
							className: `max-w-48`
						}),
						e.updated ? (0, M.jsx)(`time`, {
							dateTime: e.updated.dateTime,
							className: `text-caption whitespace-nowrap text-muted`,
							children: e.updated.text
						}) : null,
						c ? (0, M.jsx)(`span`, {
							className: `relative z-1 flex shrink-0 items-center gap-1`,
							children: c
						}) : null
					]
				})
			]
		})
	});
}
var we = [
	`key`,
	`title`,
	`type`,
	`status`,
	`priority`,
	`assignee`,
	`updated`
], Te = [], Ee = (e) => e.key;
function De(e, t, { labelsLabel: n, unassignedLabel: r, overdueLabel: i }) {
	switch (e) {
		case `key`: return (0, M.jsx)(P, {
			isClosed: t.status?.category === `done` || t.status?.category === `canceled`,
			children: t.key
		});
		case `title`: return (0, M.jsxs)(`span`, {
			className: `flex min-w-0 flex-col gap-1`,
			children: [t.href ? (0, M.jsx)(C, {
				href: t.href,
				className: Oe,
				children: t.title
			}) : (0, M.jsx)(`span`, {
				className: `font-medium`,
				children: t.title
			}), t.labels && t.labels.length > 0 ? (0, M.jsx)(L, {
				labels: t.labels,
				label: n
			}) : null]
		});
		case `type`: return t.type ? (0, M.jsx)(F, {
			kind: t.type.kind,
			label: t.type.label
		}) : null;
		case `status`: return t.status ? (0, M.jsx)(K, {
			category: t.status.category,
			children: t.status.label
		}) : null;
		case `priority`: return t.priority ? (0, M.jsx)(z, {
			level: t.priority.level,
			label: t.priority.label
		}) : null;
		case `assignee`: return (0, M.jsx)(oe, {
			person: t.assignee,
			unassignedLabel: r
		});
		case `due`: return t.due ? (0, M.jsx)(R, {
			due: t.due,
			overdueLabel: i
		}) : null;
		case `updated`: return t.updated ? (0, M.jsx)(`time`, {
			dateTime: t.updated.dateTime,
			className: `text-caption whitespace-nowrap text-muted`,
			children: t.updated.text
		}) : null;
	}
}
var Oe = `font-medium text-fg underline-offset-2 rounded-sm data-hovered:underline ${k}`;
function q({ caption: e, captionHidden: t = !1, issues: n, headers: r, columns: i = we, labelsLabel: a, unassignedLabel: o, overdueLabel: s, layout: c = `stack`, sort: l, onSortChange: u, sortable: d = Te, emptyState: f, isLoading: p, loadingLabel: m, error: h, className: g }) {
	let _ = (0, T.useMemo)(() => {
		let e = {
			labelsLabel: a,
			unassignedLabel: o,
			overdueLabel: s
		};
		return i.flatMap((t) => {
			let n = r[t];
			return n === void 0 ? [] : [{
				id: t,
				header: n,
				cell: (n) => De(t, n, e),
				...t === `title` ? { isRowHeader: !0 } : {},
				...d.includes(t) ? { allowsSorting: !0 } : {}
			}];
		});
	}, [
		i,
		r,
		a,
		s,
		d,
		o
	]);
	return (0, M.jsx)(w, {
		caption: e,
		captionHidden: t,
		columns: _,
		rows: n,
		rowKey: Ee,
		layout: c,
		sort: l,
		...u === void 0 ? {} : { onSortChange: u },
		emptyState: n.length === 0 ? f : void 0,
		isLoading: p,
		loadingLabel: m,
		error: h,
		...g === void 0 ? {} : { className: g },
		tableClassName: c === `scroll` ? `min-w-[52rem]` : `@xl:min-w-[52rem]`
	});
}
var ke = `rounded-sm text-start font-medium text-fg outline-hidden after:absolute after:inset-0 after:rounded-lg after:content-[''] data-disabled:cursor-not-allowed data-disabled:text-muted`;
function Ae({ taskKey: e, title: t, status: n, priority: i, leading: a, meta: s, href: c, onPress: l, isCurrent: u = !1, isDisabled: d = !1, isPending: p = !1, pendingLabel: m, actions: h, clampTitle: g = !0, elementType: _ = `div`, className: v }) {
	let y = d || p, b = u ? { "aria-current": `true` } : {}, x = (0, M.jsx)(`span`, {
		...g ? { title: t } : {},
		className: r(`block [overflow-wrap:anywhere]`, g && `line-clamp-2`),
		children: t
	}), S;
	return S = c === void 0 ? l === void 0 ? (0, M.jsx)(`span`, {
		className: `font-medium text-fg`,
		children: x
	}) : (0, M.jsx)(o, {
		...b,
		onPress: l,
		isDisabled: y,
		"data-stretched": ``,
		className: r(ke, `cursor-pointer`),
		children: x
	}) : (0, M.jsx)(C, {
		...b,
		href: c,
		isDisabled: y,
		"data-stretched": ``,
		className: r(ke, `data-hovered:underline underline-offset-2`),
		children: x
	}), (0, M.jsxs)(_, {
		"aria-busy": p || void 0,
		"data-current": u || void 0,
		className: r(`relative flex min-w-0 items-start gap-3 rounded-lg border border-border bg-surface p-3 text-body transition-[border-color,background-color,box-shadow] duration-(--sk-duration-fast) motion-reduce:transition-none`, !y && (c !== void 0 || l !== void 0) && `hover:border-border-strong hover:bg-hover`, u && `border-accent bg-selected shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:border-[Highlight]`, d && `border-dashed border-border-strong bg-sunken`, A, v),
		children: [
			a ? (0, M.jsx)(`span`, {
				className: `flex shrink-0 items-center`,
				children: a
			}) : null,
			(0, M.jsxs)(`div`, {
				className: `flex min-w-0 flex-1 flex-col gap-1`,
				children: [
					(0, M.jsxs)(`div`, {
						className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1`,
						children: [
							(0, M.jsx)(P, { children: e }),
							n,
							i
						]
					}),
					S,
					s && s.length > 0 ? (0, M.jsx)(`p`, {
						className: `flex min-w-0 flex-wrap items-center gap-x-1.5 text-caption text-muted`,
						children: T.Children.map(s, (e, t) => (0, M.jsxs)(`span`, {
							className: `inline-flex min-w-0 items-center gap-x-1.5 [overflow-wrap:anywhere]`,
							children: [t > 0 ? (0, M.jsx)(`span`, {
								"aria-hidden": !0,
								children: `·`
							}) : null, e]
						}))
					}) : null
				]
			}),
			p || h ? (0, M.jsxs)(`div`, {
				className: `relative z-1 flex shrink-0 items-center gap-1`,
				children: [p ? (0, M.jsx)(f, {
					label: m ?? ``,
					showLabel: m !== void 0,
					decorative: m === void 0,
					size: `sm`
				}) : null, h]
			}) : null
		]
	});
}
var je = e({ default: () => Re }), J = {
	frontend: {
		id: `frontend`,
		name: `frontend`,
		color: `var(--sk-info)`
	},
	backend: {
		id: `backend`,
		name: `backend`,
		color: `var(--sk-tool-skills)`
	},
	a11y: {
		id: `a11y`,
		name: `accessibility`,
		color: `var(--sk-ok)`
	},
	search: {
		id: `search`,
		name: `search`,
		color: `var(--sk-warn)`
	},
	docs: {
		id: `docs`,
		name: `docs`,
		color: `var(--sk-muted)`
	},
	perf: {
		id: `perf`,
		name: `performance`,
		color: `var(--sk-tool-agent)`
	}
}, Y = [
	{
		key: `SK-101`,
		title: `Search suggestions skip words with accented letters`,
		href: `#SK-101`,
		type: {
			kind: `bug`,
			label: `Bug`
		},
		status: {
			category: `todo`,
			label: `To do`
		},
		priority: {
			level: `urgent`,
			label: `Urgent`
		},
		labels: [J.search, J.backend],
		assignee: { name: `Ada Lovelace` },
		updated: {
			dateTime: `2026-11-08T09:12:00Z`,
			text: `2 hours ago`
		},
		due: {
			dateTime: `2026-11-05`,
			text: `5 Nov`,
			overdue: !0
		}
	},
	{
		key: `SK-102`,
		title: `Keyboard shortcut sheet for the editor`,
		href: `#SK-102`,
		type: {
			kind: `feature`,
			label: `Feature`
		},
		status: {
			category: `in_progress`,
			label: `In progress`
		},
		priority: {
			level: `high`,
			label: `High`
		},
		labels: [J.frontend, J.a11y],
		assignee: { name: `Grace Hopper` },
		updated: {
			dateTime: `2026-11-07T16:40:00Z`,
			text: `yesterday`
		},
		due: {
			dateTime: `2026-11-20`,
			text: `20 Nov`
		}
	},
	{
		key: `SK-103`,
		title: `Move the export queue to a background worker so large projects no longer time out while the archive is being built`,
		href: `#SK-103`,
		type: {
			kind: `improvement`,
			label: `Improvement`
		},
		status: {
			category: `in_progress`,
			label: `In review`
		},
		priority: {
			level: `medium`,
			label: `Medium`
		},
		labels: [
			J.backend,
			J.perf,
			J.docs,
			J.search,
			J.frontend
		],
		updated: {
			dateTime: `2026-11-06T11:00:00Z`,
			text: `2 days ago`
		}
	},
	{
		key: `SK-104`,
		title: `Write the getting started guide`,
		href: `#SK-104`,
		type: {
			kind: `task`,
			label: `Task`
		},
		status: {
			category: `done`,
			label: `Done`
		},
		priority: {
			level: `low`,
			label: `Low`
		},
		labels: [J.docs],
		assignee: { name: `Alan Turing` },
		updated: {
			dateTime: `2026-11-01T08:00:00Z`,
			text: `last week`
		}
	},
	{
		key: `SK-105`,
		title: `Offline mode`,
		href: `#SK-105`,
		type: {
			kind: `epic`,
			label: `Epic`
		},
		status: {
			category: `todo`,
			label: `Backlog`
		},
		priority: {
			level: `lowest`,
			label: `Lowest`
		},
		assignee: { name: `Katherine Johnson` },
		updated: {
			dateTime: `2026-10-20T08:00:00Z`,
			text: `3 weeks ago`
		}
	},
	{
		key: `SK-106`,
		title: `Drop the legacy import format`,
		href: `#SK-106`,
		type: {
			kind: `task`,
			label: `Task`
		},
		status: {
			category: `canceled`,
			label: `Won’t do`
		},
		priority: {
			level: `low`,
			label: `Low`
		},
		updated: {
			dateTime: `2026-10-12T08:00:00Z`,
			text: `last month`
		}
	}
], X = (e) => Y.find((t) => t.key === e) ?? Y[0], Z = {
	move: (e) => `Move ${e.key}`,
	moveTo: `Move to`,
	moveUp: `Move up`,
	moveDown: `Move down`,
	drag: (e) => `Drag ${e.key}`,
	count: (e) => e === 1 ? `1 issue` : `${e} issues`,
	overLimit: (e) => `Over the limit of ${e}`,
	empty: `No issues. Drop a card here.`,
	labels: `Labels`,
	priority: `Priority`,
	unassigned: `Unassigned`,
	overdue: `Overdue`,
	due: `Due`,
	moreLabels: (e) => `Show ${e} more labels`,
	fewerLabels: `Show fewer`
}, Q = [
	{
		id: `todo`,
		title: `To do`,
		category: `todo`,
		items: [X(`SK-101`), X(`SK-105`)]
	},
	{
		id: `doing`,
		title: `In progress`,
		category: `in_progress`,
		limit: 1,
		items: [X(`SK-102`), X(`SK-103`)]
	},
	{
		id: `review`,
		title: `In review`,
		category: `in_progress`,
		items: []
	},
	{
		id: `done`,
		title: `Done`,
		category: `done`,
		items: [X(`SK-104`)]
	}
];
function Me() {
	let [e, t] = (0, T.useState)(Q), [n, r] = (0, T.useState)(!1), [i, a] = (0, T.useState)(null), o = (0, T.useRef)(0), s = (0, T.useCallback)((i) => {
		o.current += 1;
		let s = e.find((e) => e.id === i.to), c = i.keys.join(`, `);
		n ? (r(!1), a({
			id: o.current,
			tone: `danger`,
			toneLabel: `Error:`,
			text: `Could not move ${c}. The card is back in its column.`
		})) : (t((e) => ee(e, i)), a({
			id: o.current,
			tone: `ok`,
			toneLabel: `Saved:`,
			text: `${c} moved to ${s?.title ?? ``}.`
		}));
	}, [e, n]);
	return (0, M.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [(0, M.jsx)(l, {
					size: `sm`,
					isSelected: n,
					onChange: r,
					children: `Fail the next save`
				}), (0, M.jsx)(`p`, {
					className: `text-caption text-muted`,
					children: `Drag a card, use its handle with Enter and the arrow keys, or open its menu.`
				})]
			}),
			(0, M.jsx)(Se, {
				message: i,
				visible: !0
			}),
			(0, M.jsx)(G, {
				"aria-label": `Sprint 14`,
				columns: e,
				onMove: s,
				labels: Z,
				headingLevel: 3,
				children: (e) => (0, M.jsx)(W, {
					column: e,
					onAdd: () => void 0,
					addLabel: `Add issue`,
					children: (e) => (0, M.jsx)(U, { issue: e })
				})
			})
		]
	});
}
function Ne() {
	return (0, M.jsxs)(`div`, {
		className: `grid gap-4 lg:grid-cols-2`,
		children: [(0, M.jsx)(G, {
			"aria-label": `Read-only board`,
			columns: Q.slice(0, 2),
			labels: Z,
			isReadOnly: !0,
			headingLevel: 3
		}), (0, M.jsxs)(`div`, {
			className: `flex flex-col gap-4`,
			children: [
				(0, M.jsx)(G, {
					"aria-label": `Board, loading`,
					columns: [],
					labels: Z,
					isLoading: !0,
					loadingLabel: `Loading the board`
				}),
				(0, M.jsx)(G, {
					"aria-label": `Board, failed`,
					columns: [],
					labels: Z,
					error: `Could not load the board. Check the connection and try again.`
				}),
				(0, M.jsx)(G, {
					"aria-label": `Board, no statuses`,
					columns: [],
					labels: Z,
					emptyState: `This project has no statuses yet.`
				}),
				(0, M.jsx)(G, {
					"aria-label": `Board, one column loading`,
					columns: Q.slice(2, 3),
					labels: Z,
					headingLevel: 3,
					children: (e) => (0, M.jsx)(W, {
						column: e,
						isLoading: !0,
						loadingLabel: `Loading issues`
					})
				})
			]
		})]
	});
}
var $ = {
	key: `Key`,
	title: `Title`,
	type: `Type`,
	status: `Status`,
	priority: `Priority`,
	assignee: `Assignee`,
	due: `Due`,
	updated: `Updated`
}, Pe = {
	urgent: 0,
	high: 1,
	medium: 2,
	low: 3,
	lowest: 4
};
function Fe() {
	let [e, t] = (0, T.useState)({
		column: `priority`,
		direction: `ascending`
	}), n = (0, T.useMemo)(() => Y.toSorted((t, n) => {
		let r = e.column === `priority` ? Pe[t.priority?.level ?? `lowest`] - Pe[n.priority?.level ?? `lowest`] : t.key.localeCompare(n.key);
		return e.direction === `ascending` ? r : -r;
	}), [e]);
	return (0, M.jsxs)(`div`, {
		className: `flex flex-col gap-6`,
		children: [
			(0, M.jsx)(q, {
				caption: `Open issues`,
				issues: n,
				headers: $,
				labelsLabel: `Labels`,
				unassignedLabel: `Unassigned`,
				overdueLabel: `Overdue`,
				sort: e,
				onSortChange: t,
				sortable: [`key`, `priority`]
			}),
			(0, M.jsx)(q, {
				caption: `Due this week, scrolling in its own box`,
				layout: `scroll`,
				issues: Y.slice(0, 3),
				headers: $,
				columns: [
					`key`,
					`title`,
					`status`,
					`assignee`,
					`due`
				],
				labelsLabel: `Labels`,
				unassignedLabel: `Unassigned`,
				overdueLabel: `Overdue`
			}),
			(0, M.jsxs)(`div`, {
				className: `grid gap-4 md:grid-cols-3`,
				children: [
					(0, M.jsx)(q, {
						caption: `Empty`,
						issues: [],
						headers: $,
						columns: [`key`, `title`],
						labelsLabel: `Labels`,
						unassignedLabel: `Unassigned`,
						emptyState: `No issues match these filters.`
					}),
					(0, M.jsx)(q, {
						caption: `Loading`,
						issues: [],
						headers: $,
						columns: [`key`, `title`],
						labelsLabel: `Labels`,
						unassignedLabel: `Unassigned`,
						isLoading: !0,
						loadingLabel: `Loading issues`
					}),
					(0, M.jsx)(q, {
						caption: `Error`,
						issues: [],
						headers: $,
						columns: [`key`, `title`],
						labelsLabel: `Labels`,
						unassignedLabel: `Unassigned`,
						error: `Could not load issues. Try again.`
					})
				]
			})
		]
	});
}
function Ie() {
	let [e, t] = (0, T.useState)([
		J.frontend,
		J.a11y,
		J.perf
	]);
	return (0, M.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, M.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [
				(0, M.jsx)(I, {
					color: J.frontend.color,
					children: `frontend`
				}),
				(0, M.jsx)(I, {
					color: J.backend.color,
					children: `backend`
				}),
				(0, M.jsx)(I, { children: `no colour` }),
				(0, M.jsx)(I, {
					color: J.docs.color,
					className: `max-w-40`,
					children: `documentation for the public interface`
				})
			]
		}), (0, M.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [e.map((e) => (0, M.jsx)(I, {
				...e.color === void 0 ? {} : { color: e.color },
				onRemove: () => t((t) => t.filter((t) => t.id !== e.id)),
				removeLabel: `Remove ${e.name}`,
				children: e.name
			}, e.id)), (0, M.jsx)(I, {
				color: J.search.color,
				onRemove: () => void 0,
				removeLabel: `Remove search`,
				isDisabled: !0,
				children: `search`
			})]
		})]
	});
}
function Le() {
	let [e, t] = (0, T.useState)(`SK-102`), [n, r] = (0, T.useState)(null), i = Y.slice(0, 4);
	return (0, M.jsxs)(`ul`, {
		className: `flex max-w-xl flex-col gap-2`,
		children: [i.map((i) => (0, M.jsx)(`li`, { children: (0, M.jsx)(Ae, {
			taskKey: i.key,
			title: i.title,
			leading: (0, M.jsx)(u, {
				kind: `skribly`,
				label: `Skribly Tracker`,
				size: 24
			}),
			...i.status ? { status: (0, M.jsx)(K, {
				category: i.status.category,
				size: `sm`,
				children: i.status.label
			}) } : {},
			...i.priority ? { priority: (0, M.jsx)(z, {
				level: i.priority.level,
				label: i.priority.label
			}) } : {},
			meta: [
				`Skribly Tracker`,
				`Web app`,
				i.updated?.text ?? ``
			],
			onPress: () => t(i.key),
			isCurrent: e === i.key,
			isPending: n === i.key,
			pendingLabel: `Starting`,
			actions: (0, M.jsx)(c, {
				label: `Start ${i.key}`,
				size: `sm`,
				variant: `ghost`,
				isDisabled: n !== null,
				onPress: () => r(i.key),
				children: (0, M.jsx)(a, {
					name: `media.play`,
					"aria-hidden": !0
				})
			})
		}) }, i.key)), (0, M.jsx)(`li`, { children: (0, M.jsx)(Ae, {
			taskKey: `org/site#58`,
			title: `Read-only task from an archived repository`,
			leading: (0, M.jsx)(u, {
				kind: `github`,
				label: `GitHub`,
				size: 24
			}),
			status: (0, M.jsx)(d, {
				size: `sm`,
				children: `Closed`
			}),
			meta: [`GitHub`, `archived`],
			href: `#org-site-58`,
			isDisabled: !0
		}) })]
	});
}
var Re = {
	title: `Tracker`,
	description: `Issues and the board of Skribly Tracker, and the tasks the Agent pulls from any tracker. Status, priority and type each pair a glyph shape with a word, so nothing rests on colour; lists reflow from 320px; the board moves cards by pointer, keyboard, screen reader and a one-tap menu, and says what happened through live regions. Built to WCAG 2.2 AA as a target.`,
	pl: {
		title: `Tracker`,
		description: `Zgłoszenia i tablica Skribly Tracker oraz zadania, które Agent pobiera z dowolnego trackera. Status, priorytet i typ łączą kształt znaku ze słowem, więc nic nie opiera się na kolorze; listy układają się od 320 px; tablica przenosi karty wskaźnikiem, klawiaturą, czytnikiem ekranu i menu jednego dotknięcia oraz mówi, co się stało, przez regiony na żywo. Budowane z celem WCAG 2.2 AA.`
	},
	demos: [
		{
			name: `IssueKey`,
			components: [`IssueKey`],
			description: `The project key and number of an issue in the monospace face. Pick it wherever an issue is named, and pass href when the key should open the issue.`,
			usage: `<IssueKey href="/issues/SK-101">SK-101</IssueKey>`,
			accessibility: `Plain text, or a React Aria link with a visible focus ring and a 24px tall target. translate="no" keeps page translators away from it. isClosed strikes it through, so say closed in words nearby as well, for example with a status badge.`,
			pl: {
				description: `Klucz projektu i numer zgłoszenia czcionką o stałej szerokości. Wybierz go wszędzie, gdzie zgłoszenie jest nazwane, i przekaż href, gdy klucz ma otwierać zgłoszenie.`,
				accessibility: `Zwykły tekst albo link React Aria z widoczną obwódką fokusa i celem o wysokości 24 px. translate="no" odsuwa od niego tłumaczy stron. isClosed go przekreśla, więc napisz też słowami obok, że zgłoszenie jest zamknięte, na przykład plakietką statusu.`
			},
			render: () => (0, M.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-4`,
				children: [
					(0, M.jsx)(P, { children: `SK-101` }),
					(0, M.jsx)(P, {
						href: `#SK-102`,
						children: `SK-102`
					}),
					(0, M.jsx)(P, {
						isClosed: !0,
						children: `SK-104`
					})
				]
			})
		},
		{
			name: `IssueStatusBadge`,
			components: [`IssueStatusBadge`],
			description: `A status under the project’s own name, tinted by its category: not started, in progress, done or cancelled. Pick it for the status of an issue in lists, cards and headers.`,
			usage: `<IssueStatusBadge category="in_progress">{status.name}</IssueStatusBadge>`,
			accessibility: `The name is plain text, so it is read as written. Each category has its own glyph shape (an empty ring, a dashed ring, a ticked ring, a struck ring), hidden from screen readers. Text and tint pairs come from the tokens in every theme, and a transparent border keeps the outline in forced colours. Long names truncate with the full name in the title.`,
			pl: {
				description: `Status pod własną nazwą projektu, podbarwiony według kategorii: nierozpoczęte, w toku, zrobione albo anulowane. Wybierz go dla statusu zgłoszenia na listach, kartach i w nagłówkach.`,
				accessibility: `Nazwa jest zwykłym tekstem, więc jest odczytywana tak, jak napisano. Każda kategoria ma własny kształt znaku (pusty pierścień, przerywany pierścień, pierścień z ptaszkiem, przekreślony pierścień), ukryty przed czytnikami ekranu. Pary tekstu i podbarwienia pochodzą z tokenów w każdym motywie, a przezroczysta ramka zachowuje obrys w trybie wymuszonych kolorów. Długie nazwy są ucinane, z pełną nazwą w title.`
			},
			render: () => (0, M.jsxs)(`div`, {
				className: `flex flex-wrap gap-2`,
				children: [
					(0, M.jsx)(K, {
						category: `todo`,
						children: `To do`
					}),
					(0, M.jsx)(K, {
						category: `in_progress`,
						children: `In progress`
					}),
					(0, M.jsx)(K, {
						category: `in_progress`,
						children: `In review`
					}),
					(0, M.jsx)(K, {
						category: `done`,
						children: `Done`
					}),
					(0, M.jsx)(K, {
						category: `canceled`,
						children: `Won’t do`
					}),
					(0, M.jsx)(K, {
						category: `todo`,
						size: `sm`,
						children: `Small`
					}),
					(0, M.jsx)(K, {
						category: `in_progress`,
						className: `max-w-40`,
						children: `Waiting for the security review of the release`
					})
				]
			})
		},
		{
			name: `PriorityBadge`,
			components: [`PriorityBadge`],
			description: `The priority of an issue as an arrow glyph and a word. Pick compact on cards, where only the glyph shows.`,
			usage: `<PriorityBadge level="high" label={t('priority.high')} fieldLabel={t('fields.priority')} compact />`,
			accessibility: `Arrows climb with the level, so the order reads without colour. The word is always in the page: compact hides it from sight only, and fieldLabel is read before it, so a card says "Priority High". The glyph is hidden from screen readers.`,
			pl: {
				description: `Priorytet zgłoszenia jako strzałka i słowo. Wybierz compact na kartach, gdzie widać tylko znak.`,
				accessibility: `Strzałki rosną wraz z poziomem, więc kolejność da się odczytać bez koloru. Słowo jest zawsze na stronie: compact ukrywa je tylko dla oka, a fieldLabel jest odczytywane przed nim, więc karta mówi „Priority High”. Znak jest ukryty przed czytnikami ekranu.`
			},
			render: () => (0, M.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [(0, M.jsxs)(`div`, {
					className: `flex flex-wrap gap-4`,
					children: [
						(0, M.jsx)(z, {
							level: `urgent`,
							label: `Urgent`
						}),
						(0, M.jsx)(z, {
							level: `high`,
							label: `High`
						}),
						(0, M.jsx)(z, {
							level: `medium`,
							label: `Medium`
						}),
						(0, M.jsx)(z, {
							level: `low`,
							label: `Low`
						}),
						(0, M.jsx)(z, {
							level: `lowest`,
							label: `Lowest`
						})
					]
				}), (0, M.jsxs)(`div`, {
					className: `flex flex-wrap gap-4`,
					children: [
						(0, M.jsx)(z, {
							level: `urgent`,
							label: `Urgent`,
							fieldLabel: `Priority`,
							compact: !0
						}),
						(0, M.jsx)(z, {
							level: `high`,
							label: `High`,
							fieldLabel: `Priority`,
							compact: !0
						}),
						(0, M.jsx)(z, {
							level: `medium`,
							label: `Medium`,
							fieldLabel: `Priority`,
							compact: !0
						}),
						(0, M.jsx)(z, {
							level: `low`,
							label: `Low`,
							fieldLabel: `Priority`,
							compact: !0
						}),
						(0, M.jsx)(z, {
							level: `lowest`,
							label: `Lowest`,
							fieldLabel: `Priority`,
							compact: !0
						})
					]
				})]
			})
		},
		{
			name: `IssueTypeBadge`,
			components: [`IssueTypeBadge`],
			description: `The kind of an issue as a glyph and a word: bug, feature, task, improvement or epic. Pass icon for a kind the app defines itself.`,
			usage: `<IssueTypeBadge kind="bug" label={t('types.bug')} />`,
			accessibility: `Each kind has its own glyph shape, hidden from screen readers; the word carries the meaning and stays for screen readers when compact hides it.`,
			pl: {
				description: `Rodzaj zgłoszenia jako znak i słowo: błąd, funkcja, zadanie, ulepszenie albo epik. Przekaż icon dla rodzaju, który aplikacja definiuje sama.`,
				accessibility: `Każdy rodzaj ma własny kształt znaku, ukryty przed czytnikami ekranu; znaczenie niesie słowo, które zostaje dla czytników ekranu, gdy compact ukrywa je wizualnie.`
			},
			render: () => (0, M.jsxs)(`div`, {
				className: `flex flex-wrap gap-4`,
				children: [
					(0, M.jsx)(F, {
						kind: `bug`,
						label: `Bug`
					}),
					(0, M.jsx)(F, {
						kind: `feature`,
						label: `Feature`
					}),
					(0, M.jsx)(F, {
						kind: `task`,
						label: `Task`
					}),
					(0, M.jsx)(F, {
						kind: `improvement`,
						label: `Improvement`
					}),
					(0, M.jsx)(F, {
						kind: `epic`,
						label: `Epic`
					}),
					(0, M.jsx)(F, {
						kind: `bug`,
						label: `Bug`,
						compact: !0
					})
				]
			})
		},
		{
			name: `LabelBadge`,
			components: [`LabelBadge`],
			description: `One label with the colour the project picked for it. Pass onRemove where labels are edited.`,
			usage: `<LabelBadge color={label.color} onRemove={() => remove(label)} removeLabel={t('labels.remove', { name: label.name })}>
  {label.name}
</LabelBadge>`,
			accessibility: `The colour only tints a dot hidden from screen readers; the text sits on the neutral surface, so any project colour keeps it readable. The remove button is 24px, named by removeLabel, with a visible focus ring. Long names truncate with the full name in the title.`,
			pl: {
				description: `Jedna etykieta w kolorze, który wybrał dla niej projekt. Przekaż onRemove tam, gdzie etykiety są edytowane.`,
				accessibility: `Kolor wypełnia tylko kropkę ukrytą przed czytnikami ekranu; tekst leży na neutralnej powierzchni, więc każdy kolor projektu zachowuje czytelność. Przycisk usuwania ma 24 px, jest nazwany przez removeLabel i ma widoczną obwódkę fokusa. Długie nazwy są ucinane, z pełną nazwą w title.`
			},
			render: () => (0, M.jsx)(Ie, {})
		},
		{
			name: `LabelList`,
			components: [`LabelList`],
			description: `The labels of an issue as a named, wrapping list. Pick max where space is short; the rest fold behind a +N button.`,
			usage: `<LabelList labels={issue.labels} label={t('fields.labels')} max={3}
  moreLabel={(n) => t('labels.more', { count: n })} lessLabel={t('labels.fewer')} />`,
			accessibility: `A list named by label, so screen readers say how many labels there are. The +N button is named by moreLabel, says aria-expanded and controls the list; it keeps focus when the list opens and becomes the button that folds it back.`,
			pl: {
				description: `Etykiety zgłoszenia jako nazwana, zawijająca się lista. Wybierz max tam, gdzie brakuje miejsca; reszta składa się za przyciskiem +N.`,
				accessibility: `Lista nazwana przez label, więc czytniki ekranu mówią, ile jest etykiet. Przycisk +N jest nazwany przez moreLabel, ma aria-expanded i steruje listą; zachowuje fokus, gdy lista się otwiera, i staje się przyciskiem, który ją składa z powrotem.`
			},
			render: () => (0, M.jsxs)(`div`, {
				className: `flex max-w-md flex-col gap-3`,
				children: [
					(0, M.jsx)(L, {
						labels: [J.frontend, J.a11y],
						label: `Labels`
					}),
					(0, M.jsx)(L, {
						labels: Object.values(J),
						label: `Labels`,
						max: 3,
						moreLabel: (e) => `Show ${e} more labels`,
						lessLabel: `Show fewer`
					}),
					(0, M.jsx)(L, {
						labels: [],
						label: `Labels`,
						emptyLabel: `No labels`
					})
				]
			})
		},
		{
			name: `IssueRow`,
			components: [`IssueRow`],
			description: `One issue on one line, as on the dashboard. Pick it for short lists such as "Assigned to me"; use IssueTable for long lists people sort.`,
			usage: `<ul>{issues.map((issue) => (
  <IssueRow key={issue.key} elementType="li" issue={issue} labelsLabel={t('fields.labels')} unassignedLabel={t('issue.unassigned')} />
))}</ul>`,
			accessibility: `The title is a link whose hit area covers the row, and the row draws its focus ring. isCurrent sets aria-current and adds an accent rule. Overdue dates change their glyph and read overdueLabel. In a narrow container the facts wrap under the title, so nothing scrolls sideways at 320px or 400% zoom.`,
			pl: {
				description: `Jedno zgłoszenie w jednej linii, jak na pulpicie. Wybierz go dla krótkich list, takich jak „Assigned to me”; dla długich list, które ludzie sortują, użyj IssueTable.`,
				accessibility: `Tytuł jest linkiem, którego pole trafienia pokrywa wiersz, a wiersz rysuje własną obwódkę fokusa. isCurrent ustawia aria-current i dodaje linię w kolorze akcentu. Przeterminowane daty zmieniają znak i odczytują overdueLabel. W wąskim kontenerze fakty zawijają się pod tytuł, więc nic nie przewija się na boki przy 320 px ani powiększeniu 400%.`
			},
			render: () => (0, M.jsx)(`ul`, {
				className: `flex flex-col gap-1`,
				children: Y.slice(0, 4).map((e) => (0, M.jsx)(Ce, {
					elementType: `li`,
					issue: e,
					labelsLabel: `Labels`,
					unassignedLabel: `Unassigned`,
					priorityLabel: `Priority`,
					dueLabel: `Due`,
					overdueLabel: `Overdue`,
					isCurrent: e.key === `SK-102`
				}, e.key))
			})
		},
		{
			name: `IssueTable`,
			components: [`IssueTable`],
			description: `The issue list of a project on the shared Table, with sorting, empty, loading and error states. Pick stack, the default, to turn rows into cards below 36rem, or scroll to keep the grid in its own scrolling box.`,
			usage: `<IssueTable caption={t('issues.open')} issues={issues} headers={headers}
  labelsLabel={t('fields.labels')} unassignedLabel={t('issue.unassigned')}
  sort={sort} onSortChange={setSort} sortable={['key', 'priority']} />`,
			accessibility: `A native table with a caption, column headers and the title as row header. Sortable headers are buttons and carry aria-sort. In the stacked layout each cell keeps its column name as a visible label and the table roles stay in place. Loading is a polite status, an error is an assertive alert with an icon.`,
			pl: {
				description: `Lista zgłoszeń projektu na wspólnej Table, z sortowaniem oraz stanami pustej listy, ładowania i błędu. Wybierz stack, domyślne, aby zamieniać wiersze w karty poniżej 36 rem, albo scroll, aby zachować siatkę we własnym przewijanym polu.`,
				accessibility: `Natywna tabela z podpisem, nagłówkami kolumn i tytułem jako nagłówkiem wiersza. Sortowalne nagłówki są przyciskami i mają aria-sort. W układzie w stosie każda komórka zachowuje nazwę kolumny jako widoczną etykietę, a role tabeli zostają na miejscu. Ładowanie jest statusem typu polite, błąd komunikatem typu assertive z ikoną.`
			},
			render: () => (0, M.jsx)(Fe, {})
		},
		{
			name: `Board`,
			components: [
				`Board`,
				`BoardColumn`,
				`BoardCard`,
				`BoardAnnouncer`
			],
			description: `The Kanban board of a project: a column per status, cards that move between them, and a voice that says how the move went. The board is controlled; apply onMove with moveBoardCards and save it. Turn on "Fail the next save" to see the error path.`,
			usage: `<BoardAnnouncer message={message} />
<Board aria-label={t('board.title')} columns={columns} labels={labels}
  onMove={(move) => { setColumns((c) => moveBoardCards(c, move)); save(move) }} />`,
			accessibility: `Each column is a section named by its heading, holding a React Aria GridList: one tab stop per column, arrow keys between cards, typeahead by key and title. Cards move by pointer drag, by keyboard and screen reader through the drag handle (Enter, then arrows and Enter, with React Aria’s spoken instructions), and by the move menu, the one-pointer way to move that WCAG 2.5.7 asks for. Focus follows a card that the menu moved. BoardAnnouncer reads saved moves politely and failed ones assertively, and its visible message stays until the next one. Over a work in progress limit the count gains a warning glyph and overLimit words. Columns stack below 48rem and scroll in their own box above it.`,
			pl: {
				description: `Tablica Kanban projektu: kolumna na każdy status, karty, które się między nimi przenoszą, i głos, który mówi, jak poszło przeniesienie. Tablica jest kontrolowana; zastosuj onMove przez moveBoardCards i zapisz. Włącz „Fail the next save”, aby zobaczyć ścieżkę błędu.`,
				accessibility: `Każda kolumna jest sekcją nazwaną swoim nagłówkiem i zawiera GridList z React Aria: jeden przystanek Tab na kolumnę, klawisze strzałek między kartami, wyszukiwanie po wpisaniu według klucza i tytułu. Karty przenosi się przeciąganiem wskaźnikiem, klawiaturą i czytnikiem ekranu przez uchwyt przeciągania (Enter, potem strzałki i Enter, z mówionymi instrukcjami React Aria) oraz menu przenoszenia, czyli sposobem na przeniesienie jednym wskaźnikiem, o który prosi WCAG 2.5.7. Fokus podąża za kartą, którą przeniosło menu. BoardAnnouncer odczytuje zapisane przeniesienia w trybie polite, a nieudane w trybie assertive, a jego widoczny komunikat zostaje do następnego. Przy przekroczeniu limitu pracy w toku licznik dostaje znak ostrzeżenia i słowa z overLimit. Kolumny układają się w stos poniżej 48 rem i przewijają się we własnym polu powyżej niego.`
			},
			render: () => (0, M.jsx)(Me, {})
		},
		{
			name: `Board states`,
			components: [`Board`, `BoardColumn`],
			description: `A read-only board, the loading, error and empty states of the board, and a column that is still loading.`,
			usage: `<Board aria-label={t('board.title')} columns={columns} labels={labels} isReadOnly />
<Board aria-label={t('board.title')} columns={[]} labels={labels} error={t('board.failed')} />`,
			accessibility: `A read-only board drops the drag handles and menus, and cards still open the issue. Loading is a status with a spinner and words, and sets aria-busy; an error is an assertive alert with a glyph, since nothing else on the board works.`,
			pl: {
				description: `Tablica tylko do odczytu, stany ładowania, błędu i pustej tablicy oraz kolumna, która jeszcze się ładuje.`,
				accessibility: `Tablica tylko do odczytu pomija uchwyty przeciągania i menu, a karty nadal otwierają zgłoszenie. Ładowanie jest statusem ze wskaźnikiem i słowami i ustawia aria-busy; błąd jest komunikatem typu assertive ze znakiem, bo nic innego na tablicy nie działa.`
			},
			render: () => (0, M.jsx)(Ne, {})
		},
		{
			name: `TaskCard`,
			components: [`TaskCard`],
			description: `A task from any connected tracker, as in the task list of the Agent. Pick it for lists where one task opens next to the list, and put the start button in actions.`,
			usage: `<TaskCard taskKey="SK-102" title={task.title} status={<Badge>{task.status}</Badge>}
  meta={[tracker.name, project.name, ago(task.updated)]} onPress={() => open(task)} isCurrent={open === task.key} />`,
			accessibility: `The title is the card’s button or link and its hit area covers the card; actions sit above it and stay separately reachable. isCurrent sets aria-current with an accent rule. isPending sets aria-busy and shows a spinner with pendingLabel, and the card cannot be opened twice. Long titles stop at two lines with the full title in the tooltip and for screen readers.`,
			pl: {
				description: `Zadanie z dowolnego połączonego trackera, jak na liście zadań Agenta. Wybierz ją dla list, w których jedno zadanie otwiera się obok listy, i umieść przycisk startu w actions.`,
				accessibility: `Tytuł jest przyciskiem albo linkiem karty, a jego pole trafienia pokrywa kartę; akcje leżą nad nim i pozostają osiągalne osobno. isCurrent ustawia aria-current z linią w kolorze akcentu. isPending ustawia aria-busy i pokazuje wskaźnik z pendingLabel, a karty nie można otworzyć dwa razy. Długie tytuły kończą się po dwóch liniach, z pełnym tytułem w dymku podpowiedzi i dla czytników ekranu.`
			},
			render: () => (0, M.jsx)(Le, {})
		}
	]
};
export { je as t };
