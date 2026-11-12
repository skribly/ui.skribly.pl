import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { t as n } from "./copy.BkyZ8mHn.js";
import { t as r } from "./pencil.Dl6p2qqz.js";
import { t as i } from "./trash.CT5nMJCR.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { g as o, r as s, t as c } from "./createLucideIcon.npgQlVHx.js";
import { n as l, r as u, t as d } from "./OutputBox.1BFM_mPn.js";
import { t as f } from "./paperclip.DtQf1itG.js";
import { t as p } from "./x.CmkLFRDJ.js";
import { n as m, r as h, t as g } from "./TagGroup.BbCZ1hWS.js";
import { n as _, t as v } from "./jsx-runtime.yrTYNGQT.js";
import { t as y } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as b } from "./circle-check.CWwdJPsz.js";
import { t as x } from "./info.D9DvH9cK.js";
import { t as S } from "./loader-circle.ja8phR5Y.js";
import { t as C } from "./triangle-exclamation-point.BJJ-nXau.js";
import { t as w } from "./square.CQN3uZMG.js";
import { n as T } from "./useFormReset.B5f8O4ea.js";
import { t as ee } from "./FileTrigger.BPUiFq3D.js";
import { t as E } from "./Text.DxhsPAdy.js";
import { n as D, t as O } from "./TextField.BfX3kCsO.js";
import { t as k, x as A } from "./useDrop.DKLTXZKp.js";
import { t as j } from "./arrow-down.Bfv8ZYrH.js";
import { t as M } from "./chevron-right.CXba3y89.js";
import { n as N, t as P } from "./Disclosure.CRRgwvmC.js";
var F = {
	name: `send`,
	size: 24,
	node: [[`path`, {
		d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
		key: `1ffxy3`
	}], [`path`, {
		d: `m21.854 2.147-10.94 10.939`,
		key: `12cjpa`
	}]]
};
F.node;
var I = c(F), L = t(a(), 1), R = v(), z = {
	ok: b,
	info: x,
	warn: C,
	danger: y
}, B = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`,
	pending: `text-muted`
};
function V({ tone: e, size: t = 14, className: n }) {
	if (e === `pending`) return (0, R.jsx)(S, {
		size: t,
		"aria-hidden": !0,
		className: _(`shrink-0 motion-safe:animate-spin`, n)
	});
	let r = z[e];
	return (0, R.jsx)(r, {
		size: t,
		"aria-hidden": !0,
		className: _(`shrink-0`, n)
	});
}
function H({ status: e, className: t }) {
	return (0, R.jsxs)(`span`, {
		className: _(`inline-flex items-center gap-1.5 text-caption font-medium`, B[e.tone], t),
		children: [(0, R.jsx)(V, {
			tone: e.tone,
			size: 13
		}), (0, R.jsx)(`span`, { children: e.label })]
	});
}
var U = {
	pending: `border-border bg-sunken`,
	ok: `border-ok bg-ok-soft`,
	info: `border-info bg-info-soft`,
	warn: `border-warn bg-warn-soft`,
	danger: `border-danger bg-danger-soft`
};
function W({ items: e, label: t, showLabel: n = !1, onRemove: r, removeLabel: i, onOpen: a, className: c }) {
	let l = (0, L.useCallback)((e) => r?.([...e].map(String)), [r]), u = (0, L.useCallback)((e) => a?.(String(e)), [a]);
	return e.length === 0 ? null : (0, R.jsxs)(m, {
		...r === void 0 ? {} : { onRemove: l },
		...a === void 0 ? {} : { onAction: u },
		...n ? {} : { "aria-label": t },
		className: _(`flex min-w-0 flex-col gap-1`, c),
		children: [n ? (0, R.jsx)(o, {
			className: `text-caption font-medium text-fg`,
			children: t
		}) : null, (0, R.jsx)(h, {
			items: e,
			className: `flex min-w-0 flex-wrap gap-1.5`,
			children: (e) => (0, R.jsxs)(g, {
				id: e.id,
				textValue: [
					e.name,
					e.detail,
					e.status?.label
				].filter(Boolean).join(`, `),
				className: _(`inline-flex h-control-sm max-w-full min-w-0 cursor-default items-center gap-1.5 rounded-full border ps-2.5 text-caption text-fg transition-colors data-hovered:bg-hover`, e.status ? U[e.status.tone] : `border-border bg-surface`, r === void 0 ? `pe-2.5` : `pe-0.5`, a !== void 0 && `cursor-pointer`),
				children: [
					e.status === void 0 ? (0, R.jsx)(f, {
						size: 13,
						"aria-hidden": !0,
						className: `shrink-0 text-muted`
					}) : (0, R.jsx)(V, {
						tone: e.status.tone,
						size: 13,
						className: B[e.status.tone]
					}),
					(0, R.jsx)(`span`, {
						title: e.name,
						className: `max-w-[min(16rem,60vw)] min-w-0 truncate font-medium`,
						children: e.name
					}),
					e.detail === void 0 ? null : (0, R.jsx)(`span`, {
						className: `shrink-0 text-muted`,
						children: e.detail
					}),
					e.status === void 0 ? null : (0, R.jsx)(`span`, {
						className: _(`shrink-0 font-medium`, B[e.status.tone]),
						children: e.status.label
					}),
					r === void 0 ? null : (0, R.jsx)(s, {
						slot: `remove`,
						"aria-label": i ?? ``,
						className: `inline-flex size-6 shrink-0 items-center justify-center rounded-full text-muted transition-colors data-hovered:bg-selected data-hovered:text-fg data-pressed:bg-selected`,
						children: (0, R.jsx)(p, {
							size: 13,
							"aria-hidden": !0
						})
					})
				]
			})
		})]
	});
}
var G = `inline-flex h-control-md items-center justify-center gap-2 rounded-md px-3 text-body font-medium transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function K({ label: e, writeLabel: t, previewLabel: n, emptyPreview: r, submitLabel: i, description: a, placeholder: o, requiredMessage: c, onSubmit: u, successMessage: d, failedMessage: f, onCancel: p, cancelLabel: m, defaultValue: h = ``, rows: g = 4, headingOffset: v = 2, isDisabled: x = !1, className: C }) {
	let [w, T] = (0, L.useState)(h), [ee, E] = (0, L.useState)(`write`), [D, O] = (0, L.useState)(!1), [k, A] = (0, L.useState)(`idle`), j = (0, L.useRef)(null), M = k === `busy`, N = (0, L.useCallback)((e) => {
		T(e), O(!1), A((e) => e === `busy` ? e : `idle`);
	}, []), P = (0, L.useCallback)(async () => {
		if (M || x) return;
		let e = w.trim();
		if (e === ``) O(!0), E(`write`), requestAnimationFrame(() => j.current?.focus());
		else {
			A(`busy`);
			try {
				await u(e), T(``), E(`write`), A(`posted`);
			} catch {
				A(`failed`);
			}
		}
	}, [
		M,
		x,
		u,
		w
	]), F = (0, L.useCallback)((e) => {
		e.preventDefault(), P();
	}, [P]), z = (0, L.useCallback)((e) => {
		e.key === `Enter` && (e.ctrlKey || e.metaKey) && (e.preventDefault(), P());
	}, [P]);
	return (0, R.jsxs)(`form`, {
		onSubmit: F,
		noValidate: !0,
		className: _(`flex min-w-0 flex-col gap-3`, C),
		children: [
			(0, R.jsx)(l, {
				label: e,
				writeLabel: t,
				previewLabel: n,
				emptyPreview: r,
				value: w,
				onChange: N,
				tab: ee,
				onTabChange: E,
				rows: g,
				headingOffset: v,
				onKeyDown: z,
				textAreaRef: j,
				isRequired: !0,
				isInvalid: D,
				errorMessage: c,
				isDisabled: x,
				isReadOnly: M,
				...a === void 0 ? {} : { description: a },
				...o === void 0 ? {} : { placeholder: o }
			}),
			(0, R.jsx)(`output`, {
				className: k === `posted` && d !== void 0 ? `flex items-start gap-1.5 text-caption font-medium text-ok` : `sr-only`,
				children: k === `posted` && d !== void 0 ? (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(b, {
					size: 14,
					"aria-hidden": !0,
					className: `mt-px shrink-0`
				}), (0, R.jsx)(`span`, { children: d })] }) : null
			}),
			(0, R.jsx)(`div`, {
				role: `alert`,
				className: k === `failed` ? `flex items-start gap-2 rounded-md border border-danger bg-danger-soft px-3 py-2 text-caption font-medium text-danger` : `sr-only`,
				children: k === `failed` ? (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(y, {
					size: 14,
					"aria-hidden": !0,
					className: `mt-px shrink-0`
				}), (0, R.jsx)(`span`, { children: f })] }) : null
			}),
			(0, R.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-end gap-2`,
				children: [p !== void 0 && m !== void 0 ? (0, R.jsx)(s, {
					onPress: p,
					isDisabled: M,
					className: _(G, `border border-border-strong bg-surface text-fg data-hovered:bg-hover data-pressed:bg-selected`),
					children: m
				}) : null, (0, R.jsxs)(s, {
					type: `submit`,
					isDisabled: x,
					isPending: M,
					className: _(G, `border border-transparent bg-accent text-accent-fg data-hovered:bg-accent-strong data-pending:cursor-wait`),
					children: [M ? (0, R.jsx)(S, {
						size: 15,
						"aria-hidden": !0,
						className: `motion-safe:animate-spin`
					}) : (0, R.jsx)(I, {
						size: 15,
						"aria-hidden": !0
					}), i]
				})]
			})
		]
	});
}
function q(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return ((t[0]?.[0] ?? ``) + (t.length > 1 ? t.at(-1)?.[0] ?? `` : ``)).toUpperCase();
}
function J({ author: e, avatar: t, authorBadge: n, time: r, timeLabel: i, timeTitle: a, editedLabel: o, children: s, actions: c, status: l, className: u, ...d }) {
	let f = (0, L.useId)();
	return (0, R.jsxs)(`article`, {
		...d,
		"aria-labelledby": f,
		className: _(`flex min-w-0 scroll-mt-20 gap-3 rounded-lg border border-transparent px-2 py-3 sm:px-3 target:border-accent target:bg-accent-soft`, u),
		children: [(0, R.jsx)(`span`, {
			"aria-hidden": !0,
			className: `inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-sunken text-caption font-semibold text-fg`,
			children: t ?? q(e)
		}), (0, R.jsxs)(`div`, {
			className: `min-w-0 flex-1`,
			children: [
				(0, R.jsxs)(`header`, {
					className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5`,
					children: [
						(0, R.jsx)(`span`, {
							id: f,
							className: `min-w-0 truncate text-body font-semibold text-fg`,
							children: e
						}),
						n === void 0 ? null : (0, R.jsx)(`span`, {
							className: `rounded-full border border-border px-1.5 text-label font-medium text-muted`,
							children: n
						}),
						i === void 0 ? null : r === void 0 ? (0, R.jsx)(`span`, {
							className: `text-caption text-muted`,
							children: i
						}) : (0, R.jsx)(`time`, {
							dateTime: r,
							...a === void 0 ? {} : { title: a },
							className: `text-caption text-muted`,
							children: i
						}),
						o === void 0 ? null : (0, R.jsx)(`span`, {
							className: `text-caption text-muted`,
							children: `· ${o}`
						}),
						c === void 0 ? null : (0, R.jsx)(`div`, {
							className: `ms-auto flex shrink-0 items-center gap-0.5`,
							children: c
						})
					]
				}),
				(0, R.jsx)(`div`, {
					className: `mt-1 min-w-0 text-body text-fg [overflow-wrap:anywhere]`,
					children: s
				}),
				l === void 0 ? null : l.tone === `danger` ? (0, R.jsx)(`p`, {
					role: `alert`,
					className: `mt-1.5`,
					children: (0, R.jsx)(H, { status: l })
				}) : (0, R.jsx)(`p`, {
					className: `mt-1.5`,
					children: (0, R.jsx)(H, { status: l })
				})
			]
		})]
	});
}
function te(e, t, n) {
	let [r, i] = (0, L.useState)(t), a = e !== void 0;
	return [a ? e : r, (0, L.useCallback)((e) => {
		a || i(e), n?.(e);
	}, [a, n])];
}
var ne = `inline-flex size-control-sm shrink-0 items-center justify-center rounded-md text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function re(e, t) {
	return !t || t.length === 0 || t.some((t) => t.endsWith(`/*`) ? e.type.startsWith(t.slice(0, -1)) : e.type === t);
}
function Y({ label: e, showLabel: t = !1, placeholder: n, value: r, defaultValue: i = ``, onChange: a, onSubmit: c, sendLabel: l, hint: u, isInvalid: d = !1, errorMessage: p, isDisabled: m = !1, isBusy: h = !1, stop: g, attach: v, attachments: b, allowEmpty: x = !1, submitOnEnter: S = !0, tools: C, footer: j, rows: M = 2, maxRows: N = 10, className: P }) {
	let [F, z] = te(r, i, a), B = (0, L.useRef)(null), V = (0, L.useRef)(null), H = !m && !h && (x || F.trim() !== ``), U = (0, L.useCallback)(() => {
		H && (c(F.trim()), r === void 0 && z(``));
	}, [
		H,
		c,
		z,
		F,
		r
	]), W = (0, L.useCallback)((e) => {
		e.preventDefault(), U();
	}, [U]), G = (0, L.useCallback)((e) => {
		if (e.key !== `Enter` || e.nativeEvent.isComposing) return;
		let t = e.ctrlKey || e.metaKey;
		(S ? !e.shiftKey && !e.altKey : t) && (e.preventDefault(), U());
	}, [U, S]), K = (0, L.useCallback)((e) => {
		let t = e.filter((e) => re(e, v?.acceptedFileTypes));
		t.length > 0 && v?.onFiles(t);
	}, [v]), q = (0, L.useCallback)((e) => {
		let t = [...e.clipboardData.files];
		v && t.length !== 0 && (e.preventDefault(), K(t));
	}, [K, v]), J = (0, L.useCallback)((e) => K(e ? [...e] : []), [K]), Y = (0, L.useCallback)(async (e) => {
		let t = await Promise.all(e.items.filter(A).map((e) => e.getFile()));
		K(t);
	}, [K]), ie = (0, L.useCallback)((e) => void Y(e), [Y]), X = (0, L.useCallback)(() => `copy`, []), { dropProps: Z, isDropTarget: ae } = k({
		ref: V,
		onDrop: ie,
		getDropOperation: X,
		isDisabled: !v || m
	});
	(0, L.useLayoutEffect)(() => {
		let e = B.current;
		!e || typeof CSS < `u` && CSS.supports?.(`field-sizing`, `content`) || (e.style.height = `auto`, F !== `` && (e.style.height = `${e.scrollHeight}px`));
	}, [F]);
	let oe = (0, L.useMemo)(() => ({
		minHeight: `calc(${M * 1.5}em + 0.5rem)`,
		maxHeight: `calc(${N * 1.5}em + 0.5rem)`
	}), [M, N]);
	return (0, R.jsxs)(`form`, {
		onSubmit: W,
		className: _(`flex min-w-0 flex-col gap-1`, P),
		children: [(0, R.jsxs)(O, {
			value: F,
			onChange: z,
			isDisabled: m,
			isInvalid: d,
			validationBehavior: `aria`,
			className: `flex min-w-0 flex-col gap-1`,
			children: [
				(0, R.jsx)(o, {
					className: t ? `text-caption font-medium text-fg` : `sr-only`,
					children: e
				}),
				(0, R.jsxs)(`div`, {
					ref: V,
					...Z,
					className: _(`relative flex min-w-0 flex-col gap-1.5 rounded-lg border bg-input p-1.5 transition-colors`, d ? `border-danger` : `border-border-strong`, m && `opacity-60`),
					children: [
						b === void 0 ? null : (0, R.jsx)(`div`, {
							className: `px-1 pt-0.5`,
							children: b
						}),
						(0, R.jsx)(D, {
							ref: B,
							rows: M,
							onKeyDown: G,
							onPaste: q,
							...n === void 0 ? {} : { placeholder: n },
							style: oe,
							className: `block w-full resize-none rounded-md bg-transparent px-1.5 py-1 text-body leading-normal text-fg [field-sizing:content] placeholder:text-muted data-disabled:cursor-not-allowed`
						}),
						(0, R.jsxs)(`div`, {
							className: `flex min-w-0 flex-wrap items-center gap-0.5`,
							children: [
								v === void 0 ? null : (0, R.jsx)(ee, {
									onSelect: J,
									allowsMultiple: !0,
									...v.acceptedFileTypes === void 0 ? {} : { acceptedFileTypes: v.acceptedFileTypes },
									children: (0, R.jsx)(s, {
										"aria-label": v.label,
										isDisabled: m,
										className: ne,
										children: (0, R.jsx)(f, {
											size: 15,
											"aria-hidden": !0
										})
									})
								}),
								C,
								(0, R.jsx)(`span`, { className: `grow` }),
								h && g !== void 0 ? (0, R.jsxs)(s, {
									onPress: g.onStop,
									className: `inline-flex h-control-sm shrink-0 items-center gap-1.5 rounded-md border border-border-strong bg-surface px-2.5 text-caption font-medium text-fg transition-colors data-hovered:bg-hover data-pressed:bg-selected`,
									children: [(0, R.jsx)(w, {
										size: 12,
										"aria-hidden": !0,
										className: `fill-current`
									}), g.label]
								}) : (0, R.jsx)(s, {
									type: `submit`,
									"aria-label": l,
									isDisabled: !H,
									className: `inline-flex size-control-sm shrink-0 items-center justify-center rounded-md border border-transparent bg-accent text-accent-fg transition-colors data-hovered:bg-accent-strong data-disabled:cursor-not-allowed data-disabled:opacity-50`,
									children: (0, R.jsx)(I, {
										size: 15,
										"aria-hidden": !0
									})
								})
							]
						}),
						ae && v !== void 0 ? (0, R.jsx)(`div`, {
							className: `absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed border-accent bg-accent-soft text-body font-medium text-accent-text`,
							children: v.dropLabel
						}) : null
					]
				}),
				u === void 0 ? null : (0, R.jsx)(E, {
					slot: `description`,
					className: `text-caption text-muted`,
					children: u
				}),
				(0, R.jsx)(T, {
					className: `flex items-start gap-1.5 text-caption font-medium text-danger`,
					children: p === void 0 ? void 0 : (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(y, {
						size: 14,
						"aria-hidden": !0,
						className: `mt-px shrink-0`
					}), (0, R.jsx)(`span`, { children: p })] })
				})
			]
		}), j === void 0 ? null : (0, R.jsx)(`div`, {
			className: `flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 px-1 text-caption text-muted tabular-nums`,
			children: j
		})]
	});
}
var ie = {
	me: {
		row: `self-end items-end`,
		bubble: `rounded-ee-sm bg-accent text-accent-fg`
	},
	other: {
		row: `self-start items-start`,
		bubble: `rounded-es-sm border-border bg-surface text-fg`
	}
}, X = `size-1.5 rounded-full bg-current motion-safe:animate-pulse forced-colors:bg-[CanvasText] forced-colors:forced-color-adjust-none`;
function Z({ from: e, author: t, hideAuthor: n = !1, time: r, timeLabel: i, children: a, isPending: o = !1, pendingLabel: c, status: l, onRetry: u, retryLabel: d, actions: f, className: p, ...m }) {
	let h = (0, L.useId)(), g = (0, L.useId)(), v = ie[e], y = typeof a == `string`, b = o && (a == null || a === ``);
	return (0, R.jsxs)(`article`, {
		...m,
		"aria-labelledby": i === void 0 ? h : `${h} ${g}`,
		className: _(`flex max-w-[min(88%,42rem)] min-w-0 flex-col gap-1`, v.row, p),
		children: [
			(0, R.jsxs)(`header`, {
				className: _(`flex flex-wrap items-baseline gap-x-2 px-1 text-caption text-muted`, n && `sr-only`),
				children: [(0, R.jsx)(`span`, {
					id: h,
					className: `font-medium text-fg`,
					children: t
				}), i === void 0 ? null : r === void 0 ? (0, R.jsx)(`span`, {
					id: g,
					children: i
				}) : (0, R.jsx)(`time`, {
					id: g,
					dateTime: r,
					children: i
				})]
			}),
			(0, R.jsx)(`div`, {
				className: _(`max-w-full min-w-0 rounded-xl border border-transparent px-3 py-2 text-body leading-normal [overflow-wrap:anywhere]`, v.bubble, y && `whitespace-pre-wrap`, l?.tone === `danger` && `border-danger`),
				children: b ? (0, R.jsxs)(`span`, {
					"data-pending": ``,
					className: `inline-flex items-center gap-1 py-1`,
					children: [
						(0, R.jsx)(`span`, {
							"aria-hidden": !0,
							className: X
						}),
						(0, R.jsx)(`span`, {
							"aria-hidden": !0,
							className: _(X, `[animation-delay:200ms]`)
						}),
						(0, R.jsx)(`span`, {
							"aria-hidden": !0,
							className: _(X, `[animation-delay:400ms]`)
						}),
						(0, R.jsx)(`span`, {
							className: `sr-only`,
							children: c
						})
					]
				}) : a
			}),
			l === void 0 && f === void 0 ? null : (0, R.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-x-2 gap-y-1 px-1`,
				children: [
					l === void 0 ? null : l.tone === `danger` ? (0, R.jsx)(`span`, {
						role: `alert`,
						children: (0, R.jsx)(H, { status: l })
					}) : (0, R.jsx)(H, { status: l }),
					l !== void 0 && u !== void 0 && d !== void 0 ? (0, R.jsx)(s, {
						onPress: u,
						className: `inline-flex h-6 items-center rounded-sm px-1.5 text-caption font-medium text-accent-text underline underline-offset-2 data-hovered:bg-hover`,
						children: d
					}) : null,
					f
				]
			})
		]
	});
}
var ae = 48;
function oe(e, t) {
	return {
		role: `log`,
		"aria-label": e,
		"aria-busy": t || void 0,
		tabIndex: 0
	};
}
function se({ label: e, children: t, emptyState: n, isBusy: r = !1, busyLabel: i, jumpLabel: a, className: o, ...c }) {
	let l = (0, L.useRef)(null), u = (0, L.useRef)(!0), [d, f] = (0, L.useState)(!1), p = L.Children.toArray(t).length === 0, m = (0, L.useCallback)(() => {
		let e = l.current;
		e && (e.scrollTop = e.scrollHeight);
	}, []), h = (0, L.useCallback)(() => {
		let e = l.current;
		e && (u.current = e.scrollHeight - e.scrollTop - e.clientHeight < ae, f(!u.current));
	}, []);
	(0, L.useEffect)(() => {
		let e = l.current;
		if (!e) return;
		m();
		let t = new MutationObserver(() => {
			u.current ? m() : f(!0);
		});
		return t.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => t.disconnect();
	}, [m]);
	let g = (0, L.useCallback)(() => {
		u.current = !0, m(), f(!1), l.current?.focus({ preventScroll: !0 });
	}, [m]);
	return (0, R.jsxs)(`div`, {
		...c,
		className: _(`relative flex min-h-0 min-w-0 flex-col`, o),
		children: [
			(0, R.jsx)(`div`, {
				ref: l,
				...oe(e, r),
				onScroll: h,
				className: `flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-3 sm:p-4`,
				children: p && n !== void 0 ? (0, R.jsx)(`div`, {
					className: `m-auto max-w-sm px-2 py-6 text-center text-body text-muted`,
					children: n
				}) : t
			}),
			(0, R.jsx)(`output`, {
				className: r && i !== void 0 ? `flex items-center gap-2 px-4 pb-2 text-caption text-muted` : `sr-only`,
				children: r && i !== void 0 ? (0, R.jsxs)(R.Fragment, { children: [(0, R.jsxs)(`span`, {
					"aria-hidden": !0,
					className: `inline-flex gap-1`,
					children: [
						(0, R.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` }),
						(0, R.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted [animation-delay:200ms] motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` }),
						(0, R.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted [animation-delay:400ms] motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` })
					]
				}), i] }) : null
			}),
			d ? (0, R.jsxs)(s, {
				onPress: g,
				className: `absolute bottom-3 left-1/2 z-(--sk-z-sticky) inline-flex h-control-sm -translate-x-1/2 items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 text-caption font-medium text-fg shadow-md transition-colors data-hovered:bg-hover data-pressed:bg-selected motion-safe:animate-rise`,
				children: [(0, R.jsx)(j, {
					size: 14,
					"aria-hidden": !0
				}), a]
			}) : null
		]
	});
}
var ce = `flex min-w-0 items-start gap-1.5 border-s-2 py-0.5 ps-2 pe-1 text-start font-mono text-caption leading-5 [overflow-wrap:anywhere]`, le = {
	none: `border-border-strong`,
	pending: `border-border-strong`,
	ok: `border-ok`,
	info: `border-info`,
	warn: `border-warn`,
	danger: `border-danger`
};
function ue({ status: e, children: t }) {
	return (0, R.jsxs)(R.Fragment, { children: [e === void 0 ? (0, R.jsx)(`span`, {
		"aria-hidden": !0,
		className: `shrink-0 text-muted`,
		children: `▸`
	}) : (0, R.jsx)(V, {
		tone: e.tone,
		size: 13,
		className: _(`mt-1`, B[e.tone])
	}), (0, R.jsxs)(`span`, {
		className: `min-w-0 text-muted`,
		children: [e === void 0 ? null : (0, R.jsx)(`span`, {
			className: _(`me-1.5 font-sans font-semibold`, B[e.tone]),
			children: e.label
		}), (0, R.jsx)(`span`, {
			className: `text-fg`,
			children: t
		})]
	})] });
}
function Q({ children: e, status: t, detail: n, defaultExpanded: r = !1, className: i, ...a }) {
	let o = le[t?.tone ?? `none`];
	return n === void 0 ? (0, R.jsx)(`div`, {
		...a,
		className: _(`max-w-full self-start`, i),
		children: (0, R.jsx)(`p`, {
			className: _(ce, o),
			children: (0, R.jsx)(ue, {
				status: t,
				children: e
			})
		})
	}) : (0, R.jsx)(`div`, {
		...a,
		className: _(`max-w-full self-start`, i),
		children: (0, R.jsxs)(P, {
			defaultExpanded: r,
			className: `group flex min-w-0 flex-col gap-1`,
			children: [(0, R.jsxs)(s, {
				slot: `trigger`,
				className: _(ce, o, `min-h-6 w-full cursor-default rounded-e-sm data-hovered:bg-hover data-pressed:bg-selected`),
				children: [(0, R.jsx)(ue, {
					status: t,
					children: e
				}), (0, R.jsx)(M, {
					size: 14,
					"aria-hidden": !0,
					className: `mt-0.5 ms-auto shrink-0 text-muted transition-transform group-data-expanded:rotate-90 motion-reduce:transition-none`
				})]
			}), (0, R.jsx)(N, {
				className: `min-w-0 ps-3`,
				children: n
			})]
		})
	});
}
var de = e({ default: () => ve }), fe = [
	{
		id: 1,
		kind: `me`,
		text: `Why does the build fail on CI but not on my machine?`
	},
	{
		id: 2,
		kind: `tool`,
		text: `Read .github/workflows/ci.yml`
	},
	{
		id: 3,
		kind: `tool`,
		text: `Run npm ci`
	},
	{
		id: 4,
		kind: `other`,
		text: `CI runs **Node 22**, and the project needs **Node 26**. Set it in the workflow:

\`\`\`yaml
- uses: actions/setup-node@v4
  with:
    node-version: 26
\`\`\``
	}
], $ = `inline-flex size-6 items-center justify-center rounded-sm text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`;
function pe() {
	let [e, t] = (0, L.useState)(fe), [n, r] = (0, L.useState)(!1);
	return (0, R.jsxs)(`div`, {
		className: `flex h-[30rem] min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-sunken`,
		children: [(0, R.jsx)(se, {
			label: `Chat with Claude Code`,
			isBusy: n,
			busyLabel: `Claude Code is writing`,
			jumpLabel: `Jump to the newest message`,
			emptyState: `Write the first message. The chat resumes from the agent session.`,
			className: `flex-1`,
			children: e.map((e) => e.kind === `tool` ? (0, R.jsx)(Q, {
				status: {
					tone: `ok`,
					label: `Done`
				},
				children: e.text
			}, e.id) : (0, R.jsx)(Z, {
				from: e.kind,
				author: e.kind === `me` ? `You` : `Claude Code`,
				hideAuthor: e.kind === `me`,
				children: e.kind === `me` ? e.text : (0, R.jsx)(u, { text: e.text })
			}, e.id))
		}), (0, R.jsx)(`div`, {
			className: `border-t border-border bg-surface p-2`,
			children: (0, R.jsx)(Y, {
				label: `Message to Claude Code`,
				placeholder: `Ask about this project…`,
				sendLabel: `Send`,
				hint: `Enter sends, Shift+Enter adds a line.`,
				onSubmit: (e) => {
					let n = Date.now();
					t((t) => [...t, {
						id: n,
						kind: `me`,
						text: e
					}]), r(!0), setTimeout(() => {
						t((e) => [...e, {
							id: n + 1,
							kind: `other`,
							text: `Done. I updated the workflow and the build passes.`
						}]), r(!1);
					}, 1500);
				},
				isBusy: n,
				stop: {
					label: `Stop`,
					onStop: () => r(!1)
				}
			})
		})]
	});
}
var me = [
	{
		id: `a`,
		name: `screenshot-2026-11-08.png`,
		detail: `420 KB`
	},
	{
		id: `b`,
		name: `a-very-long-file-name-for-the-quarterly-error-report-with-details.pdf`,
		detail: `1.2 MB`
	},
	{
		id: `c`,
		name: `trace.zip`,
		status: {
			tone: `pending`,
			label: `Uploading`
		}
	},
	{
		id: `d`,
		name: `video.mov`,
		status: {
			tone: `danger`,
			label: `Too large`
		}
	}
];
function he() {
	let [e, t] = (0, L.useState)(me);
	return (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, R.jsx)(W, {
				label: `Attached files`,
				showLabel: !0,
				items: e,
				onRemove: (e) => t((t) => t.filter((t) => !e.includes(t.id))),
				removeLabel: `Remove`
			}),
			e.length === 0 ? (0, R.jsx)(s, {
				onPress: () => t(me),
				className: `self-start rounded-md border border-border-strong px-3 py-1 text-caption font-medium text-fg data-hovered:bg-hover`,
				children: `Restore the files`
			}) : null,
			(0, R.jsx)(W, {
				label: `Files in this message`,
				items: [{
					id: `x`,
					name: `notes.md`,
					detail: `2 KB`
				}]
			})
		]
	});
}
function ge() {
	let [e, t] = (0, L.useState)([]), [n, r] = (0, L.useState)(``);
	return (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, R.jsx)(Y, {
				label: `Message`,
				showLabel: !0,
				placeholder: `Write a message…`,
				sendLabel: `Send`,
				hint: `Enter sends, Shift+Enter adds a line. Paste or drop files to attach them.`,
				allowEmpty: e.length > 0,
				onSubmit: (n) => {
					r(n || `${e.length} file(s)`), t([]);
				},
				attach: {
					label: `Attach files`,
					dropLabel: `Drop to attach`,
					onFiles: (e) => t((t) => [...t, ...e.map((e) => ({
						id: `${e.name}-${e.size}-${e.lastModified}`,
						name: e.name,
						detail: `${Math.ceil(e.size / 1024)} KB`
					}))])
				},
				attachments: (0, R.jsx)(W, {
					label: `Files to send`,
					items: e,
					onRemove: (e) => t((t) => t.filter((t) => !e.includes(t.id))),
					removeLabel: `Remove`
				}),
				footer: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(`span`, { children: `Session 12:04` }), (0, R.jsx)(`span`, { children: `Context 18k · 9%` })] })
			}),
			(0, R.jsx)(`output`, {
				className: `text-caption text-muted`,
				children: n === `` ? `Nothing sent yet.` : `Sent: ${n}`
			}),
			(0, R.jsx)(Y, {
				label: `Message (offline)`,
				showLabel: !0,
				sendLabel: `Send`,
				onSubmit: () => void 0,
				defaultValue: `Draft kept while offline`,
				isInvalid: !0,
				errorMessage: `You are offline. The message will wait until you reconnect.`
			}),
			(0, R.jsx)(Y, {
				label: `Message (disabled)`,
				showLabel: !0,
				sendLabel: `Send`,
				onSubmit: () => void 0,
				isDisabled: !0,
				placeholder: `Pick a project first`
			})
		]
	});
}
function _e() {
	let [e, t] = (0, L.useState)(!1);
	return (0, R.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, R.jsx)(K, {
			label: `Add a comment`,
			writeLabel: `Write`,
			previewLabel: `Preview`,
			emptyPreview: `Nothing to preview yet.`,
			description: `Markdown works. Ctrl+Enter or Cmd+Enter posts.`,
			submitLabel: `Comment`,
			requiredMessage: `Write a comment before you post it.`,
			successMessage: `Comment posted.`,
			failedMessage: `The comment was not posted. Check your connection and try again; your text is kept.`,
			onSubmit: () => new Promise((t, n) => {
				setTimeout(() => e ? n(Error(`offline`)) : t(), 800);
			})
		}), (0, R.jsxs)(`label`, {
			className: `flex items-center gap-2 text-caption text-fg`,
			children: [(0, R.jsx)(`input`, {
				type: `checkbox`,
				checked: e,
				onChange: (e) => t(e.target.checked),
				className: `size-4 accent-accent`
			}), `Make the next post fail`]
		})]
	});
}
var ve = {
	title: `Conversation`,
	description: `Chats with an agent and comment threads: the message log, bubbles, tool steps, the message box with attachments, and comments with a Markdown form. Every state carries a word and an icon, and failures that block are announced at once.`,
	pl: {
		title: `Rozmowa`,
		description: `Czaty z agentem i wątki komentarzy: dziennik wiadomości, dymki, kroki narzędzi, pole wiadomości z załącznikami oraz komentarze z formularzem Markdown. Każdy stan ma słowo i ikonę, a błędy, które blokują, są ogłaszane od razu.`
	},
	demos: [
		{
			name: `MessageThread`,
			components: [`MessageThread`],
			description: `The scrolling log of a chat. It keeps the newest message in view, shows a jump button when you scroll up, and shows who is writing. Pick it for any back-and-forth with a person or an agent.`,
			usage: `<MessageThread label="Chat with Claude Code" jumpLabel="Jump to the newest message" isBusy={busy} busyLabel="Claude Code is writing">
  {messages.map((m) => <MessageBubble key={m.id} from={m.from} author={m.author}>{m.text}</MessageBubble>)}
</MessageThread>`,
			accessibility: `A named log in the tab order, so arrow keys scroll it. While a reply streams, aria-busy holds the announcement until the reply is complete. The writing state is a polite status. The jump button moves focus back to the log.`,
			pl: {
				description: `Przewijany dziennik czatu. Trzyma najnowszą wiadomość w widoku, pokazuje przycisk skoku po przewinięciu w górę i pokazuje, kto pisze. Wybierz go dla każdej wymiany z osobą lub agentem.`,
				accessibility: `Nazwany dziennik w kolejności klawisza Tab, więc klawisze strzałek go przewijają. Gdy odpowiedź jest strumieniowana, aria-busy wstrzymuje ogłoszenie do końca odpowiedzi. Stan pisania jest statusem typu polite. Przycisk skoku przenosi fokus z powrotem na dziennik.`
			},
			render: () => (0, R.jsx)(pe, {})
		},
		{
			name: `MessageBubble`,
			components: [`MessageBubble`],
			description: `One message: your own on the end side in the accent colour, others on the start side. Shows author, time, a typing mark and delivery state with retry.`,
			usage: `<MessageBubble from="me" author="You" hideAuthor time="2026-11-08T14:02" timeLabel="14:02" status={{ tone: 'danger', label: 'Not sent' }} onRetry={retry} retryLabel="Try again">
  Ship it?
</MessageBubble>`,
			accessibility: `Each message is an article named by its author and time, even when the author is hidden on screen. A failed send is read out at once with its word; other states are shown with an icon and a word. The typing mark is read as its required pendingLabel, its dots stop pulsing under reduced motion and stay visible in Windows high contrast. Action buttons stay visible for touch and keyboard.`,
			pl: {
				description: `Jedna wiadomość: twoja po stronie końca w kolorze akcentu, cudze po stronie początku. Pokazuje autora, czas, znacznik pisania oraz stan dostarczenia z ponowieniem.`,
				accessibility: `Każda wiadomość jest elementem article nazwanym przez autora i czas, nawet gdy autor jest ukryty na ekranie. Nieudane wysłanie jest odczytywane od razu razem ze słowem; inne stany są pokazane ikoną i słowem. Znacznik pisania jest odczytywany jako wymagane pendingLabel, jego kropki przestają pulsować przy ograniczonym ruchu i pozostają widoczne w trybie wysokiego kontrastu systemu Windows. Przyciski akcji pozostają widoczne dla dotyku i klawiatury.`
			},
			render: () => (0, R.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [
					(0, R.jsx)(Z, {
						from: `other`,
						author: `Claude Code`,
						time: `2026-11-08T14:01`,
						timeLabel: `14:01`,
						actions: (0, R.jsx)(s, {
							"aria-label": `Copy message`,
							className: $,
							children: (0, R.jsx)(n, {
								size: 13,
								"aria-hidden": !0
							})
						}),
						children: `The tests pass. Shall I open a pull request?`
					}),
					(0, R.jsx)(Z, {
						from: `me`,
						author: `You`,
						hideAuthor: !0,
						time: `2026-11-08T14:02`,
						timeLabel: `14:02`,
						status: {
							tone: `ok`,
							label: `Sent`
						},
						children: `Yes, with a short description.`
					}),
					(0, R.jsx)(Z, {
						from: `me`,
						author: `You`,
						hideAuthor: !0,
						status: {
							tone: `danger`,
							label: `Not sent`
						},
						onRetry: () => void 0,
						retryLabel: `Try again`,
						children: `A long line without spaces wraps inside the bubble: https://github.com/skribly/ui/pull/128/files#diff-0123456789abcdef`
					}),
					(0, R.jsx)(Z, {
						from: `other`,
						author: `Claude Code`,
						isPending: !0,
						pendingLabel: `Claude Code is writing`
					})
				]
			})
		},
		{
			name: `ToolLine`,
			components: [`ToolLine`],
			description: `One step an agent took between messages, such as reading a file or running a command. Add detail to let people open the output.`,
			usage: `<ToolLine status={{ tone: 'danger', label: 'Failed' }} detail={<OutputBox label="Output" text={log} />}>
  Run npm test
</ToolLine>`,
			accessibility: `The status word comes before the step, with an icon and a coloured edge, so it never rests on colour. With detail the line is a disclosure button with aria-expanded, opened with Enter or Space.`,
			pl: {
				description: `Jeden krok, który agent wykonał między wiadomościami, na przykład odczyt pliku albo uruchomienie polecenia. Dodaj detail, aby pozwolić otworzyć wyjście.`,
				accessibility: `Słowo statusu stoi przed krokiem, z ikoną i kolorową krawędzią, więc nigdy nie opiera się na samym kolorze. Z detail linia jest przyciskiem rozwijania z aria-expanded, otwieranym klawiszem Enter lub Spacją.`
			},
			render: () => (0, R.jsxs)(`div`, {
				className: `flex flex-col gap-1.5`,
				children: [
					(0, R.jsx)(Q, { children: `Read src/content/Markdown.tsx` }),
					(0, R.jsx)(Q, {
						status: {
							tone: `pending`,
							label: `Running`
						},
						children: `npm run build`
					}),
					(0, R.jsx)(Q, {
						status: {
							tone: `ok`,
							label: `Done`
						},
						detail: (0, R.jsx)(d, {
							label: `Test output`,
							text: ` ✓ 30 tests passed
 Duration 2.5s`,
							maxLines: 4
						}),
						children: `npm test`
					}),
					(0, R.jsx)(Q, {
						status: {
							tone: `warn`,
							label: `Skipped`
						},
						children: `Lint, because no config was found`
					}),
					(0, R.jsx)(Q, {
						status: {
							tone: `danger`,
							label: `Failed`
						},
						defaultExpanded: !0,
						detail: (0, R.jsx)(d, {
							label: `Error output`,
							text: `Error: EACCES: permission denied, open '/etc/hosts'`,
							status: {
								tone: `danger`,
								label: `Exit code 1`
							}
						}),
						children: `Write /etc/hosts`
					})
				]
			})
		},
		{
			name: `Composer`,
			components: [`Composer`],
			description: `The message box under a chat: it grows with the text, sends on Enter, attaches files by button, paste or drop, and turns into a stop button while the agent answers. Pick CommentForm for longer Markdown posts.`,
			usage: `<Composer
  label="Message to Claude Code"
  sendLabel="Send"
  onSubmit={send}
  isBusy={busy}
  stop={{ label: 'Stop', onStop: stop }}
  attach={{ label: 'Attach files', dropLabel: 'Drop to attach', onFiles: add }}
  attachments={<AttachmentChips … />}
/>`,
			accessibility: `The text area has a label, hidden on screen unless showLabel, and the hint and error are linked with aria-describedby. Enter sends unless an input method is composing; Shift+Enter adds a line. Every button has a name. Dropping files is an extra: the attach button and paste do the same by keyboard.`,
			pl: {
				description: `Pole wiadomości pod czatem: rośnie razem z tekstem, wysyła klawiszem Enter, dołącza pliki przyciskiem, wklejeniem lub upuszczeniem i zamienia się w przycisk zatrzymania, gdy agent odpowiada. Dla dłuższych wpisów w Markdownie wybierz CommentForm.`,
				accessibility: `Pole tekstowe ma etykietę, ukrytą na ekranie, chyba że ustawiono showLabel, a podpowiedź i błąd są powiązane przez aria-describedby. Enter wysyła, chyba że trwa składanie tekstu metodą wprowadzania; Shift+Enter dodaje linię. Każdy przycisk ma nazwę. Upuszczanie plików to dodatek: przycisk załączania i wklejanie robią to samo z klawiatury.`
			},
			render: () => (0, R.jsx)(ge, {})
		},
		{
			name: `AttachmentChips`,
			components: [`AttachmentChips`],
			description: `The files attached to a message or a comment, with size, upload state and a remove button. Without onRemove it is a read-only list.`,
			usage: `<AttachmentChips
  label="Attached files"
  items={files}
  onRemove={(ids) => remove(ids)}
  removeLabel="Remove"
/>`,
			accessibility: `A tag group: Tab enters it, arrow keys move between files, and Delete or Backspace removes one. Each remove button is named by its verb and the file, such as "Remove notes.md, 2 KB". Long names are cut on screen and read in full. Upload and error states have an icon and a word.`,
			pl: {
				description: `Pliki dołączone do wiadomości lub komentarza, z rozmiarem, stanem przesyłania i przyciskiem usuwania. Bez onRemove jest to lista tylko do odczytu.`,
				accessibility: `Grupa znaczników: Tab wchodzi do niej, klawisze strzałek przechodzą między plikami, a Delete lub Backspace usuwa jeden. Każdy przycisk usuwania jest nazwany swoim czasownikiem i plikiem, na przykład „Remove notes.md, 2 KB”. Długie nazwy są ucinane na ekranie i odczytywane w całości. Stany przesyłania i błędu mają ikonę i słowo.`
			},
			render: () => (0, R.jsx)(he, {})
		},
		{
			name: `CommentItem`,
			components: [`CommentItem`],
			description: `One comment in a thread, with avatar, author, a badge, time, edited mark and actions. Put the comments of a thread in an ordered list.`,
			usage: `<ol>
  <li>
    <CommentItem id="comment-12" author="Anna Nowak" authorBadge="Author" time={iso} timeLabel="2 hours ago">
      <Markdown text={body} headingOffset={3} />
    </CommentItem>
  </li>
</ol>`,
			accessibility: `Each comment is an article named by its author. The avatar is decorative, because the name is in the text. A link to the comment highlights it with a border and a fill, not only colour. Failed states are read out at once.`,
			pl: {
				description: `Jeden komentarz w wątku, z awatarem, autorem, plakietką, czasem, znacznikiem edycji i akcjami. Komentarze wątku umieść na liście uporządkowanej.`,
				accessibility: `Każdy komentarz jest elementem article nazwanym przez autora. Awatar jest dekoracyjny, bo nazwa jest w tekście. Link do komentarza wyróżnia go ramką i wypełnieniem, nie tylko kolorem. Stany błędu są odczytywane od razu.`
			},
			render: () => (0, R.jsxs)(`ol`, {
				className: `flex flex-col divide-y divide-border`,
				children: [
					(0, R.jsx)(`li`, { children: (0, R.jsx)(J, {
						author: `Anna Nowak`,
						authorBadge: `Author`,
						time: `2026-11-08T12:10:00Z`,
						timeLabel: `2 hours ago`,
						timeTitle: `8 November 2026, 13:10`,
						editedLabel: `edited`,
						actions: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)(s, {
							"aria-label": `Edit comment`,
							className: $,
							children: (0, R.jsx)(r, {
								size: 13,
								"aria-hidden": !0
							})
						}), (0, R.jsx)(s, {
							"aria-label": `Delete comment`,
							className: $,
							children: (0, R.jsx)(i, {
								size: 13,
								"aria-hidden": !0
							})
						})] }),
						children: (0, R.jsx)(u, {
							text: `The fix works on **Firefox** and **Safari**.

- [x] Tested on a phone
- [ ] Tested with a screen reader`,
							headingOffset: 3
						})
					}) }),
					(0, R.jsx)(`li`, { children: (0, R.jsx)(J, {
						author: `Claude Code`,
						authorBadge: `Agent`,
						time: `2026-11-08T13:40:00Z`,
						timeLabel: `30 minutes ago`,
						children: (0, R.jsx)(u, {
							text: `### Work summary\\n\\nUpdated the workflow to Node 26. All checks pass.`,
							headingOffset: 1
						})
					}) }),
					(0, R.jsx)(`li`, { children: (0, R.jsx)(J, {
						author: `Piotr Wiśniewski`,
						status: {
							tone: `danger`,
							label: `Not posted`
						},
						children: (0, R.jsx)(`p`, { children: `Can we ship this on Friday?` })
					}) })
				]
			})
		},
		{
			name: `CommentForm`,
			components: [`CommentForm`],
			description: `Writes a Markdown comment with a preview, checks it is not empty, and shows posting, posted and failed states. Pick it under a comment thread or to edit a comment.`,
			usage: `<CommentForm
  label="Add a comment"
  writeLabel="Write"
  previewLabel="Preview"
  emptyPreview="Nothing to preview yet."
  submitLabel="Comment"
  requiredMessage="Write a comment first."
  successMessage="Comment posted."
  failedMessage="Not posted. Try again."
  onSubmit={(text) => api.comment(text)}
/>`,
			accessibility: `An empty post moves focus to the text area, sets aria-invalid and links the message with aria-describedby. Success is a polite status that stays until you type again; failure is an alert, read out at once, and the text is kept. Ctrl+Enter or Cmd+Enter posts from the text area.`,
			pl: {
				description: `Pisze komentarz w Markdownie z podglądem, sprawdza, czy nie jest pusty, i pokazuje stany wysyłania, wysłania i niepowodzenia. Wybierz go pod wątkiem komentarzy albo do edycji komentarza.`,
				accessibility: `Pusty wpis przenosi fokus na pole tekstowe, ustawia aria-invalid i łączy komunikat przez aria-describedby. Sukces jest statusem typu polite, który zostaje, dopóki nie zaczniesz pisać ponownie; niepowodzenie jest komunikatem typu alert, odczytywanym od razu, a tekst zostaje zachowany. Ctrl+Enter lub Cmd+Enter wysyła z pola tekstowego.`
			},
			render: () => (0, R.jsx)(_e, {})
		}
	]
};
export { de as t };
