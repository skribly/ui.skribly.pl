import { n as e, r as t } from "./rolldown-runtime.XKyaHtl9.js";
import { A as n, C as r, F as i, I as a } from "./doc.DoLlUurT.js";
import { n as o } from "./react-dom.B9zIfLd2.js";
import { t as s } from "./Button.D4_9kLv-.js";
import { t as c } from "./IconButton.CO9JIdQj.js";
import { t as l } from "./Badge.CXZBI9XV.js";
import { t as u } from "./Checkbox.Bkl7ZXk8.js";
import { t as d } from "./LinkButton.hD65PIQ3.js";
import { t as f } from "./CloseButton.CWzsOCns.js";
import { t as p } from "./ProgressBar.BbMXYPrp.js";
import { n as m, v as h } from "./Dialog.B6qxF5fw.js";
import { n as g, t as _ } from "./Modal.D5JxyBzm.js";
import { n as v } from "./useOverlayTriggerState.DCpCXuwM.js";
var y = t(o(), 1), b = (0, y.createContext)(null), x = (0, y.createContext)(null), S = i();
function C({ actionLabel: e, href: t, onAction: n, isPending: r = !1, pendingLabel: i, isDisabled: a = !1, id: o, titleId: c, variant: l }) {
	if (!e) return null;
	let u = `${o} ${c}`;
	return t === void 0 ? (0, S.jsx)(s, {
		id: o,
		"aria-labelledby": u,
		size: `sm`,
		variant: l,
		isPending: r,
		isDisabled: a,
		...i === void 0 ? {} : { pendingLabel: i },
		...n === void 0 ? {} : { onPress: n },
		className: `shrink-0`,
		children: e
	}) : (0, S.jsx)(d, {
		id: o,
		"aria-labelledby": u,
		href: t,
		size: `sm`,
		variant: l,
		isDisabled: a,
		className: `shrink-0`,
		children: e
	});
}
function w({ title: e, hint: t, isDone: r = !1, onDoneChange: i, note: o, className: s, isDisabled: c = !1, ...l }) {
	let d = (0, y.useContext)(b), f = (0, y.useId)(), p = (0, y.useId)(), m = !r && t !== void 0;
	return (0, S.jsxs)(`li`, {
		"data-done": r || void 0,
		className: a(`flex min-w-0 flex-wrap items-start gap-x-3 gap-y-1.5 px-4 py-3`, s),
		children: [i ? (0, S.jsx)(`div`, {
			className: `min-w-0 flex-1 basis-48`,
			children: (0, S.jsx)(u, {
				isSelected: r,
				onChange: i,
				isDisabled: c,
				...m ? { description: t } : {},
				children: (0, S.jsx)(`span`, {
					id: f,
					className: a(`[overflow-wrap:anywhere]`, r ? `text-muted line-through decoration-1` : `font-medium`),
					children: e
				})
			})
		}) : (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(`span`, {
			"aria-hidden": !0,
			className: a(`mt-0.5 flex shrink-0 [&_svg]:size-4`, r ? `text-ok` : `text-muted`),
			children: r ? (0, S.jsx)(n, { name: `status.ok` }) : (0, S.jsx)(n, { name: `status.todo` })
		}), (0, S.jsxs)(`div`, {
			className: `min-w-0 flex-1 basis-40`,
			children: [(0, S.jsxs)(`p`, { children: [(0, S.jsx)(`span`, {
				id: f,
				className: a(`[overflow-wrap:anywhere]`, r ? `text-muted` : `font-medium`),
				children: e
			}), d ? (0, S.jsx)(`span`, {
				className: `sr-only`,
				children: `, ${r ? d.doneLabel : d.todoLabel}`
			}) : null] }), m ? (0, S.jsx)(`p`, {
				className: `text-caption text-muted [overflow-wrap:anywhere]`,
				children: t
			}) : null]
		})] }), r ? null : l.actionLabel ? (0, S.jsx)(C, {
			...l,
			isDisabled: c,
			id: p,
			titleId: f,
			variant: `outline`
		}) : o ? (0, S.jsx)(`span`, {
			className: `shrink-0 self-center text-caption text-muted`,
			children: o
		}) : null]
	});
}
function T({ title: e, description: t, children: n, progressLabel: i, doneLabel: o, todoLabel: s, emptyMessage: c, completeMessage: u, completeToneLabel: d, headingLevel: f = 2, className: p, ...m }) {
	let h = (0, y.useId)(), g = `h${f}`, _ = y.Children.toArray(n).filter((e) => (0, y.isValidElement)(e) && e.type === w), v = _.length, x = _.filter((e) => e.props.isDone).length, C = v > 0 && x === v, T = (0, y.useMemo)(() => ({
		doneLabel: o,
		todoLabel: s
	}), [o, s]);
	return (0, S.jsxs)(`section`, {
		...m,
		"aria-labelledby": h,
		className: a(`min-w-0 overflow-hidden rounded-lg border border-border bg-surface text-fg shadow-sm`, p),
		children: [
			(0, S.jsxs)(`div`, {
				className: `flex flex-wrap items-start gap-x-3 gap-y-1 border-b border-border px-4 py-3`,
				children: [(0, S.jsxs)(`div`, {
					className: `min-w-0 flex-1`,
					children: [(0, S.jsx)(g, {
						id: h,
						className: `text-title font-semibold [overflow-wrap:anywhere]`,
						children: e
					}), t ? (0, S.jsx)(`p`, {
						className: `text-caption text-muted [overflow-wrap:anywhere]`,
						children: t
					}) : null]
				}), v > 0 ? (0, S.jsx)(l, {
					tone: C ? `ok` : `neutral`,
					children: i(x, v)
				}) : null]
			}),
			v === 0 ? c ? (0, S.jsx)(`p`, {
				className: `px-4 py-6 text-center text-body text-muted`,
				children: c
			}) : null : (0, S.jsx)(b, {
				value: T,
				children: (0, S.jsx)(`ul`, {
					className: `divide-y divide-border`,
					children: n
				})
			}),
			(0, S.jsx)(`div`, {
				"aria-live": `polite`,
				children: C && u ? (0, S.jsx)(r, {
					tone: `ok`,
					title: u,
					...d === void 0 ? {} : { toneLabel: d },
					className: `m-3`
				}) : null
			})
		]
	});
}
function E({ title: e, description: t, icon: r, isDone: i = !1, error: o, errorToneLabel: s, className: c, ...l }) {
	let u = (0, y.useContext)(b), d = (0, y.useId)(), f = (0, y.useId)();
	return (0, S.jsxs)(`li`, {
		"data-done": i || void 0,
		className: a(`flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-2 rounded-md border bg-surface p-2.5`, o ? `border-danger` : `border-border`, c),
		children: [
			(0, S.jsx)(`span`, {
				"aria-hidden": !0,
				className: a(`grid size-6 shrink-0 place-items-center rounded-full border border-transparent [&_svg]:size-3.5`, i ? `bg-ok-soft text-ok` : `bg-hover text-muted`),
				children: i ? (0, S.jsx)(n, {
					name: `action.check`,
					strokeWidth: 3
				}) : r
			}),
			(0, S.jsxs)(`div`, {
				className: `min-w-0 flex-1 basis-40`,
				children: [
					(0, S.jsxs)(`p`, {
						className: `font-semibold`,
						children: [(0, S.jsx)(`span`, {
							id: d,
							className: a(`[overflow-wrap:anywhere]`, i && `text-muted line-through decoration-1`),
							children: e
						}), u ? (0, S.jsx)(`span`, {
							className: `sr-only`,
							children: `, ${i ? u.doneLabel : u.todoLabel}`
						}) : null]
					}),
					t ? (0, S.jsx)(`p`, {
						className: `text-caption text-muted [overflow-wrap:anywhere]`,
						children: t
					}) : null,
					o ? (0, S.jsxs)(`p`, {
						className: `mt-1 flex items-start gap-1.5 text-caption text-danger`,
						children: [(0, S.jsx)(n, {
							name: `status.danger`,
							"aria-hidden": !0,
							className: `mt-px size-3.5 shrink-0`
						}), (0, S.jsxs)(`span`, {
							className: `[overflow-wrap:anywhere]`,
							children: [s ? (0, S.jsx)(`span`, {
								className: `sr-only`,
								children: `${s}: `
							}) : null, o]
						})]
					}) : null
				]
			}),
			(0, S.jsx)(C, {
				...l,
				id: f,
				titleId: d,
				variant: i ? `ghost` : `primary`
			})
		]
	});
}
function D({ title: e, icon: t, children: n, progressLabel: i, doneLabel: o, todoLabel: s, actions: c, onDismiss: u, dismissLabel: d, completeMessage: m, completeToneLabel: h, completeActions: g, headingLevel: _ = 2, container: v, className: x, ...C }) {
	let w = (0, y.useId)(), T = `h${_}`, D = y.Children.toArray(n).filter((e) => (0, y.isValidElement)(e) && e.type === E), O = D.length, k = D.filter((e) => e.props.isDone).length, A = O > 0 && k === O, j = (0, y.useMemo)(() => ({
		doneLabel: o,
		todoLabel: s
	}), [o, s]), M = i(k, O);
	return (0, S.jsxs)(`section`, {
		...C,
		"aria-labelledby": w,
		className: a(`min-w-0 rounded-lg border border-border bg-linear-to-br from-accent-soft via-surface to-surface p-4 text-fg shadow-sm`, x),
		children: [
			(0, S.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-x-3 gap-y-2`,
				children: [
					t ? (0, S.jsx)(`span`, {
						"aria-hidden": !0,
						className: `flex shrink-0 text-accent-text [&_svg]:size-4`,
						children: t
					}) : null,
					(0, S.jsx)(T, {
						id: w,
						className: `min-w-0 flex-1 text-title font-semibold [overflow-wrap:anywhere]`,
						children: e
					}),
					(0, S.jsx)(l, {
						tone: A ? `ok` : `accent`,
						"aria-hidden": !0,
						children: M
					}),
					c,
					u && d ? (0, S.jsx)(f, {
						label: d,
						onPress: u,
						container: v ?? null
					}) : null
				]
			}),
			(0, S.jsx)(p, {
				label: e,
				hideLabel: !0,
				showValue: !1,
				size: `sm`,
				tone: A ? `ok` : `accent`,
				value: k,
				maxValue: Math.max(O, 1),
				valueLabel: M,
				className: `my-3`
			}),
			(0, S.jsx)(b, {
				value: j,
				children: (0, S.jsx)(`ol`, {
					className: `grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-2`,
					children: n
				})
			}),
			(0, S.jsx)(`div`, {
				"aria-live": `polite`,
				children: A && m ? (0, S.jsx)(r, {
					tone: `ok`,
					title: m,
					...h === void 0 ? {} : { toneLabel: h },
					...g === void 0 ? {} : { actions: g },
					className: `mt-3`
				}) : null
			})
		]
	});
}
function O(e) {
	if (!e) return null;
	let t = e.getBoundingClientRect();
	return {
		x: t.left,
		y: t.top,
		width: t.width,
		height: t.height
	};
}
function k(e) {
	let [t, n] = (0, y.useState)(() => ({
		target: e,
		box: O(e)
	}));
	return (0, y.useLayoutEffect)(() => {
		if (!e) return;
		let t = 0, r = () => {
			cancelAnimationFrame(t), t = requestAnimationFrame(() => n({
				target: e,
				box: O(e)
			}));
		};
		r(), window.addEventListener(`resize`, r), document.addEventListener(`scroll`, r, !0);
		let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(r);
		return i?.observe(e), () => {
			cancelAnimationFrame(t), window.removeEventListener(`resize`, r), document.removeEventListener(`scroll`, r, !0), i?.disconnect();
		};
	}, [e]), t.target === e ? t.box : O(e);
}
function A({ target: e, padding: t = 8, showCursor: n = !1, className: r }) {
	let i = k(e), o = (0, y.useMemo)(() => i ? {
		top: i.y - t,
		left: i.x - t,
		width: i.width + t * 2,
		height: i.height + t * 2
	} : {
		top: `50%`,
		left: `50%`,
		width: 0,
		height: 0
	}, [i, t]), s = (0, y.useMemo)(() => i ? { transform: `translate(${Math.round(i.x + Math.min(i.width / 2, 48))}px, ${Math.round(i.y + Math.min(i.height / 2, 22))}px)` } : void 0, [i]);
	return (0, S.jsxs)(`div`, {
		"aria-hidden": !0,
		"data-spotlight": ``,
		className: a(`pointer-events-none fixed inset-0 z-(--sk-z-tour) overflow-hidden`, r),
		children: [(0, S.jsx)(`div`, {
			style: o,
			className: a(`absolute rounded-lg shadow-[0_0_0_200vmax_var(--sk-scrim)] transition-[top,left,width,height] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none`, i ? `border-2 border-focus forced-colors:border-[Highlight]` : `border-0`)
		}), n && s ? (0, S.jsx)(`svg`, {
			"data-sk-drawn": `overlay`,
			viewBox: `0 0 28 28`,
			style: s,
			className: `absolute top-0 left-0 size-7 drop-shadow-md transition-transform duration-[calc(var(--sk-duration-slow)*3)] ease-out motion-reduce:transition-none forced-colors:hidden`,
			children: (0, S.jsx)(`path`, {
				d: `M5 3.5 L5 22 L10 17.4 L13.4 25 L17 23.4 L13.7 16 L20.5 16 Z`,
				className: `fill-surface stroke-fg`,
				strokeWidth: `1.6`,
				strokeLinejoin: `round`
			})
		}) : null]
	});
}
function j({ title: e, children: t, headingLevel: n = 2 }) {
	let r = (0, y.useContext)(x);
	return r ? (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(h, {
		slot: `title`,
		level: n,
		className: `text-title font-semibold [overflow-wrap:anywhere]`,
		children: e
	}), t === void 0 ? null : (0, S.jsx)(`div`, {
		id: r.bodyId,
		className: `text-body leading-relaxed text-muted [overflow-wrap:anywhere]`,
		children: t
	})] }) : null;
}
var M = `(max-width: 639.98px)`;
function ee() {
	let [e, t] = (0, y.useState)(() => typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(M).matches);
	return (0, y.useEffect)(() => {
		if (typeof window.matchMedia != `function`) return;
		let e = window.matchMedia(M), n = () => t(e.matches);
		return n(), e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n);
	}, []), e;
}
function N() {
	return typeof window.matchMedia != `function` || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches || document.documentElement.classList.contains(`a11y-reduce-motion`);
}
function P(e) {
	return typeof CSS < `u` && typeof CSS.escape == `function` ? CSS.escape(e) : e.replaceAll(/["\\]/g, `\\$&`);
}
function te(e) {
	return e === void 0 ? null : typeof e == `function` ? e() : document.querySelector(`[data-tour="${P(e)}"]`);
}
function ne(e) {
	return !e.isConnected || e.closest(`[hidden]`) ? !1 : typeof e.checkVisibility != `function` || e.checkVisibility();
}
function re(e, t) {
	let n = e.getBoundingClientRect();
	n.top >= 0 && n.bottom <= window.innerHeight * (t ? .4 : 1) || e.scrollIntoView?.({
		block: `center`,
		inline: `nearest`,
		behavior: N() ? `auto` : `smooth`
	});
}
function ie(e) {
	return e instanceof HTMLElement && (e.isContentEditable || [
		`INPUT`,
		`TEXTAREA`,
		`SELECT`
	].includes(e.tagName));
}
function ae(e, t, n) {
	let [r, i] = (0, y.useState)(t);
	return [e === void 0 ? r : e, (0, y.useCallback)((e) => {
		i(e), n?.(e);
	}, [n])];
}
function F({ children: e, isOpen: t, defaultOpen: r = !1, onOpenChange: i, step: o, defaultStep: c = 0, onStepChange: l, onFinish: u, onDismiss: d, stepLabel: p, nextLabel: h, backLabel: b, finishLabel: C, closeLabel: w, showCursor: T = !1, container: E, className: D }) {
	let O = (0, y.useMemo)(() => y.Children.toArray(e).filter((e) => (0, y.isValidElement)(e) && e.type === j), [e]), [k, M] = ae(t, r, i), [N, P] = ae(o, c, l), [F, I] = (0, y.useState)(() => new Set()), [L, R] = (0, y.useState)(null), z = (0, y.useRef)(1), B = (0, y.useRef)(null), V = ee(), oe = (0, y.useRef)(null), H = (0, y.useId)(), se = (0, y.useMemo)(() => ({ bodyId: H }), [H]), U = (0, y.useRef)({
		steps: O,
		setIndex: P,
		setOpen: M,
		onFinish: u,
		narrow: V
	});
	(0, y.useLayoutEffect)(() => {
		U.current = {
			steps: O,
			setIndex: P,
			setOpen: M,
			onFinish: u,
			narrow: V
		};
	});
	let [ce, le] = (0, y.useState)(k);
	k !== ce && (le(k), k || (R(null), I(new Set())));
	let W = (0, y.useCallback)((e) => {
		M(!1), R(null), e ? u?.() : d?.();
	}, [
		M,
		u,
		d
	]);
	(0, y.useEffect)(() => {
		k && (z.current = 1);
	}, [k]), (0, y.useEffect)(() => {
		if (!k) return;
		let e = U.current.steps[N];
		if (!e) return;
		e.props.onEnter?.();
		let t = requestAnimationFrame(() => {
			t = requestAnimationFrame(() => {
				let { target: t } = e.props, n = te(t);
				if (t !== void 0 && (!n || !ne(n))) {
					I((e) => new Set(e).add(N));
					let e = N + z.current;
					e >= 0 && e < U.current.steps.length ? U.current.setIndex(e) : z.current > 0 ? (U.current.setOpen(!1), R(null), U.current.onFinish?.()) : (z.current = 1, R((e) => e));
				} else n && re(n, U.current.narrow), B.current = n, R({
					index: N,
					target: n
				});
			});
		});
		return () => cancelAnimationFrame(t);
	}, [k, N]);
	let G = O.map((e, t) => !F.has(t)), K = G.filter(Boolean).length, q = L ? G.slice(0, L.index + 1).filter(Boolean).length : 0, J = L ? !G.slice(L.index + 1).some(Boolean) : !1, ue = L ? G.slice(0, L.index).some(Boolean) : !1, de = L ? p(q, K) : ``, fe = (0, y.useMemo)(() => ({ width: `${K ? q / K * 100 : 0}%` }), [q, K]), Y = (0, y.useCallback)((e) => {
		if (!L) return;
		z.current = e;
		let t = L.index + e;
		for (; t >= 0 && t < O.length && F.has(t);) t += e;
		t < 0 || (t >= O.length ? W(!0) : P(t));
	}, [
		L,
		O.length,
		F,
		W,
		P
	]), X = (0, y.useCallback)(() => J ? W(!0) : Y(1), [
		J,
		W,
		Y
	]), Z = (0, y.useCallback)(() => Y(-1), [Y]), Q = (0, y.useCallback)(() => W(!1), [W]), pe = (0, y.useCallback)((e) => {
		ie(e.target) || (e.key === `ArrowRight` ? (e.preventDefault(), X()) : e.key === `ArrowLeft` && (e.preventDefault(), Z()));
	}, [X, Z]), me = (0, y.useCallback)((e) => {
		e || Q();
	}, [Q]), $ = L ? O[L.index] : void 0, he = k && L !== null, ge = !!L?.target && !V, { overlayProps: _e } = v({
		targetRef: B,
		overlayRef: oe,
		placement: $?.props.placement ?? `bottom`,
		offset: 16,
		containerPadding: 12,
		isOpen: he && ge
	});
	if (!he || !$ || !L) return null;
	let ve = (0, S.jsxs)(S.Fragment, { children: [
		de,
		`. `,
		$.props.title,
		typeof $.props.children == `string` ? ` ${$.props.children}` : null
	] });
	return (0, S.jsxs)(g, {
		isOpen: !0,
		onOpenChange: me,
		isDismissable: !1,
		...E ? { UNSTABLE_portalContainer: E } : {},
		className: `fixed inset-0 z-(--sk-z-tour)`,
		children: [(0, S.jsx)(A, {
			target: L.target,
			showCursor: T && !V
		}), (0, S.jsx)(_, {
			ref: oe,
			...ge && _e.style ? { style: _e.style } : {},
			className: a(`rounded-xl border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-rise motion-reduce:animate-none`, `z-(--sk-z-tour) overflow-y-auto`, ge ? `w-[min(22rem,calc(100vw-1.5rem))]` : L.target ? `fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-h-[60dvh]` : `fixed top-1/2 left-1/2 max-h-[calc(100dvh-1.5rem)] w-[min(24rem,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2`, D),
			children: (0, S.jsx)(m, {
				...$.props.children === void 0 ? {} : { "aria-describedby": H },
				className: `outline-none`,
				children: (0, S.jsxs)(`div`, {
					role: `presentation`,
					onKeyDown: pe,
					className: `flex flex-col gap-2 p-4`,
					children: [
						(0, S.jsxs)(`div`, {
							className: `-mt-1 -mr-1 flex items-center gap-2`,
							children: [(0, S.jsx)(`p`, {
								className: `flex-1 text-caption text-muted tabular-nums`,
								children: de
							}), (0, S.jsx)(f, {
								label: w,
								onPress: Q,
								container: E ?? null
							})]
						}),
						(0, S.jsx)(x, {
							value: se,
							children: $
						}),
						(0, S.jsx)(`div`, {
							"aria-hidden": !0,
							className: `my-1 h-1 overflow-hidden rounded-full border border-transparent bg-hover`,
							children: (0, S.jsx)(`div`, {
								className: `h-full rounded-full bg-accent transition-[width] duration-(--sk-duration-slow) ease-out motion-reduce:transition-none forced-colors:bg-[Highlight]`,
								style: fe
							})
						}),
						(0, S.jsxs)(`div`, {
							className: `flex flex-wrap items-center justify-end gap-2`,
							children: [ue ? (0, S.jsxs)(s, {
								variant: `outline`,
								size: `sm`,
								onPress: Z,
								children: [(0, S.jsx)(n, {
									name: `chevron.left`,
									"aria-hidden": !0,
									className: `rtl:rotate-180`
								}), b]
							}) : null, (0, S.jsxs)(s, {
								size: `sm`,
								onPress: X,
								autoFocus: !0,
								children: [J ? C : h, J ? null : (0, S.jsx)(n, {
									name: `chevron.right`,
									"aria-hidden": !0,
									className: `rtl:rotate-180`
								})]
							})]
						}, L.index),
						(0, S.jsx)(`div`, {
							"aria-live": `polite`,
							"aria-atomic": `true`,
							className: `sr-only`,
							children: ve
						})
					]
				})
			})
		})]
	});
}
var I = e({ default: () => H });
function L({ children: e }) {
	let [t, n] = (0, y.useState)(null);
	return (0, S.jsx)(`div`, {
		ref: n,
		children: e(t)
	});
}
var R = {
	stepLabel: (e, t) => `Step ${e} of ${t}`,
	nextLabel: `Next`,
	backLabel: `Back`,
	finishLabel: `Done`,
	closeLabel: `Close the guide`
};
function z() {
	let e = (0, y.useId)(), [t, r] = (0, y.useState)(!1), [i, a] = (0, y.useState)(``), o = (t) => `${e}-${t}`;
	return (0, S.jsx)(L, { children: (e) => (0, S.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [
			(0, S.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-2 rounded-lg border border-border bg-bar p-2`,
				children: [
					(0, S.jsx)(`span`, {
						"data-tour": o(`search`),
						className: `inline-flex`,
						children: (0, S.jsx)(c, {
							label: `Search`,
							container: e,
							children: (0, S.jsx)(n, {
								name: `action.search`,
								"aria-hidden": !0
							})
						})
					}),
					(0, S.jsx)(`span`, {
						"data-tour": o(`new`),
						className: `inline-flex`,
						children: (0, S.jsxs)(s, {
							size: `sm`,
							children: [(0, S.jsx)(n, {
								name: `action.add`,
								"aria-hidden": !0
							}), `New page`]
						})
					}),
					(0, S.jsx)(`span`, {
						"data-tour": o(`settings`),
						className: `ms-auto inline-flex`,
						children: (0, S.jsx)(c, {
							label: `Settings`,
							container: e,
							children: (0, S.jsx)(n, {
								name: `nav.settings`,
								"aria-hidden": !0
							})
						})
					})
				]
			}),
			(0, S.jsxs)(`div`, {
				className: `flex flex-wrap items-center gap-3`,
				children: [(0, S.jsx)(s, {
					variant: `outline`,
					onPress: () => {
						a(``), r(!0);
					},
					children: `Start the guide`
				}), (0, S.jsx)(`output`, {
					"aria-live": `polite`,
					className: `text-caption text-muted`,
					children: i
				})]
			}),
			(0, S.jsxs)(F, {
				...R,
				container: e,
				isOpen: t,
				onOpenChange: r,
				showCursor: !0,
				onFinish: () => a(`Guide finished.`),
				onDismiss: () => a(`Guide closed early.`),
				children: [
					(0, S.jsx)(j, {
						title: `A quick look around`,
						children: `Four stops, about a minute. Use the arrow keys or the buttons, and Escape to leave.`
					}),
					(0, S.jsx)(j, {
						target: o(`search`),
						title: `Search everything`,
						children: `Finds views, pages and actions from one box.`
					}),
					(0, S.jsx)(j, {
						target: o(`archive`),
						title: `Archive`,
						children: `This element is not on the page, so the step is skipped and not counted.`
					}),
					(0, S.jsx)(j, {
						target: o(`new`),
						title: `Start a page`,
						placement: `bottom start`,
						children: `Creates an empty page in the current project.`
					}),
					(0, S.jsx)(j, {
						target: o(`settings`),
						title: `Settings`,
						placement: `left`,
						children: `The guide is always here again, under Help.`
					})
				]
			})
		]
	}) });
}
function B() {
	let [e, t] = (0, y.useState)(null), [n, r] = (0, y.useState)(!1);
	return (0, S.jsxs)(`div`, {
		className: `flex flex-col gap-3`,
		children: [(0, S.jsxs)(`div`, {
			ref: t,
			className: `flex flex-wrap items-center gap-3 rounded-lg border border-border bg-surface p-3`,
			children: [(0, S.jsx)(`p`, {
				className: `min-w-0 flex-1`,
				children: `Export now saves a PDF as well.`
			}), (0, S.jsx)(s, {
				size: `sm`,
				variant: `outline`,
				"aria-pressed": n,
				onPress: () => r(!n),
				children: n ? `Stop pointing` : `Point at this`
			})]
		}), n ? (0, S.jsx)(A, { target: e }) : null]
	});
}
function V() {
	let [e, t] = (0, y.useState)(new Set([`project`])), [r, i] = (0, y.useState)(!1), [a, o] = (0, y.useState)(!1), [c, l] = (0, y.useState)(!1), u = (e) => t((t) => new Set(t).add(e)), d = () => {
		i(!0), o(!1), setTimeout(() => {
			i(!1), a ? u(`agents`) : o(!0);
		}, 900);
	};
	return c ? (0, S.jsx)(s, {
		variant: `outline`,
		onPress: () => l(!1),
		children: `Show first steps again`
	}) : (0, S.jsx)(L, { children: (t) => (0, S.jsxs)(D, {
		title: `First steps`,
		icon: (0, S.jsx)(n, { name: `ops.deploy` }),
		progressLabel: (e, t) => `${e} of ${t} done`,
		doneLabel: `done`,
		todoLabel: `to do`,
		headingLevel: 3,
		container: t,
		actions: (0, S.jsx)(s, {
			size: `sm`,
			variant: `ghost`,
			children: `Guide`
		}),
		onDismiss: () => l(!0),
		dismissLabel: `Hide first steps`,
		completeMessage: `All set. You can hide this card.`,
		completeToneLabel: `Success`,
		completeActions: (0, S.jsx)(s, {
			size: `sm`,
			variant: `outline`,
			onPress: () => l(!0),
			children: `Hide`
		}),
		children: [
			(0, S.jsx)(E, {
				title: `Add a project`,
				description: `A folder with a repository. The base branch and the commit style are found for you.`,
				icon: (0, S.jsx)(n, { name: `folder.add` }),
				isDone: e.has(`project`),
				actionLabel: e.has(`project`) ? `Add another` : `Add project`,
				onAction: () => u(`project`)
			}),
			(0, S.jsx)(E, {
				title: `Connect a task tracker`,
				description: `Your tasks in one list.`,
				icon: (0, S.jsx)(n, { name: `nav.tasks` }),
				isDone: e.has(`tracker`),
				actionLabel: `Connect`,
				onAction: () => u(`tracker`)
			}),
			(0, S.jsx)(E, {
				title: `Find agents`,
				description: `Looks for installed command line agents. The first try fails on purpose.`,
				icon: (0, S.jsx)(n, { name: `agent.bot` }),
				isDone: e.has(`agents`),
				actionLabel: a ? `Try again` : `Find`,
				isPending: r,
				pendingLabel: `Searching`,
				onAction: d,
				...a && !r ? {
					error: `No agents found on this computer.`,
					errorToneLabel: `Error`
				} : {}
			}),
			(0, S.jsx)(E, {
				title: `Install skills`,
				description: `Ready instructions for agents, matched to the project.`,
				icon: (0, S.jsx)(n, { name: `ai.sparkles` }),
				isDone: e.has(`skills`),
				actionLabel: `Install`,
				onAction: () => u(`skills`)
			}),
			(0, S.jsx)(E, {
				title: `Try the keyboard`,
				description: `Press ? anywhere to see every shortcut. This one has a long title to show how text wraps in a narrow column.`,
				icon: (0, S.jsx)(n, { name: `device.keyboard` }),
				isDone: e.has(`keys`),
				actionLabel: `Show`,
				onAction: () => u(`keys`)
			})
		]
	}) });
}
function oe() {
	let [e, t] = (0, y.useState)(new Set([`tests`])), n = (e) => (n) => t((t) => {
		let r = new Set(t);
		return n ? r.add(e) : r.delete(e), r;
	}), r = {
		progressLabel: (e, t) => `${e} of ${t} done`,
		doneLabel: `done`,
		todoLabel: `to do`,
		headingLevel: 3
	};
	return (0, S.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-2`,
		children: [
			(0, S.jsxs)(T, {
				title: `Ready to go live`,
				description: `What the site needs before visitors see it.`,
				...r,
				children: [
					(0, S.jsx)(w, {
						title: `Site address`,
						isDone: !0
					}),
					(0, S.jsx)(w, {
						title: `Logo`,
						hint: `Shown in the header and in shared links.`,
						actionLabel: `Fix`,
						href: `#logo`
					}),
					(0, S.jsx)(w, {
						title: `Contact details`,
						hint: `An email address or a phone number.`,
						actionLabel: `Fix`,
						href: `#contact`
					}),
					(0, S.jsx)(w, {
						title: `Storage provider`,
						hint: `Needed before uploads can start.`,
						note: `Ask your administrator`
					})
				]
			}),
			(0, S.jsxs)(T, {
				title: `Before the release`,
				...r,
				completeMessage: `Everything is checked. Ready to publish.`,
				completeToneLabel: `Success`,
				children: [
					(0, S.jsx)(w, {
						title: `Tests pass`,
						isDone: e.has(`tests`),
						onDoneChange: n(`tests`)
					}),
					(0, S.jsx)(w, {
						title: `Changelog updated`,
						hint: `List what changed for readers.`,
						isDone: e.has(`log`),
						onDoneChange: n(`log`)
					}),
					(0, S.jsx)(w, {
						title: `Version tagged`,
						isDone: e.has(`tag`),
						onDoneChange: n(`tag`)
					})
				]
			}),
			(0, S.jsx)(T, {
				title: `Open issues`,
				...r,
				emptyMessage: `Nothing to check yet.`
			})
		]
	});
}
var H = {
	title: `Onboarding`,
	description: `Help for the first minutes: a guided tour that points at the interface, a first-steps card driven by real data, and checklists with the way to fix each item. Progress is always said in words as well as shown.`,
	pl: {
		title: `Onboarding`,
		description: `Pomoc w pierwszych minutach: przewodnik, który wskazuje elementy interfejsu, karta pierwszych kroków oparta na prawdziwych danych oraz listy kontrolne z drogą do naprawy każdej pozycji. Postęp jest zawsze podany słowami, a nie tylko pokazany.`
	},
	demos: [
		{
			name: `Tour`,
			components: [`Tour`, `TourStep`],
			description: `A guided walk that dims the page, rings one element per step and explains it in a bubble beside it. Use it once after sign-up or from a Help menu; steps whose element is missing are skipped and not counted.`,
			usage: `<Tour isOpen={open} onOpenChange={setOpen}
  stepLabel={(n, total) => \`Step \${n} of \${total}\`}
  nextLabel="Next" backLabel="Back" finishLabel="Done" closeLabel="Close the guide">
  <TourStep title="A quick look around">Four stops, about a minute.</TourStep>
  <TourStep target="search" title="Search everything">Finds views and actions.</TourStep>
</Tour>
<IconButton data-tour="search" label="Search">…</IconButton>`,
			accessibility: `The bubble is a modal dialog named by the step title and described by its text: the page behind is inert for screen readers and the pointer, and Tab stays in the bubble. Focus moves to Next on every step. Arrow keys step, Escape closes and focus goes back to what opened it. Each step is announced in a polite live region. On screens under 640px the bubble docks at the bottom; motion stops under reduced motion.`,
			pl: {
				description: `Przewodnik, który przyciemnia stronę, obwodzi jeden element na każdym kroku i objaśnia go w dymku obok. Użyj go raz po rejestracji albo z menu pomocy; kroki, których elementu brakuje, są pomijane i nie są liczone.`,
				accessibility: `Dymek jest oknem dialogowym nazwanym tytułem kroku i opisanym jego tekstem: strona za nim jest nieaktywna dla czytników ekranu i wskaźnika, a Tab zostaje w dymku. Fokus przechodzi na przycisk Dalej na każdym kroku. Klawisze strzałek zmieniają krok, Escape zamyka przewodnik, a fokus wraca na element, który go otworzył. Każdy krok jest ogłaszany w regionie na żywo typu polite. Na ekranach węższych niż 640 px dymek przykleja się do dołu, a przy ograniczonym ruchu animacje zatrzymują się.`
			},
			render: () => (0, S.jsx)(z, {})
		},
		{
			name: `TourSpotlight`,
			components: [`TourSpotlight`],
			description: `The dim and the ring a Tour draws, on its own, to point at one element, such as a new feature. It never blocks the pointer, so the page stays usable.`,
			usage: `<TourSpotlight target={element} showCursor />`,
			accessibility: `Decoration only: hidden from screen readers, so say in words what it points at. The ring is a real border, which stays in forced-colors mode where the dim shadow is dropped. It moves without animation under reduced motion.`,
			pl: {
				description: `Samo przyciemnienie i obwódka, które rysuje Tour, użyte osobno, aby wskazać jeden element, na przykład nową funkcję. Nigdy nie blokuje wskaźnika, więc strona pozostaje użyteczna.`,
				accessibility: `Tylko dekoracja: jest ukryta przed czytnikami ekranu, więc napisz słowami, co wskazuje. Obwódka jest prawdziwą ramką, która zostaje w trybie wymuszonych kolorów, gdzie cień przyciemnienia jest pomijany. Przy ograniczonym ruchu przesuwa się bez animacji.`
			},
			render: () => (0, S.jsx)(B, {})
		},
		{
			name: `OnboardingSteps`,
			components: [`OnboardingSteps`, `OnboardingStep`],
			description: `A first-run card with what to set up, how far along the reader is and a button per step. Feed isDone from real data, so a step is done when the thing exists, not when it was ticked.`,
			usage: `<OnboardingSteps title="First steps" doneLabel="done" todoLabel="to do"
  progressLabel={(done, total) => \`\${done} of \${total} done\`}
  completeMessage="All set">
  <OnboardingStep title="Add a project" isDone={projects.length > 0} actionLabel="Add project" onAction={add} />
</OnboardingSteps>`,
			accessibility: `A region named by its title with a progress bar whose value is read in words. Each row says "done" or "to do" after its title, and a done row also shows a check and a strike-through. Every action is named with its row, such as "Connect, Connect a task tracker". Errors carry an icon and a word; the complete message is announced politely.`,
			pl: {
				description: `Karta pierwszego uruchomienia z tym, co trzeba skonfigurować, postępem czytelnika i przyciskiem przy każdym kroku. Przekaż isDone z prawdziwych danych, aby krok był zrobiony, gdy rzecz istnieje, a nie gdy ktoś go odhaczył.`,
				accessibility: `Region nazwany swoim tytułem, z paskiem postępu, którego wartość jest odczytywana słowami. Każdy wiersz mówi „gotowe” albo „do zrobienia” po tytule, a gotowy wiersz pokazuje też znacznik i przekreślenie. Każda akcja ma nazwę razem z wierszem, na przykład „Connect, Connect a task tracker”. Błędy mają ikonę i słowo, a komunikat o ukończeniu jest ogłaszany w trybie polite.`
			},
			render: () => (0, S.jsx)(V, {})
		},
		{
			name: `Checklist`,
			components: [`Checklist`, `ChecklistItem`],
			description: `A list of what has to happen before something is ready, with a link to fix each item. Items can show state from data, or be checkboxes the reader ticks for a manual list.`,
			usage: "<Checklist title=\"Ready to go live\" doneLabel=\"done\" todoLabel=\"to do\"\n  progressLabel={(done, total) => `${done} of ${total} done`}>\n  <ChecklistItem title=\"Logo\" hint=\"Shown in the header.\" actionLabel=\"Fix\" href=\"/settings/logo\" />\n</Checklist>",
			accessibility: `A region named by its title, with the count in words. Data rows read "done" or "to do" after the title and show a check or an empty circle; tickable rows are real checkboxes with the hint as description. "Fix" links are named with their item. Hints and links disappear once an item is done.`,
			pl: {
				description: `Lista tego, co musi się stać, zanim coś będzie gotowe, z linkiem do naprawy każdej pozycji. Pozycje mogą pokazywać stan z danych albo być polami wyboru, które czytelnik zaznacza na liście ręcznej.`,
				accessibility: `Region nazwany swoim tytułem, z liczbą podaną słowami. Wiersze z danych mówią „gotowe” albo „do zrobienia” po tytule i pokazują znacznik albo puste kółko; wiersze do zaznaczania są prawdziwymi polami wyboru z podpowiedzią jako opisem. Linki „Fix” mają nazwę razem z pozycją. Podpowiedzi i linki znikają, gdy pozycja jest gotowa.`
			},
			render: () => (0, S.jsx)(oe, {})
		}
	]
};
export { I as t };
