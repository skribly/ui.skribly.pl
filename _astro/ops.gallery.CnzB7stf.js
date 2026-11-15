import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, M as i, j as a, w as o, z as s } from "./doc.C_PtMNUB.js";
import { n as c } from "./react-dom.B9zIfLd2.js";
import { t as l } from "./Button.df3csLrB.js";
import { t as u } from "./IconButton.Bqgi69Iz.js";
import { t as d } from "./VcsBadge.CaZGLpha.js";
import { t as f } from "./List.MquQiuoz.js";
import { t as p } from "./Badge.BotZF5ka.js";
import { r as m } from "./GridList.Be-Qku2e.js";
import { t as h } from "./Checkbox.TwqnTrT7.js";
import { t as g } from "./Group.CmTJ4Xbt.js";
import { t as _ } from "./ConfirmDialog.Cu9-9f3A.js";
import { t as v } from "./Spinner.CPYol_Wu.js";
import { t as y } from "./Link.DGRKZkR4.js";
import { t as b } from "./SeverityBadge.CwuqUxYW.js";
import { n as ee, t as te } from "./Disclosure.BQKVLy-a.js";
import { v as ne } from "./Dialog.1Jdfd_U0.js";
import { t as x } from "./CopyButton.r6Q2ZE4z.js";
import { t as S } from "./ProgressBar.Dky8J3J2.js";
import { t as re } from "./Switch.BiPQBtnt.js";
import { t as ie } from "./Meter.Cj_BFYF4.js";
import { t as ae } from "./ToggleButton.D3fOu9dM.js";
var C = t(c(), 1), w = n(), T = r(`group/row @container flex min-w-0 cursor-default gap-3 border-b border-border px-3 py-2.5 text-body text-fg transition-colors duration-(--sk-duration-fast) last:border-b-0 motion-reduce:transition-none`, `data-hovered:not-data-selected:bg-hover data-[href]:cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-60`, `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focus-visible:outline-[Highlight]`, `data-selected:bg-selected data-selected:shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`), E = `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1`, D = `flex min-w-0 flex-wrap items-center gap-x-3 gap-y-0.5 text-caption text-muted`, O = `ms-auto flex max-w-full min-w-0 flex-wrap items-center justify-end gap-1`;
function k({ isSelected: e, isIndeterminate: t, isDisabled: n }) {
	return (0, w.jsx)(`span`, {
		"aria-hidden": !0,
		className: r(`grid size-4 place-items-center rounded-sm border transition-colors forced-colors:border-[CanvasText]`, e || t ? `border-accent bg-accent text-accent-fg forced-colors:bg-[Highlight]` : `border-border-strong bg-input`, n && `opacity-50`),
		children: t ? (0, w.jsx)(a, {
			name: `action.remove`,
			className: `size-3 forced-colors:text-[HighlightText]`,
			strokeWidth: 3
		}) : e ? (0, w.jsx)(a, {
			name: `action.check`,
			className: `size-3 forced-colors:text-[HighlightText]`,
			strokeWidth: 3
		}) : null
	});
}
var A = `relative inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm outline-hidden data-disabled:cursor-not-allowed data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:[&>span]:border-accent`;
function oe({ label: e }) {
	return (0, w.jsx)(h, {
		slot: `selection`,
		...e === void 0 ? {} : { "aria-label": e },
		className: A,
		children: k
	});
}
function se({ label: e, isSelected: t, onChange: n }) {
	return (0, w.jsx)(h, {
		"aria-label": e,
		isSelected: t,
		onChange: n,
		className: r(A, `z-10`),
		children: k
	});
}
var ce = {
	ok: i(`status.ok`),
	info: i(`status.info`),
	warn: i(`status.warning`),
	danger: i(`status.danger`)
}, le = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
};
function j({ tone: e, toneLabel: t, title: n, meta: i, kindLabel: a, actions: o, className: s, ...c }) {
	let l = ce[e];
	return (0, w.jsxs)(m, {
		...c,
		textValue: n,
		"data-tone": e,
		className: r(T, `flex-wrap items-start`, s),
		children: [(0, w.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 basis-56 items-start gap-2.5`,
			children: [(0, w.jsx)(l, {
				"aria-hidden": !0,
				focusable: `false`,
				className: r(`mt-0.5 size-4 shrink-0 forced-colors:text-[CanvasText]`, le[e])
			}), (0, w.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-0.5`,
				children: [(0, w.jsxs)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: [(0, w.jsx)(`span`, {
						className: `sr-only`,
						children: `${t}: `
					}), n]
				}), i ? (0, w.jsx)(`span`, {
					className: D,
					children: i
				}) : null]
			})]
		}), a || o ? (0, w.jsxs)(`span`, {
			className: O,
			children: [a ? (0, w.jsx)(p, {
				tone: e,
				size: `sm`,
				children: a
			}) : null, o]
		}) : null]
	});
}
function ue({ file: e, action: t, onAction: n, isPending: r, isDisabled: i, pendingLabel: a, container: o }) {
	let s = (0, C.useCallback)(() => n(e.id, t.id), [
		n,
		e.id,
		t.id
	]), c = a === void 0 ? {} : { pendingLabel: a }, u = (0, C.useMemo)(() => (0, w.jsxs)(l, {
		variant: t.variant ?? `outline`,
		size: `sm`,
		isPending: r,
		isDisabled: i,
		...a === void 0 ? {} : { pendingLabel: a },
		children: [r ? null : t.icon, t.label]
	}), [
		t.variant,
		t.icon,
		t.label,
		r,
		i,
		a
	]);
	return t.confirm ? (0, w.jsx)(_, {
		trigger: u,
		title: t.confirm.title,
		confirmLabel: t.confirm.confirmLabel,
		cancelLabel: t.confirm.cancelLabel,
		tone: t.variant === `danger` || t.variant === `danger-solid` ? `danger` : `default`,
		onConfirm: s,
		...o === void 0 ? {} : { container: o },
		children: t.confirm.body
	}) : (0, w.jsxs)(l, {
		variant: t.variant ?? `outline`,
		size: `sm`,
		onPress: s,
		isPending: r,
		isDisabled: i,
		...c,
		children: [r ? null : t.icon, t.label]
	});
}
function de({ file: e, actions: t, onAction: n, pending: r, pendingLabel: i, container: a }) {
	let o = (0, C.useId)(), s = r !== null;
	return (0, w.jsxs)(`li`, {
		className: `flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-border px-3 py-2.5 last:border-b-0`,
		children: [(0, w.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 basis-40 flex-wrap items-baseline gap-x-2`,
			children: [(0, w.jsx)(`code`, {
				id: o,
				className: `min-w-0 font-mono text-body font-medium text-fg [overflow-wrap:anywhere]`,
				children: e.file
			}), e.project ? (0, w.jsx)(`span`, {
				className: `text-caption text-muted`,
				children: e.project
			}) : null]
		}), (0, w.jsx)(g, {
			"aria-labelledby": o,
			className: `ms-auto flex flex-wrap items-center gap-1.5`,
			children: t.map((t) => {
				let o = r?.fileId === e.id && r.actionId === t.id;
				return (0, w.jsx)(ue, {
					file: e,
					action: t,
					onAction: n,
					isPending: o,
					isDisabled: s && !o,
					pendingLabel: i,
					container: a
				}, t.id);
			})
		})]
	});
}
var fe = (0, w.jsx)(a, {
	name: `file.source`,
	"aria-hidden": !0,
	className: `size-3.5 shrink-0`
});
function M({ title: e, headingLevel: t = 3, files: n, actions: i, onAction: a, pending: o = null, pendingLabel: s, emptyState: c, container: l, className: u, ...d }) {
	let f = (0, C.useId)();
	return n.length === 0 && c === void 0 ? null : (0, w.jsxs)(`section`, {
		...d,
		"aria-labelledby": f,
		className: r(`min-w-0 overflow-hidden rounded-lg border border-border bg-surface`, u),
		children: [(0, C.createElement)(`h${t}`, {
			id: f,
			className: `flex min-h-10 items-center gap-2 border-b border-border px-3 py-2 text-caption font-semibold tracking-wide text-muted uppercase`
		}, fe, e), n.length === 0 ? (0, w.jsx)(`div`, {
			className: `px-3 py-4 text-body text-muted`,
			children: c
		}) : (0, w.jsx)(`ul`, {
			className: `flex flex-col`,
			children: n.map((e) => (0, w.jsx)(de, {
				file: e,
				actions: i,
				onAction: a,
				pending: o,
				pendingLabel: s,
				container: l
			}, e.id))
		})]
	});
}
var pe = {
	ok: (0, w.jsx)(a, { name: `status.ok` }),
	info: (0, w.jsx)(a, { name: `status.info` }),
	warn: (0, w.jsx)(a, { name: `status.warning` }),
	danger: (0, w.jsx)(a, { name: `status.danger` })
};
function N({ avatar: e, name: t, handle: n, badges: i, status: a, detail: o, actions: s, isBusy: c = !1, busyLabel: l, headingLevel: u = 3, className: d, ...f }) {
	let m = (0, C.useId)();
	return (0, w.jsxs)(`article`, {
		...f,
		"aria-labelledby": m,
		"aria-busy": c || void 0,
		className: r(`flex min-w-0 flex-wrap items-center gap-x-3 gap-y-3 rounded-lg border border-border bg-surface p-4 text-body text-fg`, d),
		children: [(0, w.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 basis-60 items-center gap-3`,
			children: [e ? (0, w.jsx)(`span`, {
				className: `shrink-0`,
				children: e
			}) : null, (0, w.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-1`,
				children: [(0, w.jsxs)(`span`, {
					className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1`,
					children: [
						(0, C.createElement)(`h${u}`, {
							id: m,
							className: `min-w-0 text-body font-semibold [overflow-wrap:anywhere]`
						}, t),
						n ? (0, w.jsx)(`span`, {
							className: `text-caption text-muted [overflow-wrap:anywhere]`,
							children: n
						}) : null,
						a ? (0, w.jsx)(p, {
							tone: a.tone,
							size: `sm`,
							icon: pe[a.tone],
							children: a.label
						}) : null,
						i
					]
				}), o ? (0, w.jsx)(`span`, {
					className: `min-w-0 font-mono text-caption text-muted [overflow-wrap:anywhere]`,
					children: o
				}) : null]
			})]
		}), c || s ? (0, w.jsxs)(`span`, {
			className: `ms-auto flex max-w-full min-w-0 flex-wrap items-center justify-end gap-1.5`,
			children: [c && l ? (0, w.jsx)(v, {
				label: l,
				size: `sm`
			}) : null, s]
		}) : null]
	});
}
var me = {
	running: `text-ok`,
	starting: `text-info`,
	restarting: `text-warn`,
	paused: `text-info`,
	stopped: `text-muted`,
	exited: `text-danger`,
	unhealthy: `text-danger`
};
function he({ state: e }) {
	switch (e) {
		case `running`: return (0, w.jsx)(`circle`, {
			cx: `5`,
			cy: `5`,
			r: `4`,
			fill: `currentColor`
		});
		case `stopped`: return (0, w.jsx)(`circle`, {
			cx: `5`,
			cy: `5`,
			r: `3.25`,
			fill: `none`,
			stroke: `currentColor`,
			strokeWidth: `1.5`
		});
		case `paused`: return (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(`rect`, {
			x: `1.5`,
			y: `1`,
			width: `2.5`,
			height: `8`,
			rx: `0.5`,
			fill: `currentColor`
		}), (0, w.jsx)(`rect`, {
			x: `6`,
			y: `1`,
			width: `2.5`,
			height: `8`,
			rx: `0.5`,
			fill: `currentColor`
		})] });
		case `starting`:
		case `restarting`: return (0, w.jsx)(`path`, {
			d: `M5 1.5a3.5 3.5 0 1 1-3.5 3.5`,
			fill: `none`,
			stroke: `currentColor`,
			strokeWidth: `1.75`,
			strokeLinecap: `round`
		});
		case `exited`: return (0, w.jsx)(`path`, {
			d: `M5 0.5 9.5 5 5 9.5 0.5 5Z`,
			fill: `currentColor`
		});
		case `unhealthy`: return (0, w.jsx)(`path`, {
			d: `M5 0.75 9.5 9H0.5Z`,
			fill: `currentColor`,
			strokeLinejoin: `round`
		});
	}
}
function P({ state: e, label: t, hideLabel: n = !1, pulse: i, className: a, ...o }) {
	let s = i ?? (e === `starting` || e === `restarting`);
	return (0, w.jsxs)(`span`, {
		...o,
		"data-state": e,
		className: r(`inline-flex max-w-full min-w-0 items-center gap-1.5 align-middle text-caption text-fg`, a),
		children: [(0, w.jsx)(`svg`, {
			"data-sk-drawn": `state`,
			viewBox: `0 0 10 10`,
			"aria-hidden": !0,
			focusable: `false`,
			className: r(`size-2.5 shrink-0 overflow-visible forced-colors:text-[CanvasText]`, me[e], s && `animate-pulse motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`),
			children: (0, w.jsx)(he, { state: e })
		}), (0, w.jsx)(`span`, {
			className: n ? `sr-only` : `min-w-0 truncate`,
			children: t
		})]
	});
}
var F = (0, w.jsx)(a, {
	name: `ops.cpu`,
	"aria-hidden": !0,
	className: `size-3 shrink-0`
});
function I(e) {
	return `:${e.host}→${e.container}${e.protocol && e.protocol !== `tcp` ? `/${e.protocol}` : ``}`;
}
function L({ name: e, secondaryName: t, state: n, stateLabel: i, badges: a, image: o, status: s, ports: c, stats: l, actions: u, isBusy: d = !1, busyLabel: f, className: p, ...h }) {
	return (0, w.jsxs)(m, {
		...h,
		textValue: e,
		"data-state": n,
		className: r(T, `flex-wrap items-start`, p),
		children: [(0, w.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 basis-56 items-start gap-2.5`,
			children: [(0, w.jsx)(P, {
				state: n,
				label: i,
				hideLabel: !0,
				className: `mt-1.5`
			}), (0, w.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-0.5`,
				children: [(0, w.jsxs)(`span`, {
					className: E,
					children: [
						(0, w.jsx)(`span`, {
							className: `min-w-0 font-semibold [overflow-wrap:anywhere]`,
							children: e
						}),
						t && t !== e ? (0, w.jsx)(`code`, {
							className: `min-w-0 truncate font-mono text-caption text-muted`,
							children: t
						}) : null,
						(0, w.jsx)(`span`, {
							"aria-hidden": !0,
							className: `text-caption text-muted`,
							children: i
						}),
						a
					]
				}), (0, w.jsxs)(`span`, {
					className: D,
					children: [
						o ? (0, w.jsx)(`span`, {
							className: `max-w-64 min-w-0 truncate font-mono`,
							children: o
						}) : null,
						s ? (0, w.jsx)(`span`, { children: s }) : null,
						c?.map((e) => e.href ? (0, w.jsxs)(y, {
							href: e.href,
							className: `inline-flex min-h-6 items-center rounded-xs font-mono text-accent-text underline underline-offset-2 outline-hidden data-hovered:decoration-2 data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`,
							children: [e.label ? (0, w.jsx)(`span`, {
								className: `sr-only`,
								children: `${e.label} `
							}) : null, I(e)]
						}, `${e.host}-${e.container}-${e.protocol ?? `tcp`}`) : (0, w.jsx)(`span`, {
							className: `font-mono`,
							children: I(e)
						}, `${e.host}-${e.container}-${e.protocol ?? `tcp`}`)),
						l ? (0, w.jsxs)(`span`, {
							className: `inline-flex items-center gap-1 tabular-nums`,
							children: [F, l]
						}) : null
					]
				})]
			})]
		}), d || u ? (0, w.jsxs)(`span`, {
			className: O,
			children: [d && f ? (0, w.jsx)(v, {
				label: f,
				size: `sm`
			}) : null, u]
		}) : null]
	});
}
function R({ severity: e, severityLabel: t, title: n, rule: i, location: a, selectLabel: o, actions: s, className: c, ...l }) {
	return (0, w.jsx)(m, {
		...l,
		textValue: n,
		"data-severity": e,
		className: r(T, `items-start`, c),
		children: ({ selectionMode: r, selectionBehavior: c }) => (0, w.jsxs)(w.Fragment, { children: [
			r !== `none` && c === `toggle` ? (0, w.jsx)(oe, { label: o }) : null,
			(0, w.jsxs)(`span`, {
				className: `grid min-w-0 flex-1 gap-x-4 gap-y-1 @xl:grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,14rem)] @xl:items-start`,
				children: [
					(0, w.jsx)(`span`, {
						className: `pt-0.5`,
						children: (0, w.jsx)(b, {
							severity: e,
							children: t
						})
					}),
					(0, w.jsxs)(`span`, {
						className: `flex min-w-0 flex-col gap-0.5`,
						children: [(0, w.jsx)(`span`, {
							className: `min-w-0 [overflow-wrap:anywhere]`,
							children: n
						}), i ? (0, w.jsx)(`code`, {
							className: `min-w-0 font-mono text-caption text-muted [overflow-wrap:anywhere]`,
							children: i
						}) : null]
					}),
					a ? (0, w.jsx)(`code`, {
						className: `min-w-0 font-mono text-caption text-muted [overflow-wrap:anywhere] @xl:pt-0.5`,
						children: a
					}) : null
				]
			}),
			s ? (0, w.jsx)(`span`, {
				className: O,
				children: s
			}) : null
		] })
	});
}
var ge = {
	install: (0, w.jsx)(a, {
		name: `action.download`,
		"aria-hidden": !0
	}),
	login: (0, w.jsx)(a, {
		name: `user.sign-in`,
		"aria-hidden": !0,
		className: `rtl:-scale-x-100`
	}),
	update: (0, w.jsx)(a, {
		name: `action.refresh`,
		"aria-hidden": !0
	})
}, z = (0, C.forwardRef)(function({ kind: e = `install`, children: t, pendingChildren: n, isInstalled: i = !1, installedLabel: o, isPending: s, className: c, ...u }, d) {
	return i && o ? (0, w.jsxs)(`span`, {
		className: r(`inline-flex min-h-control-sm items-center gap-1.5 text-caption font-medium text-ok`, c),
		children: [(0, w.jsx)(a, {
			name: `status.ok`,
			"aria-hidden": !0,
			className: `size-4 shrink-0 forced-colors:text-[CanvasText]`
		}), o]
	}) : (0, w.jsxs)(l, {
		...u,
		ref: d,
		...s === void 0 ? {} : { isPending: s },
		...c === void 0 ? {} : { className: c },
		children: [s ? null : ge[e], s && n ? n : t]
	});
});
function B({ summary: e, command: t, isLoading: n = !1, loadingLabel: i, emptyText: o, copy: c, headingLevel: l = 4, container: u, className: d, ...f }) {
	let p = (0, w.jsx)(`p`, {
		className: `text-caption text-muted`,
		children: o
	});
	return t ? p = (0, w.jsxs)(`div`, {
		className: `flex min-w-0 items-start gap-2 rounded-md border border-border bg-sunken p-2`,
		children: [(0, w.jsx)(`code`, {
			className: `min-w-0 flex-1 font-mono text-caption whitespace-pre-wrap text-fg [overflow-wrap:anywhere]`,
			children: t
		}), c ? (0, w.jsx)(x, {
			text: t,
			label: c.label,
			copiedLabel: c.copiedLabel,
			failedLabel: c.failedLabel,
			iconOnly: !0,
			size: `sm`,
			variant: `ghost`,
			...u === void 0 ? {} : { container: u }
		}) : null]
	}) : n && i && (p = (0, w.jsx)(v, {
		label: i,
		showLabel: !0,
		size: `sm`
	})), (0, w.jsxs)(te, {
		...f,
		className: r(`group/details min-w-0 text-caption`, d),
		children: [(0, w.jsx)(ne, {
			level: l,
			className: `m-0`,
			children: (0, w.jsxs)(s, {
				slot: `trigger`,
				className: `inline-flex min-h-6 cursor-pointer items-center gap-1 rounded-sm text-caption font-medium text-muted outline-hidden data-hovered:text-fg data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`,
				children: [(0, w.jsx)(a, {
					name: `chevron.right`,
					"aria-hidden": !0,
					className: `size-3.5 shrink-0 transition-transform duration-(--sk-duration-fast) group-data-expanded/details:rotate-90 motion-reduce:transition-none rtl:-scale-x-100`
				}), e]
			})
		}), (0, w.jsx)(ee, {
			className: `min-w-0 pt-1.5`,
			children: p
		})]
	});
}
function _e(e) {
	return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
}
function ve(e, t) {
	let [n] = (0, C.useState)(() => e ?? Date.now()), r = e ?? n, [i, a] = (0, C.useState)(() => Date.now());
	return (0, C.useEffect)(() => {
		if (!t) return;
		let e = setInterval(() => a(Date.now()), 1e3);
		return () => clearInterval(e);
	}, [t]), Math.max(0, Math.floor((i - r) / 1e3));
}
function ye({ label: e, state: t, line: n, idleLine: i, startedAt: o, formatElapsed: s = _e, value: c, doneLabel: l, failedLabel: u, failedDetail: d, className: f }) {
	let p = t === `running`, m = ve(o, p), h = n || i, g = t === `done` ? `ok` : t === `failed` ? `danger` : `accent`, _ = (0, C.useMemo)(() => (0, w.jsxs)(`span`, {
		className: `flex min-w-0 items-baseline justify-between gap-3`,
		children: [(0, w.jsx)(`span`, {
			className: `min-w-0 truncate font-mono`,
			children: h
		}), (0, w.jsx)(`span`, {
			className: `shrink-0 tabular-nums`,
			children: s(m)
		})]
	}), [
		h,
		s,
		m
	]), v = p ? c === void 0 ? { isIndeterminate: !0 } : { value: c } : { value: 100 };
	return (0, w.jsxs)(`div`, {
		className: r(`flex min-w-0 flex-col gap-1.5`, f),
		children: [
			(0, w.jsx)(S, {
				label: e,
				tone: g,
				size: `sm`,
				showValue: p && c !== void 0,
				...v,
				...t === `done` ? { status: l } : t === `failed` ? { status: u } : {},
				description: _
			}),
			(0, w.jsx)(`div`, {
				"aria-live": `polite`,
				className: `sr-only`,
				children: t === `done` ? l : ``
			}),
			(0, w.jsx)(`div`, {
				"aria-live": `assertive`,
				className: `sr-only`,
				children: t === `failed` ? u : ``
			}),
			t === `failed` && d ? (0, w.jsxs)(`p`, {
				className: `flex items-start gap-1.5 text-caption text-danger`,
				children: [(0, w.jsx)(a, {
					name: `status.danger`,
					"aria-hidden": !0,
					className: `mt-px size-3.5 shrink-0`
				}), (0, w.jsx)(`span`, {
					className: `min-w-0 [overflow-wrap:anywhere]`,
					children: d
				})]
			}) : null
		]
	});
}
function V({ title: e, badges: t, detail: n, description: i, clampDescription: a, isOn: o, onOnChange: s, switchLabel: c, isSwitchDisabled: l, isBusy: u, busyLabel: d, actions: f, className: p, ...h }) {
	return (0, w.jsxs)(m, {
		...h,
		textValue: e,
		className: r(T, `flex-wrap items-start`, p),
		children: [(0, w.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 basis-56 items-start gap-3`,
			children: [(0, w.jsx)(re, {
				isSelected: o,
				...s ? { onChange: s } : {},
				isDisabled: !!(l || u || !s),
				className: `shrink-0 pt-px`,
				children: (0, w.jsx)(`span`, {
					className: `sr-only`,
					children: c
				})
			}), (0, w.jsxs)(`span`, {
				className: `flex min-w-0 flex-1 flex-col gap-0.5`,
				children: [(0, w.jsxs)(`span`, {
					className: E,
					children: [
						(0, w.jsx)(`span`, {
							className: `min-w-0 font-semibold [overflow-wrap:anywhere]`,
							children: e
						}),
						n,
						t
					]
				}), i ? (0, w.jsx)(`span`, {
					className: r(`text-caption text-muted [overflow-wrap:anywhere]`, a && `line-clamp-2`),
					children: i
				}) : null]
			})]
		}), u || f ? (0, w.jsxs)(`span`, {
			className: O,
			children: [u && d ? (0, w.jsx)(v, {
				label: d,
				size: `sm`
			}) : null, f]
		}) : null]
	});
}
function be({ identifier: e, version: t, versionLabel: n, isEnabled: r, onEnabledChange: i, clampDescription: a = !0, ...o }) {
	let s = (0, C.useMemo)(() => e || t ? (0, w.jsxs)(`span`, {
		className: `inline-flex min-w-0 flex-wrap items-center gap-x-2 text-caption text-muted`,
		children: [e ? (0, w.jsx)(`code`, {
			className: `min-w-0 font-mono [overflow-wrap:anywhere]`,
			children: e
		}) : null, t ? (0, w.jsxs)(`span`, {
			className: `tabular-nums`,
			children: [n ? (0, w.jsx)(`span`, {
				className: `sr-only`,
				children: `${n} `
			}) : null, `v${t}`]
		}) : null]
	}) : null, [
		e,
		t,
		n
	]);
	return (0, w.jsx)(V, {
		...o,
		detail: s,
		clampDescription: a,
		isOn: r,
		onOnChange: i
	});
}
function xe({ mode: e, pattern: t, description: n, emptyDescription: r, isActive: i, onActiveChange: a, clampDescription: o = !1, ...s }) {
	let c = (0, C.useMemo)(() => (0, w.jsxs)(w.Fragment, { children: [e ? (0, w.jsx)(p, {
		tone: i ? `accent` : `neutral`,
		size: `sm`,
		children: e
	}) : null, t ? (0, w.jsx)(`code`, {
		className: `min-w-0 font-mono text-caption text-muted [overflow-wrap:anywhere]`,
		children: t
	}) : null] }), [
		e,
		t,
		i
	]), l = (0, C.useMemo)(() => n ?? (r ? (0, w.jsx)(`span`, {
		className: `italic`,
		children: r
	}) : null), [n, r]);
	return (0, w.jsx)(V, {
		...s,
		detail: c,
		description: l,
		clampDescription: o,
		isOn: i,
		onOnChange: a
	});
}
var Se = i(`status.ok`), Ce = i(`status.warning`), we = i(`status.danger`), Te = {
	sm: {
		box: `size-12`,
		text: `text-caption`,
		stroke: 9
	},
	md: {
		box: `size-20`,
		text: `text-title`,
		stroke: 8
	},
	lg: {
		box: `size-28`,
		text: `text-heading`,
		stroke: 7
	}
}, Ee = {
	good: `stroke-ok`,
	fair: `stroke-warn`,
	poor: `stroke-danger`
}, De = {
	good: `text-ok`,
	fair: `text-warn`,
	poor: `text-danger`
}, Oe = {
	good: Se,
	fair: Ce,
	poor: we
}, H = 42, U = 2 * Math.PI * H;
function ke(e, t = {
	good: 90,
	fair: 60
}) {
	return e >= t.good ? `good` : e >= t.fair ? `fair` : `poor`;
}
function W({ value: e, label: t, valueText: n, gradeLabels: i, thresholds: a, size: o = `md`, className: s }) {
	let c = Math.min(100, Math.max(0, e)), l = ke(c, a), u = Te[o], d = (0, C.useMemo)(() => ({ strokeDasharray: `${c / 100 * U} ${U}` }), [c]), f = Oe[l], p = n ?? (i ? `${Math.round(c)}, ${i[l]}` : void 0);
	return (0, w.jsxs)(ie, {
		value: c,
		"aria-label": t,
		...p === void 0 ? {} : { valueLabel: p },
		"data-grade": l,
		className: r(`inline-flex flex-col items-center gap-1`, s),
		children: [(0, w.jsxs)(`span`, {
			className: r(`relative grid shrink-0 place-items-center`, u.box),
			children: [(0, w.jsxs)(`svg`, {
				"data-sk-drawn": `chart`,
				viewBox: `0 0 100 100`,
				"aria-hidden": !0,
				focusable: `false`,
				className: `absolute inset-0 size-full -rotate-90`,
				children: [(0, w.jsx)(`circle`, {
					cx: `50`,
					cy: `50`,
					r: H,
					fill: `none`,
					strokeWidth: u.stroke,
					className: `stroke-sunken forced-colors:stroke-[GrayText]`
				}), (0, w.jsx)(`circle`, {
					cx: `50`,
					cy: `50`,
					r: H,
					fill: `none`,
					strokeWidth: u.stroke,
					strokeLinecap: `round`,
					style: d,
					className: r(`transition-[stroke-dasharray] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none in-[.a11y-reduce-motion]:transition-none forced-colors:stroke-[CanvasText]`, Ee[l])
				})]
			}), (0, w.jsx)(`span`, {
				"aria-hidden": !0,
				className: r(`relative font-bold text-fg tabular-nums`, u.text),
				children: Math.round(c)
			})]
		}), i ? (0, w.jsxs)(`span`, {
			"aria-hidden": !0,
			className: r(`inline-flex items-center gap-1 text-caption font-medium`, De[l]),
			children: [(0, w.jsx)(f, { className: `size-3.5 shrink-0` }), i[l]]
		}) : null]
	});
}
var G = `text-start outline-hidden after:absolute after:inset-0 after:rounded-lg after:content-[""] data-hovered:underline data-hovered:underline-offset-2 cursor-pointer`;
function Ae({ title: e, command: t, description: n, clampDescription: i = !0, badges: a, status: o, onOpen: c, href: l, isSelected: u, onSelectedChange: d, selectLabel: f, headingLevel: p = 3, className: m, ...h }) {
	let g = (0, C.useId)(), _ = n ? { "aria-describedby": g } : {}, v = e;
	l ? v = (0, w.jsx)(y, {
		href: l,
		..._,
		className: G,
		children: e
	}) : c && (v = (0, w.jsx)(s, {
		onPress: c,
		..._,
		className: G,
		children: e
	}));
	let b = !!(l || c);
	return (0, w.jsxs)(`article`, {
		...h,
		className: r(`relative flex min-w-0 flex-col gap-2 rounded-lg border border-border bg-surface p-4 text-body text-fg transition-[box-shadow,border-color] duration-(--sk-duration-fast) motion-reduce:transition-none`, b && `hover:border-border-strong hover:shadow-md`, `has-data-focus-visible:outline-solid has-data-focus-visible:outline-(length:--sk-focus-width) has-data-focus-visible:outline-offset-(--sk-focus-offset) has-data-focus-visible:outline-focus`, u && `border-accent shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:border-[Highlight]`, m),
		children: [
			(0, w.jsxs)(`div`, {
				className: `flex min-w-0 items-start gap-2`,
				children: [
					d && f ? (0, w.jsx)(se, {
						label: f,
						isSelected: !!u,
						onChange: d
					}) : null,
					(0, C.createElement)(`h${p}`, { className: `min-w-0 flex-1 pt-0.5 font-semibold [overflow-wrap:anywhere]` }, v),
					o ? (0, w.jsx)(`span`, {
						className: `relative z-10 shrink-0`,
						children: o
					}) : null
				]
			}),
			t ? (0, w.jsx)(`code`, {
				className: `min-w-0 font-mono text-caption text-muted [overflow-wrap:anywhere]`,
				children: t
			}) : null,
			n ? (0, w.jsx)(`p`, {
				id: g,
				className: r(`text-caption leading-relaxed text-muted [overflow-wrap:anywhere]`, i && `line-clamp-3`),
				children: n
			}) : null,
			a ? (0, w.jsx)(`div`, {
				className: `relative z-10 mt-auto flex min-w-0 flex-wrap items-center gap-1 pt-1`,
				children: a
			}) : null
		]
	});
}
var je = [
	[[24, `accent`], [40, `text`]],
	[
		[10, `muted`],
		[30, `text`],
		[20, `accent`]
	],
	[[10, `muted`], [52, `text`]],
	[[30, `accent`], [22, `text`]]
], Me = {
	accent: 1,
	text: .7,
	muted: .2
};
function Ne({ colors: e, size: t }) {
	let n = (0, C.useMemo)(() => ({
		root: { backgroundColor: e.background },
		side: { backgroundColor: e.sidebar },
		bar: { backgroundColor: e.accent },
		dim: {
			backgroundColor: e.text,
			opacity: .25
		},
		lines: je.map((t) => t.map(([t, n]) => ({
			width: `${t}%`,
			backgroundColor: n === `accent` ? e.accent : e.text,
			opacity: Me[n]
		})))
	}), [e]);
	return (0, w.jsxs)(`span`, {
		"aria-hidden": !0,
		style: n.root,
		className: r(`grid grid-cols-[1.625rem_1fr] overflow-hidden forced-color-adjust-none`, t === `md` ? `h-22` : `h-14`),
		children: [(0, w.jsxs)(`span`, {
			style: n.side,
			className: `flex flex-col gap-1.5 px-1.5 py-2.5`,
			children: [
				(0, w.jsx)(`span`, {
					style: n.bar,
					className: `h-2 rounded-xs`
				}),
				(0, w.jsx)(`span`, {
					style: n.dim,
					className: `h-2 rounded-xs`
				}),
				(0, w.jsx)(`span`, {
					style: n.dim,
					className: `h-2 rounded-xs`
				})
			]
		}), (0, w.jsx)(`span`, {
			className: `flex flex-col gap-1.5 overflow-hidden p-3`,
			children: n.lines.map((e, t) => (0, w.jsx)(`span`, {
				className: `flex gap-1`,
				children: e.map((e, t) => (0, w.jsx)(`span`, {
					style: e,
					className: `h-1.5 rounded-sm`
				}, `cell-${String(t)}`))
			}, `row-${String(t)}`))
		})]
	});
}
var K = `flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface text-start text-body text-fg`;
function q({ colors: e, name: t, meta: n, size: i = `md`, onPress: o, isSelected: s = !1, selectedLabel: c, isDisabled: l, className: u }) {
	let d = (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(Ne, {
		colors: e,
		size: i
	}), (0, w.jsxs)(`span`, {
		className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-t border-border px-3 py-2`,
		children: [
			(0, w.jsx)(`span`, {
				className: `min-w-0 flex-1 basis-24 font-medium [overflow-wrap:anywhere]`,
				children: t
			}),
			` `,
			s && c ? (0, w.jsxs)(w.Fragment, { children: [(0, w.jsxs)(`span`, {
				className: `inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-caption font-medium text-accent-text`,
				children: [(0, w.jsx)(a, {
					name: `action.check`,
					"aria-hidden": !0,
					className: `size-3`
				}), c]
			}), ` `] }) : null,
			n ? (0, w.jsx)(`span`, {
				className: `flex shrink-0 flex-wrap items-center gap-1 text-caption text-muted`,
				children: n
			}) : null
		]
	})] });
	return o ? (0, w.jsx)(ae, {
		isSelected: s,
		onChange: o,
		...l === void 0 ? {} : { isDisabled: l },
		className: r(K, `cursor-pointer p-0 transition-[transform,box-shadow,border-color] duration-(--sk-duration-fast) motion-safe:data-hovered:-translate-y-0.5 data-hovered:shadow-md in-[.a11y-reduce-motion]:data-hovered:translate-y-0`, `data-selected:border-accent data-selected:shadow-[0_0_0_3px_var(--sk-accent-soft)] forced-colors:data-selected:border-[Highlight] forced-colors:data-selected:border-2`, `outline-offset-(--sk-focus-offset) data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`, `data-disabled:cursor-not-allowed data-disabled:opacity-50`, u),
		children: d
	}) : (0, w.jsx)(`figure`, {
		className: r(K, `m-0`, u),
		children: d
	});
}
var Pe = e({ default: () => Je }), J = {
	running: `Running`,
	starting: `Starting`,
	restarting: `Restarting`,
	paused: `Paused`,
	stopped: `Stopped`,
	exited: `Crashed`,
	unhealthy: `Unhealthy`
}, Y = [
	{
		id: `web`,
		name: `web`,
		container: `docs-web-1`,
		state: `running`,
		image: `node:26-alpine`,
		status: `Up 3 hours`,
		ports: [{
			host: 5173,
			container: 5173
		}],
		stats: `2.4% · 128 MiB (3.1%)`,
		badges: [{
			tone: `ok`,
			label: `Healthy`
		}]
	},
	{
		id: `db`,
		name: `db`,
		container: `docs-db-1`,
		state: `unhealthy`,
		image: `postgres:18`,
		status: `Up 12 minutes`,
		ports: [{
			host: 5432,
			container: 5432
		}],
		badges: [{
			tone: `danger`,
			label: `Unhealthy`
		}]
	},
	{
		id: `worker`,
		name: `worker`,
		container: `docs-worker-1`,
		state: `exited`,
		image: `registry.example.com/docs/worker-with-a-long-image-name:2026.11.08-build.4512`,
		status: `Exited 2 minutes ago`,
		badges: [{
			tone: `danger`,
			label: `Exit code 137`
		}]
	},
	{
		id: `cache`,
		name: `cache`,
		container: `docs-cache-1`,
		state: `paused`,
		image: `valkey:9`,
		status: `Paused`,
		ports: [{
			host: 6379,
			container: 6379
		}, {
			host: 5353,
			container: 53,
			protocol: `udp`
		}]
	},
	{
		id: `mail`,
		name: `mail`,
		container: `docs-mail-1`,
		state: `stopped`,
		image: `axllent/mailpit`,
		status: `Stopped`
	}
];
function Fe() {
	let [e, t] = (0, C.useState)(Y), [n, r] = (0, C.useState)(null), [i, s] = (0, C.useState)(null), c = (e, n, i) => {
		r(e.id), setTimeout(() => {
			r(null), t(n === `remove` ? (t) => t.filter((t) => t.id !== e.id) : (t) => t.map((t) => t.id === e.id ? {
				...t,
				state: n,
				badges: [],
				status: n === `running` ? `Up 1 second` : J[n]
			} : t)), s({
				tone: `ok`,
				text: i
			});
		}, 800);
	};
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-3`,
		children: [
			i ? (0, w.jsx)(o, {
				tone: i.tone,
				toneLabel: i.tone === `ok` ? `Success` : `Error`,
				title: i.text,
				live: `polite`,
				onDismiss: () => s(null),
				dismissLabel: `Close message`
			}) : null,
			(0, w.jsx)(f, {
				"aria-label": `Containers of docs`,
				items: e,
				emptyState: `No containers. Start one with docker compose up.`,
				bordered: !0,
				children: (e) => {
					let t = e.state === `running` || e.state === `restarting` || e.state === `unhealthy`, r = n === e.id;
					return (0, w.jsx)(L, {
						id: e.id,
						name: e.name,
						secondaryName: e.container,
						state: e.state,
						stateLabel: J[e.state],
						image: e.image,
						status: e.status,
						ports: (e.ports ?? []).map((e) => e.protocol ? e : {
							host: e.host,
							container: e.container,
							href: `#port-${e.host}`,
							label: `Open in the browser`
						}),
						...e.stats ? { stats: e.stats } : {},
						badges: e.badges?.map((e) => (0, w.jsx)(p, {
							tone: e.tone,
							size: `sm`,
							children: e.label
						}, e.label)),
						isBusy: r,
						busyLabel: `Working on ${e.name}`,
						actions: (0, w.jsxs)(w.Fragment, { children: [
							e.state === `exited` || e.state === `unhealthy` ? (0, w.jsxs)(l, {
								variant: `outline`,
								size: `sm`,
								isDisabled: r,
								children: [(0, w.jsx)(a, {
									name: `agent.bot`,
									"aria-hidden": !0
								}), `Fix with the agent`]
							}) : null,
							t ? (0, w.jsx)(u, {
								label: `Open a shell in ${e.name}`,
								size: `sm`,
								isDisabled: r,
								children: (0, w.jsx)(a, {
									name: `code.terminal`,
									"aria-hidden": !0
								})
							}) : null,
							(0, w.jsx)(u, {
								label: `Logs of ${e.name}`,
								size: `sm`,
								children: (0, w.jsx)(a, {
									name: `content.log`,
									"aria-hidden": !0
								})
							}),
							e.state === `paused` ? (0, w.jsx)(u, {
								label: `Resume ${e.name}`,
								size: `sm`,
								isDisabled: r,
								onPress: () => c(e, `running`, `${e.name} resumed.`),
								children: (0, w.jsx)(a, {
									name: `media.play`,
									"aria-hidden": !0
								})
							}) : t ? (0, w.jsx)(u, {
								label: `Pause ${e.name}`,
								size: `sm`,
								isDisabled: r,
								onPress: () => c(e, `paused`, `${e.name} paused.`),
								children: (0, w.jsx)(a, {
									name: `media.pause`,
									"aria-hidden": !0
								})
							}) : null,
							(0, w.jsx)(u, {
								label: `Restart ${e.name}`,
								size: `sm`,
								isDisabled: r || e.state === `paused`,
								onPress: () => c(e, `running`, `${e.name} restarted.`),
								children: (0, w.jsx)(a, {
									name: `action.retry`,
									"aria-hidden": !0
								})
							}),
							t || e.state === `paused` ? (0, w.jsx)(u, {
								label: `Stop ${e.name}`,
								size: `sm`,
								isDisabled: r,
								onPress: () => c(e, `stopped`, `${e.name} stopped.`),
								children: (0, w.jsx)(a, {
									name: `status.unchecked`,
									"aria-hidden": !0
								})
							}) : (0, w.jsx)(u, {
								label: `Start ${e.name}`,
								size: `sm`,
								isDisabled: r,
								onPress: () => c(e, `running`, `${e.name} started.`),
								children: (0, w.jsx)(a, {
									name: `media.play`,
									"aria-hidden": !0
								})
							}),
							(0, w.jsx)(u, {
								label: `Remove ${e.name}`,
								size: `sm`,
								variant: `danger`,
								isDisabled: r,
								onPress: () => c(e, `remove`, `${e.name} removed.`),
								children: (0, w.jsx)(a, {
									name: `action.delete`,
									"aria-hidden": !0
								})
							})
						] })
					});
				}
			}),
			(0, w.jsx)(l, {
				variant: `ghost`,
				size: `sm`,
				className: `self-start`,
				onPress: () => t(Y),
				children: `Reset the demo`
			})
		]
	});
}
var X = [
	{
		id: `up`,
		label: `Up`,
		icon: (0, w.jsx)(a, {
			name: `media.play`,
			"aria-hidden": !0
		}),
		variant: `primary`
	},
	{
		id: `restart`,
		label: `Restart`,
		icon: (0, w.jsx)(a, {
			name: `action.retry`,
			"aria-hidden": !0
		})
	},
	{
		id: `pull`,
		label: `Pull`,
		icon: (0, w.jsx)(a, {
			name: `action.download`,
			"aria-hidden": !0
		})
	},
	{
		id: `down`,
		label: `Down`,
		icon: (0, w.jsx)(a, {
			name: `status.unchecked`,
			"aria-hidden": !0
		}),
		variant: `danger`,
		confirm: {
			title: `Stop and remove the containers?`,
			body: `docker compose down stops the containers of this project and removes them. Volumes stay.`,
			confirmLabel: `Stop and remove`,
			cancelLabel: `Cancel`
		}
	}
];
function Ie() {
	let [e, t] = (0, C.useState)(null), [n, r] = (0, C.useState)(``), i = (e, n) => new Promise((i) => {
		t({
			fileId: e,
			actionId: n
		}), setTimeout(() => {
			t(null), r(`docker compose ${n} finished for ${e}.`), i();
		}, 900);
	});
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-3`,
		children: [
			(0, w.jsx)(M, {
				title: `Compose in this project`,
				files: [{
					id: `docs`,
					file: `compose.yaml`,
					project: `Project docs`
				}, {
					id: `docs-test`,
					file: `deploy/compose.test.yaml`,
					project: `Project docs-test`
				}],
				actions: X,
				onAction: i,
				pending: e,
				pendingLabel: `Running`
			}),
			(0, w.jsx)(`output`, {
				className: `text-caption text-muted`,
				children: n
			}),
			(0, w.jsx)(M, {
				title: `Compose in a project with no file`,
				headingLevel: 4,
				files: [],
				actions: X,
				onAction: i,
				emptyState: `No compose file in this project. Add compose.yaml to manage its services here.`
			})
		]
	});
}
function Le() {
	let [e, t] = (0, C.useState)(``);
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-2`,
		children: [(0, w.jsxs)(f, {
			"aria-label": `Recent alerts`,
			emptyState: `No alerts in the last 24 hours.`,
			children: [
				(0, w.jsx)(j, {
					id: `1`,
					tone: `danger`,
					toneLabel: `Error`,
					title: `worker crashed with exit code 137`,
					meta: `docs · 2 min ago`,
					kindLabel: `Out of memory`,
					onAction: () => t(`worker`)
				}),
				(0, w.jsx)(j, {
					id: `2`,
					tone: `warn`,
					toneLabel: `Warning`,
					title: `db failed its health check three times`,
					meta: `docs · 12 min ago`,
					kindLabel: `Unhealthy`,
					onAction: () => t(`db`)
				}),
				(0, w.jsx)(j, {
					id: `3`,
					tone: `danger`,
					toneLabel: `Error`,
					title: `api restarted 5 times in 2 minutes`,
					meta: `search · 1 h ago`,
					kindLabel: `Restart loop`,
					onAction: () => t(`api`)
				}),
				(0, w.jsx)(j, {
					id: `4`,
					tone: `ok`,
					toneLabel: `Success`,
					title: `db is healthy again`,
					meta: `docs · 3 h ago`,
					kindLabel: `Recovered`,
					onAction: () => t(`db`)
				})
			]
		}), (0, w.jsx)(`output`, {
			className: `text-caption text-muted`,
			children: e ? `Showing the container ${e}.` : ``
		})]
	});
}
var Re = {
	critical: `Critical`,
	high: `High`,
	medium: `Medium`,
	low: `Low`,
	info: `Info`
}, Z = [
	{
		id: `f1`,
		severity: `critical`,
		title: `API key in source code`,
		rule: `secret/generic-api-key`,
		location: `src/lib/tokens.ts:14`
	},
	{
		id: `f2`,
		severity: `high`,
		title: `Form field has no label`,
		rule: `label`,
		location: `#signup > form > input:nth-child(2)`
	},
	{
		id: `f3`,
		severity: `medium`,
		title: `Text contrast is 3.9:1, below 4.5:1`,
		rule: `color-contrast`,
		location: `.release-card > p.muted`
	},
	{
		id: `f4`,
		severity: `low`,
		title: `Page has no meta description`,
		rule: `meta-description`,
		location: `https://docs.example.com/guides/a-very-long-guide-slug-for-the-autumn-release`
	},
	{
		id: `f5`,
		severity: `info`,
		title: `Images could be served as AVIF`,
		rule: `modern-image-formats`,
		location: `public/hero.png`
	}
];
function Q() {
	let [e, t] = (0, C.useState)(new Set()), [n, r] = (0, C.useState)(Z[1]), i = e === `all` ? Z.length : e.size;
	return (0, w.jsxs)(`div`, {
		className: `@container flex max-w-4xl flex-col gap-4`,
		children: [(0, w.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-4`,
			children: [
				(0, w.jsx)(W, {
					value: 72,
					label: `Accessibility score`,
					gradeLabels: {
						good: `Good`,
						fair: `Fair`,
						poor: `Poor`
					}
				}),
				(0, w.jsxs)(`div`, {
					className: `flex min-w-0 flex-1 basis-48 flex-col gap-1`,
					children: [(0, w.jsx)(`strong`, {
						className: `font-mono text-body [overflow-wrap:anywhere]`,
						children: `http://localhost:5173`
					}), (0, w.jsx)(`span`, {
						className: `text-caption text-muted`,
						children: `5 findings · 3.4 s`
					})]
				}),
				(0, w.jsxs)(l, {
					size: `sm`,
					isDisabled: i === 0,
					children: [(0, w.jsx)(a, {
						name: `agent.bot`,
						"aria-hidden": !0
					}), `Fix with the agent (${i})`]
				})
			]
		}), (0, w.jsxs)(`div`, {
			className: `grid gap-4 @3xl:grid-cols-[minmax(0,1fr)_18rem]`,
			children: [(0, w.jsx)(f, {
				"aria-label": `Findings`,
				items: Z,
				selectionMode: `multiple`,
				selectedKeys: e,
				onSelectionChange: t,
				onAction: (e) => r(Z.find((t) => t.id === e)),
				emptyState: `Nothing found in this filter.`,
				children: (e) => (0, w.jsx)(R, {
					id: e.id,
					severity: e.severity,
					severityLabel: Re[e.severity],
					title: e.title,
					rule: e.rule,
					location: e.location,
					selectLabel: `Select`
				})
			}), (0, w.jsx)(`section`, {
				"aria-label": `Finding details`,
				className: `flex flex-col gap-2 rounded-lg border border-border bg-surface p-4 text-body`,
				children: n ? (0, w.jsxs)(w.Fragment, { children: [
					(0, w.jsx)(`h4`, {
						className: `font-semibold`,
						children: n.title
					}),
					(0, w.jsx)(`code`, {
						className: `font-mono text-caption text-muted [overflow-wrap:anywhere]`,
						children: n.location
					}),
					(0, w.jsx)(`p`, {
						className: `text-caption text-muted`,
						children: `Press Enter on a finding to show it here. Select several and send them to an agent in one go.`
					})
				] }) : (0, w.jsx)(`p`, {
					className: `text-caption text-muted`,
					children: `Pick a finding to see its details and the suggested fix.`
				})
			})]
		})]
	});
}
var ze = [
	{
		id: `figma`,
		title: `Figma`,
		identifier: `figma@official`,
		version: `1.4.0`,
		scope: `User`,
		description: `Reads designs, variables and components from Figma files and turns them into code that fits the project.`,
		enabled: !0
	},
	{
		id: `design`,
		title: `Frontend design`,
		identifier: `frontend-design@official`,
		version: `0.9.2`,
		scope: `Project`,
		description: `Guidance for interfaces with a clear direction, typography that fits and layouts that do not look like a template.`,
		enabled: !1
	},
	{
		id: `long`,
		title: `Accessibility checks with a name long enough to wrap on a narrow screen`,
		identifier: `a11y-checks@community-catalogue`,
		version: `2.0.0-beta.3`,
		scope: `Local`,
		description: `Runs axe-core and keyboard checks on the page in the preview and reports what fails with the selector, the rule and a suggested fix, ranked by how much it matters to people who use assistive technology.`,
		enabled: !0
	}
];
function Be() {
	let [e, t] = (0, C.useState)(ze), [n, r] = (0, C.useState)(null), [i, s] = (0, C.useState)(``), c = (e, n) => {
		r(e.id), setTimeout(() => {
			r(null), t((t) => t.map((t) => t.id === e.id ? {
				...t,
				enabled: n
			} : t)), s(n ? `${e.title} is on. It works from the next session.` : `${e.title} is off.`);
		}, 700);
	};
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-3`,
		children: [
			i ? (0, w.jsx)(o, {
				tone: `ok`,
				toneLabel: `Success`,
				title: i,
				live: `polite`,
				onDismiss: () => s(``),
				dismissLabel: `Close message`
			}) : null,
			(0, w.jsx)(f, {
				"aria-label": `Installed plugins`,
				items: e,
				emptyState: `No plugins yet. Start with one of the suggestions below.`,
				children: (e) => (0, w.jsx)(be, {
					id: e.id,
					title: e.title,
					identifier: e.identifier,
					version: e.version,
					versionLabel: `Version`,
					badges: (0, w.jsx)(p, {
						size: `sm`,
						children: e.scope
					}),
					description: e.description,
					isEnabled: e.enabled,
					onEnabledChange: (t) => c(e, t),
					switchLabel: `Enable ${e.title}`,
					isBusy: n === e.id,
					busyLabel: `Updating ${e.title}`,
					actions: (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(u, {
						label: `Repository of ${e.title}`,
						size: `sm`,
						children: (0, w.jsx)(a, {
							name: `action.external`,
							"aria-hidden": !0
						})
					}), (0, w.jsx)(u, {
						label: `Uninstall ${e.title}`,
						size: `sm`,
						variant: `danger`,
						onPress: () => t((t) => t.filter((t) => t.id !== e.id)),
						children: (0, w.jsx)(a, {
							name: `action.delete`,
							"aria-hidden": !0
						})
					})] })
				})
			}),
			(0, w.jsx)(f, {
				"aria-label": `Plugins loading`,
				isLoading: !0,
				loadingLabel: `Reading the plugin catalogue`,
				children: []
			})
		]
	});
}
function Ve() {
	let [e, t] = (0, C.useState)([
		{
			id: `style`,
			title: `Commit style`,
			mode: `Always`,
			pattern: ``,
			description: `Write commit messages in English with Conventional Commits and no trailers.`,
			active: !0
		},
		{
			id: `ts`,
			title: `TypeScript`,
			mode: `For matching files`,
			pattern: `src/**/*.{ts,tsx}`,
			description: `Strict types, no any, imports with the .js extension.`,
			active: !1
		},
		{
			id: `tests`,
			title: `Tests`,
			mode: `When relevant`,
			pattern: ``,
			description: ``,
			active: !1
		}
	]);
	return (0, w.jsx)(f, {
		"aria-label": `Project rules`,
		items: e,
		className: `max-w-3xl`,
		children: (e) => (0, w.jsx)(xe, {
			id: e.id,
			title: e.title,
			mode: e.active ? `Always` : e.mode,
			...e.pattern ? { pattern: e.pattern } : {},
			description: e.description || void 0,
			emptyDescription: `No description`,
			isActive: e.active,
			onActiveChange: (n) => t((t) => t.map((t) => t.id === e.id ? {
				...t,
				active: n
			} : t)),
			switchLabel: `Always apply: ${e.title}`,
			actions: (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(u, {
				label: `Edit ${e.title}`,
				size: `sm`,
				children: (0, w.jsx)(a, {
					name: `action.edit`,
					"aria-hidden": !0
				})
			}), (0, w.jsx)(u, {
				label: `Delete ${e.title}`,
				size: `sm`,
				variant: `danger`,
				onPress: () => t((t) => t.filter((t) => t.id !== e.id)),
				children: (0, w.jsx)(a, {
					name: `action.delete`,
					"aria-hidden": !0
				})
			})] })
		})
	});
}
var He = [
	{
		id: `design`,
		title: `Frontend design`,
		command: `/frontend-design`,
		category: `Design`,
		installed: 2,
		description: `Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one.`
	},
	{
		id: `review`,
		title: `Code review`,
		command: `/code-review`,
		category: `Quality`,
		installed: 0,
		description: `Reviews the current diff for correctness bugs, then for simpler and faster ways to write the same thing.`
	},
	{
		id: `a11y`,
		title: `Accessibility review with a long title`,
		command: `/accessibility-review-and-report`,
		category: `Quality`,
		installed: 1,
		description: `Audits a page against WCAG 2.2 AA: contrast, keyboard paths, names and roles, target sizes and reflow, then writes a short report with fixes ranked by impact on the people who rely on them every day.`
	}
];
function Ue() {
	let [e, t] = (0, C.useState)(new Set()), [n, r] = (0, C.useState)(``);
	return (0, w.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, w.jsxs)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: [(0, w.jsxs)(l, {
				size: `sm`,
				isDisabled: e.size === 0,
				children: [(0, w.jsx)(a, {
					name: `action.download`,
					"aria-hidden": !0
				}), `Install ${e.size} selected`]
			}), (0, w.jsx)(`output`, {
				className: `text-caption text-muted`,
				children: n
			})]
		}), (0, w.jsx)(`div`, {
			className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))] gap-3`,
			children: He.map((n) => (0, w.jsx)(Ae, {
				title: n.title,
				command: n.command,
				description: n.description,
				status: n.installed > 0 ? (0, w.jsx)(p, {
					tone: `ok`,
					size: `sm`,
					children: `Installed in ${n.installed}`
				}) : void 0,
				badges: (0, w.jsx)(p, {
					tone: `accent`,
					size: `sm`,
					children: n.category
				}),
				onOpen: () => r(`Opened ${n.title}.`),
				isSelected: e.has(n.id),
				onSelectedChange: (e) => t((t) => {
					let r = new Set(t);
					return e ? r.add(n.id) : r.delete(n.id), r;
				}),
				selectLabel: `Select ${n.title}`
			}, n.id))
		})]
	});
}
function We() {
	let [e, t] = (0, C.useState)(`idle`), [n, r] = (0, C.useState)(``), [i, a] = (0, C.useState)(0), o = (e) => {
		t(`running`), a(Date.now()), r(``), [
			`==> Fetching gh`,
			`==> Downloading https://ghcr.io/v2/homebrew/core/gh/blobs/sha256:4f1c…`,
			`==> Pouring gh--2.83.0.arm64_sequoia.bottle.tar.gz`
		].forEach((e, t) => setTimeout(() => r(e), 500 * (t + 1))), setTimeout(() => t(e ? `failed` : `done`), 2200);
	};
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-xl flex-col gap-4 rounded-lg border border-border bg-surface p-4`,
		children: [
			(0, w.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2`,
				children: [
					(0, w.jsx)(z, {
						isPending: e === `running`,
						pendingChildren: `Installing…`,
						pendingLabel: `Installing GitHub CLI`,
						isInstalled: e === `done`,
						installedLabel: `GitHub CLI is installed`,
						onPress: () => o(!1),
						children: `Install GitHub CLI`
					}),
					(0, w.jsx)(z, {
						kind: `login`,
						variant: `outline`,
						onPress: () => o(!0),
						isDisabled: e === `running`,
						children: `Sign in (fails in this demo)`
					}),
					e === `done` || e === `failed` ? (0, w.jsx)(l, {
						variant: `ghost`,
						size: `sm`,
						onPress: () => t(`idle`),
						children: `Start again`
					}) : null
				]
			}),
			e === `idle` ? null : (0, w.jsx)(ye, {
				label: `Installing GitHub CLI`,
				state: e,
				line: n,
				idleLine: `Starting the installer…`,
				startedAt: i,
				doneLabel: `GitHub CLI is installed`,
				failedLabel: `The command ended with code 1`,
				failedDetail: `Open the terminal to see the full output, then try again.`
			}),
			(0, w.jsx)(B, {
				summary: `Details`,
				command: `brew install gh`,
				copy: {
					label: `Copy the command`,
					copiedLabel: `Copied`,
					failedLabel: `Copy failed. Select the text and press Ctrl+C.`
				}
			}),
			(0, w.jsx)(B, {
				summary: `Details for Windows`,
				emptyText: `Installs from the vendor's site in your browser.`
			})
		]
	});
}
var $ = [
	{
		id: `skribly-light`,
		name: `Skribly Light`,
		source: `Built in`,
		colors: {
			background: `oklch(0.99 0 0)`,
			sidebar: `oklch(0.95 0.005 260)`,
			text: `oklch(0.25 0.02 260)`,
			accent: `oklch(0.55 0.15 50)`
		}
	},
	{
		id: `skribly-dark`,
		name: `Skribly Dark`,
		source: `Built in`,
		colors: {
			background: `oklch(0.2 0.01 260)`,
			sidebar: `oklch(0.16 0.01 260)`,
			text: `oklch(0.9 0.01 260)`,
			accent: `oklch(0.75 0.14 60)`
		}
	},
	{
		id: `night`,
		name: `Night Owl`,
		source: `Extension`,
		colors: {
			background: `oklch(0.2 0.05 250)`,
			sidebar: `oklch(0.17 0.05 250)`,
			text: `oklch(0.85 0.05 230)`,
			accent: `oklch(0.75 0.15 320)`
		}
	},
	{
		id: `paper`,
		name: `Paper with a long theme name that wraps`,
		source: `Extension`,
		colors: {
			background: `oklch(0.96 0.02 90)`,
			sidebar: `oklch(0.92 0.03 90)`,
			text: `oklch(0.3 0.02 60)`,
			accent: `oklch(0.5 0.12 150)`
		}
	}
];
function Ge() {
	let [e, t] = (0, C.useState)(`skribly-dark`);
	return (0, w.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, w.jsx)(`div`, {
			className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,12.5rem),1fr))] gap-3`,
			children: $.map((n) => (0, w.jsx)(q, {
				name: n.name,
				colors: n.colors,
				meta: (0, w.jsx)(p, {
					size: `sm`,
					children: n.source
				}),
				onPress: () => t(n.id),
				isSelected: e === n.id,
				selectedLabel: `Selected`
			}, n.id))
		}), (0, w.jsx)(`div`, {
			className: `flex max-w-xs`,
			children: (0, w.jsx)(q, {
				name: `Current: Skribly Dark`,
				colors: $[1]?.colors ?? {
					background: `black`,
					sidebar: `black`,
					text: `white`,
					accent: `orange`
				},
				size: `sm`
			})
		})]
	});
}
function Ke() {
	let [e, t] = (0, C.useState)(!1), [n, r] = (0, C.useState)(!1);
	return (0, w.jsxs)(`div`, {
		className: `flex max-w-3xl flex-col gap-3`,
		children: [
			(0, w.jsx)(N, {
				avatar: (0, w.jsx)(d, {
					kind: `github`,
					size: 36
				}),
				name: `Ada Lovelace`,
				handle: `@ada`,
				status: {
					tone: `ok`,
					label: `Connected`
				},
				badges: (0, w.jsx)(p, {
					size: `sm`,
					children: `GitHub`
				}),
				detail: `https://github.com · 2 e-mail addresses`,
				isBusy: e,
				busyLabel: `Checking the connection`,
				actions: (0, w.jsxs)(w.Fragment, { children: [(0, w.jsxs)(l, {
					variant: `outline`,
					size: `sm`,
					onPress: () => {
						t(!0), setTimeout(() => t(!1), 1e3);
					},
					children: [(0, w.jsx)(a, {
						name: `vcs.repository`,
						"aria-hidden": !0
					}), `Repositories`]
				}), (0, w.jsx)(u, {
					label: `Disconnect Ada Lovelace`,
					size: `sm`,
					variant: `danger`,
					children: (0, w.jsx)(a, {
						name: `action.delete`,
						"aria-hidden": !0
					})
				})] })
			}),
			n ? null : (0, w.jsx)(N, {
				avatar: (0, w.jsx)(d, {
					kind: `gitlab`,
					size: 36
				}),
				name: `Grace Hopper`,
				handle: `@grace`,
				status: {
					tone: `warn`,
					label: `Token missing`
				},
				badges: (0, w.jsx)(p, {
					size: `sm`,
					children: `GitLab`
				}),
				detail: `https://gitlab.example.com/self-managed-instance-with-a-long-address · 1 e-mail address`,
				actions: (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(l, {
					size: `sm`,
					children: `Add a token`
				}), (0, w.jsx)(u, {
					label: `Disconnect Grace Hopper`,
					size: `sm`,
					variant: `danger`,
					onPress: () => r(!0),
					children: (0, w.jsx)(a, {
						name: `action.delete`,
						"aria-hidden": !0
					})
				})] })
			}),
			(0, w.jsx)(N, {
				avatar: (0, w.jsx)(d, {
					kind: `bitbucket`,
					size: 36
				}),
				name: `Alan Turing`,
				handle: `@alan`,
				status: {
					tone: `danger`,
					label: `Sign-in expired`
				},
				actions: (0, w.jsx)(l, {
					size: `sm`,
					children: `Sign in again`
				})
			})
		]
	});
}
var qe = [
	`running`,
	`starting`,
	`restarting`,
	`paused`,
	`stopped`,
	`exited`,
	`unhealthy`
], Je = {
	title: `Ops`,
	description: `Running and tending the tools around the code: containers and compose files, alerts, audit findings with their score, plugins and rules with switches, a catalogue of skills, install and sign-in steps, editor themes and connected accounts. Rows sit in a List from the data group, so arrow keys, typeahead and selection come from React Aria.`,
	pl: {
		title: `Operacje`,
		description: `Uruchamianie i opieka nad narzędziami wokół kodu: kontenery i pliki compose, alerty, ustalenia audytu z wynikiem, wtyczki i reguły z przełącznikami, katalog umiejętności, kroki instalacji i logowania, motywy edytora i połączone konta. Wiersze leżą w List z grupy data, więc klawisze strzałek, wyszukiwanie po wpisaniu i zaznaczanie pochodzą z React Aria.`
	},
	demos: [
		{
			name: `ContainerRow`,
			components: [`ContainerRow`],
			description: `One container with its state, image, uptime, ports, usage and actions. Pick it for a list of containers or services; the demo changes state, shows a busy row and confirms with a polite message.`,
			usage: `<List aria-label={t('docker.containers')} items={containers} emptyState={t('docker.none')}>
  {(c) => (
    <ContainerRow id={c.id} name={c.service} secondaryName={c.name} state={runState(c)}
      stateLabel={t(\`docker.state.\${runState(c)}\`)} image={c.image} status={c.status}
      ports={c.ports.map((p) => ({ host: p.hostPort, container: p.containerPort, href: url(p), label: t('docker.openPort') }))}
      isBusy={busy === c.id} busyLabel={t('docker.working', { name: c.service })}
      actions={<IconButton label={t('docker.restart', { name: c.service })} size="sm" onPress={() => restart(c)}><Icon name="action.retry" aria-hidden /></IconButton>} />
  )}
</List>`,
			accessibility: `The list is one tab stop; arrow keys move between containers and Right reaches the links and buttons in a row. The state is a shaped glyph and a word, never colour alone. Port links start their name with what is seen. A busy row shows a named spinner and its buttons wait. Actions wrap under the text on a narrow row, and every button clears 24px.`,
			pl: {
				description: `Jeden kontener ze stanem, obrazem, czasem działania, portami, użyciem zasobów i akcjami. Wybierz go dla listy kontenerów albo usług; przykład zmienia stan, pokazuje zajęty wiersz i potwierdza komunikatem typu polite.`,
				accessibility: `Lista jest jednym przystankiem w kolejności Tab; klawisze strzałek przesuwają między kontenerami, a strzałka w prawo dociera do linków i przycisków w wierszu. Stan jest znakiem o kształcie i słowem, nigdy samym kolorem. Linki portów zaczynają nazwę od tego, co widać. Zajęty wiersz pokazuje nazwany wskaźnik, a jego przyciski czekają. Akcje zawijają się pod tekst w wąskim wierszu, a każdy przycisk ma co najmniej 24 px.`
			},
			render: () => (0, w.jsx)(Fe, {})
		},
		{
			name: `ToneDot`,
			components: [`ToneDot`],
			description: `The state of anything that runs as a small glyph and a word. Pick it inside rows and headers; use the label even where it is hidden.`,
			usage: `<ToneDot state="running" label={t('state.running')} />
<ToneDot state="exited" label={t('state.crashed')} hideLabel />`,
			accessibility: `Every state has its own shape: full circle, ring, bars, open ring, diamond and triangle. The word is always in the page, visible or for screen readers. States in motion pulse, and stop under reduced motion. The glyph takes the text colour in forced colours.`,
			pl: {
				description: `Stan czegokolwiek, co działa, jako mały znak i słowo. Wybierz go w wierszach i nagłówkach; używaj etykiety, nawet tam, gdzie jest ukryta.`,
				accessibility: `Każdy stan ma własny kształt: pełne koło, pierścień, kreski, otwarty pierścień, romb i trójkąt. Słowo jest zawsze na stronie, widoczne albo dla czytników ekranu. Stany w ruchu pulsują i zatrzymują się przy ograniczonym ruchu. Znak przyjmuje kolor tekstu w trybie wymuszonych kolorów.`
			},
			render: () => (0, w.jsx)(`ul`, {
				className: `flex flex-wrap gap-x-5 gap-y-2`,
				children: qe.map((e) => (0, w.jsx)(`li`, { children: (0, w.jsx)(P, {
					state: e,
					label: J[e]
				}) }, e))
			})
		},
		{
			name: `ComposeBar`,
			components: [`ComposeBar`],
			description: `The compose files of a project with their commands. One command runs at a time, and Down asks first. Pick it above a list of containers.`,
			usage: `<ComposeBar title={t('docker.compose')} files={files} actions={[
    { id: 'up', label: 'Up', icon: <Icon name="media.play" aria-hidden />, variant: 'primary' },
    { id: 'down', label: 'Down', variant: 'danger', confirm: { title: t('docker.downTitle'),
      body: t('docker.downBody'), confirmLabel: t('docker.down'), cancelLabel: t('common.cancel') } }
  ]} onAction={run} pending={pending} pendingLabel={t('common.running')} />`,
			accessibility: `A section named by its heading. The buttons of each file are a group named by the file, so "Up" is never ambiguous. The running button says it is pending and the others wait. Down opens an alert dialog with focus on Cancel. Buttons wrap under the file name on a narrow card.`,
			pl: {
				description: `Pliki compose projektu z ich poleceniami. Naraz działa jedno polecenie, a Down najpierw pyta. Wybierz go nad listą kontenerów.`,
				accessibility: `Sekcja nazwana swoim nagłówkiem. Przyciski każdego pliku są grupą nazwaną przez plik, więc „Up” nigdy nie jest niejednoznaczne. Działający przycisk mówi, że trwa oczekiwanie, a pozostałe czekają. Down otwiera okno dialogowe typu alertdialog z fokusem na Cancel. Przyciski zawijają się pod nazwę pliku na wąskiej karcie.`
			},
			render: () => (0, w.jsx)(Ie, {})
		},
		{
			name: `AlertRow`,
			components: [`AlertRow`],
			description: `A record of an alert that happened, such as a crash or a failed health check, with where and when. Pick it for an alert history; Enter jumps to the source.`,
			usage: "<List aria-label={t('alerts.recent')} items={alerts} emptyState={t('alerts.none')}>\n  {(a) => <AlertRow id={a.id} tone={a.kind === 'unhealthy' ? 'warn' : 'danger'} toneLabel={t(`tone.${tone}`)}\n    title={a.message} meta={`${a.project} · ${ago(a.at)}`} kindLabel={t(`alerts.${a.kind}`)}\n    onAction={() => focus(a.containerId)} />}\n</List>",
			accessibility: `Each tone has its own icon shape and is read as a word before the title. The row is history, not a live alert: announce a new alert with a toast, assertive when it blocks work. Enter runs onAction; meta and badges wrap at large zoom.`,
			pl: {
				description: `Zapis alertu, który się zdarzył, takiego jak awaria albo nieudane sprawdzenie stanu, z miejscem i czasem. Wybierz go dla historii alertów; Enter przechodzi do źródła.`,
				accessibility: `Każdy ton ma własny kształt ikony i jest odczytywany jako słowo przed tytułem. Wiersz jest historią, a nie alertem na żywo: nowy alert ogłoś przez toast, w trybie assertive, gdy blokuje pracę. Enter uruchamia onAction; meta i plakietki zawijają się przy dużym powiększeniu.`
			},
			render: () => (0, w.jsx)(Le, {})
		},
		{
			name: `FindingRow and ScoreBadge`,
			components: [`FindingRow`, `ScoreBadge`],
			description: `Audit results: a score out of 100 with its grade, and findings with severity, rule and place that can be picked to send on together. Pick it for security, accessibility or SEO reports.`,
			usage: `<ScoreBadge value={report.score} label={t('audit.score')} gradeLabels={{ good: t('grade.good'), fair: t('grade.fair'), poor: t('grade.poor') }} />
<List aria-label={t('audit.findings')} items={findings} selectionMode="multiple"
  selectedKeys={picked} onSelectionChange={setPicked} onAction={showDetails}>
  {(f) => <FindingRow id={f.id} severity={f.severity} severityLabel={t(\`severity.\${f.severity}\`)}
    title={f.title} rule={f.rule} location={f.file ?? f.target} selectLabel={t('common.select')} />}
</List>`,
			accessibility: `The score is a meter named by its label and reads the number with the grade word; the grade also shows as an icon and a word, so the ring colour is never the only clue, and it fills without motion under reduced motion. Severity is a word with a glyph that climbs with the level. Each finding has a checkbox named "Select" plus its title; Space selects, Enter shows the details. On a narrow row the place moves under the title and long selectors wrap.`,
			pl: {
				description: `Wyniki audytu: wynik ze 100 z jego oceną oraz ustalenia z poziomem ważności, regułą i miejscem, które można wybrać, aby wysłać razem. Wybierz go dla raportów bezpieczeństwa, dostępności albo SEO.`,
				accessibility: `Wynik jest miernikiem nazwanym przez label i odczytuje liczbę ze słowem oceny; ocena pokazuje się też jako ikona i słowo, więc kolor pierścienia nigdy nie jest jedyną wskazówką, a przy ograniczonym ruchu pierścień wypełnia się bez ruchu. Poziom ważności jest słowem ze znakiem, który rośnie wraz z poziomem. Każde ustalenie ma pole wyboru nazwane „Select” i jego tytułem; Spacja zaznacza, Enter pokazuje szczegóły. W wąskim wierszu miejsce przechodzi pod tytuł, a długie selektory się zawijają.`
			},
			render: () => (0, w.jsx)(Q, {})
		},
		{
			name: `ScoreBadge sizes`,
			components: [`ScoreBadge`],
			description: `Three sizes and the three grades. The thresholds can change, for example for a check where 70 is already good.`,
			usage: `<ScoreBadge value={58} label={t('audit.seo')} size="sm" thresholds={{ good: 80, fair: 50 }} />`,
			accessibility: `Each badge is a named meter. Without gradeLabels it reads its percentage; pass valueText to say it in other words.`,
			pl: {
				description: `Trzy rozmiary i trzy oceny. Progi można zmienić, na przykład dla sprawdzenia, w którym 70 jest już dobre.`,
				accessibility: `Każda plakietka jest nazwanym miernikiem. Bez gradeLabels odczytuje swój procent; przekaż valueText, aby powiedzieć to innymi słowami.`
			},
			render: () => (0, w.jsxs)(`div`, {
				className: `flex flex-wrap items-end gap-6`,
				children: [
					(0, w.jsx)(W, {
						value: 96,
						label: `Security score`,
						size: `sm`
					}),
					(0, w.jsx)(W, {
						value: 64,
						label: `Accessibility score`,
						gradeLabels: {
							good: `Good`,
							fair: `Fair`,
							poor: `Poor`
						}
					}),
					(0, w.jsx)(W, {
						value: 31,
						label: `SEO score`,
						size: `lg`,
						gradeLabels: {
							good: `Good`,
							fair: `Fair`,
							poor: `Poor`
						},
						valueText: `31 out of 100, poor`
					})
				]
			})
		},
		{
			name: `PluginRow`,
			components: [`PluginRow`],
			description: `An installed plugin or server with a switch that takes effect at once, its id, version, scope and description. The second list shows the loading state.`,
			usage: `<List aria-label={t('plugins.installed')} items={plugins} emptyState={t('plugins.none')}>
  {(p) => <PluginRow id={p.id} title={p.title} identifier={p.id} version={p.version} versionLabel={t('common.version')}
    badges={<Badge size="sm">{t(\`scope.\${p.scope}\`)}</Badge>} description={p.description}
    isEnabled={p.enabled} onEnabledChange={(on) => toggle(p, on)} switchLabel={t('plugins.enable', { name: p.title })}
    isBusy={busy === p.id} busyLabel={t('plugins.updating', { name: p.title })} />}
</List>`,
			accessibility: `The switch is named after the plugin and says on or off; it waits while a change runs, with a named spinner beside it. The result is confirmed with a polite message that stays until closed. Right arrow reaches the switch and buttons; the description is clamped on screen only and read whole.`,
			pl: {
				description: `Zainstalowana wtyczka albo serwer z przełącznikiem, który działa od razu, jego id, wersją, zakresem i opisem. Druga lista pokazuje stan ładowania.`,
				accessibility: `Przełącznik jest nazwany wtyczką i mówi włączony albo wyłączony; czeka, gdy zmiana trwa, z nazwanym wskaźnikiem obok. Wynik jest potwierdzany komunikatem typu polite, który zostaje do zamknięcia. Strzałka w prawo dociera do przełącznika i przycisków; opis jest skrócony tylko na ekranie i odczytywany w całości.`
			},
			render: () => (0, w.jsx)(Be, {})
		},
		{
			name: `RuleRow`,
			components: [`RuleRow`],
			description: `An instruction rule with a switch for "always apply", when it applies, its file pattern and description. Pick it for agent or editor rules.`,
			usage: "<RuleRow id={rule.file} title={rule.name} mode={t(`rules.mode.${mode}`)} pattern={rule.globs}\n  description={rule.description} emptyDescription={t('rules.noDescription')}\n  isActive={rule.alwaysApply} onActiveChange={(on) => toggle(rule, on)} switchLabel={t('rules.always', { name: rule.name })} />",
			accessibility: `The switch is named after the rule. The mode is a word in a badge, accented while active. A missing description shows as italic words, not an empty gap. Patterns wrap anywhere so the row never scrolls sideways.`,
			pl: {
				description: `Reguła instrukcji z przełącznikiem „zawsze stosuj”, informacją, kiedy obowiązuje, wzorcem pliku i opisem. Wybierz ją dla reguł agenta albo edytora.`,
				accessibility: `Przełącznik jest nazwany regułą. Tryb jest słowem w plakietce, wyróżnionym akcentem, gdy jest aktywny. Brakujący opis pokazuje się jako słowa kursywą, a nie pusta przerwa. Wzorce zawijają się w dowolnym miejscu, więc wiersz nigdy nie przewija się na boki.`
			},
			render: () => (0, w.jsx)(Ve, {})
		},
		{
			name: `SkillCard`,
			components: [`SkillCard`],
			description: `One skill or template in a catalogue grid, with its command, description, category and install state, and a checkbox to pick several.`,
			usage: `<SkillCard title={s.title} command={\`/\${s.name}\`} description={s.description}
  status={installed > 0 && <Badge tone="ok" size="sm">{t('skills.installedIn', { count: installed })}</Badge>}
  badges={<Badge tone="accent" size="sm">{t(\`category.\${s.category}\`)}</Badge>}
  onOpen={() => open(s)} isSelected={picked.has(s.name)} onSelectedChange={(on) => pick(s, on)}
  selectLabel={t('skills.select', { name: s.title })} />`,
			accessibility: `Each card is an article with a heading. The title is the one button that opens it and covers the card for pointers, with the description as its description; the checkbox is a separate control, so there are no nested buttons. The card shows the focus ring. Selection adds an accent border and a leading rule, and the system highlight in forced colours.`,
			pl: {
				description: `Jedna umiejętność albo szablon w siatce katalogu, z poleceniem, opisem, kategorią i stanem instalacji oraz polem wyboru do zaznaczania kilku.`,
				accessibility: `Każda karta jest elementem article z nagłówkiem. Tytuł jest jedynym przyciskiem, który ją otwiera, i dla wskaźnika pokrywa całą kartę, z opisem jako jego opisem; pole wyboru jest osobną kontrolką, więc nie ma zagnieżdżonych przycisków. Karta pokazuje obwódkę fokusa. Zaznaczenie dodaje ramkę w kolorze akcentu i linię z przodu, a w trybie wymuszonych kolorów wyróżnienie systemowe.`
			},
			render: () => (0, w.jsx)(Ue, {})
		},
		{
			name: `Install`,
			components: [
				`InstallButton`,
				`InstallDetails`,
				`InstallProgress`
			],
			description: `Installing or signing in to a tool with one press: the button, the progress with the last line of output and the time, and the command folded away. Try the second button to see a failure.`,
			usage: `<InstallButton isPending={running} pendingChildren={t('install.running')} pendingLabel={t('install.running')}
  isInstalled={installed} installedLabel={t('install.done', { name })} onPress={install}>{t('install.do', { name })}</InstallButton>
<InstallProgress label={t('install.running')} state={state} line={lastLine} startedAt={started}
  doneLabel={t('install.done', { name })} failedLabel={t('install.failed', { code })} />
<InstallDetails summary={t('common.details')} command={plan.command}
  copy={{ label: t('common.copy'), copiedLabel: t('common.copied'), failedLabel: t('common.copyFailed') }} />`,
			accessibility: `The button keeps focus while pending and says so; once installed it becomes a check and a word. The progress bar is named, the output line and the clock are not live so they never chatter, and the outcome is: success politely, failure assertively, both with an icon and words that stay on screen. The details toggle says whether it is open, and the command wraps in its box.`,
			pl: {
				description: `Instalacja albo logowanie do narzędzia jednym naciśnięciem: przycisk, postęp z ostatnią linią wyjścia i czasem oraz schowane polecenie. Wypróbuj drugi przycisk, aby zobaczyć niepowodzenie.`,
				accessibility: `Przycisk zachowuje fokus w trakcie oczekiwania i o tym mówi; po zainstalowaniu zamienia się w znacznik i słowo. Pasek postępu ma nazwę, linia wyjścia i zegar nie są regionami na żywo, więc nigdy nie paplają, a wynik jest: sukces w trybie polite, niepowodzenie w trybie assertive, oba z ikoną i słowami, które zostają na ekranie. Przełącznik szczegółów mówi, czy jest otwarty, a polecenie zawija się w swoim polu.`
			},
			render: () => (0, w.jsx)(We, {})
		},
		{
			name: `ThemeSwatch`,
			components: [`ThemeSwatch`],
			description: `An editor theme drawn as a little editor in its colours, with its name. With onPress it is a toggle for a grid of themes; without it a static preview.`,
			usage: `<ThemeSwatch name={theme.label} colors={theme.preview} meta={<Badge size="sm">{t(\`source.\${theme.source}\`)}</Badge>}
  onPress={() => pick(theme)} isSelected={theme.id === active} selectedLabel={t('themes.selected')} />`,
			accessibility: `A toggle button named by its visible text, the theme name first, pressed when chosen; the choice also shows as an accent border, a ring, a check and a word, and a thick system border in forced colours. The sketch is hidden from screen readers and keeps its colours in forced colours, as it is a picture of the theme. It lifts on hover only when motion is allowed.`,
			pl: {
				description: `Motyw edytora narysowany jako mały edytor w jego kolorach, z nazwą. Z onPress jest przełącznikiem w siatce motywów; bez niego jest statycznym podglądem.`,
				accessibility: `Przycisk przełączany nazwany swoim widocznym tekstem, nazwą motywu na początku, wciśnięty, gdy wybrany; wybór pokazuje się też jako ramka w kolorze akcentu, pierścień, znacznik i słowo, a w trybie wymuszonych kolorów gruba ramka systemowa. Szkic jest ukryty przed czytnikami ekranu i zachowuje swoje kolory w trybie wymuszonych kolorów, bo jest obrazem motywu. Unosi się po najechaniu tylko wtedy, gdy ruch jest dozwolony.`
			},
			render: () => (0, w.jsx)(Ge, {})
		},
		{
			name: `ConnectionCard`,
			components: [`ConnectionCard`],
			description: `A connected account or service: who, its state, a quiet detail and actions. Pick it for Git hosts, trackers or any integration settings.`,
			usage: `<ConnectionCard avatar={<VcsBadge kind={a.kind} size={36} />} name={a.name} handle={\`@\${a.login}\`}
  status={a.hasSecret ? { tone: 'ok', label: t('accounts.connected') } : { tone: 'warn', label: t('accounts.noToken') }}
  detail={a.url} actions={<Button size="sm" onPress={() => browse(a)}>{t('accounts.repositories')}</Button>} />`,
			accessibility: `An article named by its heading. The state is a badge with an icon and a word. While checking, the card sets aria-busy and shows a named spinner. Long addresses wrap anywhere, and the actions move under the text on a narrow card.`,
			pl: {
				description: `Połączone konto albo usługa: kto, jego stan, cichy szczegół i akcje. Wybierz ją dla hostów Git, trackerów albo dowolnych ustawień integracji.`,
				accessibility: `Element article nazwany swoim nagłówkiem. Stan jest plakietką z ikoną i słowem. Podczas sprawdzania karta ustawia aria-busy i pokazuje nazwany wskaźnik. Długie adresy zawijają się w dowolnym miejscu, a akcje przechodzą pod tekst na wąskiej karcie.`
			},
			render: () => (0, w.jsx)(Ke, {})
		}
	]
};
export { Pe as t };
