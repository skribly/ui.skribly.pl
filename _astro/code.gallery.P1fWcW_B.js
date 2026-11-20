import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { _ as n, d as r, f as i, g as a, y as o } from "./useOverflow.Dq483xd0.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
import { t as c } from "./Button.reJVLFTj.js";
import { t as l } from "./IconButton.BlECy7MW.js";
import { t as u } from "./List.BGugEX2g.js";
import { t as d } from "./TreeView.CcmilX-O.js";
import { t as f } from "./Group.C0q10xim.js";
import { r as p } from "./useTextField.BpC71hWm.js";
import { t as m } from "./TextField.zLlx597q.js";
import { t as h } from "./Spinner.C8vzy198.js";
import { t as g } from "./Segmented.Dipfd2Xh.js";
import { t as _ } from "./Textarea.BP4ZE8iW.js";
import { t as v } from "./StatusBarItem.C7SjrGzy.js";
import { r as y } from "./GridList.CVxLYl-l.js";
import { t as b } from "./Link.B8StT9b2.js";
import { t as x } from "./Badge.BtjCZkbj.js";
import { n as S, t as C } from "./Tree.Cu_mgKtP.js";
import { t as w } from "./Highlight.D7QrMJCP.js";
var T = t(s(), 1), E = a(), D = (0, E.jsx)(r, {
	name: `arrow.left`,
	"aria-hidden": !0,
	className: `rtl:-scale-x-100`
}), O = (0, E.jsx)(r, {
	name: `arrow.right`,
	"aria-hidden": !0,
	className: `rtl:-scale-x-100`
}), ee = (0, E.jsx)(r, {
	name: `action.retry`,
	"aria-hidden": !0
}), k = (0, E.jsx)(r, {
	name: `action.close`,
	"aria-hidden": !0
});
function A({ label: e, addressLabel: t, address: r, defaultAddress: i, onAddressChange: a, onNavigate: o, backLabel: s, forwardLabel: c, reloadLabel: u, onBack: d, onForward: _, onReload: v, canGoBack: y = !0, canGoForward: b = !0, isLoading: x = !1, loadingLabel: S, stopLabel: C, onStop: w, devices: A, device: j, onDeviceChange: M, deviceLabel: N, actions: P, container: F, className: I, ...te }) {
	let [L, R] = (0, T.useState)(i ?? ``), z = r ?? L, B = (0, T.useCallback)((e) => {
		R(e), a?.(e);
	}, [a]), V = (0, T.useCallback)((e) => {
		e.preventDefault(), o(z.trim());
	}, [o, z]), H = (0, T.useCallback)((e) => e.target.select(), []), U = (0, T.useMemo)(() => (A ?? []).map((e) => ({
		value: e.id,
		icon: e.icon,
		label: e.icon ? (0, E.jsx)(`span`, {
			className: `sr-only @3xl:not-sr-only`,
			children: e.label
		}) : e.label,
		ariaLabel: e.label
	})), [A]), W = (0, T.useCallback)(() => void 0, []), G = F === void 0 ? {} : { container: F }, ne = x && w && C;
	return (0, E.jsxs)(f, {
		...te,
		"aria-label": e,
		className: n(`@container flex min-w-0 flex-wrap items-center gap-1.5 border-b border-border bg-bar px-2.5 py-2`, I),
		children: [
			(0, E.jsxs)(`span`, {
				className: `flex shrink-0 items-center gap-0.5`,
				children: [
					(0, E.jsx)(l, {
						...G,
						label: s,
						size: `sm`,
						onPress: d ?? W,
						isDisabled: !d || !y,
						children: D
					}),
					(0, E.jsx)(l, {
						...G,
						label: c,
						size: `sm`,
						onPress: _ ?? W,
						isDisabled: !_ || !b,
						children: O
					}),
					ne ? (0, E.jsx)(l, {
						...G,
						label: C,
						size: `sm`,
						onPress: w,
						children: k
					}) : (0, E.jsx)(l, {
						...G,
						label: u,
						size: `sm`,
						onPress: v ?? W,
						isDisabled: !v,
						children: ee
					})
				]
			}),
			(0, E.jsx)(`form`, {
				onSubmit: V,
				className: `flex min-w-0 flex-1 basis-60`,
				children: (0, E.jsxs)(m, {
					"aria-label": t,
					value: z,
					onChange: B,
					className: `relative flex min-w-0 flex-1 items-center`,
					children: [(0, E.jsx)(p, {
						type: `text`,
						inputMode: `url`,
						autoCapitalize: `off`,
						autoCorrect: `off`,
						spellCheck: !1,
						onFocus: H,
						className: n(`h-control-sm w-full min-w-0 rounded-md border border-border-strong bg-input px-2.5 font-mono text-base text-fg transition-colors placeholder:text-muted sm:text-caption data-hovered:border-muted`, `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focused:border-accent`, x && S && `pe-8`)
					}), x && S ? (0, E.jsx)(h, {
						label: S,
						size: `sm`,
						className: `absolute end-2`
					}) : null]
				})
			}),
			U.length > 0 && j !== void 0 && M && N ? (0, E.jsx)(g, {
				label: N,
				options: U,
				value: j,
				onChange: M,
				size: `sm`
			}) : null,
			P ? (0, E.jsx)(`span`, {
				className: `flex max-w-full min-w-0 flex-wrap items-center gap-0.5`,
				children: P
			}) : null
		]
	});
}
function j({ label: e, messageLabel: t, hideMessageLabel: i = !1, placeholder: a, messageHint: o, value: s, defaultValue: l, onChange: u, errorMessage: d, onCommit: p, commitLabel: m, isCommitting: h = !1, committingLabel: g, isCommitDisabled: v = !1, branch: y, onBranchPress: b, branchLabel: x, ahead: S = 0, behind: C = 0, onPush: w, onPull: D, pushLabel: O, pullLabel: ee, syncing: k = null, syncingLabel: A, tools: j, notice: M, footer: N, container: F, className: I, ...te }) {
	let [L, R] = (0, T.useState)(l ?? ``), z = s ?? L, B = z.trim() === ``, V = B || v || h, H = (0, T.useCallback)((e) => {
		R(e), u?.(e);
	}, [u]), U = (0, T.useCallback)(() => {
		V || p(z);
	}, [
		V,
		p,
		z
	]), W = (0, T.useCallback)((e) => {
		e.key === `Enter` && (e.metaKey || e.ctrlKey) ? (e.preventDefault(), U()) : e.continuePropagation();
	}, [U]), G = (0, T.useMemo)(() => i ? (0, E.jsx)(`span`, {
		className: `sr-only`,
		children: t
	}) : t, [i, t]), ne = !!(y || w || D), re = k !== null;
	return (0, E.jsxs)(f, {
		...te,
		"aria-label": e,
		className: n(`flex min-w-0 flex-col gap-2 p-2.5`, I),
		children: [
			ne ? (0, E.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-center gap-1.5`,
				children: [
					y ? b ? (0, E.jsxs)(c, {
						variant: `outline`,
						size: `sm`,
						onPress: b,
						...x ? { "aria-label": `${x} ${y}` } : {},
						className: `min-w-0 flex-1 basis-32 justify-start`,
						children: [(0, E.jsx)(r, {
							name: `vcs.branch`,
							"aria-hidden": !0,
							focusable: `false`
						}), (0, E.jsx)(`span`, {
							className: `min-w-0 truncate font-mono`,
							children: y
						})]
					}) : (0, E.jsxs)(`span`, {
						className: `inline-flex min-h-control-sm min-w-0 flex-1 basis-32 items-center gap-2 px-1 text-caption`,
						children: [
							(0, E.jsx)(r, {
								name: `vcs.branch`,
								"aria-hidden": !0,
								focusable: `false`,
								className: `size-3.5 shrink-0 text-muted`
							}),
							x ? (0, E.jsx)(`span`, {
								className: `sr-only`,
								children: `${x} `
							}) : null,
							(0, E.jsx)(`span`, {
								className: `min-w-0 truncate font-mono`,
								children: y
							})
						]
					}) : null,
					D && ee ? (0, E.jsx)(P, {
						direction: `pull`,
						count: C,
						label: ee,
						onPress: D,
						isPending: k === `pull`,
						isDisabled: re && k !== `pull`,
						pendingLabel: A,
						container: F
					}) : null,
					w && O ? (0, E.jsx)(P, {
						direction: `push`,
						count: S,
						label: O,
						onPress: w,
						isPending: k === `push`,
						isDisabled: re && k !== `push`,
						pendingLabel: A,
						container: F
					}) : null
				]
			}) : null,
			M,
			(0, E.jsx)(_, {
				label: G,
				rows: 3,
				monospace: !0,
				value: z,
				onChange: H,
				onKeyDown: W,
				isInvalid: !!d,
				errorMessage: d,
				description: o,
				...a === void 0 ? {} : { placeholder: a },
				className: `[&_textarea]:max-h-[50vh] [&_textarea]:min-h-18`
			}),
			(0, E.jsxs)(`div`, {
				className: `flex min-w-0 flex-wrap items-center gap-1.5`,
				children: [j, (0, E.jsx)(c, {
					size: `sm`,
					className: `ms-auto`,
					onPress: U,
					isDisabled: B || v,
					isPending: h,
					...g === void 0 ? {} : { pendingLabel: g },
					children: m
				})]
			}),
			N
		]
	});
}
var M = (0, E.jsx)(r, {
	name: `arrow.down-to-line`,
	"aria-hidden": !0,
	focusable: `false`
}), N = (0, E.jsx)(r, {
	name: `arrow.up-from-line`,
	"aria-hidden": !0,
	focusable: `false`
});
function P({ direction: e, count: t, label: n, onPress: r, isPending: i, isDisabled: a, pendingLabel: o, container: s }) {
	let u = o === void 0 ? {} : { pendingLabel: o }, d = s === void 0 ? {} : { container: s };
	return t > 0 ? (0, E.jsxs)(c, {
		variant: `outline`,
		size: `sm`,
		"aria-label": `${n} ${t}`,
		onPress: r,
		isPending: i,
		isDisabled: a,
		...u,
		children: [i ? null : e === `pull` ? M : N, (0, E.jsx)(`span`, {
			className: `tabular-nums`,
			children: t
		})]
	}) : (0, E.jsx)(l, {
		label: n,
		variant: `outline`,
		size: `sm`,
		onPress: r,
		isPending: i,
		isDisabled: a,
		...u,
		...d,
		children: i ? null : e === `pull` ? M : N
	});
}
function F({ label: e, width: t = `full`, caption: i, children: a, isLoading: o = !1, loadingLabel: s, error: c, errorLabel: l, className: u, ...d }) {
	let f = (0, T.useMemo)(() => ({ width: t === `full` ? `100%` : `${t / 16}rem` }), [t]), p = c != null && c !== !1;
	return (0, E.jsxs)(`section`, {
		...d,
		"aria-label": e,
		className: n(`flex size-full min-h-0 min-w-0 flex-col items-center gap-2 bg-sunken p-2 sm:p-4`, u),
		children: [i ? (0, E.jsx)(`p`, {
			className: `text-caption text-muted tabular-nums`,
			children: i
		}) : null, (0, E.jsxs)(`div`, {
			style: f,
			"aria-busy": o || void 0,
			className: `relative min-h-0 max-w-full flex-1 overflow-hidden rounded-lg border border-border bg-surface shadow-md transition-[width] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none [&>iframe]:block [&>iframe]:size-full [&>iframe]:border-0`,
			children: [p ? (0, E.jsxs)(`div`, {
				role: `alert`,
				className: `flex size-full flex-col items-center justify-center gap-2 p-6 text-center text-body text-fg`,
				children: [
					(0, E.jsx)(r, {
						name: `status.danger`,
						"aria-hidden": !0,
						className: `size-6 text-danger`
					}),
					l ? (0, E.jsx)(`span`, {
						className: `font-semibold text-danger`,
						children: l
					}) : null,
					(0, E.jsx)(`span`, {
						className: `max-w-prose [overflow-wrap:anywhere]`,
						children: c
					})
				]
			}) : a, o && s && !p ? (0, E.jsx)(`div`, {
				className: `absolute inset-0 grid place-items-center bg-surface/70`,
				children: (0, E.jsx)(h, {
					label: s,
					showLabel: !0,
					size: `lg`,
					className: `rounded-md bg-surface px-3 py-2 shadow-sm`
				})
			}) : null]
		})]
	});
}
var I = (0, E.jsx)(r, { name: `status.current` });
function te({ label: e, position: t, onPositionPress: r, positionTip: i, selection: a, isDirty: o = !1, unsavedLabel: s, facts: c, container: l, className: u, ...d }) {
	let p = l === void 0 ? {} : { container: l };
	return (0, E.jsxs)(f, {
		...d,
		"aria-label": e,
		className: n(`flex min-h-6 min-w-0 shrink-0 flex-wrap items-center gap-x-3 gap-y-0.5 border-t border-border bg-bar px-3 py-0.5 text-caption text-muted`, u),
		children: [
			t ? (0, E.jsxs)(v, {
				...p,
				...r ? { onPress: r } : {},
				...i === void 0 ? {} : { tip: i },
				className: `tabular-nums`,
				children: [t, a ? (0, E.jsx)(`span`, {
					className: `ms-1`,
					children: `(${a})`
				}) : null]
			}) : null,
			(0, E.jsx)(`span`, { className: `flex-1` }),
			(0, E.jsx)(`span`, {
				"aria-live": `polite`,
				className: `sr-only`,
				children: o && s ? s : ``
			}),
			o && s ? (0, E.jsx)(`span`, {
				"aria-hidden": !0,
				className: `inline-flex`,
				children: (0, E.jsx)(v, {
					tone: `warn`,
					icon: I,
					children: s
				})
			}) : null,
			c?.map((e) => (0, E.jsx)(v, {
				...p,
				...e.onPress ? { onPress: e.onPress } : {},
				...e.tip === void 0 ? {} : { tip: e.tip },
				children: e.label
			}, e.id))
		]
	});
}
var L = `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focus-visible:outline-[Highlight]`, R = `data-selected:bg-selected data-selected:shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`, z = n(`group/row flex min-w-0 cursor-default items-center gap-2 rounded-md px-2 text-body text-fg transition-colors duration-(--sk-duration-fast) motion-reduce:transition-none`, `data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, `data-disabled:cursor-not-allowed data-disabled:opacity-50`, L, R);
function B(e) {
	let t = e.replace(/\/+$/, ``), n = t.lastIndexOf(`/`);
	return n < 0 ? {
		name: t,
		folder: ``
	} : {
		name: t.slice(n + 1),
		folder: t.slice(0, n)
	};
}
var V = {
	added: `A`,
	modified: `M`,
	deleted: `D`,
	renamed: `R`,
	untracked: `U`,
	conflict: `!`
}, H = {
	added: `text-ok`,
	untracked: `text-ok`,
	modified: `text-warn`,
	renamed: `text-warn`,
	deleted: `text-danger`,
	conflict: `text-danger`
};
function U({ path: e, kind: t, kindLabel: r, description: i, meta: a, actions: o, actionsVisibility: s = `hover`, className: c, ...l }) {
	let { name: u, folder: d } = B(e);
	return (0, E.jsxs)(y, {
		...l,
		textValue: e,
		"data-kind": t,
		className: n(z, `min-h-control-sm py-0.5`, c),
		children: [
			(0, E.jsx)(`span`, {
				"aria-hidden": !0,
				className: n(`inline-grid w-4 shrink-0 place-items-center font-mono text-caption font-bold forced-colors:text-[CanvasText]`, H[t], t === `deleted` && `line-through`),
				children: V[t]
			}),
			(0, E.jsx)(`span`, {
				className: `sr-only`,
				children: `${r}, `
			}),
			(0, E.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col`,
				children: [(0, E.jsxs)(`span`, {
					className: `flex min-w-0 items-baseline gap-1.5`,
					children: [(0, E.jsx)(`span`, {
						className: n(`min-w-0 shrink truncate`, t === `deleted` && `line-through decoration-muted`),
						children: u
					}), d ? (0, E.jsx)(`span`, {
						className: `min-w-0 shrink-[100] truncate text-caption text-muted`,
						children: d
					}) : null]
				}), i ? (0, E.jsx)(`span`, {
					className: `text-caption text-muted [overflow-wrap:anywhere]`,
					children: i
				}) : null]
			}),
			a ? (0, E.jsx)(`span`, {
				className: `flex shrink-0 items-center gap-1.5 text-caption text-muted tabular-nums`,
				children: a
			}) : null,
			o ? (0, E.jsx)(`span`, {
				className: n(`flex shrink-0 items-center gap-0.5`, s === `hover` && `opacity-0 transition-opacity duration-(--sk-duration-fast) motion-reduce:transition-none group-hover/row:opacity-100 group-focus-within/row:opacity-100 group-data-focused/row:opacity-100 group-data-selected/row:opacity-100 pointer-coarse:opacity-100 forced-colors:opacity-100`),
				children: o
			}) : null
		]
	});
}
var W = i(`status.current`), G = i(`vcs.branch`), ne = i(`sync.cloud`), re = i(`vcs.tag`), ie = {
	head: `bg-accent text-accent-fg`,
	branch: `bg-accent-soft text-accent-text`,
	remote: `bg-info-soft text-info`,
	tag: `bg-ok-soft text-ok`
}, ae = {
	head: W,
	branch: G,
	remote: ne,
	tag: re
};
function oe(e) {
	let t = e.trim();
	return t.startsWith(`HEAD -> `) ? {
		kind: `head`,
		name: t.slice(8)
	} : t === `HEAD` ? {
		kind: `head`,
		name: t
	} : t.startsWith(`tag: `) ? {
		kind: `tag`,
		name: t.slice(5)
	} : t.includes(`/`) ? {
		kind: `remote`,
		name: t
	} : {
		kind: `branch`,
		name: t
	};
}
function K({ kind: e, kindLabel: t, className: r, children: i, ...a }) {
	let o = ae[e];
	return (0, E.jsxs)(`span`, {
		...a,
		"data-kind": e,
		className: n(`inline-flex max-w-full min-w-0 shrink-0 items-center gap-1 rounded-sm border border-transparent px-1.5 py-px align-middle font-mono text-label font-semibold whitespace-nowrap forced-colors:border-[CanvasText]`, ie[e], r),
		children: [
			(0, E.jsx)(o, {
				"aria-hidden": !0,
				focusable: `false`,
				className: `size-3 shrink-0`,
				strokeWidth: 2.5
			}),
			t ? (0, E.jsx)(`span`, {
				className: `sr-only`,
				children: `${t} `
			}) : null,
			(0, E.jsx)(`span`, {
				className: `min-w-0 truncate`,
				children: i
			})
		]
	});
}
function se(e) {
	let t = [], n = [], r = 1;
	for (let i of e) {
		let e = [...t], a = t.indexOf(i.hash);
		a < 0 && (a = t.indexOf(null), a < 0 && (a = t.push(null) - 1));
		let o = e.flatMap((e, t) => e === i.hash ? [t] : []);
		for (let e of o) t[e] = null;
		let s = [];
		i.parents.forEach((e, n) => {
			let r = t.indexOf(e);
			r < 0 && (n === 0 ? r = a : (r = t.indexOf(null), (r < 0 || r === a) && (r = t.push(null) - 1)), t[r] = e), s.push(r);
		});
		let c = e.flatMap((e, t) => e !== null && e !== i.hash ? [t] : []);
		for (; t.length > 0 && t.at(-1) === null;) t.pop();
		r = Math.max(r, t.length, a + 1, ...s.map((e) => e + 1)), n.push({
			commit: i,
			lane: a,
			through: c,
			incoming: o,
			outgoing: s
		});
	}
	return {
		rows: n,
		width: r
	};
}
var q = 14, J = 28, Y = [
	`stroke-accent`,
	`stroke-info`,
	`stroke-ok`,
	`stroke-warn`,
	`stroke-tool-agent`,
	`stroke-tool-tracker`,
	`stroke-tool-skills`,
	`stroke-danger`
], ce = [
	`border-accent bg-accent`,
	`border-info bg-info`,
	`border-ok bg-ok`,
	`border-warn bg-warn`,
	`border-tool-agent bg-tool-agent`,
	`border-tool-tracker bg-tool-tracker`,
	`border-tool-skills bg-tool-skills`,
	`border-danger bg-danger`
], X = (e, t) => e[t % e.length] ?? ``;
function le({ row: e, lanes: t }) {
	let r = t.at, i = J / 2, a = r(e.lane), o = t.count * q, s = (0, T.useMemo)(() => ({ width: `${o / 16}rem` }), [o]), c = (0, T.useMemo)(() => ({ insetInlineStart: `${(a - 5) / 16}rem` }), [a]), l = e.commit.parents.length > 1;
	return (0, E.jsxs)(`span`, {
		"aria-hidden": !0,
		className: `relative shrink-0 self-stretch`,
		style: s,
		children: [(0, E.jsxs)(`svg`, {
			"data-sk-drawn": `chart`,
			viewBox: `0 0 ${o} ${J}`,
			preserveAspectRatio: `none`,
			focusable: `false`,
			className: `absolute inset-0 size-full overflow-visible fill-none forced-colors:[&_*]:stroke-[CanvasText] rtl:-scale-x-100`,
			children: [
				e.through.map((e) => (0, E.jsx)(`line`, {
					x1: r(e),
					y1: 0,
					x2: r(e),
					y2: J,
					strokeWidth: 2,
					vectorEffect: `non-scaling-stroke`,
					className: X(Y, e)
				}, `t${e}`)),
				e.incoming.map((e) => (0, E.jsx)(`path`, {
					d: `M${r(e)} 0 C ${r(e)} ${i}, ${a} ${J / 4}, ${a} ${i}`,
					strokeWidth: 2,
					vectorEffect: `non-scaling-stroke`,
					className: X(Y, e)
				}, `i${e}`)),
				e.outgoing.map((e) => (0, E.jsx)(`path`, {
					d: `M${a} ${i} C ${a} 21, ${r(e)} ${i}, ${r(e)} ${J}`,
					strokeWidth: 2,
					vectorEffect: `non-scaling-stroke`,
					className: X(Y, e)
				}, `o${e}`))
			]
		}), (0, E.jsx)(`span`, {
			style: c,
			className: n(`absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 forced-colors:border-[CanvasText] forced-colors:forced-color-adjust-none`, X(ce, e.lane), l ? `bg-surface! forced-colors:bg-[Canvas]!` : `forced-colors:bg-[CanvasText]`)
		})]
	});
}
function ue({ row: e, lanes: t, mergeLabel: r, refKindLabels: i, hashLength: a }) {
	let { commit: o } = e, s = o.parents.length > 1;
	return (0, E.jsxs)(y, {
		id: o.hash,
		textValue: o.subject,
		className: n(z, `min-h-8 items-stretch gap-2 py-0 ps-1`),
		children: [(0, E.jsx)(le, {
			row: e,
			lanes: t
		}), (0, E.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-0.5 py-1`,
			children: [
				o.refs?.map((e) => {
					let t = oe(e), n = i?.[t.kind];
					return (0, E.jsx)(K, {
						kind: t.kind,
						...n ? { kindLabel: n } : {},
						className: `max-w-40`,
						children: t.name
					}, e);
				}),
				(0, E.jsxs)(`span`, {
					className: `min-w-0 flex-1 basis-40 truncate`,
					children: [o.subject, s && r ? (0, E.jsx)(`span`, {
						className: `sr-only`,
						children: `, ${r}`
					}) : null]
				}),
				o.author || o.date ? (0, E.jsxs)(`span`, {
					className: `flex min-w-0 shrink-0 items-center gap-1 text-caption text-muted`,
					children: [
						o.author ? (0, E.jsx)(`span`, {
							className: `max-w-32 truncate`,
							children: o.author
						}) : null,
						o.author && o.date ? (0, E.jsx)(`span`, {
							"aria-hidden": !0,
							children: `·`
						}) : null,
						o.date ? (0, E.jsx)(`span`, {
							className: `whitespace-nowrap`,
							children: o.date
						}) : null
					]
				}) : null,
				(0, E.jsx)(`code`, {
					className: `shrink-0 font-mono text-caption text-muted tabular-nums`,
					children: o.hash.slice(0, a)
				})
			]
		})]
	});
}
function Z({ commits: e, label: t, selectedHash: r, onSelect: i, mergeLabel: a, refKindLabels: o, hashLength: s = 7, maxLanes: c = 8, emptyState: l, isLoading: d, loadingLabel: f, error: p, className: m }) {
	let { rows: h, width: g } = (0, T.useMemo)(() => se(e), [e]), _ = (0, T.useMemo)(() => {
		let e = Math.max(1, Math.min(g, c));
		return {
			count: e,
			at: (t) => Math.min(t, e - 1) * q + q / 2
		};
	}, [g, c]), v = (0, T.useMemo)(() => h.map((e) => ({
		id: e.commit.hash,
		row: e
	})), [h]), y = (0, T.useMemo)(() => r ? [r] : [], [r]), b = (0, T.useMemo)(() => new Map(e.map((e) => [e.hash, e])), [e]), x = (0, T.useCallback)((e) => {
		if (e === `all`) return;
		let [t] = [...e], n = t === void 0 ? void 0 : b.get(String(t));
		n && i?.(n);
	}, [b, i]), S = (0, T.useMemo)(() => [
		_,
		a,
		o,
		s
	], [
		_,
		a,
		o,
		s
	]), C = (0, T.useCallback)((e) => (0, E.jsx)(ue, {
		row: e.row,
		lanes: _,
		mergeLabel: a,
		refKindLabels: o,
		hashLength: s
	}), [
		_,
		a,
		o,
		s
	]);
	return (0, E.jsx)(u, {
		"aria-label": t,
		items: v,
		dependencies: S,
		selectionMode: i ? `single` : `none`,
		selectionBehavior: `replace`,
		selectedKeys: y,
		onSelectionChange: x,
		emptyState: l,
		isLoading: d,
		loadingLabel: f,
		error: p,
		className: n(`gap-0! p-1`, m),
		children: C
	});
}
var de = i(`vcs.pull-request-none`), fe = i(`vcs.pull-request-draft`), pe = i(`vcs.pull-request`), me = i(`vcs.merged`), he = i(`vcs.pull-request-closed`), ge = {
	none: {
		icon: de,
		text: `text-muted`,
		tone: `neutral`
	},
	draft: {
		icon: fe,
		text: `text-muted`,
		tone: `neutral`
	},
	open: {
		icon: pe,
		text: `text-ok`,
		tone: `ok`
	},
	merged: {
		icon: me,
		text: `text-accent-text`,
		tone: `accent`
	},
	closed: {
		icon: he,
		text: `text-danger`,
		tone: `danger`
	}
};
function Q({ state: e, stateLabel: t, title: r, description: i, number: a, href: o, openInNewTab: s = !1, action: c, isBusy: l = !1, className: u, ...d }) {
	let f = ge[e], p = f.icon, m = (0, E.jsxs)(E.Fragment, { children: [a ? (0, E.jsx)(`span`, {
		className: `font-mono text-muted tabular-nums`,
		children: a
	}) : null, a ? typeof r == `string` ? ` ${r}` : (0, E.jsxs)(E.Fragment, { children: [` `, r] }) : r] });
	return (0, E.jsxs)(`div`, {
		...d,
		"aria-busy": l || void 0,
		"data-state": e,
		className: n(`@container flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 rounded-md border border-border bg-surface px-2.5 py-2 text-body`, u),
		children: [
			(0, E.jsx)(p, {
				"aria-hidden": !0,
				focusable: `false`,
				className: n(`size-4 shrink-0 forced-colors:text-[CanvasText]`, f.text)
			}),
			(0, E.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 basis-48 flex-col gap-0.5`,
				children: [(0, E.jsxs)(`span`, {
					className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5`,
					children: [(0, E.jsx)(x, {
						tone: f.tone,
						size: `sm`,
						children: t
					}), o ? (0, E.jsx)(b, {
						href: o,
						...s ? {
							target: `_blank`,
							rel: `noreferrer`
						} : {},
						className: `min-w-0 font-medium text-accent-text underline-offset-2 [overflow-wrap:anywhere] data-hovered:underline data-focus-visible:rounded-xs data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`,
						children: m
					}) : (0, E.jsx)(`span`, {
						className: `min-w-0 font-medium text-fg [overflow-wrap:anywhere]`,
						children: m
					})]
				}), i ? (0, E.jsx)(`span`, {
					className: `text-caption text-muted [overflow-wrap:anywhere]`,
					children: i
				}) : null]
			}),
			c ? (0, E.jsx)(`span`, {
				className: `ms-auto flex max-w-full min-w-0 flex-wrap items-center gap-1.5`,
				children: c
			}) : null
		]
	});
}
function _e({ text: e, onPick: t }) {
	let n = (0, T.useCallback)(() => t(e), [t, e]);
	return (0, E.jsx)(`li`, {
		className: `min-w-0`,
		children: (0, E.jsx)(c, {
			variant: `outline`,
			size: `sm`,
			onPress: n,
			className: `h-auto w-full justify-start py-1 text-start font-normal whitespace-normal [overflow-wrap:anywhere]`,
			children: e
		})
	});
}
function ve({ title: e, reasons: t, alternativesLabel: r, alternatives: i, onPickAlternative: a, className: o, ...s }) {
	let c = (0, T.useId)(), l = (0, T.useId)(), u = (0, T.useCallback)(() => void 0, []);
	return t.length === 0 && !i?.length ? null : (0, E.jsxs)(f, {
		...s,
		...e ? { "aria-labelledby": c } : {},
		className: n(`flex min-w-0 flex-col gap-1.5 text-caption text-muted`, o),
		children: [
			e ? (0, E.jsx)(`p`, {
				id: c,
				className: `font-medium text-fg [overflow-wrap:anywhere]`,
				children: e
			}) : null,
			t.length > 0 ? (0, E.jsx)(`ul`, {
				className: `flex list-disc flex-col gap-0.5 ps-4 marker:text-muted`,
				children: t.map((e) => typeof e == `string` ? (0, E.jsx)(`li`, {
					className: `[overflow-wrap:anywhere]`,
					children: e
				}, e) : (0, E.jsx)(`li`, {
					className: `[overflow-wrap:anywhere]`,
					children: e.content
				}, e.id))
			}) : null,
			i?.length ? (0, E.jsxs)(`div`, {
				className: `mt-1 flex min-w-0 flex-col gap-1`,
				children: [r ? (0, E.jsx)(`p`, {
					id: l,
					className: `font-medium text-fg`,
					children: r
				}) : null, (0, E.jsx)(`ul`, {
					...r ? { "aria-labelledby": l } : {},
					className: `flex min-w-0 flex-col gap-1`,
					children: i.map((e) => (0, E.jsx)(_e, {
						text: e,
						onPick: a ?? u
					}, e))
				})]
			}) : null
		]
	});
}
var ye = (0, E.jsx)(r, { name: `file.document` });
function be({ path: e, count: t, countLabel: i, icon: a = ye, actions: s, children: c, className: l, ...u }) {
	let { name: d, folder: f } = B(e);
	return (0, E.jsxs)(S, {
		...u,
		textValue: e,
		className: n(`group/row cursor-default rounded-md text-body text-fg transition-colors duration-(--sk-duration-fast) motion-reduce:transition-none data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover`, L, R, l),
		children: [(0, E.jsx)(C, { children: ({ hasChildItems: e, isExpanded: c }) => (0, E.jsxs)(`div`, {
			className: `flex min-h-control-sm min-w-0 items-center gap-1 py-0.5 ps-[calc(min(var(--tree-item-level,1)_-_1,8)*1.25rem)] pe-1.5`,
			children: [
				e ? (0, E.jsx)(o, {
					slot: `chevron`,
					className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted outline-hidden data-hovered:bg-hover data-hovered:text-fg`,
					children: (0, E.jsx)(r, {
						name: `chevron.right`,
						"aria-hidden": !0,
						className: n(`size-4 transition-transform duration-(--sk-duration-fast) motion-reduce:transition-none rtl:-scale-x-100`, c && `rotate-90`)
					})
				}) : (0, E.jsx)(`span`, {
					"aria-hidden": !0,
					className: `size-6 shrink-0`
				}),
				(0, E.jsx)(`span`, {
					"aria-hidden": !0,
					className: `flex size-5 shrink-0 items-center justify-center text-muted [&_svg]:size-4`,
					children: a
				}),
				(0, E.jsxs)(`span`, {
					className: `flex min-w-0 flex-1 items-baseline gap-1.5`,
					children: [(0, E.jsx)(`span`, {
						className: `min-w-0 shrink truncate font-medium`,
						children: d
					}), f ? (0, E.jsx)(`span`, {
						className: `min-w-0 shrink-[100] truncate text-caption text-muted`,
						children: f
					}) : null]
				}),
				(0, E.jsxs)(`span`, {
					className: `inline-flex min-h-4 shrink-0 items-center rounded-full border border-transparent bg-sunken px-1.5 text-label font-medium text-fg tabular-nums`,
					children: [(0, E.jsx)(`span`, {
						"aria-hidden": i ? !0 : void 0,
						children: t
					}), i ? (0, E.jsx)(`span`, {
						className: `sr-only`,
						children: i
					}) : null]
				}),
				s ? (0, E.jsx)(`span`, {
					className: `flex shrink-0 items-center gap-0.5`,
					children: s
				}) : null
			]
		}) }), c]
	});
}
function xe({ line: e, lineLabel: t, text: r, matchStart: i, matchLength: a, lead: o = 40, className: s, ...c }) {
	let l = (0, T.useMemo)(() => {
		let e = Math.max(0, Math.min(i, r.length)), t = r.slice(0, e).replace(/^\s+/, ``), n = t.length > o ? `…${t.slice(-o)}` : t, s = n + r.slice(e), c = n.length;
		return {
			shown: s,
			positions: Array.from({ length: Math.max(0, Math.min(a, r.length - e)) }, (e, t) => c + t)
		};
	}, [
		r,
		i,
		a,
		o
	]);
	return (0, E.jsx)(S, {
		...c,
		textValue: `${e} ${r.trim()}`,
		className: n(`cursor-default rounded-md text-body text-fg transition-colors duration-(--sk-duration-fast) motion-reduce:transition-none data-hovered:not-data-selected:bg-hover data-pressed:not-data-selected:bg-hover data-[href]:cursor-pointer`, L, R, s),
		children: (0, E.jsx)(C, { children: (0, E.jsxs)(`div`, {
			className: `flex min-h-control-sm min-w-0 items-baseline gap-2 py-0.5 ps-[calc(min(var(--tree-item-level,1)_-_1,8)*1.25rem+1.75rem)] pe-1.5`,
			children: [(0, E.jsxs)(`span`, {
				className: `min-w-8 shrink-0 text-end font-mono text-caption text-muted tabular-nums`,
				children: [t ? (0, E.jsx)(`span`, {
					className: `sr-only`,
					children: `${t} `
				}) : null, e]
			}), (0, E.jsx)(w, {
				text: l.shown,
				positions: l.positions,
				className: `min-w-0 flex-1 truncate font-mono text-caption`
			})]
		}) })
	});
}
var Se = e({ default: () => Be }), Ce = {
	role: `group`,
	"aria-label": `Sample file`,
	tabIndex: 0
}, we = {
	added: `Added`,
	modified: `Modified`,
	deleted: `Deleted`,
	renamed: `Renamed`,
	untracked: `Untracked`,
	conflict: `Conflict`
}, Te = [
	{
		path: `src/search/QuickOpen.tsx`,
		kind: `modified`,
		staged: !0
	},
	{
		path: `src/search/fuzzy.ts`,
		kind: `added`,
		staged: !0
	},
	{
		path: `docs/notes.md`,
		kind: `deleted`,
		staged: !1
	},
	{
		path: `src/code/rows.tsx`,
		kind: `renamed`,
		staged: !1,
		description: `Renamed from src/code/internal.tsx`
	},
	{
		path: `packages/desktop/src/renderer/views/a-really-long-folder-name/SettingsAccountsConnections.tsx`,
		kind: `conflict`,
		staged: !1
	},
	{
		path: `scratch.txt`,
		kind: `untracked`,
		staged: !1
	}
];
function Ee({ title: e, changes: t, onToggle: n, onDiscard: i }) {
	return t.length === 0 ? null : (0, E.jsxs)(`section`, {
		className: `flex flex-col gap-1`,
		children: [(0, E.jsx)(`h4`, {
			className: `px-2 text-caption font-semibold tracking-wide text-muted uppercase`,
			children: `${e} (${t.length})`
		}), (0, E.jsx)(u, {
			"aria-label": e,
			items: t.map((e) => ({
				id: e.path,
				...e
			})),
			bordered: !1,
			children: (e) => (0, E.jsx)(U, {
				id: e.path,
				path: e.path,
				kind: e.kind,
				kindLabel: we[e.kind],
				...e.description ? { description: e.description } : {},
				actions: (0, E.jsxs)(E.Fragment, { children: [!e.staged && e.kind !== `conflict` ? (0, E.jsx)(l, {
					label: `Discard changes in ${e.path}`,
					size: `sm`,
					onPress: () => i(e.path),
					children: (0, E.jsx)(r, {
						name: `action.undo`,
						"aria-hidden": !0
					})
				}) : null, (0, E.jsx)(l, {
					label: e.staged ? `Unstage ${e.path}` : `Stage ${e.path}`,
					size: `sm`,
					onPress: () => n(e.path),
					children: e.staged ? (0, E.jsx)(r, {
						name: `action.remove`,
						"aria-hidden": !0
					}) : (0, E.jsx)(r, {
						name: `action.add`,
						"aria-hidden": !0
					})
				})] })
			})
		})]
	});
}
function De() {
	let [e, t] = (0, T.useState)(Te), n = (e) => t((t) => t.map((t) => t.path === e ? {
		...t,
		staged: !t.staged
	} : t)), r = (e) => t((t) => t.filter((t) => t.path !== e));
	return (0, E.jsxs)(`div`, {
		className: `flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface py-2`,
		children: [
			(0, E.jsx)(Ee, {
				title: `Staged`,
				changes: e.filter((e) => e.staged),
				onToggle: n,
				onDiscard: r
			}),
			(0, E.jsx)(Ee, {
				title: `Changes`,
				changes: e.filter((e) => !e.staged),
				onToggle: n,
				onDiscard: r
			}),
			e.length === 0 ? (0, E.jsx)(`p`, {
				className: `px-4 text-caption text-muted`,
				children: `The working tree is clean.`
			}) : null,
			(0, E.jsx)(c, {
				variant: `ghost`,
				size: `sm`,
				className: `mx-2 self-start`,
				onPress: () => t(Te),
				children: `Reset the demo`
			})
		]
	});
}
var Oe = {
	message: `feat(search): add fuzzy matching to quick open`,
	alternatives: [`feat(search): match file names out of order`, `feat: improve quick open`],
	reasons: [
		`The branch is called feature/quick-open-fuzzy.`,
		`Most commits in this repository follow Conventional Commits.`,
		`All staged files are in src/search.`
	]
};
function ke() {
	let [e, t] = (0, T.useState)(``), [n, i] = (0, T.useState)(), [a, o] = (0, T.useState)(!1), [s, l] = (0, T.useState)(null), [u, d] = (0, T.useState)(2), [f, p] = (0, T.useState)(!1), [m, h] = (0, T.useState)(``), [g, _] = (0, T.useState)(null), v = (e) => {
		l(e), setTimeout(() => {
			l(null), e === `push` && d(0);
		}, 1200);
	};
	return (0, E.jsxs)(`div`, {
		ref: _,
		className: `flex max-w-md flex-col rounded-lg border border-border bg-surface`,
		children: [(0, E.jsx)(j, {
			container: g,
			label: `Commit`,
			messageLabel: `Commit message`,
			hideMessageLabel: !0,
			placeholder: `Commit message`,
			messageHint: `Ctrl+Enter or Cmd+Enter commits.`,
			value: e,
			onChange: (e) => {
				t(e), n && i(void 0);
			},
			errorMessage: n,
			onCommit: (e) => {
				e.trim().length < 10 ? i(`Write at least 10 characters, so the history says what changed.`) : (i(void 0), p(!0), setTimeout(() => {
					p(!1), t(``), o(!1), d((e) => e + 1), h(`Committed: ${e.split(`
`)[0] ?? ``}`);
				}, 900));
			},
			commitLabel: `Commit`,
			isCommitting: f,
			committingLabel: `Committing`,
			branch: `feature/quick-open-fuzzy`,
			branchLabel: `Switch branch, current`,
			onBranchPress: () => void 0,
			ahead: u,
			behind: 0,
			onPush: () => v(`push`),
			onPull: () => v(`pull`),
			pushLabel: `Push`,
			pullLabel: `Pull`,
			syncing: s,
			syncingLabel: `Syncing with the remote`,
			tools: (0, E.jsxs)(E.Fragment, { children: [(0, E.jsxs)(c, {
				variant: `outline`,
				size: `sm`,
				onPress: () => {
					t(Oe.message), o(!0);
				},
				children: [(0, E.jsx)(r, {
					name: `ai.magic`,
					"aria-hidden": !0
				}), `Suggest`]
			}), (0, E.jsxs)(c, {
				variant: `outline`,
				size: `sm`,
				isDisabled: !0,
				children: [(0, E.jsx)(r, {
					name: `ai.sparkles`,
					"aria-hidden": !0
				}), `Ask the agent`]
			})] }),
			footer: a ? (0, E.jsx)(ve, {
				title: `Template: type(scope): subject, found in the history`,
				reasons: Oe.reasons,
				alternativesLabel: `Other ideas`,
				alternatives: Oe.alternatives,
				onPickAlternative: t
			}) : null
		}), (0, E.jsx)(`output`, {
			className: `block px-2.5 pb-2.5 text-caption text-ok empty:hidden`,
			children: m
		})]
	});
}
var Ae = [
	{
		hash: `9f2c1e7a40`,
		parents: [`4b81d0c2aa`, `7c3a9e11bb`],
		subject: `Merge branch feature/quick-open`,
		refs: [`HEAD -> main`, `origin/main`],
		author: `Ada Lovelace`,
		date: `12 min ago`
	},
	{
		hash: `7c3a9e11bb`,
		parents: [`e1d4f0a9cc`],
		subject: `Rank exact file names above fuzzy hits`,
		refs: [`feature/quick-open`],
		author: `Grace Hopper`,
		date: `1 h ago`
	},
	{
		hash: `4b81d0c2aa`,
		parents: [`2a90b7f3dd`],
		subject: `Fix the focus ring of the sidebar in forced colours`,
		author: `Alan Turing`,
		date: `2 h ago`
	},
	{
		hash: `e1d4f0a9cc`,
		parents: [`2a90b7f3dd`],
		subject: `Add fuzzy matching to quick open`,
		author: `Grace Hopper`,
		date: `3 h ago`
	},
	{
		hash: `2a90b7f3dd`,
		parents: [`c55e8a1fee`],
		subject: `Release 0.4.0`,
		refs: [`tag: v0.4.0`],
		author: `Ada Lovelace`,
		date: `yesterday`
	},
	{
		hash: `c55e8a1fee`,
		parents: [],
		subject: `Start the project with a subject long enough to show how the row cuts it on a narrow screen`,
		author: `Ada Lovelace`,
		date: `last week`
	}
];
function je() {
	let [e, t] = (0, T.useState)(Ae[0]);
	return (0, E.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-2`,
		children: [(0, E.jsx)(Z, {
			label: `History of main`,
			commits: Ae,
			selectedHash: e?.hash ?? null,
			onSelect: t,
			mergeLabel: `Merge commit`,
			refKindLabels: {
				head: `Current branch`,
				remote: `Remote branch`,
				tag: `Tag`,
				branch: `Branch`
			}
		}), (0, E.jsx)(`p`, {
			className: `text-caption text-muted`,
			"aria-live": `polite`,
			children: e ? `Selected ${e.hash.slice(0, 7)}: ${e.subject}` : `No commit selected.`
		})]
	});
}
function Me() {
	return (0, E.jsx)(`div`, {
		className: `@container`,
		children: (0, E.jsxs)(`div`, {
			className: `grid gap-3 @3xl:grid-cols-3`,
			children: [
				(0, E.jsx)(Z, {
					label: `Empty history`,
					commits: [],
					emptyState: `This repository has no commits yet. Save the first one from the Changes panel.`
				}),
				(0, E.jsx)(Z, {
					label: `Loading history`,
					commits: [],
					isLoading: !0,
					loadingLabel: `Reading the history`
				}),
				(0, E.jsx)(Z, {
					label: `Failed history`,
					commits: Ae,
					error: `Git did not answer. Check that the folder is a repository.`
				})
			]
		})
	});
}
var Ne = [
	{
		state: `none`,
		label: `No pull request`
	},
	{
		state: `draft`,
		label: `Draft`
	},
	{
		state: `open`,
		label: `Open`
	},
	{
		state: `merged`,
		label: `Merged`
	},
	{
		state: `closed`,
		label: `Closed`
	}
];
function Pe() {
	let [e, t] = (0, T.useState)(`tool`), n = () => {
		t(`creating`), setTimeout(() => t(`open`), 1e3);
	}, r;
	return r = e === `tool` ? (0, E.jsx)(Q, {
		state: `none`,
		stateLabel: `Setup needed`,
		title: `Open pull requests from here with the GitHub CLI.`,
		action: (0, E.jsx)(c, {
			variant: `outline`,
			size: `sm`,
			onPress: () => t(`login`),
			children: `Install GitHub CLI`
		})
	}) : e === `login` ? (0, E.jsx)(Q, {
		state: `none`,
		stateLabel: `Setup needed`,
		title: `Sign in to the GitHub CLI to open pull requests.`,
		action: (0, E.jsx)(c, {
			variant: `outline`,
			size: `sm`,
			onPress: () => t(`ready`),
			children: `Sign in to GitHub`
		})
	}) : e === `open` ? (0, E.jsx)(Q, {
		state: `open`,
		stateLabel: `Open`,
		number: `#128`,
		title: `Add fuzzy matching to quick open`,
		description: `feature/quick-open → main · 3 checks passed`,
		href: `#pull-request-128`
	}) : (0, E.jsx)(Q, {
		state: `none`,
		stateLabel: `No pull request`,
		title: `Branch pushed. Open a pull request to main.`,
		isBusy: e === `creating`,
		action: (0, E.jsx)(c, {
			size: `sm`,
			onPress: n,
			isPending: e === `creating`,
			pendingLabel: `Creating pull request`,
			children: `Create pull request`
		})
	}), (0, E.jsxs)(`div`, {
		className: `flex max-w-xl flex-col gap-3`,
		children: [
			r,
			(0, E.jsx)(c, {
				variant: `ghost`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t(`tool`),
				children: `Start again`
			}),
			(0, E.jsx)(`div`, {
				className: `flex flex-col gap-2`,
				children: Ne.map((e) => (0, E.jsx)(Q, {
					state: e.state,
					stateLabel: e.label,
					number: e.state === `none` ? void 0 : `#97`,
					title: `Keep the sidebar open on wide screens after a reload`
				}, e.state))
			})
		]
	});
}
function Fe() {
	let [e, t] = (0, T.useState)(!1), [n, r] = (0, T.useState)(12);
	return (0, E.jsxs)(`div`, {
		className: `flex max-w-2xl flex-col gap-3`,
		children: [(0, E.jsxs)(`div`, {
			className: `flex flex-wrap gap-2`,
			children: [(0, E.jsx)(c, {
				variant: `outline`,
				size: `sm`,
				onPress: () => t((e) => !e),
				children: e ? `Save the file` : `Type in the file`
			}), (0, E.jsx)(c, {
				variant: `outline`,
				size: `sm`,
				onPress: () => r((e) => e + 1),
				children: `Move the caret down`
			})]
		}), (0, E.jsxs)(`div`, {
			className: `overflow-hidden rounded-lg border border-border`,
			children: [(0, E.jsx)(`pre`, {
				...Ce,
				className: `h-24 overflow-auto bg-surface p-3 font-mono text-caption text-fg outline-none focus-visible:outline-solid focus-visible:outline-(length:--sk-focus-width) focus-visible:-outline-offset-2 focus-visible:outline-focus`,
				children: `export function cx(...names) {
  return names.filter(Boolean).join(' ')
}`
			}), (0, E.jsx)(te, {
				label: `Editor status`,
				position: `Ln ${n}, Col 4`,
				selection: n % 2 == 0 ? `18 selected` : void 0,
				onPositionPress: () => r(1),
				positionTip: `Go to line (Ctrl+G)`,
				isDirty: e,
				unsavedLabel: `Unsaved`,
				facts: [
					{
						id: `language`,
						label: `TypeScript`,
						onPress: () => void 0,
						tip: `Change the language`
					},
					{
						id: `encoding`,
						label: `UTF-8`
					},
					{
						id: `eol`,
						label: `LF`
					}
				]
			})]
		})]
	});
}
var $ = [
	{
		path: `src/search/QuickOpen.tsx`,
		hits: [{
			id: `q1`,
			line: 14,
			text: `import { useFilter } from 'react-aria-components'`,
			start: 9
		}, {
			id: `q2`,
			line: 58,
			text: `    const { contains } = useFilter({ sensitivity: "base" })`,
			start: 25
		}]
	},
	{
		path: `src/search/CommandPalette.tsx`,
		hits: [{
			id: `c1`,
			line: 7,
			text: `import { Autocomplete, useFilter } from 'react-aria-components'`,
			start: 23
		}]
	},
	{
		path: `packages/desktop/src/renderer/views/settings/a-very-long-folder-name/filters.ts`,
		hits: [{
			id: `f1`,
			line: 203,
			text: `            // a long line whose hit sits far to the right so the lead is cut with an ellipsis: useFilter(options)`,
			start: 92
		}]
	}
];
function Ie() {
	let [e, t] = (0, T.useState)(new Set($.map((e) => e.path))), [n, r] = (0, T.useState)(``), i = e !== `all` && e.size === $.length;
	return (0, E.jsxs)(`div`, {
		className: `flex max-w-xl flex-col gap-2`,
		children: [
			(0, E.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-between gap-2 text-caption text-muted`,
				children: [(0, E.jsx)(`output`, { children: `4 matches in 3 files` }), (0, E.jsx)(c, {
					variant: `ghost`,
					size: `sm`,
					onPress: () => t(i ? new Set() : new Set($.map((e) => e.path))),
					children: i ? `Collapse all` : `Expand all`
				})]
			}),
			(0, E.jsx)(d, {
				"aria-label": `Search results`,
				expandedKeys: e,
				onExpandedChange: t,
				className: `max-h-72`,
				children: $.map((e) => (0, E.jsx)(be, {
					id: e.path,
					path: e.path,
					count: e.hits.length,
					countLabel: e.hits.length === 1 ? `1 match` : `${e.hits.length} matches`,
					children: e.hits.map((t) => (0, E.jsx)(xe, {
						id: t.id,
						line: t.line,
						lineLabel: `Line`,
						text: t.text,
						matchStart: t.start,
						matchLength: 9,
						onAction: () => r(`Opened ${e.path} at line ${t.line}.`)
					}, t.id))
				}, e.path))
			}),
			(0, E.jsx)(`p`, {
				className: `text-caption text-muted`,
				"aria-live": `polite`,
				children: n
			})
		]
	});
}
var Le = [
	{
		id: `full`,
		label: `Full width`,
		icon: (0, E.jsx)(r, {
			name: `theme.system`,
			"aria-hidden": !0
		})
	},
	{
		id: `laptop`,
		label: `Laptop, 1366 px`,
		icon: (0, E.jsx)(r, {
			name: `device.laptop`,
			"aria-hidden": !0
		})
	},
	{
		id: `tablet`,
		label: `Tablet, 820 px`,
		icon: (0, E.jsx)(r, {
			name: `device.tablet`,
			"aria-hidden": !0
		})
	},
	{
		id: `phone`,
		label: `Phone, 390 px`,
		icon: (0, E.jsx)(r, {
			name: `device.phone`,
			"aria-hidden": !0
		})
	}
], Re = {
	full: `full`,
	laptop: 1366,
	tablet: 820,
	phone: 390
};
function ze() {
	let [e, t] = (0, T.useState)(`localhost:5173/settings`), [n, i] = (0, T.useState)(`tablet`), [a, o] = (0, T.useState)(!1), [s, c] = (0, T.useState)(!1), [u, d] = (0, T.useState)(0), f = (e) => {
		o(!0), c(!1), d((e) => e + 1), setTimeout(() => {
			o(!1), c(e.includes(`offline`));
		}, 900);
	}, p = Le.find((e) => e.id === n)?.label ?? ``;
	return (0, E.jsxs)(`div`, {
		className: `flex h-[26rem] flex-col overflow-hidden rounded-lg border border-border`,
		children: [(0, E.jsx)(A, {
			label: `Preview controls`,
			addressLabel: `Address`,
			address: e,
			onAddressChange: t,
			onNavigate: f,
			backLabel: `Back`,
			forwardLabel: `Forward`,
			reloadLabel: `Reload`,
			stopLabel: `Stop loading`,
			onBack: () => d((e) => Math.max(0, e - 1)),
			onForward: () => void 0,
			onReload: () => f(e),
			onStop: () => o(!1),
			canGoBack: u > 0,
			canGoForward: !1,
			isLoading: a,
			loadingLabel: `Loading the page`,
			devices: Le,
			device: n,
			onDeviceChange: i,
			deviceLabel: `Preview size`,
			actions: (0, E.jsx)(l, {
				label: `Take a screenshot`,
				size: `sm`,
				children: (0, E.jsx)(r, {
					name: `media.camera`,
					"aria-hidden": !0
				})
			})
		}), (0, E.jsx)(F, {
			label: `Page preview`,
			width: Re[n],
			caption: p,
			isLoading: a,
			loadingLabel: `Loading the page`,
			error: s ? `The page did not load. Check that the development server runs, then reload.` : void 0,
			errorLabel: `Error`,
			children: (0, E.jsxs)(`div`, {
				className: `flex h-full flex-col gap-3 overflow-auto p-4`,
				children: [
					(0, E.jsx)(`p`, {
						className: `font-mono text-caption text-muted [overflow-wrap:anywhere]`,
						children: e
					}),
					(0, E.jsx)(`h4`, {
						className: `text-title font-semibold text-fg`,
						children: `Settings`
					}),
					(0, E.jsx)(`p`, {
						className: `text-body text-muted`,
						children: `A stand-in for the previewed page. Type an address with “offline” in it and press Enter to see the error.`
					})
				]
			})
		})]
	});
}
var Be = {
	title: `Code`,
	status: `stable`,
	description: `The parts of a code workspace: changed files, the commit box with its reasons, the commit graph and refs, the pull request of a branch, the status under an editor, search results across files, and a page preview with its address bar and device sizes. Rows sit in List and TreeView from the data group, so arrow keys, typeahead and selection come from React Aria.`,
	pl: {
		title: `Kod`,
		description: `Części przestrzeni roboczej z kodem: zmienione pliki, pole commita z powodami, graf commitów i refy, pull request gałęzi, status pod edytorem, wyniki wyszukiwania w plikach oraz podgląd strony z paskiem adresu i rozmiarami urządzeń. Wiersze leżą w List i TreeView z grupy data, więc klawisze strzałek, wyszukiwanie po wpisaniu i zaznaczanie pochodzą z React Aria.`
	},
	demos: [
		{
			name: `GitFileRow`,
			components: [`GitFileRow`],
			description: `One changed file with its kind as a letter, the name before the folder and actions for staging or discarding. Pick it for working tree and staged changes; put the rows in a List.`,
			usage: `<List aria-label="Changes" items={files}>
  {(file) => (
    <GitFileRow id={file.path} path={file.path} kind={file.kind} kindLabel={t(\`git.\${file.kind}\`)}
      onAction={() => openDiff(file)}
      actions={<IconButton label={t('git.stage', { path: file.path })} size="sm" onPress={() => stage(file)}><Icon name="action.add" aria-hidden /></IconButton>} />
  )}
</List>`,
			accessibility: `The list is one tab stop: Up and Down move between files, typing jumps to a path, Enter runs onAction and Right reaches the buttons in the row. The kind is read as a word before the path; the letter on screen is hidden and also differs by shape (a deleted name is struck through). Hover actions stay in the page and show on focus, on touch screens and in forced colours.`,
			pl: {
				description: `Jeden zmieniony plik z rodzajem zmiany jako literą, nazwą przed folderem i akcjami do dodania do poczekalni albo odrzucenia. Wybierz go dla zmian w katalogu roboczym i w poczekalni; wiersze umieść w List.`,
				accessibility: `Lista jest jednym przystankiem w kolejności Tab: strzałka w górę i w dół przechodzi między plikami, wpisywanie przeskakuje do ścieżki, Enter uruchamia onAction, a strzałka w prawo dociera do przycisków w wierszu. Rodzaj zmiany jest odczytywany jako słowo przed ścieżką; litera na ekranie jest ukryta i różni się też kształtem (nazwa usuniętego pliku jest przekreślona). Akcje po najechaniu zostają na stronie i pokazują się przy fokusie, na ekranach dotykowych i w trybie wymuszonych kolorów.`
			},
			render: () => (0, E.jsx)(De, {})
		},
		{
			name: `CommitBox`,
			components: [`CommitBox`, `ReasonList`],
			description: `The top of a changes panel: branch, push and pull with counts, the message and the commit button, with room for suggestion tools and a ReasonList that explains a suggested message. Try committing a short message to see the inline error.`,
			usage: `<CommitBox label={t('commit.box')} messageLabel={t('commit.message')} hideMessageLabel
  value={message} onChange={setMessage} onCommit={commit} commitLabel={t('commit.do')}
  errorMessage={error} branch={status.branch} branchLabel={t('git.switchBranch')} onBranchPress={openBranches}
  ahead={status.ahead} onPush={push} pushLabel={t('git.push')} syncing={syncing} syncingLabel={t('git.syncing')}
  container={panel} footer={proposal && <ReasonList title={proposal.template} reasons={proposal.reasons}
    alternatives={proposal.alternatives} onPickAlternative={setMessage} />} />`,
			accessibility: `The box is a named group. The message is a labelled textarea: Enter adds a line and Ctrl+Enter or Cmd+Enter commits. An error marks the field invalid and is linked with aria-describedby, so it is read with the field and stays until the message changes. Push reads as "Push 2", busy buttons say they are pending, and the ReasonList is a group named by its title with real list items and buttons for alternatives.`,
			pl: {
				description: `Góra panelu zmian: gałąź, push i pull z licznikami, wiadomość i przycisk commita, z miejscem na narzędzia podpowiedzi i ReasonList, który wyjaśnia proponowaną wiadomość. Spróbuj zatwierdzić krótką wiadomość, aby zobaczyć błąd w linii.`,
				accessibility: `Pole jest nazwaną grupą. Wiadomość to pole tekstowe z etykietą: Enter dodaje linię, a Ctrl+Enter lub Cmd+Enter zatwierdza. Błąd oznacza pole jako niepoprawne i jest powiązany przez aria-describedby, więc jest odczytywany razem z polem i zostaje, dopóki wiadomość się nie zmieni. Push jest odczytywany jako „Push 2”, zajęte przyciski mówią, że trwa oczekiwanie, a ReasonList jest grupą nazwaną swoim tytułem, z prawdziwymi elementami listy i przyciskami dla alternatyw.`
			},
			render: () => (0, E.jsx)(ke, {})
		},
		{
			name: `GitGraph`,
			components: [`GitGraph`, `RefBadge`],
			description: `The commit history with branch lines drawn in SVG, refs as badges, authors, dates and short hashes. Pick it for a history view where people pick a commit to inspect.`,
			usage: `<GitGraph label={t('history.title')} commits={log} selectedHash={selected?.hash}
  onSelect={setSelected} mergeLabel={t('history.merge')} refKindLabels={{ tag: t('git.tag') }} />

<RefBadge kind="tag" kindLabel={t('git.tag')}>v0.4.0</RefBadge>`,
			accessibility: `A single-select grid: arrow keys move, Enter or Space selects, typing jumps to a subject. Lines are decoration and hidden; merges are read as a word and drawn as a hollow dot. Ref kinds differ by glyph as well as colour, and their kind can be read before the name. The lines stretch with the row, so they stay joined at 200% text size, and turn to the text colour in forced colours.`,
			pl: {
				description: `Historia commitów z liniami gałęzi rysowanymi w SVG, refami jako plakietkami, autorami, datami i krótkimi skrótami. Wybierz go do widoku historii, w którym ludzie wybierają commit do sprawdzenia.`,
				accessibility: `Siatka z pojedynczym wyborem: klawisze strzałek przesuwają, Enter lub Spacja zaznacza, wpisywanie przeskakuje do tematu. Linie są dekoracją i są ukryte; scalenia są odczytywane jako słowo i rysowane jako puste kółko. Rodzaje refów różnią się znakiem, a nie tylko kolorem, a ich rodzaj można odczytać przed nazwą. Linie rozciągają się razem z wierszem, więc pozostają połączone przy rozmiarze tekstu 200%, a w trybie wymuszonych kolorów przyjmują kolor tekstu.`
			},
			render: () => (0, E.jsx)(je, {})
		},
		{
			name: `GitGraph states`,
			components: [`GitGraph`],
			description: `An empty history, the history while it loads and a failure that blocks it, shown in place of the rows.`,
			usage: `<GitGraph label={t('history.title')} commits={log} isLoading={loading}
  loadingLabel={t('history.loading')} error={failed && t('history.failed')} emptyState={t('history.empty')} />`,
			accessibility: `Loading is a polite status, the error an assertive alert with an icon and words, and the empty text stays inside the named grid.`,
			pl: {
				description: `Pusta historia, historia w trakcie ładowania i błąd, który ją blokuje, pokazane zamiast wierszy.`,
				accessibility: `Ładowanie jest statusem typu polite, błąd komunikatem typu assertive z ikoną i słowami, a tekst pustego stanu zostaje wewnątrz nazwanej siatki.`
			},
			render: () => (0, E.jsx)(Me, {})
		},
		{
			name: `PullRequestCard`,
			components: [`PullRequestCard`],
			description: `The pull request of the current branch, or the next step towards one: install the tool, sign in, then create. Each state has its own icon, a colour and a word. Walk through the steps in the demo.`,
			usage: `<PullRequestCard state="open" stateLabel={t('pr.open')} number="#128"
  title={pr.title} description={\`\${branch} → \${base}\`} href={pr.url} />

<PullRequestCard state="none" stateLabel={t('pr.none')} title={t('pr.pushed', { base })}
  action={<Button size="sm" onPress={create} isPending={creating}>{t('pr.create')}</Button>} />`,
			accessibility: `The state is a word in a badge, never only the icon colour. The title is a link when href is set and wraps instead of being cut. While an action runs the card sets aria-busy and its button says it is pending. Pass openInNewTab only when the text says the link opens a new tab.`,
			pl: {
				description: `Pull request bieżącej gałęzi albo następny krok do niego: zainstaluj narzędzie, zaloguj się, a potem utwórz. Każdy stan ma własną ikonę, kolor i słowo. Przejdź przez kroki w przykładzie.`,
				accessibility: `Stan jest słowem w plakietce, nigdy tylko kolorem ikony. Tytuł jest linkiem, gdy ustawiono href, i się zawija zamiast być ucinany. Gdy akcja trwa, karta ustawia aria-busy, a jej przycisk mówi, że trwa oczekiwanie. Przekaż openInNewTab tylko wtedy, gdy tekst mówi, że link otwiera nową kartę.`
			},
			render: () => (0, E.jsx)(Pe, {})
		},
		{
			name: `EditorStatusBar`,
			components: [`EditorStatusBar`],
			description: `The bar under a code editor: caret position as a "go to line" button, selection, unsaved state, language, encoding and line endings.`,
			usage: `<EditorStatusBar label={t('editor.status')} position={t('editor.position', cursor)}
  onPositionPress={goToLine} positionTip={t('editor.goToLine')} isDirty={tab.dirty}
  unsavedLabel={t('editor.unsaved')} facts={[{ id: 'lang', label: language }, { id: 'eol', label: 'LF' }]} />`,
			accessibility: `A named group rather than a footer landmark, so several editors add no landmarks. The caret position is not live, as it changes with every key; the unsaved state is announced once through a polite region and shown with a warning glyph and its word. Buttons show tips on hover and keyboard focus and clear 24px; items wrap on a narrow pane.`,
			pl: {
				description: `Pasek pod edytorem kodu: pozycja kursora jako przycisk „przejdź do linii”, zaznaczenie, stan niezapisany, język, kodowanie i końce linii.`,
				accessibility: `Nazwana grupa zamiast landmarku stopki, więc kilka edytorów nie dodaje landmarków. Pozycja kursora nie jest regionem na żywo, bo zmienia się przy każdym klawiszu; stan niezapisany jest ogłaszany raz przez region typu polite i pokazany znakiem ostrzeżenia z jego słowem. Przyciski pokazują dymki podpowiedzi po najechaniu i przy fokusie z klawiatury i mają co najmniej 24 px; elementy zawijają się w wąskim panelu.`
			},
			render: () => (0, E.jsx)(Fe, {})
		},
		{
			name: `Search in files`,
			components: [`SearchFileRow`, `SearchHitRow`],
			description: `Results of a search across files, grouped by file with a count, each hit with its line number and the match marked. Put them in a TreeView; Expand all and Collapse all control expandedKeys.`,
			usage: `<TreeView aria-label={t('search.results')} expandedKeys={expanded} onExpandedChange={setExpanded}>
  {files.map((file) => (
    <SearchFileRow key={file.path} id={file.path} path={file.path} count={file.hits.length}
      countLabel={t('search.matches', { count: file.hits.length })}>
      {file.hits.map((hit) => (
        <SearchHitRow key={hit.id} id={hit.id} line={hit.line} lineLabel={t('search.line')}
          text={hit.text} matchStart={hit.at} matchLength={hit.length} onAction={() => open(hit)} />
      ))}
    </SearchFileRow>
  ))}
</TreeView>`,
			accessibility: `A tree: Up and Down move, Right opens a file and Left closes it or goes to the file, Enter opens a hit and typing jumps to a file. The count is read in words. The match is tinted, bold and underlined, so it shows without colour; a long lead is cut from the start so the hit stays in view at 400% zoom.`,
			pl: {
				description: `Wyniki wyszukiwania w plikach, pogrupowane według pliku z licznikiem, każde trafienie z numerem linii i zaznaczonym dopasowaniem. Umieść je w TreeView; Expand all i Collapse all sterują expandedKeys.`,
				accessibility: `Drzewo: strzałka w górę i w dół przesuwa, strzałka w prawo otwiera plik, a w lewo go zamyka albo przechodzi do pliku, Enter otwiera trafienie, a wpisywanie przeskakuje do pliku. Liczba jest odczytywana słowami. Dopasowanie jest podbarwione, pogrubione i podkreślone, więc widać je bez koloru; długi początek jest ucinany od początku, aby trafienie zostało w widoku przy powiększeniu 400%.`
			},
			render: () => (0, E.jsx)(Ie, {})
		},
		{
			name: `BrowserBar and DeviceFrame`,
			components: [`BrowserBar`, `DeviceFrame`],
			description: `A page preview: back, forward, reload or stop, the address and the preview size, over a frame that simulates a screen width. Pick it for previewing a site while working on it; the frame holds an iframe in an app.`,
			usage: `<BrowserBar label={t('preview.controls')} addressLabel={t('preview.address')}
  address={address} onAddressChange={setAddress} onNavigate={go}
  backLabel={t('nav.back')} forwardLabel={t('nav.forward')} reloadLabel={t('nav.reload')}
  onBack={back} onReload={reload} canGoBack={canGoBack} isLoading={loading} loadingLabel={t('preview.loading')}
  devices={devices} device={device} onDeviceChange={setDevice} deviceLabel={t('preview.size')} />
<DeviceFrame label={t('preview.page')} width={820} caption="Tablet · 820 px" isLoading={loading}
  loadingLabel={t('preview.loading')}>
  <iframe title={t('preview.page')} src={url} />
</DeviceFrame>`,
			accessibility: `The bar is a named group of buttons with names and tooltips, an address form (Enter navigates, focus selects the text) and a radio group of sizes whose names are read and shown in words on wide bars. Back and forward turn off when there is nowhere to go. The frame is a named region; loading shows a named spinner, and an error replaces the page as an assertive alert with an icon and a word. The frame never grows past its box and its width change stops under reduced motion.`,
			pl: {
				description: `Podgląd strony: wstecz, dalej, odśwież albo zatrzymaj, adres i rozmiar podglądu, nad ramką symulującą szerokość ekranu. Wybierz go do podglądu strony podczas pracy nad nią; w aplikacji ramka zawiera iframe.`,
				accessibility: `Pasek jest nazwaną grupą przycisków z nazwami i dymkami podpowiedzi, formularz adresu (Enter przechodzi, fokus zaznacza tekst) i grupa przycisków opcji z rozmiarami, których nazwy są odczytywane i pokazane słowami na szerokich paskach. Wstecz i dalej wyłączają się, gdy nie ma dokąd iść. Ramka jest nazwanym regionem; ładowanie pokazuje nazwany wskaźnik, a błąd zastępuje stronę jako komunikat typu assertive z ikoną i słowem. Ramka nigdy nie wychodzi poza swoje pole, a zmiana jej szerokości zatrzymuje się przy ograniczonym ruchu.`
			},
			render: () => (0, E.jsx)(ze, {})
		},
		{
			name: `RefBadge`,
			components: [`RefBadge`],
			description: `A branch, remote branch, tag or the current HEAD, on its own, such as in a header or a release list.`,
			usage: `<RefBadge kind="branch">feature/quick-open</RefBadge>
<RefBadge kind="remote" kindLabel={t('git.remote')}>origin/main</RefBadge>`,
			accessibility: `Each kind has its own glyph as well as its colour, and the kind can be read before the name. Long names are cut on screen and stay whole for screen readers. A border shows in forced colours.`,
			pl: {
				description: `Gałąź, gałąź zdalna, tag albo bieżący HEAD, osobno, na przykład w nagłówku albo na liście wydań.`,
				accessibility: `Każdy rodzaj ma własny znak, a nie tylko kolor, i jego rodzaj można odczytać przed nazwą. Długie nazwy są ucinane na ekranie i zostają w całości dla czytników ekranu. Ramka pokazuje się w trybie wymuszonych kolorów.`
			},
			render: () => (0, E.jsxs)(`div`, {
				className: `flex max-w-md flex-wrap items-center gap-2`,
				children: [
					(0, E.jsx)(K, {
						kind: `head`,
						kindLabel: `Current branch`,
						children: `main`
					}),
					(0, E.jsx)(K, {
						kind: `branch`,
						kindLabel: `Branch`,
						children: `feature/quick-open`
					}),
					(0, E.jsx)(K, {
						kind: `remote`,
						kindLabel: `Remote branch`,
						children: `origin/main`
					}),
					(0, E.jsx)(K, {
						kind: `tag`,
						kindLabel: `Tag`,
						children: `v0.4.0`
					}),
					(0, E.jsx)(K, {
						kind: `branch`,
						kindLabel: `Branch`,
						title: `feature/a-branch-name-that-goes-on-for-much-longer-than-the-badge`,
						className: `max-w-48`,
						children: `feature/a-branch-name-that-goes-on-for-much-longer-than-the-badge`
					})
				]
			})
		}
	]
};
export { Se as t };
