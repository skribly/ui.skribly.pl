import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { I as n, L as r, M as i, Q as a, j as o, z as s } from "./doc.C_PtMNUB.js";
import { n as c } from "./react-dom.B9zIfLd2.js";
import { n as l, r as u, t as d } from "./OutputBox.Df2SG3sO.js";
import { n as f, r as p, t as m } from "./TagGroup.B1bV80CB.js";
import { n as h } from "./useFormReset.Cf-RVIHo.js";
import { t as g } from "./FileTrigger.tPk560f4.js";
import { t as _ } from "./Text.3KJW7jIs.js";
import { n as v, t as y } from "./TextField.BCFjhSRb.js";
import { t as b, x } from "./useDrop.2oG49goR.js";
import { n as S, t as C } from "./Disclosure.BQKVLy-a.js";
var w = t(c(), 1), T = n(), E = {
	ok: i(`status.ok`),
	info: i(`status.info`),
	warn: i(`status.warning`),
	danger: i(`status.error`)
}, D = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`,
	pending: `text-muted`
};
function O({ tone: e, size: t = 14, className: n }) {
	if (e === `pending`) return (0, T.jsx)(o, {
		name: `status.loading`,
		size: t,
		"aria-hidden": !0,
		className: r(`shrink-0 motion-safe:animate-spin`, n)
	});
	let i = E[e];
	return (0, T.jsx)(i, {
		size: t,
		"aria-hidden": !0,
		className: r(`shrink-0`, n)
	});
}
function k({ status: e, className: t }) {
	return (0, T.jsxs)(`span`, {
		className: r(`inline-flex items-center gap-1.5 text-caption font-medium`, D[e.tone], t),
		children: [(0, T.jsx)(O, {
			tone: e.tone,
			size: 13
		}), (0, T.jsx)(`span`, { children: e.label })]
	});
}
var A = {
	pending: `border-border bg-sunken`,
	ok: `border-ok bg-ok-soft`,
	info: `border-info bg-info-soft`,
	warn: `border-warn bg-warn-soft`,
	danger: `border-danger bg-danger-soft`
};
function j({ items: e, label: t, showLabel: n = !1, onRemove: i, removeLabel: c, onOpen: l, className: u }) {
	let d = (0, w.useCallback)((e) => i?.([...e].map(String)), [i]), h = (0, w.useCallback)((e) => l?.(String(e)), [l]);
	return e.length === 0 ? null : (0, T.jsxs)(f, {
		...i === void 0 ? {} : { onRemove: d },
		...l === void 0 ? {} : { onAction: h },
		...n ? {} : { "aria-label": t },
		className: r(`flex min-w-0 flex-col gap-1`, u),
		children: [n ? (0, T.jsx)(a, {
			className: `text-caption font-medium text-fg`,
			children: t
		}) : null, (0, T.jsx)(p, {
			items: e,
			className: `flex min-w-0 flex-wrap gap-1.5`,
			children: (e) => (0, T.jsxs)(m, {
				id: e.id,
				textValue: [
					e.name,
					e.detail,
					e.status?.label
				].filter(Boolean).join(`, `),
				className: r(`inline-flex h-control-sm max-w-full min-w-0 cursor-default items-center gap-1.5 rounded-full border ps-2.5 text-caption text-fg transition-colors data-hovered:bg-hover`, e.status ? A[e.status.tone] : `border-border bg-surface`, i === void 0 ? `pe-2.5` : `pe-0.5`, l !== void 0 && `cursor-pointer`),
				children: [
					e.status === void 0 ? (0, T.jsx)(o, {
						name: `action.attach`,
						size: 13,
						"aria-hidden": !0,
						className: `shrink-0 text-muted`
					}) : (0, T.jsx)(O, {
						tone: e.status.tone,
						size: 13,
						className: D[e.status.tone]
					}),
					(0, T.jsx)(`span`, {
						title: e.name,
						className: `max-w-[min(16rem,60vw)] min-w-0 truncate font-medium`,
						children: e.name
					}),
					e.detail === void 0 ? null : (0, T.jsx)(`span`, {
						className: `shrink-0 text-muted`,
						children: e.detail
					}),
					e.status === void 0 ? null : (0, T.jsx)(`span`, {
						className: r(`shrink-0 font-medium`, D[e.status.tone]),
						children: e.status.label
					}),
					i === void 0 ? null : (0, T.jsx)(s, {
						slot: `remove`,
						"aria-label": c ?? ``,
						className: `inline-flex size-6 shrink-0 items-center justify-center rounded-full text-muted transition-colors data-hovered:bg-selected data-hovered:text-fg data-pressed:bg-selected`,
						children: (0, T.jsx)(o, {
							name: `action.close`,
							size: 13,
							"aria-hidden": !0
						})
					})
				]
			})
		})]
	});
}
var M = `inline-flex h-control-md items-center justify-center gap-2 rounded-md px-3 text-body font-medium transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function N({ label: e, writeLabel: t, previewLabel: n, emptyPreview: i, submitLabel: a, description: c, placeholder: u, requiredMessage: d, onSubmit: f, successMessage: p, failedMessage: m, onCancel: h, cancelLabel: g, defaultValue: _ = ``, rows: v = 4, headingOffset: y = 2, isDisabled: b = !1, className: x }) {
	let [S, C] = (0, w.useState)(_), [E, D] = (0, w.useState)(`write`), [O, k] = (0, w.useState)(!1), [A, j] = (0, w.useState)(`idle`), N = (0, w.useRef)(null), P = A === `busy`, F = (0, w.useCallback)((e) => {
		C(e), k(!1), j((e) => e === `busy` ? e : `idle`);
	}, []), I = (0, w.useCallback)(async () => {
		if (P || b) return;
		let e = S.trim();
		if (e === ``) k(!0), D(`write`), requestAnimationFrame(() => N.current?.focus());
		else {
			j(`busy`);
			try {
				await f(e), C(``), D(`write`), j(`posted`);
			} catch {
				j(`failed`);
			}
		}
	}, [
		P,
		b,
		f,
		S
	]), L = (0, w.useCallback)((e) => {
		e.preventDefault(), I();
	}, [I]), R = (0, w.useCallback)((e) => {
		e.key === `Enter` && (e.ctrlKey || e.metaKey) && (e.preventDefault(), I());
	}, [I]);
	return (0, T.jsxs)(`form`, {
		onSubmit: L,
		noValidate: !0,
		className: r(`flex min-w-0 flex-col gap-3`, x),
		children: [
			(0, T.jsx)(l, {
				label: e,
				writeLabel: t,
				previewLabel: n,
				emptyPreview: i,
				value: S,
				onChange: F,
				tab: E,
				onTabChange: D,
				rows: v,
				headingOffset: y,
				onKeyDown: R,
				textAreaRef: N,
				isRequired: !0,
				isInvalid: O,
				errorMessage: d,
				isDisabled: b,
				isReadOnly: P,
				...c === void 0 ? {} : { description: c },
				...u === void 0 ? {} : { placeholder: u }
			}),
			(0, T.jsx)(`output`, {
				className: A === `posted` && p !== void 0 ? `flex items-start gap-1.5 text-caption font-medium text-ok` : `sr-only`,
				children: A === `posted` && p !== void 0 ? (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(o, {
					name: `status.ok`,
					size: 14,
					"aria-hidden": !0,
					className: `mt-px shrink-0`
				}), (0, T.jsx)(`span`, { children: p })] }) : null
			}),
			(0, T.jsx)(`div`, {
				role: `alert`,
				className: A === `failed` ? `flex items-start gap-2 rounded-md border border-danger bg-danger-soft px-3 py-2 text-caption font-medium text-danger` : `sr-only`,
				children: A === `failed` ? (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(o, {
					name: `status.error`,
					size: 14,
					"aria-hidden": !0,
					className: `mt-px shrink-0`
				}), (0, T.jsx)(`span`, { children: m })] }) : null
			}),
			(0, T.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-end gap-2`,
				children: [h !== void 0 && g !== void 0 ? (0, T.jsx)(s, {
					onPress: h,
					isDisabled: P,
					className: r(M, `border border-border-strong bg-surface text-fg data-hovered:bg-hover data-pressed:bg-selected`),
					children: g
				}) : null, (0, T.jsxs)(s, {
					type: `submit`,
					isDisabled: b,
					isPending: P,
					className: r(M, `border border-transparent bg-accent text-accent-fg data-hovered:bg-accent-strong data-pending:cursor-wait`),
					children: [P ? (0, T.jsx)(o, {
						name: `status.loading`,
						size: 15,
						"aria-hidden": !0,
						className: `motion-safe:animate-spin`
					}) : (0, T.jsx)(o, {
						name: `action.send`,
						size: 15,
						"aria-hidden": !0
					}), a]
				})]
			})
		]
	});
}
function P(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return ((t[0]?.[0] ?? ``) + (t.length > 1 ? t.at(-1)?.[0] ?? `` : ``)).toUpperCase();
}
function F({ author: e, avatar: t, authorBadge: n, time: i, timeLabel: a, timeTitle: o, editedLabel: s, children: c, actions: l, status: u, className: d, ...f }) {
	let p = (0, w.useId)();
	return (0, T.jsxs)(`article`, {
		...f,
		"aria-labelledby": p,
		className: r(`flex min-w-0 scroll-mt-20 gap-3 rounded-lg border border-transparent px-2 py-3 sm:px-3 target:border-accent target:bg-accent-soft`, d),
		children: [(0, T.jsx)(`span`, {
			"aria-hidden": !0,
			className: `inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-sunken text-caption font-semibold text-fg`,
			children: t ?? P(e)
		}), (0, T.jsxs)(`div`, {
			className: `min-w-0 flex-1`,
			children: [
				(0, T.jsxs)(`header`, {
					className: `flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5`,
					children: [
						(0, T.jsx)(`span`, {
							id: p,
							className: `min-w-0 truncate text-body font-semibold text-fg`,
							children: e
						}),
						n === void 0 ? null : (0, T.jsx)(`span`, {
							className: `rounded-full border border-border px-1.5 text-label font-medium text-muted`,
							children: n
						}),
						a === void 0 ? null : i === void 0 ? (0, T.jsx)(`span`, {
							className: `text-caption text-muted`,
							children: a
						}) : (0, T.jsx)(`time`, {
							dateTime: i,
							...o === void 0 ? {} : { title: o },
							className: `text-caption text-muted`,
							children: a
						}),
						s === void 0 ? null : (0, T.jsx)(`span`, {
							className: `text-caption text-muted`,
							children: `· ${s}`
						}),
						l === void 0 ? null : (0, T.jsx)(`div`, {
							className: `ms-auto flex shrink-0 items-center gap-0.5`,
							children: l
						})
					]
				}),
				(0, T.jsx)(`div`, {
					className: `mt-1 min-w-0 text-body text-fg [overflow-wrap:anywhere]`,
					children: c
				}),
				u === void 0 ? null : u.tone === `danger` ? (0, T.jsx)(`p`, {
					role: `alert`,
					className: `mt-1.5`,
					children: (0, T.jsx)(k, { status: u })
				}) : (0, T.jsx)(`p`, {
					className: `mt-1.5`,
					children: (0, T.jsx)(k, { status: u })
				})
			]
		})]
	});
}
function I(e, t, n) {
	let [r, i] = (0, w.useState)(t), a = e !== void 0;
	return [a ? e : r, (0, w.useCallback)((e) => {
		a || i(e), n?.(e);
	}, [a, n])];
}
var L = `inline-flex size-control-sm shrink-0 items-center justify-center rounded-md text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-disabled:cursor-not-allowed data-disabled:opacity-50`;
function R(e, t) {
	return !t || t.length === 0 || t.some((t) => t.endsWith(`/*`) ? e.type.startsWith(t.slice(0, -1)) : e.type === t);
}
function z({ label: e, showLabel: t = !1, placeholder: n, value: i, defaultValue: c = ``, onChange: l, onSubmit: u, sendLabel: d, hint: f, isInvalid: p = !1, errorMessage: m, isDisabled: S = !1, isBusy: C = !1, stop: E, attach: D, attachments: O, allowEmpty: k = !1, submitOnEnter: A = !0, tools: j, footer: M, rows: N = 2, maxRows: P = 10, className: F }) {
	let [z, B] = I(i, c, l), V = (0, w.useRef)(null), H = (0, w.useRef)(null), U = !S && !C && (k || z.trim() !== ``), W = (0, w.useCallback)(() => {
		U && (u(z.trim()), i === void 0 && B(``));
	}, [
		U,
		u,
		B,
		z,
		i
	]), G = (0, w.useCallback)((e) => {
		e.preventDefault(), W();
	}, [W]), K = (0, w.useCallback)((e) => {
		if (e.key !== `Enter` || e.nativeEvent.isComposing) return;
		let t = e.ctrlKey || e.metaKey;
		(A ? !e.shiftKey && !e.altKey : t) && (e.preventDefault(), W());
	}, [W, A]), q = (0, w.useCallback)((e) => {
		let t = e.filter((e) => R(e, D?.acceptedFileTypes));
		t.length > 0 && D?.onFiles(t);
	}, [D]), J = (0, w.useCallback)((e) => {
		let t = [...e.clipboardData.files];
		D && t.length !== 0 && (e.preventDefault(), q(t));
	}, [q, D]), Y = (0, w.useCallback)((e) => q(e ? [...e] : []), [q]), X = (0, w.useCallback)(async (e) => {
		let t = await Promise.all(e.items.filter(x).map((e) => e.getFile()));
		q(t);
	}, [q]), Z = (0, w.useCallback)((e) => void X(e), [X]), Q = (0, w.useCallback)(() => `copy`, []), { dropProps: ee, isDropTarget: $ } = b({
		ref: H,
		onDrop: Z,
		getDropOperation: Q,
		isDisabled: !D || S
	});
	(0, w.useLayoutEffect)(() => {
		let e = V.current;
		!e || typeof CSS < `u` && CSS.supports?.(`field-sizing`, `content`) || (e.style.height = `auto`, z !== `` && (e.style.height = `${e.scrollHeight}px`));
	}, [z]);
	let te = (0, w.useMemo)(() => ({
		minHeight: `calc(${N * 1.5}em + 0.5rem)`,
		maxHeight: `calc(${P * 1.5}em + 0.5rem)`
	}), [N, P]);
	return (0, T.jsxs)(`form`, {
		onSubmit: G,
		className: r(`flex min-w-0 flex-col gap-1`, F),
		children: [(0, T.jsxs)(y, {
			value: z,
			onChange: B,
			isDisabled: S,
			isInvalid: p,
			validationBehavior: `aria`,
			className: `flex min-w-0 flex-col gap-1`,
			children: [
				(0, T.jsx)(a, {
					className: t ? `text-caption font-medium text-fg` : `sr-only`,
					children: e
				}),
				(0, T.jsxs)(`div`, {
					ref: H,
					...ee,
					className: r(`relative flex min-w-0 flex-col gap-1.5 rounded-lg border bg-input p-1.5 transition-colors`, p ? `border-danger` : `border-border-strong`, S && `opacity-60`),
					children: [
						O === void 0 ? null : (0, T.jsx)(`div`, {
							className: `px-1 pt-0.5`,
							children: O
						}),
						(0, T.jsx)(v, {
							ref: V,
							rows: N,
							onKeyDown: K,
							onPaste: J,
							...n === void 0 ? {} : { placeholder: n },
							style: te,
							className: `block w-full resize-none rounded-md bg-transparent px-1.5 py-1 text-body leading-normal text-fg [field-sizing:content] placeholder:text-muted data-disabled:cursor-not-allowed`
						}),
						(0, T.jsxs)(`div`, {
							className: `flex min-w-0 flex-wrap items-center gap-0.5`,
							children: [
								D === void 0 ? null : (0, T.jsx)(g, {
									onSelect: Y,
									allowsMultiple: !0,
									...D.acceptedFileTypes === void 0 ? {} : { acceptedFileTypes: D.acceptedFileTypes },
									children: (0, T.jsx)(s, {
										"aria-label": D.label,
										isDisabled: S,
										className: L,
										children: (0, T.jsx)(o, {
											name: `action.attach`,
											size: 15,
											"aria-hidden": !0
										})
									})
								}),
								j,
								(0, T.jsx)(`span`, { className: `grow` }),
								C && E !== void 0 ? (0, T.jsxs)(s, {
									onPress: E.onStop,
									className: `inline-flex h-control-sm shrink-0 items-center gap-1.5 rounded-md border border-border-strong bg-surface px-2.5 text-caption font-medium text-fg transition-colors data-hovered:bg-hover data-pressed:bg-selected`,
									children: [(0, T.jsx)(o, {
										name: `status.unchecked`,
										size: 12,
										"aria-hidden": !0,
										className: `fill-current`
									}), E.label]
								}) : (0, T.jsx)(s, {
									type: `submit`,
									"aria-label": d,
									isDisabled: !U,
									className: `inline-flex size-control-sm shrink-0 items-center justify-center rounded-md border border-transparent bg-accent text-accent-fg transition-colors data-hovered:bg-accent-strong data-disabled:cursor-not-allowed data-disabled:opacity-50`,
									children: (0, T.jsx)(o, {
										name: `action.send`,
										size: 15,
										"aria-hidden": !0
									})
								})
							]
						}),
						$ && D !== void 0 ? (0, T.jsx)(`div`, {
							className: `absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed border-accent bg-accent-soft text-body font-medium text-accent-text`,
							children: D.dropLabel
						}) : null
					]
				}),
				f === void 0 ? null : (0, T.jsx)(_, {
					slot: `description`,
					className: `text-caption text-muted`,
					children: f
				}),
				(0, T.jsx)(h, {
					className: `flex items-start gap-1.5 text-caption font-medium text-danger`,
					children: m === void 0 ? void 0 : (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(o, {
						name: `status.error`,
						size: 14,
						"aria-hidden": !0,
						className: `mt-px shrink-0`
					}), (0, T.jsx)(`span`, { children: m })] })
				})
			]
		}), M === void 0 ? null : (0, T.jsx)(`div`, {
			className: `flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 px-1 text-caption text-muted tabular-nums`,
			children: M
		})]
	});
}
var B = {
	me: {
		row: `self-end items-end`,
		bubble: `rounded-ee-sm bg-accent text-accent-fg`
	},
	other: {
		row: `self-start items-start`,
		bubble: `rounded-es-sm border-border bg-surface text-fg`
	}
}, V = `size-1.5 rounded-full bg-current motion-safe:animate-pulse forced-colors:bg-[CanvasText] forced-colors:forced-color-adjust-none`;
function H({ from: e, author: t, hideAuthor: n = !1, time: i, timeLabel: a, children: o, isPending: c = !1, pendingLabel: l, status: u, onRetry: d, retryLabel: f, actions: p, className: m, ...h }) {
	let g = (0, w.useId)(), _ = (0, w.useId)(), v = B[e], y = typeof o == `string`, b = c && (o == null || o === ``);
	return (0, T.jsxs)(`article`, {
		...h,
		"aria-labelledby": a === void 0 ? g : `${g} ${_}`,
		className: r(`flex max-w-[min(88%,42rem)] min-w-0 flex-col gap-1`, v.row, m),
		children: [
			(0, T.jsxs)(`header`, {
				className: r(`flex flex-wrap items-baseline gap-x-2 px-1 text-caption text-muted`, n && `sr-only`),
				children: [(0, T.jsx)(`span`, {
					id: g,
					className: `font-medium text-fg`,
					children: t
				}), a === void 0 ? null : i === void 0 ? (0, T.jsx)(`span`, {
					id: _,
					children: a
				}) : (0, T.jsx)(`time`, {
					id: _,
					dateTime: i,
					children: a
				})]
			}),
			(0, T.jsx)(`div`, {
				className: r(`max-w-full min-w-0 rounded-xl border border-transparent px-3 py-2 text-body leading-normal [overflow-wrap:anywhere]`, v.bubble, y && `whitespace-pre-wrap`, u?.tone === `danger` && `border-danger`),
				children: b ? (0, T.jsxs)(`span`, {
					"data-pending": ``,
					className: `inline-flex items-center gap-1 py-1`,
					children: [
						(0, T.jsx)(`span`, {
							"aria-hidden": !0,
							className: V
						}),
						(0, T.jsx)(`span`, {
							"aria-hidden": !0,
							className: r(V, `[animation-delay:200ms]`)
						}),
						(0, T.jsx)(`span`, {
							"aria-hidden": !0,
							className: r(V, `[animation-delay:400ms]`)
						}),
						(0, T.jsx)(`span`, {
							className: `sr-only`,
							children: l
						})
					]
				}) : o
			}),
			u === void 0 && p === void 0 ? null : (0, T.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-x-2 gap-y-1 px-1`,
				children: [
					u === void 0 ? null : u.tone === `danger` ? (0, T.jsx)(`span`, {
						role: `alert`,
						children: (0, T.jsx)(k, { status: u })
					}) : (0, T.jsx)(k, { status: u }),
					u !== void 0 && d !== void 0 && f !== void 0 ? (0, T.jsx)(s, {
						onPress: d,
						className: `inline-flex h-6 items-center rounded-sm px-1.5 text-caption font-medium text-accent-text underline underline-offset-2 data-hovered:bg-hover`,
						children: f
					}) : null,
					p
				]
			})
		]
	});
}
var U = 48;
function W(e, t) {
	return {
		role: `log`,
		"aria-label": e,
		"aria-busy": t || void 0,
		tabIndex: 0
	};
}
function G({ label: e, children: t, emptyState: n, isBusy: i = !1, busyLabel: a, jumpLabel: c, className: l, ...u }) {
	let d = (0, w.useRef)(null), f = (0, w.useRef)(!0), [p, m] = (0, w.useState)(!1), h = w.Children.toArray(t).length === 0, g = (0, w.useCallback)(() => {
		let e = d.current;
		e && (e.scrollTop = e.scrollHeight);
	}, []), _ = (0, w.useCallback)(() => {
		let e = d.current;
		e && (f.current = e.scrollHeight - e.scrollTop - e.clientHeight < U, m(!f.current));
	}, []);
	(0, w.useEffect)(() => {
		let e = d.current;
		if (!e) return;
		g();
		let t = new MutationObserver(() => {
			f.current ? g() : m(!0);
		});
		return t.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => t.disconnect();
	}, [g]);
	let v = (0, w.useCallback)(() => {
		f.current = !0, g(), m(!1), d.current?.focus({ preventScroll: !0 });
	}, [g]);
	return (0, T.jsxs)(`div`, {
		...u,
		className: r(`relative flex min-h-0 min-w-0 flex-col`, l),
		children: [
			(0, T.jsx)(`div`, {
				ref: d,
				...W(e, i),
				onScroll: _,
				className: `flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-3 sm:p-4`,
				children: h && n !== void 0 ? (0, T.jsx)(`div`, {
					className: `m-auto max-w-sm px-2 py-6 text-center text-body text-muted`,
					children: n
				}) : t
			}),
			(0, T.jsx)(`output`, {
				className: i && a !== void 0 ? `flex items-center gap-2 px-4 pb-2 text-caption text-muted` : `sr-only`,
				children: i && a !== void 0 ? (0, T.jsxs)(T.Fragment, { children: [(0, T.jsxs)(`span`, {
					"aria-hidden": !0,
					className: `inline-flex gap-1`,
					children: [
						(0, T.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` }),
						(0, T.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted [animation-delay:200ms] motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` }),
						(0, T.jsx)(`span`, { className: `size-1.5 rounded-full bg-muted [animation-delay:400ms] motion-safe:animate-pulse forced-colors:bg-[color:CanvasText] forced-colors:forced-color-adjust-none` })
					]
				}), a] }) : null
			}),
			p ? (0, T.jsxs)(s, {
				onPress: v,
				className: `absolute bottom-3 left-1/2 z-(--sk-z-sticky) inline-flex h-control-sm -translate-x-1/2 items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 text-caption font-medium text-fg shadow-md transition-colors data-hovered:bg-hover data-pressed:bg-selected motion-safe:animate-rise`,
				children: [(0, T.jsx)(o, {
					name: `arrow.down`,
					size: 14,
					"aria-hidden": !0
				}), c]
			}) : null
		]
	});
}
var K = `flex min-w-0 items-start gap-1.5 border-s-2 py-0.5 ps-2 pe-1 text-start font-mono text-caption leading-5 [overflow-wrap:anywhere]`, q = {
	none: `border-border-strong`,
	pending: `border-border-strong`,
	ok: `border-ok`,
	info: `border-info`,
	warn: `border-warn`,
	danger: `border-danger`
};
function J({ status: e, children: t }) {
	return (0, T.jsxs)(T.Fragment, { children: [e === void 0 ? (0, T.jsx)(`span`, {
		"aria-hidden": !0,
		className: `shrink-0 text-muted`,
		children: `▸`
	}) : (0, T.jsx)(O, {
		tone: e.tone,
		size: 13,
		className: r(`mt-1`, D[e.tone])
	}), (0, T.jsxs)(`span`, {
		className: `min-w-0 text-muted`,
		children: [e === void 0 ? null : (0, T.jsx)(`span`, {
			className: r(`me-1.5 font-sans font-semibold`, D[e.tone]),
			children: e.label
		}), (0, T.jsx)(`span`, {
			className: `text-fg`,
			children: t
		})]
	})] });
}
function Y({ children: e, status: t, detail: n, defaultExpanded: i = !1, className: a, ...c }) {
	let l = q[t?.tone ?? `none`];
	return n === void 0 ? (0, T.jsx)(`div`, {
		...c,
		className: r(`max-w-full self-start`, a),
		children: (0, T.jsx)(`p`, {
			className: r(K, l),
			children: (0, T.jsx)(J, {
				status: t,
				children: e
			})
		})
	}) : (0, T.jsx)(`div`, {
		...c,
		className: r(`max-w-full self-start`, a),
		children: (0, T.jsxs)(C, {
			defaultExpanded: i,
			className: `group flex min-w-0 flex-col gap-1`,
			children: [(0, T.jsxs)(s, {
				slot: `trigger`,
				className: r(K, l, `min-h-6 w-full cursor-default rounded-e-sm data-hovered:bg-hover data-pressed:bg-selected`),
				children: [(0, T.jsx)(J, {
					status: t,
					children: e
				}), (0, T.jsx)(o, {
					name: `chevron.right`,
					size: 14,
					"aria-hidden": !0,
					className: `mt-0.5 ms-auto shrink-0 text-muted transition-transform group-data-expanded:rotate-90 motion-reduce:transition-none`
				})]
			}), (0, T.jsx)(S, {
				className: `min-w-0 ps-3`,
				children: n
			})]
		})
	});
}
var X = e({ default: () => ie }), Z = [
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
], Q = `inline-flex size-6 items-center justify-center rounded-sm text-muted transition-colors data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected`;
function ee() {
	let [e, t] = (0, w.useState)(Z), [n, r] = (0, w.useState)(!1);
	return (0, T.jsxs)(`div`, {
		className: `flex h-[30rem] min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-sunken`,
		children: [(0, T.jsx)(G, {
			label: `Chat with Claude Code`,
			isBusy: n,
			busyLabel: `Claude Code is writing`,
			jumpLabel: `Jump to the newest message`,
			emptyState: `Write the first message. The chat resumes from the agent session.`,
			className: `flex-1`,
			children: e.map((e) => e.kind === `tool` ? (0, T.jsx)(Y, {
				status: {
					tone: `ok`,
					label: `Done`
				},
				children: e.text
			}, e.id) : (0, T.jsx)(H, {
				from: e.kind,
				author: e.kind === `me` ? `You` : `Claude Code`,
				hideAuthor: e.kind === `me`,
				children: e.kind === `me` ? e.text : (0, T.jsx)(u, { text: e.text })
			}, e.id))
		}), (0, T.jsx)(`div`, {
			className: `border-t border-border bg-surface p-2`,
			children: (0, T.jsx)(z, {
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
var $ = [
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
function te() {
	let [e, t] = (0, w.useState)($);
	return (0, T.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, T.jsx)(j, {
				label: `Attached files`,
				showLabel: !0,
				items: e,
				onRemove: (e) => t((t) => t.filter((t) => !e.includes(t.id))),
				removeLabel: `Remove`
			}),
			e.length === 0 ? (0, T.jsx)(s, {
				onPress: () => t($),
				className: `self-start rounded-md border border-border-strong px-3 py-1 text-caption font-medium text-fg data-hovered:bg-hover`,
				children: `Restore the files`
			}) : null,
			(0, T.jsx)(j, {
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
function ne() {
	let [e, t] = (0, w.useState)([]), [n, r] = (0, w.useState)(``);
	return (0, T.jsxs)(`div`, {
		className: `flex flex-col gap-4`,
		children: [
			(0, T.jsx)(z, {
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
				attachments: (0, T.jsx)(j, {
					label: `Files to send`,
					items: e,
					onRemove: (e) => t((t) => t.filter((t) => !e.includes(t.id))),
					removeLabel: `Remove`
				}),
				footer: (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(`span`, { children: `Session 12:04` }), (0, T.jsx)(`span`, { children: `Context 18k · 9%` })] })
			}),
			(0, T.jsx)(`output`, {
				className: `text-caption text-muted`,
				children: n === `` ? `Nothing sent yet.` : `Sent: ${n}`
			}),
			(0, T.jsx)(z, {
				label: `Message (offline)`,
				showLabel: !0,
				sendLabel: `Send`,
				onSubmit: () => void 0,
				defaultValue: `Draft kept while offline`,
				isInvalid: !0,
				errorMessage: `You are offline. The message will wait until you reconnect.`
			}),
			(0, T.jsx)(z, {
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
function re() {
	let [e, t] = (0, w.useState)(!1);
	return (0, T.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, T.jsx)(N, {
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
		}), (0, T.jsxs)(`label`, {
			className: `flex items-center gap-2 text-caption text-fg`,
			children: [(0, T.jsx)(`input`, {
				type: `checkbox`,
				checked: e,
				onChange: (e) => t(e.target.checked),
				className: `size-4 accent-accent`
			}), `Make the next post fail`]
		})]
	});
}
var ie = {
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
			render: () => (0, T.jsx)(ee, {})
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
			render: () => (0, T.jsxs)(`div`, {
				className: `flex flex-col gap-3`,
				children: [
					(0, T.jsx)(H, {
						from: `other`,
						author: `Claude Code`,
						time: `2026-11-08T14:01`,
						timeLabel: `14:01`,
						actions: (0, T.jsx)(s, {
							"aria-label": `Copy message`,
							className: Q,
							children: (0, T.jsx)(o, {
								name: `action.copy`,
								size: 13,
								"aria-hidden": !0
							})
						}),
						children: `The tests pass. Shall I open a pull request?`
					}),
					(0, T.jsx)(H, {
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
					(0, T.jsx)(H, {
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
					(0, T.jsx)(H, {
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
			render: () => (0, T.jsxs)(`div`, {
				className: `flex flex-col gap-1.5`,
				children: [
					(0, T.jsx)(Y, { children: `Read src/content/Markdown.tsx` }),
					(0, T.jsx)(Y, {
						status: {
							tone: `pending`,
							label: `Running`
						},
						children: `npm run build`
					}),
					(0, T.jsx)(Y, {
						status: {
							tone: `ok`,
							label: `Done`
						},
						detail: (0, T.jsx)(d, {
							label: `Test output`,
							text: ` ✓ 30 tests passed
 Duration 2.5s`,
							maxLines: 4
						}),
						children: `npm test`
					}),
					(0, T.jsx)(Y, {
						status: {
							tone: `warn`,
							label: `Skipped`
						},
						children: `Lint, because no config was found`
					}),
					(0, T.jsx)(Y, {
						status: {
							tone: `danger`,
							label: `Failed`
						},
						defaultExpanded: !0,
						detail: (0, T.jsx)(d, {
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
			render: () => (0, T.jsx)(ne, {})
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
			render: () => (0, T.jsx)(te, {})
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
			render: () => (0, T.jsxs)(`ol`, {
				className: `flex flex-col divide-y divide-border`,
				children: [
					(0, T.jsx)(`li`, { children: (0, T.jsx)(F, {
						author: `Anna Nowak`,
						authorBadge: `Author`,
						time: `2026-11-08T12:10:00Z`,
						timeLabel: `2 hours ago`,
						timeTitle: `8 November 2026, 13:10`,
						editedLabel: `edited`,
						actions: (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(s, {
							"aria-label": `Edit comment`,
							className: Q,
							children: (0, T.jsx)(o, {
								name: `action.edit`,
								size: 13,
								"aria-hidden": !0
							})
						}), (0, T.jsx)(s, {
							"aria-label": `Delete comment`,
							className: Q,
							children: (0, T.jsx)(o, {
								name: `action.delete`,
								size: 13,
								"aria-hidden": !0
							})
						})] }),
						children: (0, T.jsx)(u, {
							text: `The fix works on **Firefox** and **Safari**.

- [x] Tested on a phone
- [ ] Tested with a screen reader`,
							headingOffset: 3
						})
					}) }),
					(0, T.jsx)(`li`, { children: (0, T.jsx)(F, {
						author: `Claude Code`,
						authorBadge: `Agent`,
						time: `2026-11-08T13:40:00Z`,
						timeLabel: `30 minutes ago`,
						children: (0, T.jsx)(u, {
							text: `### Work summary\\n\\nUpdated the workflow to Node 26. All checks pass.`,
							headingOffset: 1
						})
					}) }),
					(0, T.jsx)(`li`, { children: (0, T.jsx)(F, {
						author: `Piotr Wiśniewski`,
						status: {
							tone: `danger`,
							label: `Not posted`
						},
						children: (0, T.jsx)(`p`, { children: `Can we ship this on Friday?` })
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
			render: () => (0, T.jsx)(re, {})
		}
	]
};
export { X as t };
